// Type definitions for yn 3.0
// Project: https://github.com/sindresorhus/yn#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = yn;

/**
 * Parse yes/no like values. Useful for validating answers of a CLI prompt.
 *
 * @param input Value that should be converted. The following case-insensitive values are recognized:
 * `'y'`, `'yes'`, `'true'`, `true`, `'1'`, `1`, `'n'`, `'no'`, `'false'`, `false`, `'0'`, `0`
 * @param options
 */
declare function yn(input: any, options: yn.OptionsWithDefault): boolean;
declare function yn(input: any, options?: yn.Options): boolean | null;

declare namespace yn {
    interface OptionsWithDefault extends Options {
        default: boolean;
    }

    interface Options {
        /**
         * Use a key distance-based score to leniently accept typos of `yes` and `no`.
         * @default false
         */
        lenient?: boolean;

        /**
         * Default value if no match was found.
         * @default null
         */
        default?: boolean | null;
    }
}
