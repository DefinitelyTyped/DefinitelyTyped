// Type definitions for copyfiles 2.4
// Project: https://github.com/calvinmetcalf/copyfiles#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace copyfiles {
    interface Options {
        /** include files & directories beginning with a dot (.) */
        all?: boolean;
        /** throw error if nothing is copied */
        error?: boolean;
        /** pattern or glob to exclude */
        exclude?: string | ReadonlyArray<string>;
        /** flatten the output */
        flat?: boolean;
        /**
         * follow symbolink links
         * @default false
         */
        follow?: boolean;
        /** do not overwrite destination files if they exist */
        soft?: boolean;
        /**
         * slice a path off the bottom of the paths
         * @default 0
         */
        up?: number | true;
        /** print more information to console */
        verbose?: boolean;
    }

    type Callback = (error?: Error) => void;
}

declare function copyfiles(paths: string[], options: copyfiles.Options | number, callback: copyfiles.Callback): void;
declare function copyfiles(paths: string[], callback: copyfiles.Callback): void;

export = copyfiles;
