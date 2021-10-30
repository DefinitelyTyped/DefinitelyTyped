// Type definitions for git-clone 0.2
// Project: https://github.com/jaz303/git-clone
// Definitions by: Christoph Thiede <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Clone `repo` to `targetPath`, calling `cb` on completion.
 */
declare function clone(repo: string, targetPath: string, opts?: clone.Options, cb?: (error?: Error) => void): void;
declare function clone(repo: string, opts?: clone.Options, cb?: (error?: Error) => void): void;

declare namespace clone {
    interface Options {
        /**
         * Path to git binary; defaults to `git`.
         */
        git?: string;
        /**
         * When `true`, clone with depth 1.
         */
        shallow?: boolean;
        /**
         * Revision/branch/tag to check out.
         */
        checkout?: string;
    }
}

export = clone;
