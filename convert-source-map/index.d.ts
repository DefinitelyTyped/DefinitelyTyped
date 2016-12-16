// Type definitions for convert-source-map v1.3.0
// Project: https://github.com/thlorenz/convert-source-map
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar/>, Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SourceMapConverter {
    toObject(): any;
    toJSON(space?: any): string;
    toBase64(): string;
    toComment(options?: { multiline?: boolean; }): string;
    addProperty(key: string, value: any): this;
    setProperty(key: string, value: any): this;
    getProperty(key: string): any;
}

export declare function fromObject(obj: any): SourceMapConverter;
export declare function fromJSON(json: string): SourceMapConverter;
export declare function fromBase64(base64: string): SourceMapConverter;
export declare function fromComment(comment: string): SourceMapConverter;
export declare function fromMapFileComment(comment: string, mapFileDir: string): SourceMapConverter;
export declare function fromSource(source: string, largeSource?: boolean): SourceMapConverter | null;
export declare function fromMapFileSource(source: string, mapFileDir: string): SourceMapConverter | null;
export declare function removeComments(src: string): string;
export declare function removeMapFileComments(src: string): string;
export declare function generateMapFileComment(file: string, options?: { multiline?: boolean; }): string;
export declare var commentRegex: RegExp;
export declare var mapFileCommentRegex: RegExp;
