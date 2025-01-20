import postcss = require("postcss");
import bemLinter = require("postcss-bem-linter");

postcss(bemLinter);
postcss(bemLinter());
postcss(bemLinter({}));
postcss(bemLinter("suit", {}));

// @ts-expect-error Undefined preset
bemLinter("foo");

bemLinter("suit", { namespace: "foo" });
bemLinter("bem", { namespace: "foo" });

// @ts-expect-error Undefined preset
bemLinter({ preset: "foo" });
bemLinter({ preset: "suit" });
bemLinter({ preset: "bem" });
bemLinter({ preset: "suit", presetOptions: { namespace: "foo" } });

// @ts-expect-error No preset provided with presetOptions passed
bemLinter({ presetOptions: { namespace: "foo" } });

// Custom pattern
bemLinter({
    componentName: /^[-_a-zA-Z0-9]+$/,
    componentSelectors: {
        initial: "foo",
        combined(name) {
            return new RegExp(name + "bar");
        },
    },
    utilitySelectors: /foo/,
    ignoreSelectors: "abc",
    ignoreCustomProperties: ["abc", "def"],
});

// Custom pattern with preset defined
bemLinter({
    preset: "suit",
    presetOptions: { namespace: "foo" },
    componentName: /^[-_a-zA-Z0-9]+$/,
    componentSelectors: {
        initial: "foo",
        combined(name) {
            return new RegExp(name + "bar");
        },
    },
    utilitySelectors: /foo/,
    ignoreSelectors: "abc",
    ignoreCustomProperties: ["abc", "def"],
});
