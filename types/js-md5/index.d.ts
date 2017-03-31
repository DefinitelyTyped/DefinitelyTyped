// Type definitions for js-md5 0.4
// Project: https://github.com/emn178/js-md5
// Definitions by: Michael McCarthy <https://github.com/mwmccarthy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

declare namespace md5 {
    type message = string | any[] | Uint8Array | ArrayBuffer;

    interface Md5 {
        array(): number[];
        arrayBuffer(): ArrayBuffer;
        buffer(): ArrayBuffer;
        digest(): number[];
        hex(): string;
        toString(): string;
        update(message: message): Md5;
    }

    interface md5 {
        (message: message): string;
        hex(message: message): string;
        array(message: message): number[];
        digest(message: message): number[];
        arrayBuffer(message: message): ArrayBuffer;
        buffer(message: message): ArrayBuffer;
        create(): Md5;
        update(message: message): Md5;
    }
}

declare const md5: md5.md5;
export = md5;
