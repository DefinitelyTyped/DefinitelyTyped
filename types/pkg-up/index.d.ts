// Type definitions for pkg-up 2.0
// Project: https://github.com/sindresorhus/pkg-up#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pkgUp;

declare function pkgUp(cwd?: string): Promise<string>;

declare namespace pkgUp {
    function sync(cwd?: string): string;
}
