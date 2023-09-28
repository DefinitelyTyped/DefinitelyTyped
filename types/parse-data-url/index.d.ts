// Type definitions for parse-data-url 3.0
// Project: https://github.com/killmenot/parse-data-url
// Definitions by: Jaime Filho <https://github.com/jaimeadf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function parseDataUrl(s: string): false | parseDataUrl.DataUrl;

declare namespace parseDataUrl {
    interface DataUrl {
        mediaType: string;
        contentType: string;
        charset: string;
        base64: boolean;
        data: string;
        toBuffer(): Buffer;
    }
}

export = parseDataUrl;
