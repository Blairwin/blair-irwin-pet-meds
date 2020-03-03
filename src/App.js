import React, { Component} from 'react';
import swal from "sweetalert";
import './App.css';
import firebase from './firebaseApp';
import FooterSection from "./FooterSection";
import Header from "./Header";
import FormSection from "./FormSection";

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

		dbRef.on("value", (response) => {
			const data = response.val();
			const newState = [];
			
			for (let key in data) {
				const doses = {
					key: key,
					...data[key]
				} 

				newState.push(doses);
			}
				this.setState({
					doses: newState,
			});
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
		if(this.state.date ==="" || this.state.time === ""){
		swal("Oh no!", "Please be sure to add a date and time", "info");
		}else { 
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
	}};

	removeDose(doseId) {
		const dbRef = firebase.database().ref();
		dbRef.child(doseId).remove();
	}

	render() {
		return (
			<div className="App">
				<div className="mainWrapper">
					<div className="flexContainer">
						<Header />
						<main>
							<p className="centered">
								Enter the information below to save it to your pet's medication
								log
							</p>
							<FormSection 
								handleClick={this.handleClick}
								handleDateChange={this.handleDateChange}
								handleTimeChange={this.handleTimeChange}
								handlePetNameChange={this.handlePetNameChange}
								handleMedicationChange={this.handleMedicationChange}
								handleDosageChange={this.handleDosageChange}
								handleNotesChange={this.handleNotesChange}
								date={this.state.date}
								time={this.state.time}
								petName={this.state.petName}
								medication={this.state.medication}
								dosage={this.state.dosage}
								notes={this.state.notes}
							/>
							<ul>
								{this.state.doses.map(dose => {
									return (
										<div>
											<li className="resultCard" key={dose.key}>
												<p>
													<strong>Date:</strong> {dose.date}
												</p>
												<p>
													<strong>Time:</strong> {dose.time}
												</p>
												<p>
													<strong>Name:</strong> {dose.petName}
												</p>
												<p>
													<strong>Medication:</strong> {dose.medication}
												</p>
												<p>
													<strong>Dosage:</strong> {dose.dosage}
												</p>
												<p>
													<strong>Notes:</strong> {dose.notes}
												</p>
												<div className="buttonFlexParent">
													<button onClick={() => this.removeDose(dose.key)}>
														Remove This Dose
													</button>
												</div>
											</li>
										</div>
									)
								})}
							</ul>
						</main>
					</div>
				</div>
				<FooterSection />
			</div>
		)
	}
}

export default App;
