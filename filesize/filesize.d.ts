// Type definitions for filesize 3.2.1
// Project: https://github.com/avoidwork/filesize.js
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Filesize {

    export interface Options {
        bits?: boolean;
        base?: number;
        round?: number;
        output?: string;
        suffixes?: { [name: string]: string };
        exponent?: number;
    }

    export interface IFileSize {
        (bytes: number): string;
        (bytes: number, options: Options): string;
    }
}


declare module "filesize" {
    let fileSize: Filesize.IFileSize;
    export = fileSize;
}
