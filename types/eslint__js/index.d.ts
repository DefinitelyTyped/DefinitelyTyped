import type { Linter } from "eslint";

declare const js: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
        readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
};

export = js;
