type Patterns = string | string[];
type Callback = (err: Error, files: string[]) => void;

declare function bashGlob(pattern: Patterns, callback: Callback): void;
declare function bashGlob(pattern: Patterns, options: bashGlob.Options, callback: Callback): void;

declare namespace bashGlob {
    interface Options {
        cwd?: string | undefined;
        dot?: boolean | undefined;
        dotglob?: boolean | undefined;
        extglob?: boolean | undefined;
        failglob?: boolean | undefined;
        globstar?: boolean | undefined;
        nocase?: boolean | undefined;
        nocaseglob?: boolean | undefined;
        nullglob?: boolean | undefined;
    }

    function on(event: "match" | "files", callback: (files: string, cwd: string) => void): void;
    function on(event: "end", callback: (files: string) => void): void;

    function each(patterns: Patterns, callback: Callback): void;
    function each(patterns: Patterns, options: Options, callback: Callback): void;

    function promise(patterns: Patterns, options?: Options): Promise<string[]>;

    function sync(patterns: Patterns, options?: Options): string[];
}

export = bashGlob;
