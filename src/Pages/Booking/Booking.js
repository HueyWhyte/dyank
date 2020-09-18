import React, { Component } from "react";
import "./style.css";

export default class Booking extends Component {
  state = {
    name: "",
    email: "",
  };

  submitBooking = (e) => {
    e.preventDefault();
    console.log("submitted booking ");
  };

  render() {
    return (
      <div className="Booking">
        <h1 style={{ textAlign: "center" }}>Booking</h1>

        <form
          onSubmit={this.submitBooking}
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputName">Your name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelectState">Select State</label>
            <select className="form-control" id="exampleFormControlSelectState">
              <option>Arizona</option>
              <option>Montana</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Company
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Individual
              </label>
            </div>
          </div>

          <div style={{ marginTop: 12 }} className="form-group">
            <label htmlFor="exampleFormControlSelectWeight">
              Select Weight Range
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelectWeight"
            >
              <option>5,000 pound - 10,000 pound</option>
              <option>10,000 pound - 20,000 pound</option>
              <option>20,000 pound - 34, 000 pound</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
