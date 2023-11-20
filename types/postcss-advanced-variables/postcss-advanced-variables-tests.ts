import advancedVariables = require("postcss-advanced-variables");
import postcss = require("postcss");

postcss([advancedVariables]);
postcss([advancedVariables()]);
postcss([advancedVariables({})]);

advancedVariables({ variables: { foo: "bar" } });
advancedVariables({
    variables(name, node) {
        if (name === "foo" && node) return "bar";
    },
});

advancedVariables({ disable: "@mixin", importPaths: "foo" });
advancedVariables({ disable: ["@mixin"] as const, importPaths: ["foo"] as const });

advancedVariables({ importFilter: /foo/ });
advancedVariables({
    importFilter(id) {
        id; // $ExpectType string
        return true;
    },
});

advancedVariables({
    variables: { foo: "bar" },
    unresolved: "warn",
    disable: ["@mixin"] as const,
    importPaths: ["foo"] as const,
    async importResolve(id, cwd, opts) {
        id; // $ExpectType string
        cwd; // $ExpectType string
        opts; // $ExpectType Options

        return {
            file: "foo",
            contents: "bar",
        };
    },
    importFilter: /postcss/,
    importRoot: "foo",
    importCache: {},
});
