// Type definitions for CSON
// Project: https://github.com/bevry/cson
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// Create Strings
export declare function stringify(data: Object, opts?: Object, indent?: any): string;
export declare function createCSONString(data: Object, opts?: Object, next?: any): string;
export declare function createJSONString(data: Object, opts?: Object, next?: any): string;
export declare function createString(data: Object, opts?: Object, next?: any): string;

// Parse Strings
export declare function parse(data: string, opts?: Object, next?: any): Object;
export declare function parseCSONString(data: string, opts?: Object, next?: any): Object;
export declare function parseJSONString(data: string, opts?: Object, next?: any): Object;
export declare function parseCSString(data: string, opts?: Object, next?: any): Object;
export declare function parseJSString(data: string, opts?: Object, next?: any): Object;
export declare function parseString(data: string, opts?: Object, next?: any): Object;

// Parse Files
export declare function load(filePath: string, opts?: Object, next?: any): Object;
export declare function parseCSONFile(filePath: string, opts?: Object, next?: any): Object;
export declare function parseJSONFile(filePath: string, opts?: Object, next?: any): Object;
export declare function parseCSFile(filePath: string, opts?: Object, next?: any): Object;
export declare function parseJSFile(filePath: string, opts?: Object, next?: any): Object;

// Require Files
export declare function requireCSFile(filePath: string, opts?: Object, next?: any): Object;
export declare function requireJSFile(filePath: string, opts?: Object, next?: any): Object;
export declare function requireFile(filePath: string, opts?: Object, next?: any): Object;
