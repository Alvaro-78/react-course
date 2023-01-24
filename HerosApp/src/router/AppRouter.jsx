import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</>
	);
};

export default AppRouters;