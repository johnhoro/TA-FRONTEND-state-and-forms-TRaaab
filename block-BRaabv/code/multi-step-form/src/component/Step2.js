import React from "react";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 2 UI
    return (
      <div className="step">
        <h2>Message</h2>
        <div className="step-box">
          <label htmlFor="message" className="column">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter Message"
              value={this.props.message} // Prop: The message input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <div className="radio">
            <label htmlFor="choiceOne" className="flex">
              <input type="radio" checked name="choice" id="choiceOne" />
              The Number one choice
            </label>

            <label htmlFor="choiceTwo">
              <input type="radio" name="choice" id="choiceTwo" />
              The Number two choice
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;
