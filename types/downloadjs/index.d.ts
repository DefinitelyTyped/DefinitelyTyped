// Type definitions for downloadjs 1.4
// Project: http://danml.com/download.html
// Definitions by: cwmoo740 <https://github.com/cwmoo740>
//                 josuedevmark <https://github.com/josuedevmark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace download {
}
declare function download(data: string | File | Blob | Uint8Array, filename?: string, mimeType?: string): XMLHttpRequest | boolean;
export = download;
