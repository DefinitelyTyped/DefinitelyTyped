// Type definitions for content-type v1.0.1
// Project: https://www.npmjs.com/package/content-type
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ContentType {
    interface StaticFunctions {
        parse(string: string): MediaType;
        parse(req: { headers: any; }): MediaType;
        parse(res: { getHeader(key: string): string; }): MediaType;
        format(obj: MediaType): string;
    }

    interface MediaType {
        type: string;
        parameters?: any;
    }
}

declare module "content-type" {
    var x: ContentType.StaticFunctions;
    export = x;
}

