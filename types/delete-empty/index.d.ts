// Type definitions for delete-empty 2.0
// Project: https://github.com/jonschlinkert/delete-empty
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function deleteEmpty(dir: string): Promise<string[]>;
declare function deleteEmpty(dir: string, cb: (err: Error | undefined | null, deleted: string[]) => void): void;

declare namespace deleteEmpty {
    function sync(dir: string): string[];
}

export = deleteEmpty;
