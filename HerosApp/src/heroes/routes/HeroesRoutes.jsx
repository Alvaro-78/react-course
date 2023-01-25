import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DCPage, MarvelPage } from '../pages';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DCPage />} />

					<Route path="search" element={<DCPage />} />
					<Route path="hero" element={<DCPage />} />

					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};
