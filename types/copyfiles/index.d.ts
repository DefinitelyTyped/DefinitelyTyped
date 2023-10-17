declare namespace copyfiles {
    interface Options {
        /** include files & directories beginning with a dot (.) */
        all?: boolean | undefined;
        /** throw error if nothing is copied */
        error?: boolean | undefined;
        /** pattern or glob to exclude */
        exclude?: string | ReadonlyArray<string> | undefined;
        /** flatten the output */
        flat?: boolean | undefined;
        /**
         * follow symbolink links
         * @default false
         */
        follow?: boolean | undefined;
        /** do not overwrite destination files if they exist */
        soft?: boolean | undefined;
        /**
         * slice a path off the bottom of the paths
         * @default 0
         */
        up?: number | true | undefined;
        /** print more information to console */
        verbose?: boolean | undefined;
    }

    type Callback = (error?: Error) => void;
}

declare function copyfiles(paths: string[], options: copyfiles.Options | number, callback: copyfiles.Callback): void;
declare function copyfiles(paths: string[], callback: copyfiles.Callback): void;

export = copyfiles;
