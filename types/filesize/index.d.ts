// Type definitions for filesize 4.1
// Project: https://github.com/avoidwork/filesize.js, https://filesizejs.com
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Renaud Chaput <https://github.com/renchap>
//                 Roman Nuritdinov <https://github.com/Ky6uk>
//                 Sam Hulick <https://github.com/ffxsam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var fileSize: Filesize.Filesize;
export = fileSize;
export as namespace filesize;

declare namespace Filesize {
    interface SiJedecBits {
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

    interface SiJedecBytes {
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

    interface Options {
        /**
         * Number base, default is 2
         */
        base?: number;
        /**
         * Enables bit sizes, default is false
         */
        bits?: boolean;
        /**
         * Specifies the SI suffix via exponent, e.g. 2 is MB for bytes, default is -1
         */
        exponent?: number;
        /**
         * Enables full form of unit of measure, default is false
         */
        fullform?: boolean;
        /**
         * Array of full form overrides, default is []
         */
        fullforms?: string[];
        /**
         * BCP 47 language tag to specify a locale, or true to use default locale, default is ""
         */
        locale?: string | boolean;
        /**
         * Output of function (array, exponent, object, or string), default is string
         */
        output?: "array" | "exponent" | "object" | "string";
        /**
         * Decimal place, default is 2
         */
        round?: number;
        /**
         * Decimal separator character, default is `.`
         */
        separator?: string;
        /**
         * Character between the result and suffix, default is ` `
         */
        spacer?: string;
        /**
         * Standard unit of measure, can be iec or jedec, default is jedec; can be overruled by base
         */
        standard?: "iec" | "jedec";
        /**
         * Dictionary of SI/JEDEC symbols to replace for localization, defaults to english if no match is found
         */
        symbols?: SiJedec;
        /**
         *  Enables unix style human readable output, e.g ls -lh, default is false
         */
        unix?: boolean;
    }

    interface Filesize {
        (bytes: number, options?: Options): string;
        partial: (options: Options) => ((bytes: number) => string);
    }
}
