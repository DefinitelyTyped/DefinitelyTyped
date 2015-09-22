// Type definitions for content-type v0.0.1
// Project: https://github.com/deoxxa/content-type
// Definitions by: Pine Mizune <https://github.com/pine613>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ContentType {
    interface MediaType {
        type: string;
        q?: number;
        params: any;
        toString(): string;
    }

    interface SelectOptions {
        sortAvailable?: boolean;
        sortAccepted?: boolean;
    }

    interface MediaTypeStatic {
        new (s: string, p?: any): MediaType;
        parseMedia(type: string): MediaType;
        splitQuotedString(str: string, delimiter?: string, quote?: string): string[];
        splitContentTypes(str: string): string[];
        select(availableTypes: MediaType[], acceptedTypes: MediaType[], options?: SelectOptions): string;
        mediaCmp(a: MediaType, b: MediaType): number;
    }
}

declare module "content-type" {
    var x: ContentType.MediaTypeStatic;
    export = x;
}