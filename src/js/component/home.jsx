import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//     (variable,   func. cambia el estado de la variable) = useState(valor inicial de la variable) 
	const [likes, setLikes] = useState(85);
	const [isLike, setIsLike] = useState(false);
	return (
		//ternary { condicion ? es verdadero : es falso}
		<div className={`text-center ${isLike ? "color-fuente" : ""}`}>
			<h1>{likes}</h1>
			{isLike == false ? <button className="btn btn-success" onClick={() => {
				setLikes(likes + 1)
				setIsLike(true)
			}}>Like</button> : <button className="btn btn-danger" onClick={() => {
				setLikes(likes - 1)
				setIsLike(false)
			}}>Unlike</button>}


		</div >
	);
};

export default Home;
