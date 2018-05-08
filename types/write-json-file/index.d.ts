// Type definitions for write-json-file 2.2
// Project: https://github.com/sindresorhus/write-json-file
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function writeJsonFile(filepath: string, data: any, options?: writeJsonFile.Options): Promise<void>;
declare namespace writeJsonFile {
    type Replacer = (key: string, value: any) => void;
    interface Options {
        indent?: string | number | null;
        detectIndent?: boolean;
        sortKeys?: boolean | ((a: string, b: string) => number);
        replacer?: Replacer | Array<number | string> | null;
        mode?: number;
    }
    function sync(filepath: string, data: any, options?: Options): void;
}
export = writeJsonFile;
