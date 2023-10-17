/** Finds all instances of a specified executable in the PATH environment variable */
declare function which(cmd: string, options: which.Options & which.AsyncOptions & which.OptionsAll): Promise<string[]>;
declare function which(cmd: string, options?: which.Options & which.AsyncOptions & which.OptionsFirst): Promise<string>;

declare namespace which {
    /** Finds all instances of a specified executable in the PATH environment variable */
    function sync(cmd: string, options: Options & OptionsAll & OptionsNoThrow): ReadonlyArray<string> | null;
    function sync(cmd: string, options: Options & OptionsFirst & OptionsNoThrow): string | null;
    function sync(cmd: string, options: Options & OptionsAll & OptionsThrow): ReadonlyArray<string>;
    function sync(cmd: string, options?: Options & OptionsFirst & OptionsThrow): string;
    function sync(cmd: string, options: Options): string | ReadonlyArray<string> | null;

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
        all?: boolean | undefined;
        /** Use instead of the PATH environment variable. */
        path?: string | undefined;
        /** Use instead of the PATHEXT environment variable. */
        pathExt?: string | undefined;
    }

    /** Options for which() sync and async APIs */
    interface Options extends AsyncOptions {
        /** If true, returns null when not found */
        nothrow?: boolean | undefined;
    }
}

export = which;
