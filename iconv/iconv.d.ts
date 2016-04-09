// Type definitions for iconv 2.1.11
// Project: https://github.com/bnoordhuis/node-iconv
// Definitions by: delphinus <https://github.com/delphinus35/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../node/node.d.ts" />

declare namespace Iconv {

    interface Static {

        new(fromEncoding: string, toEncoding: string): Iconv;
        (fromEncoding: string, toEncoding: string): Iconv;
    }

    class Iconv {

        constructor(fromEncoding: string, toEncoding: string);
        writable: boolean;
        convert(input: string | Buffer, encoding?: string): Buffer;
        write(input: string | Buffer, encoding?: string): boolean;
        end(input?: string | Buffer, encoding?: string): void;

        // copy from NodeJS.EventEmitter
        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;
        once(event: string, listener: Function): this;
        removeListener(event: string, listener: Function): this;
        removeAllListeners(event?: string): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }
}

declare module "iconv" {

    var Iconv: Iconv.Static;
}
