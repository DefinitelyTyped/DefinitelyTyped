// Type definitions for @eslint/js 8.42
// Project: https://github.com/eslint/eslint/tree/main/packages/js
// Definitions by: Matt Wilkinson <https://github.com/matwilko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { Linter } from 'eslint';

declare const js: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
        readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
};

export = js;
