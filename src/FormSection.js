import React, { Component } from "react";
import "./App.js";

class FormSection extends Component {
	render() {
		return (
			<div>
				<form action="submit">
					<div className="inputFlexParent">
						<label htmlFor="date">
							<strong>Enter the date:</strong>
						</label>
						<input
							type="date"
							id="date"
							className="date"
							onChange={this.props.handleDateChange}
							value={this.props.date}
						/>
					</div>
					<div className="inputFlexParent">
						<label htmlFor="time">
							<strong>Enter the time:</strong>
						</label>
						<input
							type="time"
							id="time"
							className="time"
							onChange={this.props.handleTimeChange}
							value={this.props.time}
						/>
					</div>
					<div className="inputFlexParent">
						<label htmlFor="petName">
							<strong>Pet's name:</strong>
						</label>
						<input
							type="text"
							id="petName"
							className="petName"
							onChange={this.props.handlePetNameChange}
							value={this.props.petName}
						/>
					</div>
					<div className="inputFlexParent">
						<label htmlFor="medication">
							<strong>Medication:</strong>
						</label>
						<input
							type="text"
							id="medication"
							className="medication"
							onChange={this.props.handleMedicationChange}
							value={this.props.medication}
						/>
					</div>
					<div className="inputFlexParent">
						<label htmlFor="dosage">
							<strong>Dosage:</strong>
						</label>
						<input
							type="text"
							id="dosage"
							className="dosage"
							onChange={this.props.handleDosageChange}
							value={this.props.dosage}
						/>
					</div>
					<div className="inputFlexParent">
						<label htmlFor="notes">
							<strong>Notes:</strong>
						</label>
						<input
							type="text"
							id="notes"
							className="notes"
							onChange={this.props.handleNotesChange}
							value={this.props.notes}
						/>
					</div>
					<div className="buttonFlexParent">
						<button onClick={this.props.handleClick} type="submit">
							<i className="fa fa-paw"></i>
							Add Dose
							<i className="fa fa-paw"></i>
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default FormSection;