import lolcatjs = require("lolcatjs");


lolcatjs.rainbow(4, 2); // $ExpectType Rgb
// @ts-expect-error
lolcatjs.rainbow(4, '2');
lolcatjs.colorize("a", { red: 105, green: 205, blue: 111 }); // $ExpectType void
// @ts-expect-error
lolcatjs.colorize("a", [ 105, 205, 111 ]); 
lolcatjs.printlnPlain(lolcatjs.colorize, ["Hello, World!"]); // $ExpectType void
// @ts-expect-error
lolcatjs.printlnPlain(lolcatjs.colorize, "Hello, World!");

lolcatjs.fromString("Hello, World!"); // $ExpectType void


