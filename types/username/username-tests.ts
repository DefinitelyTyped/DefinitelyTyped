
import username = require("username");

username()
    .then((username) => {
        username === "string";
    })
    .catch((err) => {
        err === new Error();
    });

username.sync() === "string";
