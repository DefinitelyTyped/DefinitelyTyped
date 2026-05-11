export = hash_file;

declare function hash_file(src: string): Promise<string>;

declare namespace hash_file {
    function sync(src: string): string;
}
