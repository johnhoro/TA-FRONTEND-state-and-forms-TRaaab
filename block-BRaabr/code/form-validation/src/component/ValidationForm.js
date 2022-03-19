import React from "react";

class ValidateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = (event) => {
    let { name, value } = event.target;
    let error = this.state.error;
    console.log(error);
    switch (name) {
      case "username":
        error.username =
          value.length < 3 ? "Username must be at least 3 characters" : "";
        break;
      case "email":
        error.email = this.validateEmail(value) ? "" : "Email is invalid";
        break;
      case "password":
        error.password =
          value.length < 6 ? "Password must be at least 6 characters" : "";
        break;
      case "confirmPassword":
        error.confirmPassword = value ? "" : "Password 2 is required";
        break;
      default:
        break;
    }
    this.setState({
      error,
      [name]: value,
    });
  };

  render() {
    let { username, email, password, confirmPassword } = this.state.error;
    return (
      <>
        <div className="container">
          <form action="" className="">
            <h3 className="">Register With Us</h3>
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              className=""
              onChange={this.handleInput}
            />
            <span className="">{username}</span>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className=""
              onChange={this.handleInput}
            />
            <span className="">{email}</span>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className=""
              onChange={this.handleInput}
            />
            <span className="">{password}</span>
            <label htmlFor="confirm-password" className="">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Enter password again"
              className=""
              onChange={this.handleInput}
            />
            <span className="">{confirmPassword}</span>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ValidateForm;
