// Type definitions for rrdir 8.2
// Project: https://github.com/silverwind/rrdir#readme
// Definitions by: Zhang Nan <https://github.com/anyone-developer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface rrdir {
    async(dir: string, options?: options): Promise<entry[]>;
    sync(dir: string, options?: options): entry[];
    (dir: string, options?: options): Promise<entry[]>;
}

declare const c: rrdir;
export = c;

interface options {
    stats?: boolean;
    followSymlinks?: boolean;
    exclude?: string[];
    include?: string[];
    strict?: boolean;
    match?: PicomatchOptions;
}

interface entry {
    path: string;
    directory?: boolean;
    symlink?: boolean;
    stats?: object;
    err?: Error;
}

interface PicomatchOptions {
    basename?: boolean;
    bash?: boolean;
    capture?: boolean;
    contains?: boolean;
    cwd?: string;
    debug?: boolean;
    dot?: boolean;
    expandRange?: (a: string, b: string) => string;
    failglob?: boolean;
    fastpaths?: boolean;
    flags?: boolean;
    format?: (str: string) => string;
    ignore?: string[];
    keepQuotes?: boolean;
    literalBrackets?: boolean;
    lookbehinds?: boolean;
    matchBase?: boolean;
    maxLength?: boolean;
    nobrace?: boolean;
    nobracket?: boolean;
    nocase?: boolean;
    nodupes?: boolean;
    noext?: boolean;
    noextglob?: boolean;
    noglobstar?: boolean;
    nonegate?: boolean;
    noquantifiers?: boolean;
    onIgnore?: (glob: any, regex: any, input: any, output: any) => void;
    onMatch?: (glob: any, regex: any, input: any, output: any) => void;
    onResult?: (glob: any, regex: any, input: any, output: any) => void;
    posix?: boolean;
    posixSlashes?: boolean;
    prepend?: boolean;
    regex?: boolean;
    strictBrackets?: boolean;
    strictSlashes?: boolean;
    unescape?: boolean;
    unixify?: boolean;
}
