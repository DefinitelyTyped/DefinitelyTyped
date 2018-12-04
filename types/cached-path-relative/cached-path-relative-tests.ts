import cachedPathRelative = require("cached-path-relative");

function browserifyTest() {
    const file = "file.txt";
    const m1: string = cachedPathRelative("./", file).replace(/\\/g, '/');
    return m1;
}
