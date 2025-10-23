import bser = require("bser");

const bunser = new bser.BunserBuf();

bunser.on("value", obj => {
    console.log(obj);
});
