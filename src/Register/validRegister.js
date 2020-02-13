export const validSameName = (users, usernameValue) => {
    const isSameUsername = users.find(
        user => user.usernameValue.toLowerCase() === usernameValue.toLowerCase()
    );

    if (isSameUsername) {
        alert("Hero, I want you to be unique, change your username please");
        return false;
    }
    return true;
}

export const validRepeatPass = (passValue, repeatPassValue) => {
    if (passValue !== repeatPassValue) {
        alert("Hero, last jerk left, check the password match");
        return false;
    }
    return true
}