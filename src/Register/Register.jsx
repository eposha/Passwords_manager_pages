import React from "react";
import { createUser } from "../utilities/utilities";
import "./Register.scss";
import { validSameName, validRepeatPass } from "./validRegister";

class Register extends React.Component {
  state = {
    name: "",
    surname: "",
    usernameValue: "",
    passValue: "",
    repeatPassValue: ""
  };

  handleFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    event.preventDefault();
    const { updateUsersList, history, users } = this.props;
    const {
      name,
      surname,
      usernameValue,
      passValue,
      repeatPassValue
    } = this.state;

    if (
      !validSameName(users, usernameValue) ||
      !validRepeatPass(passValue, repeatPassValue)
    )
      return;

    const id = Math.floor(Math.random() * 10000000);
    const user = {
      id,
      name,
      surname,
      usernameValue,
      passValue,
      passwordsData: []
    };
    createUser(user);
    updateUsersList();
    history.push(`/passboard/${id}`);
  };

  render() {
    const {
      name,
      surname,
      usernameValue,
      passValue,
      repeatPassValue
    } = this.state;

    return (
      <div className="register">
        <h1 className="register__title">Create account</h1>
        <form className="register__account" onSubmit={this.handleSubmit}>
          <input
            value={name}
            onChange={this.handleFormData}
            name="name"
            type="text"
            className="first-name"
            placeholder="Name"
          />
          <input
            value={surname}
            onChange={this.handleFormData}
            name="surname"
            type="text"
            className="last-name"
            placeholder="Surname"
          />

          <input
            value={usernameValue}
            onChange={this.handleFormData}
            name="usernameValue"
            type="text"
            className="account__name"
            placeholder="Username"
          />

          <div className="register__data">
            <input
              value={passValue}
              onChange={this.handleFormData}
              name="passValue"
              type="password"
              className="account__password"
              placeholder="Password"
            />
            <input
              value={repeatPassValue}
              onChange={this.handleFormData}
              name="repeatPassValue"
              type="password"
              className="account__password repeat"
              placeholder="Repeat password"
            />
          </div>

          <button className="create__account btn">Create account</button>
        </form>
      </div>
    );
  }
}

export default Register;
