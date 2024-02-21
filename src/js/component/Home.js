import React from "react";
import List from "./List";
import Header from "./Header";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<List />
		</div>
	);
};

export default Home;
