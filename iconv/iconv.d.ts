// Type definitions for iconv 2.1.11
// Project: https://github.com/bnoordhuis/node-iconv
// Definitions by: delphinus <https://github.com/delphinus35/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../node/node.d.ts" />

declare module "iconv" {

    import {Stream} from "stream";

    interface IconvStatic {

        new(fromEncoding: string, toEncoding: string): IconvClass;
        (fromEncoding: string, toEncoding: string): IconvClass;
    }

    class IconvClass extends Stream {

        constructor(fromEncoding: string, toEncoding: string);
        writable: boolean;
        convert(input: string | Buffer, encoding?: string): Buffer;
        write(input: string | Buffer, encoding?: string): boolean;
        end(input?: string | Buffer, encoding?: string): void;
    }

    var Iconv: IconvStatic;
}
