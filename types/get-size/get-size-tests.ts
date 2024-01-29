import getSize = require("get-size");

// @ts-expect-error
getSize();

getSize(document.querySelector(".selector")!);
getSize(".selector");
