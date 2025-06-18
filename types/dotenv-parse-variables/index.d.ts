declare namespace dotenvParseVariables {
    type Parsed = Record<string, string>;

    interface Options {
        /**
         * whether or not to assign the parsed values to `process.env`
         * @default true
         */
        assignToProcessEnv?: boolean | undefined;
        /**
         * whether or not to override existing values in `process.env`
         * @default false
         */
        overrideProcessEnv?: boolean | undefined;
        /**
         * whether or not to ignore functions in the parsed values returned
         * @default true
         */
        ignoreFunctions?: boolean | undefined;
    }

    type ParsedVariables = Record<string, unknown>;
}

declare function dotenvParseVariables(
    parsed: dotenvParseVariables.Parsed,
    options?: dotenvParseVariables.Options,
): dotenvParseVariables.ParsedVariables;

export = dotenvParseVariables;
