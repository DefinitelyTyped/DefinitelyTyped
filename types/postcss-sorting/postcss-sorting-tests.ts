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
            { type: "at-rule" } as const,
            { type: "rule" } as const,
            { type: "at-rule", hasBlock: true, name: "foo" } as const,
            { type: "rule", selector: /foo/ } as const,
            { type: "rule", selector: "foo" } as const,
        ] as const,
    }),
]);

postcss([sorting({ "properties-order": "alphabetical" })]);
postcss([sorting({ "properties-order": ["a", "b", "c"] as const })]);

postcss([sorting({ "unspecified-properties-position": "top" })]);
postcss([sorting({ "unspecified-properties-position": "bottom" })]);
postcss([sorting({ "unspecified-properties-position": "bottomAlphabetical" })]);

postcss([sorting({ "throw-validate-errors": true })]);
