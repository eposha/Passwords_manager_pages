import React from "react";
import "./PassBoard.scss";
import CreatePass from "./CreatePass";
import PasswordsList from "./PasswordsList";

class PassBoard extends React.Component {
  state = {
    user: null
  };

  render() {
    const { users, match, updateUsersList } = this.props;
    const currentUser = users.find(user => user.id === +match.params.userId);

    return (
      <div className="pass-board">
        <h2 className="pass-title">Data passwords</h2>
        <CreatePass
          currentUser={currentUser}
          updateUsersList={updateUsersList}
        />
        <PasswordsList
          currentUser={currentUser}
          updateUsersList={updateUsersList}
        />
      </div>
    );
  }
}

export default PassBoard;
