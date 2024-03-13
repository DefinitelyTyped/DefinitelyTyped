import { FlatCompat } from "@eslint/eslintrc";
import { Linter } from "eslint";

const __dirname = "/path/to/project";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

const config: Linter.FlatConfig[] = [
    // $ExpectType FlatConfig
    ...compat.extends("standard", "example"),

    // $ExpectType FlatConfig
    ...compat.env({
        es2020: true,
        node: true,
    }),

    // $ExpectType FlatConfig
    ...compat.plugins("airbnb", "react"),

    // $ExpectType FlatConfig
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
