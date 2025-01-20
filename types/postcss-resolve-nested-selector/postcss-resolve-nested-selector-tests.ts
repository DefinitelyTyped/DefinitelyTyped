import postcss from "postcss";
import resolvedNestedSelector = require("postcss-resolve-nested-selector");

const processor = postcss();

processor.process("").then(result => {
    // $ExpectType string[]
    resolvedNestedSelector("", result.root);
});
