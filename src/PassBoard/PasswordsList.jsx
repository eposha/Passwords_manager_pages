import React from "react";
import Edit from "./Edit";

const PasswordsList = ({ currentUser, updateUsersList }) => {
  return currentUser.passwordsData.map(pass => {
    const { id, site, userName, password } = pass;
    return (
      <Edit
        key={id}
        id={id}
        site={site}
        userName={userName}
        password={password}
        currentUser={currentUser}
        updateUsersList={updateUsersList}
      />
    );
  });
};

export default PasswordsList;
