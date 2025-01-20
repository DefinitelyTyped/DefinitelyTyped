import type { Linter } from "eslint";
import js = require("@eslint/js");

let flatConfig: Linter.FlatConfig[];

flatConfig = [js.configs.recommended];

flatConfig = [js.configs.all];

flatConfig = [js.configs.recommended, js.configs.all];

flatConfig = [
    {
        ...js.configs.recommended,
        files: ["blah"],
    },
    {
        ...js.configs.all,
        files: ["meh"],
    },
    {
        files: ["foo"],
    },
];

flatConfig = [
    {
        files: ["**/*.js"],
        rules: js.configs.recommended.rules,
    },
    {
        files: ["**/*.js"],
        rules: {
            ...js.configs.recommended.rules,
            "no-unused-vars": "warn",
        },
    },
    {
        files: ["**/*.js"],
        rules: {
            ...js.configs.all.rules,
            "no-unused-vars": "warn",
        },
    },
];
