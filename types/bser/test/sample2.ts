import * as bser from "bser";

const bunser = new bser.BunserBuf();

bunser.on("value", obj => {
    console.log(obj);
});
