// Type definitions for aurelia-path v0.6.1 
// Project: https://github.com/aurelia/
// Definitions by: Mike Graham <https://github.com/cmichaelgraham>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'aurelia-path/index' {
	export function relativeToFile(name: any, file: any): any;
	export function join(path1: any, path2: any): any;
	export function buildQueryString(a: any, traditional?: any): string;

}
declare module 'aurelia-path' {
	export * from 'aurelia-path/index';
}
