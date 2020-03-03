import React, { Component } from "react";
import "./App.js";

// ***Note... I know this likely wouldn't be a component... but my app is so straight forward/short that I had to pick a few to put in!***

class Header extends Component {
	render() {
		return (
			<header className="h1Flex">
				<i className="fa fa-paw"></i>
				<h1>Pet Meds Log</h1>
			</header>
		)
	}
}

export default Header;
