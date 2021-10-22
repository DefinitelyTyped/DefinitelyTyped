// Type definitions for cson 7.20
// Project: https://github.com/bevry/cson
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Create Strings
export function stringify(data: any, opts?: object, indent?: any): string;
export function createCSONString(data: any, opts?: object, next?: any): string;
export function createJSONString(data: any, opts?: object, next?: any): string;
export function createString(data: any, opts?: object, next?: any): string;

// Parse Strings
export function parse(data: string, opts?: object, next?: any): any;
export function parseCSONString(data: string, opts?: object, next?: any): any;
export function parseJSONString(data: string, opts?: object, next?: any): any;
export function parseCSString(data: string, opts?: object, next?: any): any;
export function parseJSString(data: string, opts?: object, next?: any): any;
export function parseString(data: string, opts?: object, next?: any): any;

// Parse Files
export function load(filePath: string, opts?: object, next?: any): any;
export function parseCSONFile(filePath: string, opts?: object, next?: any): any;
export function parseJSONFile(filePath: string, opts?: object, next?: any): any;
export function parseCSFile(filePath: string, opts?: object, next?: any): any;
export function parseJSFile(filePath: string, opts?: object, next?: any): any;

// Require Files
export function requireCSFile(filePath: string, opts?: object, next?: any): any;
export function requireJSFile(filePath: string, opts?: object, next?: any): any;
export function requireFile(filePath: string, opts?: object, next?: any): any;
