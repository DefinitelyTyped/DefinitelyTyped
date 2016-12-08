// Type definitions for content-disposition 0.5
// Project: https://github.com/jshttp/content-disposition
// Definitions by: Stefan Reichel <https://github.com/bomret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace contentDisposition {
    export class ContentDisposition {
        type: string;
        parameters: any;

        constructor(type: string, parameters: any);
    }

    export interface Options {
        type?: string;
        fallback?: string | boolean
    }

    export function parse(contentDispositionHeader: string): ContentDisposition;
}

declare function contentDisposition(filename: void, options: contentDisposition.Options): string;
declare function contentDisposition(filename: string, options?: contentDisposition.Options): string;

export = contentDisposition;
