export const findUser = (users, loginValue, passValue) => {
    const user = users.find(
        user => user.usernameValue === loginValue && user.passValue === passValue
    );

    if (!user) {
        alert(
            "Hero, I can`t find you! Check login and password or quickly create a new account"
        );
        return false;
    }
    return user;
}