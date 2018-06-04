// Type definitions for bump-regex 2.9
// Project: https://github.com/stevelacy/bump-regex
// Definitions by: silkentrance <https://github.com/silkentrance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function BumpRegex(opts: string|BumpRegex.Options, cb: BumpRegex.Callback): any;

declare namespace BumpRegex {
    type Callback = (err: string|Error|null, opts?: Result) => void;

    interface Options {
        key?: string;
        type?: 'major' | 'minor' | 'patch' | 'prerelease';
        case?: boolean;
        keys?: string[];
        global?: boolean;
        version?: string;
        preid?: string;
        regex?: RegExp;
        str?: string;
    }

    interface Result extends Options {
        prev: string;
        new: string;
    }
}

export = BumpRegex;
