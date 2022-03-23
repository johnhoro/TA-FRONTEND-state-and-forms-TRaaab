import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="step">
        <h2>Sign Up</h2>
        <div className="flex warp step-box">
          <label htmlFor="firstName " className="w-50 margin-right column">
            First Name
            <input
              className="form-control"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={this.props.firstName} // Prop: first name data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label htmlFor="lastName " className="w-50 column">
            Last Name
            <input
              className="form-control"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.props.lastName} // Prop: The last name input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label htmlFor="dateOfBirth" className="w-50 margin-right column">
            Date Of Birth
            <input
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              placeholder="Last Name"
              value={this.props.dateOfBirth} // Prop: The Date of Birth input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label htmlFor="email" className="w-50 column">
            Email address
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.props.email} // Prop: The email input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <label htmlFor="address" className="w-100 column">
            Address
            <input
              className="form-control "
              id="address"
              name="address"
              type="text"
              placeholder="Enter Address"
              value={this.props.address} // Prop: The Address input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Step1;
