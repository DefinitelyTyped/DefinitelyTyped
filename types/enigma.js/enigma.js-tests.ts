import * as enigma from "enigma.js";
// import enigma = require("enigma.js");

const config: enigmaJS.IConfig = {
            url: "http://127.0.0.1:4848/",
            schema: {}
        };
enigma.create(config).open().then((global) => {
    console.log("connect fine");
});
