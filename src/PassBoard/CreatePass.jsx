import React from "react";
import { setNewPass, saveUser } from "../utilities/utilities";
import "./CreatePass.scss";

class CreatePass extends React.Component {
  state = {
    currentUser: null,
    createValueSite: "",
    createValueName: "",
    createValuePass: ""
  };

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser
    });
  }

  handleChangeFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    event.preventDefault();
    const { currentUser } = this.state;
    const newPass = {
      id: Math.random(),
      site: this.state.createValueSite,
      userName: this.state.createValueName,
      password: this.state.createValuePass
    };
    const updatedUserPass = setNewPass(currentUser, newPass);
    saveUser(updatedUserPass);
    this.props.updateUsersList();
  };

  render() {
    const { createValueSite, createValueName, createValuePass } = this.state;
    let activeAddButton = false;
    if (!createValueSite || !createValueName || !createValuePass) {
      activeAddButton = true;
    }
    return (
      <form className="add__password" onSubmit={this.handleSubmit}>
        <div className="add__site">
          <span className="site">Site</span>
          <input
            onChange={this.handleChangeFormData}
            value={createValueSite}
            name="createValueSite"
            type="text"
            className="site__name"
            placeholder="Site name"
          />
        </div>
        <div className="add__username">
          <span className="user-name__data">User name</span>
          <input
            onChange={this.handleChangeFormData}
            value={createValueName}
            name="createValueName"
            type="text"
            className="username"
            placeholder="User name"
          />
        </div>
        <div className="add__password-name">
          <span className="password__name">Password</span>
          <input
            onChange={this.handleChangeFormData}
            value={createValuePass}
            name="createValuePass"
            type="password"
            className="site__password"
            placeholder="Password"
          />
        </div>
        <button className="add-btn btn" disabled={activeAddButton}>
          Add
        </button>
      </form>
    );
  }
}

export default CreatePass;
