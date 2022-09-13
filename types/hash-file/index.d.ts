// Type definitions for hash-file 3.0
// Project: https://github.com/kevva/hash-file#readme
// Definitions by: Hiromi Shikata <https://github.com/HiromiShikata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hash_file;

declare function hash_file(src: string): Promise<string>;

declare namespace hash_file {
    function sync(src: string): string;
}
