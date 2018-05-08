// Type definitions for pkg-dir 2.0
// Project: https://github.com/sindresorhus/pkg-dir#readme
// Definitions by: NK-WEB-Git <https://github.com/NK-WEB-Git>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pkgDir;

declare function pkgDir(cwd?: string): Promise<string | null>;

declare namespace pkgDir {
    function sync(cwd?: string): string | null;
}
