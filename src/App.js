// Note: downloaded moment.js and react-datetime 

import React, { Component} from 'react';
import './App.css';
import firebase from './firebaseApp';
// import "../DateTime.css";
import Datetime from './Datetime';

class App extends Component {
	constructor() {
		super();
		this.state = {
			doses: [],
			date: "",
			petName: "",
			medication: "",
			dosage: "",
			notes: "",
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
			// this.setState({
			// 	doses: newState
			// });
		});
	}

	handleDateChange = event => {
		this.setState({ date: event.target.value })
	}

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
			<div className="wrapper">
				<header>
					<h1>Pet Meds Log</h1>
				</header>
				<main>
					<p className="centered">
						Enter the information below to save it to your pet's medication log
					</p>
					{/* MAKE THE FORM A COMPONENT  */}
					<form action="submit">
						<label htmlFor="date">Date:</label>
						<Datetime 
							id="date"
							onChange={this.handleDateChange}
							value={this.state.date}
						/>
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
							Add dose
						</button>
					</form>
					<ul>
						{this.state.doses.map((dose) => {
							return(
								<div>
									<i className="fa fa-paw"></i>
									<li key={dose.key}>
										<p>
											{dose.name} - {dose.key}
											{dose.name}
										</p>
										<button onClick={() => this.removeDose(dose.key)}>
											Remove Dose
										</button>
									</li>
								</div>
							)
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
				<footer>
					<p>
						{" "}
						&copy; <a href="http://blaircodes.com">Blair Irwin</a> March 2020,
						with thanks to <a href="https://firebase.google.com/">firebase</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
