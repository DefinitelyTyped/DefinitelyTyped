import shasum = require("shasum");

function test(): string {
    const res1 = shasum("source");
    const res2 = shasum({ prop: "source" }, null, "hex");
    return res1 || res2;
}
