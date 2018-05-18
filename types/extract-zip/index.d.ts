// Type definitions for extract-zip 1.6
// Project: https://github.com/maxogden/extract-zip
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare namespace extract {
    interface Options {
        dir?: string;
        defaultDirMode?: number;
        defaultFileMode?: number;
        onEntry?(entry: any, zipfile: any): void;
    }
}

declare function extract(
    zipPath: string,
    opts: extract.Options,
    cb: (err?: Error) => void,
): void;

export = extract;
