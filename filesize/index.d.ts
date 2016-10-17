// Type definitions for filesize 3.2.1
// Project: https://github.com/avoidwork/filesize.js
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var fileSize: Filesize.IFilesize;
export = fileSize;
export as namespace filesize;

declare namespace Filesize {

    export interface SiJedecBits {
        b?: string;
        Kb?: string;
        Mb?: string;
        Gb?: string;
        Tb?: string;
        Pb?: string;
        Eb?: string;
        Zb?: string;
        Yb?: string;
    }

    export interface SiJedecBytes {
        B?: string;
        KB?: string;
        MB?: string;
        GB?: string;
        TB?: string;
        PB?: string;
        EB?: string;
        ZB?: string;
        YB?: string;
    }

    type SiJedec = SiJedecBits & SiJedecBytes & { [name: string]: string };

    export interface Options {
        /**
        * Enables bit sizes, default is false
        */
        bits?: boolean;
        /**
        * Number base, default is 2
        */
        base?: number;
        /**
        * Decimal place, default is 2
        */
        round?: number;
        /**
        * Output of function (array, exponent, object, or string), default is string
        */
        output?: string;
        /**
        * Dictionary of SI/JEDEC symbols to replace for localization, defaults to english if no match is found
        * @deprecated: use 'symbols'
        */
        suffixes?: SiJedec;
        /**
        * Dictionary of SI/JEDEC symbols to replace for localization, defaults to english if no match is found
        */
        symbols?: SiJedec;
        /**
        * Specifies the SI suffix via exponent, e.g. 2 is MB for bytes, default is -1
        */
        exponent?: number;
        /**
        *  Enables unix style human readable output, e.g ls -lh, default is false
        */
        unix?: boolean;
        /**
        * Character between the result and suffix, default is " "
        */
        spacer?: string;
    }

    export interface IFilesize {
        (bytes: number): string;
        (bytes: number, options: Options): string;
    }
}
