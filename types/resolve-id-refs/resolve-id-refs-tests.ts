import resolveIdRefs = require("resolve-id-refs");

const foo = document.createElement("div");
const bar = document.createElement("div");

foo.id = "foo";
bar.id = "bar";

document.body.appendChild(foo);
document.body.appendChild(bar);

resolveIdRefs("foo bar", document); // $ExpectType Element[]
