import { Link } from 'react-router-dom';

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImgUrl = `/assets/heroes/${id}.jpg`;

	//Creamos un componente con la lógica para evitar duplicidades entre los dos parámetros
	const CharactersByHero = ({ alter_ego, characters }) => {
		return alter_ego === characters ? <></> : <p>{characters}</p>;
	};

	//1- Varias formas de renderizar los characters
	// const characterByHero = <p>{characters}</p>;

	return (
		<>
			<div className="col">
				<div className="row no-gutters">
					<div className="col-4">
						<img src={heroImgUrl} alt={superhero} className="card-img" />
					</div>
					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							{/* 1- extraemos la etiqueta <p> en una variable */}
							{/* {alter_ego != characters && characterByHero} */}
							<CharactersByHero characters={characters} alter_ego={alter_ego} />
							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>

							<Link to={`/hero_page/${id}`}>Mas....</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
