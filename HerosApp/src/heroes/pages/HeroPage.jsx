import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../getHeroById';

export const HeroPage = () => {
	// Dentro de useParams sacamos el id
	const { id } = useParams();

	// Usamos la función getHerById para obtener a trabes del id los datos
	const hero = getHeroById(id);

	// Con esta condicion redirigimos al usuario si la url no tiene héroes o se intenta poner una url falsa
	if (!hero) {
		return <Navigate to="/" />;
	}

	console.log(hero);

	return (
		<>
			<h1>HeroPage</h1>
		</>
	);
};
