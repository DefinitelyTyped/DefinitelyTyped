import postcss = require("postcss");
import postcssEnvFunction = require("postcss-env-function");

// Test ESM import
(async () => await import("postcss-env-function"))();

// No arguments
postcss([postcssEnvFunction]);
postcss([postcssEnvFunction()]);
postcss([postcssEnvFunction({})]);
// Valid types for importFrom
postcss([postcssEnvFunction({ importFrom: "./foo.json" })]);
postcss([postcssEnvFunction({ importFrom: { environmentVariables: { foo: "123" } } })]);
postcss([postcssEnvFunction({ importFrom: () => ({ environmentVariables: { foo: "123" } }) })]);
postcss([
    postcssEnvFunction({
        importFrom: [
            "./foo.json",
            { environmentVariables: { foo: "123" } },
            () => ({ environmentVariables: { foo: "123" } }),
        ],
    }),
]);
