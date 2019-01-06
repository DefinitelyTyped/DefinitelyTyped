// Type definitions for pretty-bytes 5.1
// Project: https://github.com/sindresorhus/pretty-bytes
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Daniela Yassuda <https://github.com/danielasy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function PrettyBytes(number: number, options?: PrettyBytes.PrettyBytesOptions): string;
export = PrettyBytes;
declare namespace PrettyBytes {
    interface PrettyBytesOptions {
        signed?: boolean;
        locale?: boolean | string;
    }
}
