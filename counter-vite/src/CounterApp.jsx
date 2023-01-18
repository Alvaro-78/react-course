import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const Sumar = () => {
		setCounter(counter + 1);
	};
	const Restar = () => {
		setCounter(counter - 1);
	};
	const Resetear = () => {
		setCounter(value);
	};
	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button onClick={Sumar}>+ 1</button>
			<button onClick={Restar}>- 1</button>
			<button onClick={Resetear}>reset</button>
		</>
	);
};

export default CounterApp;

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
