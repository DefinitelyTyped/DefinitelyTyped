// Type definitions for dotenv-parse-variables 0.2
// Project: https://github.com/niftylettuce/dotenv-parse-variables
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

declare namespace dotenvParseVariables {
    type Parsed = Record<string, string>;

    interface Options {
        assignToProcessEnv?: boolean;
        overrideProcessEnv?: boolean;
    }

    type ParsedVariables = Record<string, unknown>;
}

declare function dotenvParseVariables(
    parsed: dotenvParseVariables.Parsed,
    options?: dotenvParseVariables.Options,
): dotenvParseVariables.ParsedVariables;

export = dotenvParseVariables;
