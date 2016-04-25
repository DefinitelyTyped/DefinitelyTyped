// Type definitions for convert-source-map
// Project: https://github.com/thlorenz/convert-source-map
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface SourceMapConverter {
    toObject(): any;
    toJSON(space?: any): string;
    toBase64(): string;
    toComment(): string;

    addProperty(key: string, value: any): SourceMapConverter;
    setProperty(key: string, value: any): SourceMapConverter;

    getProperty(key: string): any;
}

export declare function removeComments(src: string): string;
export declare var commentRegex: RegExp;

export declare function fromObject(obj: any): SourceMapConverter;
export declare function fromJSON(json: string): SourceMapConverter;
export declare function fromBase64(base64: string): SourceMapConverter;
export declare function fromComment(comment: string): SourceMapConverter;
export declare function fromSource(source: string): SourceMapConverter;
