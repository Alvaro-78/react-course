import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		// Va hacia el login, replace hace que te mantengas en la misma vista
		navigate('/login', { replace: true });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div
				className={({ isActive }) =>
					`"navbar-collapse" ${isActive ? 'active' : ''}`
				}>
				<div className="navbar-nav">
					<NavLink className="nav-item nav-link" exact to="/marvel">
						Marvel
					</NavLink>

					<NavLink className="nav-item nav-link" exact to="/dc">
						DC
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end p-2">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">Cosa</span>

					<button className="nav-item nav-link btn" onClick={onLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
