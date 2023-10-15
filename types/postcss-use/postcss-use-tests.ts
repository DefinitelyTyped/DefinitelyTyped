import postcss = require("postcss");
import use from "postcss-use";

postcss([use]);
postcss([use()]);
postcss([use({ modules: "foo" })]);
postcss([use({ modules: /foo/ })]);
postcss([use({ modules: ["foo", /bar/] })]);
postcss([
    use({
        modules: ["foo", /bar/],
        resolveFromFile: true,
        options: {
            foo: {
                bar: true,
            },
        },
    }),
]);
