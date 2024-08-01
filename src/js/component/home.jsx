import React from "react";
import Card from "./Card";
import Footer from "./Footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Landing Page React</h1>
			<div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
			<Footer />
		</div>
	);
};

export default Home;
