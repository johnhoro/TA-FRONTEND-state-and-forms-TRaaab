import React from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 3 UI
    return (
      <div className="step-3">
        <h2>Checkbox</h2>
        <div className="flex select">
          <label>
            <input type="radio" name="test" value="small" checked />
            <div className="select-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/computer-programming-1/112/19-computer-programming_programmer-male-asian-512.png"
                alt="Select"
              />
            </div>
          </label>
          <label>
            <input type="radio" name="test" value="small" />
            <div className="select-img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/computer-programming-1/112/19-computer-programming_osx-programmer-female-caucasian-512.png"
                alt="Select"
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="option" className="" />I want to add this
            option
          </label>
          <label>
            <input type="radio" name="option" />
            Let me click on this checkbox and choose some cool stuf
          </label>
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default Step3;
