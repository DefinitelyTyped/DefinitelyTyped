// Type definitions for is-git-clean 1.1
// Project: https://github.com/jamestalmage/is-git-clean
// Definitions by: Michaël De Boey <https://github.com/MichaelDeBoey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isGitClean(dir?: string, options?: isGitClean.Options): Promise<boolean>;

declare namespace isGitClean {
    interface Options {
        files: string[];
    }

    function sync(dir?: string, options?: Options): boolean;
}
export = isGitClean;
