import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      file: "",
      read: "",
      textarea: "",
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <form action="" className="">
            <label htmlFor="text"> Text Input </label>
            <input type="text" name="text" id="text" />
            <label htmlFor="date">Date Input</label>
            <input type="date" name="date" id="date" />
            <label htmlFor="file">File Input</label>
            <input type="file" name="file" id="file" />
            <label htmlFor="readOnly">Read-Only input</label>
            <input
              type="text"
              id="readOnly"
              placeholder="This can only be copied"
              readOnly="true"
            />
            <label for="disableInput">Disabled Input</label>
            <input type="text" id="disableInput" disabled="true" />
            <label for="textarea">Textarea</label>
            <textarea
              name="textarea"
              id="textarea"
              cols="10"
              rows="5"
            ></textarea>
            <label for="disableTextarea">Textarea</label>
            <textarea
              name="textarea"
              id="disableTextarea"
              cols="30"
              rows="5"
              disabled="true"
            ></textarea>
          </form>
        </div>
      </>
    );
  }
}

export default MultipleInput;
