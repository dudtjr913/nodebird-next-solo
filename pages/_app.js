import 'antd/dist/antd.css';
import React from 'react';
import PropTypes from 'prop-types';

const NodeBird = ({ Component }) => {
	return <Component />;
};

NodeBird.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
