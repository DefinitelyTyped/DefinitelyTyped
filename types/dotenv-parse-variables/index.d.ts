// Type definitions for dotenv-parse-variables 2.0
// Project: https://github.com/niftylettuce/dotenv-parse-variables
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dotenvParseVariables {
    type Parsed = Record<string, string>;

    interface Options {
        /**
         * whether or not to assign the parsed values to `process.env`
         * @default true
         */
        assignToProcessEnv?: boolean;
        /**
         * whether or not to override existing values in `process.env`
         * @default false
         */
        overrideProcessEnv?: boolean;
        /**
         * whether or not to ignore functions in the parsed values returned
         * @default true
         */
        ignoreFunctions?: boolean;
    }

    type ParsedVariables = Record<string, unknown>;
}

declare function dotenvParseVariables(
    parsed: dotenvParseVariables.Parsed,
    options?: dotenvParseVariables.Options,
): dotenvParseVariables.ParsedVariables;

export = dotenvParseVariables;
