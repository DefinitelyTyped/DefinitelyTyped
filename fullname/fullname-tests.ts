/// <reference path="./fullname.d.ts" />

import fullname = require("fullname");

fullname().then(function(name) { name === "string"; });
