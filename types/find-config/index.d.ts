declare namespace findConfig {
    interface Options {
        cwd?: string | undefined;
        dir?: string | undefined;
        dot?: boolean | undefined;
        home?: boolean | undefined;
        module?: boolean | undefined;
    }

    interface ReadOptions extends Options {
        encoding?: string | undefined;
        flag?: string | undefined;
    }

    function obj(filename?: string, options?: Options): { cwd: string; dir: string; path: string } | null;
    function read(filename?: string, options?: ReadOptions): string | null;
    function require(filename?: string, options?: Options): any;
}

declare function findConfig(filename?: string, options?: findConfig.Options): string | null;

export = findConfig;
