// Type definitions for CSON
// Project: https://github.com/bevry/cson
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// Create Strings
declare export function stringify(data: Object, opts?: Object, indent?: any): string;
declare export function createCSONString(data: Object, opts?: Object, next?: any): string;
declare export function createJSONString(data: Object, opts?: Object, next?: any): string;
declare export function createString(data: Object, opts?: Object, next?: any): string;

// Parse Strings
declare export function parse(data: string, opts?: Object, next?: any): Object;
declare export function parseCSONString(data: string, opts?: Object, next?: any): Object;
declare export function parseJSONString(data: string, opts?: Object, next?: any): Object;
declare export function parseCSString(data: string, opts?: Object, next?: any): Object;
declare export function parseJSString(data: string, opts?: Object, next?: any): Object;
declare export function parseString(data: string, opts?: Object, next?: any): Object;

// Parse Files
declare export function load(filePath: string, opts?: Object, next?: any): Object;
declare export function parseCSONFile(filePath: string, opts?: Object, next?: any): Object;
declare export function parseJSONFile(filePath: string, opts?: Object, next?: any): Object;
declare export function parseCSFile(filePath: string, opts?: Object, next?: any): Object;
declare export function parseJSFile(filePath: string, opts?: Object, next?: any): Object;

// Require Files
declare export function requireCSFile(filePath: string, opts?: Object, next?: any): Object;
declare export function requireJSFile(filePath: string, opts?: Object, next?: any): Object;
declare export function requireFile(filePath: string, opts?: Object, next?: any): Object;
