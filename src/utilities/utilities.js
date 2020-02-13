import { setItem, getItem } from "../localStorage/localStorage";

const sortPass = (arr) => arr.sort((a, b) => {
    if (a.site.toLowerCase() < b.site.toLowerCase()) {
        return -1;
    }
    if (a.site.toLowerCase() > b.site.toLowerCase()) {
        return 1;
    }
    return 0;
});

export const createUser = (user) => {
    const newUsersList = getItem('users').concat(user);
    setItem('users', newUsersList)
}

export const saveUser = (user) => {
    const { id } = user;
    const deletedOldUser = getItem("users").filter(user => user.id !== id);
    const newUsersList = deletedOldUser.concat(user)

    setItem('users', newUsersList)
}

export const setNewPass = (user, newPass) => {
    const cloneUser = Object.assign({}, user);
    cloneUser.passwordsData = sortPass(
        [].concat(user.passwordsData, newPass)
    );

    return cloneUser;
}

export const editPass = (user, editPass) => {
    const newArrPasswords = user.passwordsData.filter(
        password => password.id !== editPass.id
    );
    const cloneUser = Object.assign({}, user);

    cloneUser.passwordsData = sortPass([].concat(newArrPasswords, editPass));

    return cloneUser
}

export const deletePass = (user, identifier) => {
    const newArrPasswords = user.passwordsData.filter(
        password => password.id !== identifier
    );
    const cloneUser = Object.assign({}, user);
    cloneUser.passwordsData = newArrPasswords;
    return cloneUser
}




