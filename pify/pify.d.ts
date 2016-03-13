// Type definitions for pify
// Project: https://github.com/sindresorhus/pify
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "pify" {
    interface PifyOptions {
        multiArgs?: boolean,
        include?: [string | RegExp],
        exclude?: [string | RegExp],
        excludeMain?: boolean
    }

    function pify(input: Function, promiseModule?: Function, options?: PifyOptions): (...args:any[]) => Promise<any>;
    function pify(input: any, promiseModule?: Function, options?: PifyOptions): any;
    function pify(input: Function, options?: PifyOptions): (...args:any[]) => Promise<any>;
    function pify(input: any, options?: PifyOptions): any;

	namespace pify {}
	export = pify;
}