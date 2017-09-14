
import username = require("username");

username(function(err, username) {
    err === new Error();
    username === "string";
});

username.sync() === "string";
