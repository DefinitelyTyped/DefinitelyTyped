import postcss = require("postcss");
import sorting = require("postcss-sorting");

postcss([sorting]);
postcss([sorting()]);
postcss([sorting({})]);

postcss([
    sorting({
        order: [
            "at-rules",
            "at-variables",
            "custom-properties",
            "declarations",
            "dollar-variables",
            "rules",
            { type: "at-rule" },
            { type: "rule" },
            { type: "at-rule", hasBlock: true, name: "foo" },
            { type: "rule", selector: /foo/ },
            { type: "rule", selector: "foo" },
        ],
    }),
]);

postcss([sorting({ "properties-order": "alphabetical" })]);
postcss([sorting({ "properties-order": ["a", "b", "c"] })]);

postcss([sorting({ "unspecified-properties-position": "top" })]);
postcss([sorting({ "unspecified-properties-position": "bottom" })]);
postcss([sorting({ "unspecified-properties-position": "bottomAlphabetical" })]);

postcss([sorting({ "throw-validate-errors": true })]);
