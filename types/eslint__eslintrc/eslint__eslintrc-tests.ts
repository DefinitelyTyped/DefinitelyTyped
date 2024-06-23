import { FlatCompat } from "@eslint/eslintrc";
import { Linter } from "eslint";

const __dirname = "/path/to/project";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

const config: Linter.FlatConfig[] = [
    // $ExpectType FlatConfig<RulesRecord>
    ...compat.extends("standard", "example"),

    // $ExpectType FlatConfig<RulesRecord>
    ...compat.env({
        es2020: true,
        node: true,
    }),

    // $ExpectType FlatConfig<RulesRecord>
    ...compat.plugins("airbnb", "react"),

    // $ExpectType FlatConfig<RulesRecord>
    ...compat.config({
        plugins: ["airbnb", "react"],
        extends: "standard",
        env: {
            es2020: true,
            node: true,
        },
        rules: {
            semi: "error",
        },
    }),
];

export default config;
