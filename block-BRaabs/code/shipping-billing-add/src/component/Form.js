import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      error: {
        address: "",
      },
      isSame: false,
    };
  }
  handleInput = (event) => {
    let { name, value } = event.target;
    let error = this.state.error;
    if (name === "address") {
      error.address = value.length < 9 ? "You need to enter at-least 8" : "";
    }
    this.setState({
      error,
      shipping: { ...this.state.shipping, [name]: value },
    });
  };
  isSame = () => {
    return this.setState((preState) => {
      return {
        isSame: !preState.isSame,
      };
    });
  };

  render() {
    let { address } = this.state.error;
    let billingData = this.state.isSame
      ? this.state.shipping
      : this.state.billing;
    return (
      <div className="container ">
        <h2>Shipping And Billing Address </h2>
        <form action="" className="flex space-between">
          <section className="shipping">
            <h1>Shipping Address</h1>
            <label htmlFor="address">Address</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="address"
              id="address"
            />
            <span>{address}</span>
            <label htmlFor="zip">Zip/Postal Code</label>
            <input
              onChange={this.handleInput}
              type="number"
              name="zip"
              id="zip"
            />
            <label htmlFor="city">City</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="city"
              id="city"
            />
            <label htmlFor="country">Country</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="country"
              id="country"
            />
          </section>
          <section className="billing">
            <h1>Billing Address</h1>
            <div>
              <input type="checkbox" id="checkbox" onClick={this.isSame} />
              <label htmlFor="checkbox">Same as the Shipping Address?</label>
            </div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={billingData.address}
            />
            <label htmlFor="zip">Zip/Postal Code</label>
            <input type="number" name="zip" id="zip" value={billingData.zip} />
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={billingData.city} />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={billingData.country}
            />
          </section>
        </form>
      </div>
    );
  }
}

export default Form;
