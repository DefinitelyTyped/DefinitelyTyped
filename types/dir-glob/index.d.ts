export = dirGlob;

declare function dirGlob(input: string | string[], options?: dirGlob.Options): Promise<string[]>;

declare namespace dirGlob {
    function sync(input: string | string[], options?: Options): string[];

    interface Options {
        extensions?: string[] | undefined;
        files?: string[] | undefined;
        cwd?: string | undefined;
    }
}
