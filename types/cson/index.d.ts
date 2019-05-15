// Type definitions for CSON
// Project: https://github.com/bevry/cson
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// Create Strings
export declare function stringify(data: any, opts?: Object, indent?: any): string;
export declare function createCSONString(data: any, opts?: Object, next?: any): string;
export declare function createJSONString(data: any, opts?: Object, next?: any): string;
export declare function createString(data: any, opts?: Object, next?: any): string;

// Parse Strings
export declare function parse(data: string, opts?: Object, next?: any): any;
export declare function parseCSONString(data: string, opts?: Object, next?: any): any;
export declare function parseJSONString(data: string, opts?: Object, next?: any): any;
export declare function parseCSString(data: string, opts?: Object, next?: any): any;
export declare function parseJSString(data: string, opts?: Object, next?: any): any;
export declare function parseString(data: string, opts?: Object, next?: any): any;

// Parse Files
export declare function load(filePath: string, opts?: Object, next?: any): any;
export declare function parseCSONFile(filePath: string, opts?: Object, next?: any): any;
export declare function parseJSONFile(filePath: string, opts?: Object, next?: any): any;
export declare function parseCSFile(filePath: string, opts?: Object, next?: any): any;
export declare function parseJSFile(filePath: string, opts?: Object, next?: any): any;

// Require Files
export declare function requireCSFile(filePath: string, opts?: Object, next?: any): any;
export declare function requireJSFile(filePath: string, opts?: Object, next?: any): any;
export declare function requireFile(filePath: string, opts?: Object, next?: any): any;
