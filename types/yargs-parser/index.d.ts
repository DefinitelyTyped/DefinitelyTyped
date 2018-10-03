// Type definitions for yargs-parser 10.1
// Project: https://github.com/yargs/yargs-parser#readme
// Definitions by: Miles Johnson <https://github.com/milesj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Arguments } from 'yargs';

export { Arguments };

export interface Configuration {
    'boolean-negation': boolean;
    'camel-case-expansion': boolean;
    'combine-arrays': boolean;
    'dot-notation': boolean;
    'duplicate-arguments-array': boolean;
    'flatten-duplicate-arrays': boolean;
    'negation-prefix': string;
    'parse-numbers': boolean;
    'populate--': boolean;
    'set-placeholder-key': boolean;
    'short-option-groups': boolean;
}

export interface Options {
    alias?: { [key: string]: string | string[] };
    array?: string[];
    boolean?: string[];
    config?: string | string[] | { [key: string]: boolean };
    configuration?: Partial<Configuration>;
    coerce?: { [key: string]: (arg: any) => any };
    count?: string[];
    default?: { [key: string]: any };
    envPrefix?: string;
    narg?: { [key: string]: number };
    normalize?: string[];
    string?: string[];
    number?: string[];
    '--'?: boolean;
}

export interface DetailedArguments {
    argv: Arguments;
    error: Error | null;
    aliases: { [alias: string]: string[] };
    newAliases: { [alias: string]: boolean };
    configuration: Configuration;
}

interface YargsParser {
    (argv: string | string[], opts?: Options): Arguments;
    detailed(argv: string | string[], opts?: Options): DetailedArguments;
}

declare const parse: YargsParser;
export default parse;
