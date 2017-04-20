// Type definitions for downloadjs 1.4
// Project: http://danml.com/download.html
// Definitions by: cwmoo740 <https://github.com/cwmoo740>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace download {
    type Data = string | File | Blob;
    interface Stringable {
        toString(): string;
    }
}
declare function download(data: download.Data, filename?: string, mimeType?: string): void;
declare function download<T extends download.Stringable>(data: T, filename?: string, mimeType?: string): void;
export = download;
