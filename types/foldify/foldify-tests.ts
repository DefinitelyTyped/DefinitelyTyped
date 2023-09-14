import foldify = require("foldify");

foldify("./lib/routes"); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify(["./lib/routes"]); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify({ "./lib/routes": "foo" }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify({ "./lib/routes": ["foo"] }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify({ "./lib/routes": { foo: ["bar"] } }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes"); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { output: "object" }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { output: "array" }); // $ExpectType string[]
foldify("./lib/routes", { output: "string" }); // $ExpectType string
foldify("./lib/routes", { fullPath: true }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { whitelist: "foo" }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { whitelist: ["foo"] }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { blacklist: "foo" }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { blacklist: ["foo"] }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { encoding: "hex" }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { recursive: true }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { tree: true }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { includeExt: true }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { jsToString: true }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { evaluate: false }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { trim: true }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
foldify("./lib/routes", { allowUndefined: false }); // $ExpectType { (...args: unknown[]): unknown; [key: string]: unknown; }
