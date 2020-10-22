import * as Layzr from "layzr.js";

const options: Layzr.LayzrOptions = {
    normal: "data-normal",
    retina: "data-retina",
    srcset: "data-srcset",
    threshold: 0
};

const instance = Layzr();
const instance2 = Layzr(options);

instance.emit("src:before", 4, "yg", () => {});

instance
    .on("src:before", element => {
        console.log(element);
    })
    .once("src:before", element => {
        console.log(element);
    })
    .on("src:after", element => {
        console.log(element);
    })
    .once("src:after", element => {
        console.log(element);
    })
    .handlers(true)
    .check()
    .update()
    .emit("src:before")
    .off("src:after");
