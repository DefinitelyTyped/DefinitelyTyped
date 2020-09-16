// Type definitions for gulp-header 2.0
// Project: https://github.com/tracker1/gulp-header
// Definitions by: Max Fouquet <https://github.com/maxfouquet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node"/>

declare function header(text: string, data?: object): NodeJS.ReadWriteStream;

export = header;
