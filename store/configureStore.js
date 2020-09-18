import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
	const middleware = [];
	const enhancer =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middleware))
			: composeWithDevTools(applyMiddleware(...middleware));
	const store = createStore(reducer, enhancer);
	return store;
};

const wrapper = createWrapper(configureStore, {
	debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
