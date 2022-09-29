import jsesc = require("jsesc");

jsesc.version; // $ExpectType string

// ---- ---- ---- ---- ---- ---- ----

jsesc("", { quotes: "single" }); // $ExpectType string
jsesc("", { quotes: "double" }); // $ExpectType string
jsesc("", { quotes: "backtick" }); // $ExpectType string
// @ts-expect-error
jsesc("", { quotes: "foo" });
jsesc("", { numbers: "binary" }); // $ExpectType string
jsesc("", { numbers: "octal" }); // $ExpectType string
jsesc("", { numbers: "decimal" }); // $ExpectType string
jsesc("", { numbers: "hexadecimal" }); // $ExpectType string
// @ts-expect-error
jsesc("", { numbers: "foo" });
jsesc("", { wrap: true }); // $ExpectType string
jsesc("", { es6: true }); // $ExpectType string
jsesc("", { escapeEverything: true }); // $ExpectType string
jsesc("", { minimal: true }); // $ExpectType string
jsesc("", { isScriptContext: true }); // $ExpectType string
jsesc("", { compact: false }); // $ExpectType string
jsesc("", { indent: "  " }); // $ExpectType string
jsesc("", { indentLevel: 2 }); // $ExpectType string
jsesc("", { json: false }); // $ExpectType string
jsesc("", { lowercaseHex: true }); // $ExpectType string

// ---- ---- ---- ---- ---- ---- ----

jsesc(""); // $ExpectType string
jsesc("", { quotes: "single" }); // $ExpectType string
jsesc(1); // $ExpectType string
jsesc(1, { quotes: "single" }); // $ExpectType string
jsesc({}); // $ExpectType string
jsesc({}, { quotes: "single" }); // $ExpectType string
