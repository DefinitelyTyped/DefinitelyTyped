/**
 * A simple way to extract out all the contents of a .gitconfig file and return as JSON
 */
declare function parse(file: string, callback: (err: Error | null, data: object) => void): void;
declare function parse(callback: (err: Error | null, data: object) => void): void;

declare namespace parse {
    function sync(file?: string): object;
}

export = parse;
