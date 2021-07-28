const users = [];
exports.createUser = (body, callback) => {
    body.id = Math.random().toString(36).substring(0, 16)
    users.push(body)
    callback(body)
};

exports.findUserById = (id, callback) => {
    let user = users.find(user => user.id === id)
    if (user) {
        callback(user)
    } else {
        callback(null, {message: "No User found!"})
    }
};

exports.getUsers = (callback) => {
    if (users) {
        callback(users)
    } else {
        callback(null, {message: "No Users found!"})
    }
};

exports.deleteUserById = (id, callback) => {
    let index = users.indexOf(user => user.id === id);
    users.slice(index, 1);
    callback(index)
};