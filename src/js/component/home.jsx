import React from "react";
import Card from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Landing Page React</h1>
			<div className="cards d-flex justify-content-center gap-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			
		</div>
	);
};

export default Home;
