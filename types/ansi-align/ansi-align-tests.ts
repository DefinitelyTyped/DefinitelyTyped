import ansiAlign = require("ansi-align");

ansiAlign("one two three\nfour five"); // $ExpectType string
ansiAlign(["one two three", "four five"] as const); // $ExpectType string[]
ansiAlign("", { split: "\t", pad: ".", align: "right" }); // $ExpectType string

ansiAlign.left(""); // $ExpectType string
ansiAlign.center(""); // $ExpectType string
ansiAlign.right(""); // $ExpectType string
ansiAlign.left([""]); // $ExpectType string[]
ansiAlign.center([""]); // $ExpectType string[]
ansiAlign.right([""]); // $ExpectType string[]
