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
