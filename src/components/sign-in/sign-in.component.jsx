import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password.</p>

        <form onSubmit={this.onSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <CustomButton type="submit">Log in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
