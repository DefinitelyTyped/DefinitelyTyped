// Type definitions for z85
// Project: https://github.com/msealand/z85.node
// Definitions by: 0815fox https://github.com/0815fox
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "z85" {
	function encode(data:Buffer):string;
	function decode(string:string):number[];
}
