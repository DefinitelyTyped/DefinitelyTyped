// Type definitions for eslint-plugin-prettier 3.1
// Project: https://github.com/prettier/eslint-plugin-prettier
// Definitions by: Ika <https://github.com/ikatyang>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Linter, Rule } from 'eslint';

export const configs: {
    recommended: Linter.Config;
};

export const rules: {
    prettier: Rule.RuleModule;
};
