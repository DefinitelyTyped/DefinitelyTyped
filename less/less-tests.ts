/// <reference path="less.d.ts" />

import less = require("less");

less.render(".class { width: (1 + 1) }").then((output) => {
    console.log(output.css);
});

less.render("fail").then((output) => {
    throw new Error("promise should have been rejected");
}, () => {
    console.log("rejected as expected");
});
