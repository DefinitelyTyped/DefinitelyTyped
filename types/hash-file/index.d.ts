// Type definitions for hash-file v3.0.0
// Project: https://github.com/kevva/hash-file
// Definitions by: Hiromi Shikata <https://github.com/HiromiShikata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function hashFile(path: string): Promise<string>;
declare namespace hashFile{
    export function sync(path: string): string;
}

export = hashFile;
