import * as js2coffee from "js2coffee";

const javaScriptFn = "function isUnique(v, i, a) {\n  return a.indexOf(v) == i;\n}";

// $ExpectType string
const outputWithoutOptions = js2coffee(javaScriptFn);

// $ExpectType string
const outputWithOptions = js2coffee(javaScriptFn, { comments: true, indent: 2 });

// @ts-expect-error
const noOutputGotZero = js2coffee();

// @ts-expect-error
const noOutputGotInvalidOptions = js2coffee(javaScriptFn, { ast: false, transpile: { presets: ["@babel/env"] } });
