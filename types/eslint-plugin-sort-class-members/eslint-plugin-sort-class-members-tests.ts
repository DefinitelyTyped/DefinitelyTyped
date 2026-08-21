import type { Linter, Rule } from "eslint";
import sortClassMembers from "eslint-plugin-sort-class-members";

const rules: Record<string, Rule.RuleModule> = sortClassMembers.rules;
const rule: Rule.RuleModule = sortClassMembers.rules["sort-class-members"];

const flatConfig: Linter.Config = sortClassMembers.configs["flat/recommended"];
const legacyConfig: Linter.LegacyConfig = sortClassMembers.configs.recommended;

const ownFlatConfig: Linter.Config = {
    plugins: { "sort-class-members": sortClassMembers },
    rules: {
        "sort-class-members/sort-class-members": ["warn", {
            order: [
                "[public-static-readonly-properties]",
                "[protected-static-readonly-properties]",
                "[private-static-readonly-properties]",

                "[public-static-properties]",
                "[public-properties]",
                "[protected-static-properties]",
                "[protected-properties]",
                "[private-static-properties]",
                "[private-properties]",

                "constructor",

                "[public-static-methods]",
                "[public-instance-methods]",
                "[public-abstract-methods]",

                "[protected-instance-methods]",
                "[protected-abstract-methods]",
                "[protected-static-methods]",

                "[private-instance-methods]",
                "[private-static-methods]",
            ],
            groups: {
                "public-static-readonly-properties": [
                    { type: "property", accessibility: "public", static: true, readonly: true },
                ],
                "protected-static-readonly-properties": [
                    { type: "property", accessibility: "protected", static: true, readonly: true },
                ],
                "private-static-readonly-properties": [
                    { type: "property", accessibility: "private", static: true, readonly: true },
                ],

                "public-static-properties": [
                    { type: "property", accessibility: "public", static: true, readonly: false },
                ],
                "protected-static-properties": [
                    { type: "property", accessibility: "protected", static: true, readonly: false },
                ],
                "private-static-properties": [
                    { type: "property", accessibility: "private", static: true, readonly: false },
                ],

                "public-properties": [
                    { type: "property", accessibility: "public", static: false },
                ],
                "protected-properties": [
                    { type: "property", accessibility: "protected", static: false },
                ],
                "private-properties": [
                    { type: "property", accessibility: "private", static: false },
                ],

                "public-instance-methods": [
                    { type: "method", accessibility: "public", static: false, abstract: false },
                ],
                "public-abstract-methods": [
                    { type: "method", accessibility: "public", abstract: true },
                ],
                "public-static-methods": [
                    { type: "method", accessibility: "public", static: true },
                ],

                "protected-instance-methods": [
                    { type: "method", accessibility: "protected", static: false, abstract: false },
                ],
                "protected-abstract-methods": [
                    { type: "method", accessibility: "protected", abstract: true },
                ],
                "protected-static-methods": [
                    { type: "method", accessibility: "protected", static: true },
                ],

                "private-instance-methods": [
                    { type: "method", accessibility: "private", static: false },
                ],
                "private-static-methods": [
                    { type: "method", accessibility: "private", static: true },
                ],
            },
        }],
    },
};
