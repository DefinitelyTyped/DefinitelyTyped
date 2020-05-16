// Type definitions for which 1.3.0
// Project: https://github.com/isaacs/node-which
// Definitions by: vvakame <https://github.com/vvakame>
//                 cspotcode <https://github.com/cspotcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/** Finds all instances of a specified executable in the PATH environment variable */
declare function which(cmd: string, options: which.AsyncOptions & which.OptionsAll, cb: (err: Error | null, paths: Array<string> | undefined) => void): void;
/** Finds the first instance of a specified executable in the PATH environment variable */
declare function which(cmd: string, options: which.AsyncOptions & which.OptionsFirst, cb: (err: Error | null, path: string | undefined) => void): void;
/** Finds the first instance of a specified executable in the PATH environment variable */
declare function which(cmd: string, options: which.AsyncOptions, cb: (err: Error | null, path: string | Array<string> | undefined) => void): void;
/** Finds the first instance of a specified executable in the PATH environment variable */
declare function which(cmd: string, cb: (err: Error | null, path: string | undefined) => void): void;
/** Finds the first instance of a specified executable in the PATH environment variable */
declare function which(cmd: string, options: which.AsyncOptions & which.OptionsAll): Promise<string[]>;
/** Finds the first instance of a specified executable in the PATH environment variable */
declare function which(cmd: string, options?: which.AsyncOptions & which.OptionsFirst): Promise<string>;
declare namespace which {
    /** Finds all instances of a specified executable in the PATH environment variable */
    function sync(cmd: string, options: which.Options & which.OptionsAll & which.OptionsNoThrow): Array<string> | null;
    /** Finds the first instance of a specified executable in the PATH environment variable */
    function sync(cmd: string, options: which.Options & which.OptionsFirst & which.OptionsNoThrow): string | null;
    /** Finds all instances of a specified executable in the PATH environment variable */
    function sync(cmd: string, options: which.Options & which.OptionsAll & which.OptionsThrow): Array<string>;
    /** Finds the first instance of a specified executable in the PATH environment variable */
    function sync(cmd: string, options: which.Options & which.OptionsFirst & which.OptionsThrow): string;
    /** Finds the first instance of a specified executable in the PATH environment variable */
    function sync(cmd: string, options: which.Options): string | Array<string> | null;
    /** Finds the first instance of a specified executable in the PATH environment variable */
    function sync(cmd: string): string;

    /** Options that ask for all matches. */
    interface OptionsAll extends AsyncOptions {
        all: true;
    }

    /** Options that ask for the first match (the default behavior) */
    interface OptionsFirst extends AsyncOptions {
        all?: false | undefined;
    }

    /** Options that ask to receive null instead of a thrown error */
    interface OptionsNoThrow extends Options {
        nothrow: true;
    }

    /** Options that ask for a thrown error if executable is not found (the default behavior) */
    interface OptionsThrow extends Options {
        nothrow?: false | undefined;
    }

    /** Options for which() async API */
    interface AsyncOptions {
        /** If true, return all matches, instead of just the first one. Note that this means the function returns an array of strings instead of a single string. */
        all?: boolean;
        /** Use instead of the PATH environment variable. */
        path?: string;
        /** Use instead of the PATHEXT environment variable. */
        pathExt?: string;
    }
    
    /** Options for which() sync and async APIs */
    interface Options extends AsyncOptions {
        /** If true, returns null when not found */
        nothrow?: boolean;
    }
}

export = which;
