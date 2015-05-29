/// <reference path="less.d.ts" />

import less = require("less");

less.render(".class { width: (1 + 1) }").then((output) => {
    console.log(output.css);
});

less.render("fail").then((output) => {
    throw new Error("promise should have been rejected");
}, (error: Less.RenderError) => {
    console.log("rejected as expected on line number " + error.line);
});
