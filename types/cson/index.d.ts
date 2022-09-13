// Type definitions for cson 7.20
// Project: https://github.com/bevry/cson
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class CSON {
    // Create Strings
    stringify(data: any, opts?: object, indent?: any): string;
    createCSONString(data: any, opts?: object, next?: any): string;
    createJSONString(data: any, opts?: object, next?: any): string;
    createString(data: any, opts?: object, next?: any): string;

    // Parse Strings
    parse(data: string, opts?: object, next?: any): any;
    parseCSONString(data: string, opts?: object, next?: any): any;
    parseJSONString(data: string, opts?: object, next?: any): any;
    parseCSString(data: string, opts?: object, next?: any): any;
    parseJSString(data: string, opts?: object, next?: any): any;
    parseString(data: string, opts?: object, next?: any): any;

    // Parse Files
    load(filePath: string, opts?: object, next?: any): any;
    parseCSONFile(filePath: string, opts?: object, next?: any): any;
    parseJSONFile(filePath: string, opts?: object, next?: any): any;
    parseCSFile(filePath: string, opts?: object, next?: any): any;
    parseJSFile(filePath: string, opts?: object, next?: any): any;

    // Require Files
    requireCSFile(filePath: string, opts?: object, next?: any): any;
    requireJSFile(filePath: string, opts?: object, next?: any): any;
    requireFile(filePath: string, opts?: object, next?: any): any;
}

declare const _default: CSON;

export = _default;
