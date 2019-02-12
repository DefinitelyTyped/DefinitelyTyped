// Type definitions for getopts 2.0
// Project: https://github.com/jorgebucaran/getopts
// Definitions by: Aleh Zasypkin <https://github.com/azasypkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ParsedOptions {
    _: string[];
    [key: string]: any;
}

interface Options {
    alias?: { [key: string]: string | string[] };
    boolean?: string[];
    default?: { [key: string]: any };
    unknown?: (optionName: string) => boolean;
}

declare function getopts(argv: string[], options?: Options): ParsedOptions;

export = getopts;
