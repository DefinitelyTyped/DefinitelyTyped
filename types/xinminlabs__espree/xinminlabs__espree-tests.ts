import * as espree from "@xinminlabs/espree";

espree.parse('foo = "bar"', {
  ecmaVersion: "latest",
  loc: true,
  sourceFile: "code.js",
});

espree.tokenize('foo = "bar"', {
  ecmaVersion: "latest",
  loc: true,
  sourceFile: "code.js",
});
