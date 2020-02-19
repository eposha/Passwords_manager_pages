import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PassBoard from "./PassBoard/PassBoard";
import { getItem } from "./localStorage/localStorage";
class App extends React.Component {
  state = {
    users: getItem("users")
  };

  updateUsersList = () => {
    this.setState({
      users: getItem("users")
    });
  };

  render() {
    const { users } = this.state;
    return (
      <BrowserRouter basename="/Passwords_manager_pages/pages/">
        <Switch>
          <Route
            exact
            path="/"
            component={({ history }) => (
              <Login users={users} history={history} />
            )}
          />

          <Route
            path="/register"
            component={({ history }) => (
              <Register
                updateUsersList={this.updateUsersList}
                history={history}
                users={users}
              />
            )}
          />

          <Route
            path="/passboard/:userId"
            component={({ match }) => (
              <PassBoard
                users={users}
                match={match}
                updateUsersList={this.updateUsersList}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
