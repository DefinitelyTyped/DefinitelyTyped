// Type definitions for npm-packlist 1.1
// Project: https://github.com/npm/npm-packlist, https://www.npmjs.com/package/npm-packlist
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function packlist(options?: packlist.Options): Promise<string[]>;
declare function packlist<T>(options: packlist.Options | undefined, callback: (result: string[]) => T): Promise<T>;
declare namespace packlist {
    interface Options {
        /** Directory to walk recusively. Defaults to `process.cwd()`. */
        path?: string;
    }
    function sync(options?: Options): string[];
}
export = packlist;
