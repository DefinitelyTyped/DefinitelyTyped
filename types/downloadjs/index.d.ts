// Type definitions for downloadjs 1.4
// Project: http://danml.com/download.html
// Definitions by: cwmoo740 <https://github.com/cwmoo740>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace download {
}
declare function download(data: string | File | Blob, filename?: string, mimeType?: string): void;
export = download;
