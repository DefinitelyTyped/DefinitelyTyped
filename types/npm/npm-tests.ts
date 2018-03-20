/**
* Test suite created by Maxime LUCE <https://github.com/SomaticIT>
*
* Created by using code samples from https://github.com/npm/npm#using-npm-programmatically.
*/

import npm = require("npm");

npm.load({}, function (er) {
    if (er) {
        return console.error(er);
    }

    npm.commands.install(["some", "args"], function (er, data) {
        if (er) {
            return console.error(er);
        }

        // command succeeded, and data might have some info
    });

    npm.on("log", function (message: string) {
        console.log(message);
    });
})
