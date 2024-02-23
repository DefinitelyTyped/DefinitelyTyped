import lolcatjs = require("lolcatjs");

// @ts-expect-error
lolcatjs.rainbow(4, "2");
lolcatjs.rainbow(4, 2); // $ExpectType Rgb

// @ts-expect-error
lolcatjs.colorize("a", [105, 205, 111]);
lolcatjs.colorize("a", { red: 105, green: 205, blue: 111 }); // $ExpectType void

// @ts-expect-error
lolcatjs.printlnPlain(lolcatjs.colorize, "Hello, World!");
lolcatjs.printlnPlain(lolcatjs.colorize, ["Hello, World!"]); // $ExpectType void

// @ts-expect-error
lolcatjs.printlnAnimated(lolcatjs.colorize, "Hello, World!");
lolcatjs.printlnAnimated(lolcatjs.colorize, ["Hello, World!"]); // $ExpectType void

// @ts-expect-error
lolcatjs.printIn("Hello, World!");
lolcatjs.printIn(["Hello, World!"]); // $ExpectType void

lolcatjs.fromPipe(); // $ExpectType Promise<void>

// @ts-expect-error
lolcatjs.fromFile(4);
lolcatjs.fromFile("4"); // $ExpectType Promise<void>

// @ts-expect-error
lolcatjs.fromString(4);
lolcatjs.fromString("Hello, World!"); // $ExpectType void

// $ExpectType null
lolcatjs.init();
