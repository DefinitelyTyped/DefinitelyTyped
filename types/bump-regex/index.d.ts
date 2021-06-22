// Type definitions for bump-regex 4.1
// Project: https://github.com/stevelacy/bump-regex
// Definitions by: silkentrance <https://github.com/silkentrance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function bump(opts: string | bump.Options, cb: bump.Callback): any;

declare namespace bump {
    type Callback = (err: string | Error | null, opts?: Result) => void;

    interface Options {
        key?: string;
        type?: 'major' | 'minor' | 'patch' | 'prerelease';
        case?: boolean;
        keys?: string[];
        /**
         * Keep the metadata of the old version after bumping
         * @default false
         */
        keepmetadata?: boolean;
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

export = bump;
