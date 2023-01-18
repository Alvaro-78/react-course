import React from 'react';
import PropTypes from 'prop-types';

//const getResult = (a, b) => {
//return a + b;
//};

const FirstApp = ({ title }) => {
	return (
		<>
			<h1>{title}</h1>
		</>
	);
};

export default FirstApp;

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
	title: 'Sin título',
};
