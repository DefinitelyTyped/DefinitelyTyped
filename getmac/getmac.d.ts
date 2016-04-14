// Type definitions for getmac
// Project: https://github.com/bevry/getmac
// Definitions by: 0815fox <https://github.com/0815fox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "getmac" {
	function getMac(opts:(err:Error,macAddress:string)=>void):void;
	function isMac(macAddress:string):boolean;
}
