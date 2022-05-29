function findUserByUsername(arr, string) {
    return arr.find(function(user) {
        return user.username === string;
    });
}

function removeUser(arr, string) {
    let foundIndex = arr.findIndex(function(user) {
        return user.string === string;
    })

    if (foundIndex === -1) return;

    return userArray.splice(foundIndex,1)[0];
}