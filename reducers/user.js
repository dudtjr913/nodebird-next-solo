const initialState = {
	me: null,
	isLogged: false,
};

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const LoginAction = (data) => {
	return { type: LOG_IN, data };
};

export const LogoutAction = {
	type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				me: action.data,
				isLogged: true,
			};
		case LOG_OUT:
			return {
				...state,
				me: null,
				isLogged: false,
			};
		default:
			return state;
	}
};

export default reducer;
