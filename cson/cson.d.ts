// Type definitions for CSON
// Project: https://github.com/bevry/cson
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "cson" {
	// Create Strings
	export function stringify(data: Object, opts?: Object, indent?: any): string;
	export function createCSONString(data: Object, opts?: Object, next?: any): string;
	export function createJSONString(data: Object, opts?: Object, next?: any): string;
	export function createString(data: Object, opts?: Object, next?: any): string;

	// Parse Strings
	export function parse(data: string, opts?: Object, next?: any): Object;
	export function parseCSONString(data: string, opts?: Object, next?: any): Object;
	export function parseJSONString(data: string, opts?: Object, next?: any): Object;
	export function parseCSString(data: string, opts?: Object, next?: any): Object;
	export function parseJSString(data: string, opts?: Object, next?: any): Object;
	export function parseString(data: string, opts?: Object, next?:any): Object;

	// Parse Files
	export function load(filePath: string, opts?: Object, next?: any): Object;
	export function parseCSONFile(filePath: string, opts?: Object, next?: any): Object;
	export function parseJSONFile(filePath: string, opts?: Object, next?: any): Object;
	export function parseCSFile(filePath: string, opts?: Object, next?: any): Object;
	export function parseJSFile(filePath: string, opts?: Object, next?: any): Object;

	// Require Files
	export function requireCSFile(filePath: string, opts?: Object, next?: any): Object;
	export function requireJSFile(filePath: string, opts?: Object, next?: any): Object;
	export function requireFile(filePath: string, opts?: Object, next?: any): Object;
}
