import * as enigma from "enigma.js";

enigma.create({
    url: "http://127.0.0.1:4848/",
    schema: {}
}).open().then((global) => {
    console.log("connect fine");
});
