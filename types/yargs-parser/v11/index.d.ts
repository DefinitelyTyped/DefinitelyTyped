declare namespace yargsParser {
    interface Arguments {
        /** Non-option arguments */
        _: string[];
        /** The script name or node command */
        $0: string;
        /** All remaining options */
        [argName: string]: any;
    }

    interface DetailedArguments {
        argv: Arguments;
        error: Error | null;
        aliases: { [alias: string]: string[] };
        newAliases: { [alias: string]: boolean };
        configuration: Configuration;
    }

    interface Configuration {
        "boolean-negation": boolean;
        "camel-case-expansion": boolean;
        "combine-arrays": boolean;
        "dot-notation": boolean;
        "duplicate-arguments-array": boolean;
        "flatten-duplicate-arrays": boolean;
        "negation-prefix": string;
        "parse-numbers": boolean;
        "populate--": boolean;
        "set-placeholder-key": boolean;
        "short-option-groups": boolean;
    }

    interface Options {
        alias?: { [key: string]: string | string[] } | undefined;
        array?: string[] | undefined;
        boolean?: string[] | undefined;
        config?: string | string[] | { [key: string]: boolean } | undefined;
        configuration?: Partial<Configuration> | undefined;
        coerce?: { [key: string]: (arg: any) => any } | undefined;
        count?: string[] | undefined;
        default?: { [key: string]: any } | undefined;
        envPrefix?: string | undefined;
        narg?: { [key: string]: number } | undefined;
        normalize?: string[] | undefined;
        string?: string[] | undefined;
        number?: string[] | undefined;
        "--"?: boolean | undefined;
    }

    interface Parser {
        (argv: string | string[], opts?: Options): Arguments;
        detailed(argv: string | string[], opts?: Options): DetailedArguments;
    }
}

declare var yargsParser: yargsParser.Parser;
export = yargsParser;
