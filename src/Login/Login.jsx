import React from "react";
import { Link } from "react-router-dom";
import { findUser } from "./validLogin";
import "./Login.scss";

class Login extends React.Component {
  state = {
    user: null,
    loginValue: "",
    passValue: ""
  };

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    event.preventDefault();
    const { loginValue, passValue } = this.state;
    const { users, history } = this.props;

    const findedUser = findUser(users, loginValue, passValue);
    if (!findedUser) return;

    const id = findedUser.id;
    history.push(`/passboard/${id}`);
  };

  render() {
    const { loginValue, passValue } = this.state;
    return (
      <div className="login">
        <h1 className="title">Password manager</h1>
        <div className="subtitle">
          Hey, hero! Log in or begin!
          <span className="piece">It’s a piece of cake</span>
        </div>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <input
            value={loginValue}
            onChange={this.handleChangeFormData}
            name="loginValue"
            type="text"
            className="login__name"
            placeholder="Login"
          />
          <input
            value={passValue}
            onChange={this.handleChangeFormData}
            name="passValue"
            type="password"
            className="login__password"
            placeholder="Password"
          />

          <button className="btn-login btn">Login</button>
        </form>
        <Link to="/register">
          <button className="btn-register btn">Create account</button>
        </Link>
      </div>
    );
  }
}

export default Login;
