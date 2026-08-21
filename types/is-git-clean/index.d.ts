declare function isGitClean(dir?: string, options?: isGitClean.Options): Promise<boolean>;

declare namespace isGitClean {
    interface Options {
        files: string[];
    }

    function sync(dir?: string, options?: Options): boolean;
}
export = isGitClean;
