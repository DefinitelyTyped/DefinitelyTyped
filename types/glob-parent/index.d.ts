declare function globParent(pattern: string, options?: globParent.Options): string;

declare namespace globParent {
    interface Options {
        flipBackslashes?: boolean | undefined;
    }
}

export = globParent;
