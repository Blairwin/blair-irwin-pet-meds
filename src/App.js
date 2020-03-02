import React, { Component} from 'react';
import './App.css';
import firebase from './firebaseApp';

class App extends Component {
	constructor() {
		super();
		this.state = {
			doses: [],
			date: "",
			time: "",
			petName: "",
			medication: "",
			dosage: "",
			notes: ""
		};
	}

	componentDidMount() {
		const dbRef = firebase.database().ref();

		dbRef.on("value", response => {
			const newState = [];
			const data = response.val();
			for (let key in data) {
				newState.push({ key: key, name: data[key] });
			}
			// 	this.setState({
			// 		doses: newState
			// });
		});
	}

	handleDateChange = event => {
		this.setState({ date: event.target.value });
	};

	handleTimeChange = event => {
		this.setState({ time: event.target.value });
	};

	handlePetNameChange = event => {
		this.setState({ petName: event.target.value });
	};

	handleMedicationChange = event => {
		this.setState({ medication: event.target.value });
	};
	handleDosageChange = event => {
		this.setState({ dosage: event.target.value });
	};
	handleNotesChange = event => {
		this.setState({ notes: event.target.value });
	};

	handleClick = event => {
		event.preventDefault();
		const dbRef = firebase.database().ref();
		dbRef.push(this.state);
		this.setState({
			date: "",
			time: "",
			petName: "",
			medication: "",
			dosage: "",
			notes: ""
		});
	};

	removeDose(doseId) {
		const dbRef = firebase.database().ref();
		dbRef.child(doseId).remove();
	}

	render() {
		return (
			<div className="App">
				<div className="mainWrapper">
					<div className="flexContainer">
						<header className="h1Flex">
							<i className="fa fa-paw"></i>
							<h1>Pet Meds Log</h1>
							<i className="fa fa-paw"></i>
							{/* <img src="./assets/marleyCrossedPaws.jpg" alt="the cutest golden retriever puppy looking very smart while laying with his paws crossed on the couch"/> */}
						</header>
						<main>
							<p className="centered">
								Enter the information below to save it to your pet's medication log
							</p>
							{/* MAKE THE FORM A COMPONENT  */}
							<form action="submit">
								<div className="inputFlexParent">
									<label htmlFor="date">Enter the date:</label>
									<input
										type="date"
										id="date"
										onChange={this.handleDateChange}
										value={this.state.date}
									/>
								</div>
								<div className="inputFlexParent">
									<label htmlFor="time">Enter the time:</label>
									<input
										type="time"
										id="time"
										onChange={this.handleDateChange}
										value={this.state.time}
									/>
								</div>
								<div className="inputFlexParent">
									<label htmlFor="petName">Pet's name:</label>
									<input
										type="text"
										id="petName"
										onChange={this.handlePetNameChange}
										value={this.state.petName}
									/>
								</div>
								<div className="inputFlexParent">
									<label htmlFor="medication">Medication:</label>
									<input
										type="text"
										id="medication"
										onChange={this.handleMedicationChange}
										value={this.state.medication}
									/>
								</div>
								<div className="inputFlexParent">
									<label htmlFor="dosage">Dosage:</label>
									<input
										type="text"
										id="dosage"
										onChange={this.handleDosageChange}
										value={this.state.dosage}
									/>
								</div>
								<div className="inputFlexParent">
									<label htmlFor="notes">Notes:</label>
									<input
										type="text"
										id="notes"
										onChange={this.handleNotesChange}
										value={this.state.notes}
									/>
								</div>
								<button onClick={this.handleClick} type="submit">
									<i className="fa fa-paw"></i>
									Add dose
								</button>
							</form>
							<ul>
								{this.state.doses.map(dose => {
									return (
										<div>
											<li key={dose.key}>
												<p>
													{dose.name} - {dose.key}
													{dose.name}
												</p>
												<button onClick={() => this.removeDose(dose.key)}>
													<i className="fa fa-paw"></i>
													Remove Dose
												</button>
											</li>
										</div>
									);
								})}
								{/* {this.state.doses.map(dose => {
								return (
									<div>
										<i className="fa fa-paw"></i>
										<li key={dose.key}>
											<p> */}
								{/* {dose.name} - {dose.key} */}
								{/* {dose.name}
											</p>
											<button onClick={() => this.removeDose(dose.key)}>
												Remove Dose
											</button>
										</li>
									</div>
								);
							})} */}
							</ul>
						</main>
					</div>
				</div>
				<div className="footerWrapper">
					<footer>
						<p>
							&copy; <a href="http://blaircodes.com">Blair Irwin</a> March 2020,
							with thanks to{" "}
							<a href="https://firebase.google.com/">
								firebase <i className="fa fa-paw"></i>
							</a>
						</p>
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
