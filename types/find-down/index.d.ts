declare namespace findDown {
    interface Options {
        /** Directory to end with. Default: `process.cwd()` */
        cwd?: string | undefined;
    }
}

declare function findDown(filename: string | string[], options?: findDown.Options): Promise<string | null>;

export = findDown;
