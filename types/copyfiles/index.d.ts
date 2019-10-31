// Type definitions for copyfiles 2.1
// Project: https://github.com/calvinmetcalf/copyfiles#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace copyfiles {
    interface Options {
        /** include files & directories begining with a dot (.) */
        all?: boolean;
        /** throw error if nothing is copied */
        error?: boolean;
        /** pattern or glob to exclude */
        exclude?: string;
        /** flatten the output */
        flat?: boolean;
        /** do not overwrite destination files if they exist */
        soft?: boolean;
        /** slice a path off the bottom of the paths */
        up?: number | boolean;
        /** print more information to console */
        verbose?: boolean;
    }

    type Callback = (error?: Error) => void;
}

declare function copyfiles(paths: string[], options: copyfiles.Options | number, callback: copyfiles.Callback): void;
declare function copyfiles(paths: string[], callback: copyfiles.Callback): void;

export = copyfiles;
