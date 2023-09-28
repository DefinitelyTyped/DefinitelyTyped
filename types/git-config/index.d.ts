// Type definitions for git-config 0.0
// Project: https://github.com/eugeneware/git-config
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A simple way to extract out all the contents of a .gitconfig file and return as JSON
 */
declare function parse(file: string, callback: (err: Error | null, data: object) => void): void;
declare function parse(callback: (err: Error | null, data: object) => void): void;

declare namespace parse {
    function sync(file?: string): object;
}

export = parse;
