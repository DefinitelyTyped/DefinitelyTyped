import * as CoffeeScript from "coffeescript";

const coffeeScriptFn = "isUnique = (v, i, a) ->\n  a.indexOf(v) == i";

// $ExpectType string
const outputWithoutOptions = CoffeeScript.compile(coffeeScriptFn);

// $ExpectType string
const outputWithOptions = CoffeeScript.compile(coffeeScriptFn, {
    ast: false,
    bare: true,
    filename: 'isUnique-polyfill.js',
    header: true,
    inlineMap: true,
    sourceMap: false,
    transpile: { presets: ["@babel/env"] }
});

// $ExpectType CodeWithSourceMap
const outputWithSourceMap = CoffeeScript.compile(coffeeScriptFn, { sourceMap: true });

// @ts-expect-error
const noOutputGotZero = CoffeeScript.compile();

// @ts-expect-error
const noOutputGotInvalidOptions = CoffeeScript.compile(coffeeScriptFn, { comments: true, indent: 2 });
