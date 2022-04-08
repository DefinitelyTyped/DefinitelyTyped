import load = require("little-loader");

load("http://google.com/test.js", () => console.log("loaded!"), ""); // $ExpectType void
