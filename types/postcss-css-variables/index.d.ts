// Type definitions for postcss-css-variables 0.18
// Project: https://github.com/MadLittleMods/postcss-css-variables
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Declaration, PluginCreator } from 'postcss';

declare namespace cssvariables {
    type Variable = string | { value: string; isImportant?: boolean | undefined };

    interface Options {
        /**
         * Allows you to preserve custom propertires and `var()` usage in output.
         *
         * Values:
         *
         * - `false`: Removes -`-var` declarations and replaces `var()` with their resolved/computed values.
         * - `true`: Keeps `var()` declarations in the output and has the computed value as a fallback declaration.
         *   Also keeps computed `--var` declarations.
         * - `'computed'`: Keeps computed `--var` declarations in the output.
         *   Handy to make them available to your JavaScript.
         * - Function: Return how to preserve each given declaration.
         *
         * @see {@link <https://github.com/MadLittleMods/postcss-css-variables#preserve-default-false>}
         *
         * @default false
         */
        preserve?: boolean | 'computed' | ((declaration: Declaration) => boolean | 'computed') | undefined;
        /**
         * Define an object map of variables in JavaScript that will be declared at the `:root` scope.
         *
         * The object keys are automatically prefixed with `--` if not already.
         *
         * @see {@link <https://github.com/MadLittleMods/postcss-css-variables#variables-default->}
         */
        variables?: Record<string, Variable> | undefined;
        /**
         * Whether to preserve the custom property declarations inserted via the `variables` option in the final output.
         *
         * A typical use case is CSS Modules, where you would want to avoid repeating custom property definitions
         * in every module passed through this plugin.
         * Setting this option to `false` prevents JS-injected variables from appearing in output CSS.
         *
         * @see {@link <https://github.com/MadLittleMods/postcss-css-variables#preserveinjectedvariables-default-true>}
         *
         * @default true
         */
        preserveInjectedVariables?: boolean | undefined;
        /**
         * Keeps at-rules such as media queries in the order they were defined.
         *
         * @see {@link <https://github.com/MadLittleMods/postcss-css-variables#preserveatrulesorder-default-false>}
         *
         * @default false
         */
        preserveAtRulesOrder?: boolean | undefined;
    }
}

declare var cssvariables: PluginCreator<cssvariables.Options>;

export = cssvariables;
