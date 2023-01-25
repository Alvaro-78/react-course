import React from 'react';
import AppRouter from './router/AppRouter';

const HeroesApp = () => {
	return (
		<>
			<div className="d-flex flex-column">
				<AppRouter></AppRouter>
			</div>
		</> 
	);
};

export default HeroesApp;
