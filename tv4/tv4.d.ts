// Type definitions for Tiny Validator tv4 1.0.6
// Project: https://github.com/geraintluff/tv4
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface TV4ErrorCodes {
	[key:string]:number;
}
interface TV4Error {
	code:number;
	message:string;
	dataPath:string;
	schemaPath:string;
}
interface TV4SchemaMap {
	[uri:string]:any;
}
interface TV4BaseResult {
	missing:string[];
	valid:boolean;
}
interface TV4SingleResult extends TV4BaseResult {
	error:TV4Error;
}
interface TV4MultiResult extends TV4BaseResult {
	errors:TV4Error[];
}
interface TV4 {
	validateResult(data:any, schema:any):TV4SingleResult;
	validateMultiple(data:any, schema:any):TV4MultiResult;

	addSchema(uri:string, schema:any):boolean;
	getSchema(uri:string):any;
	normSchema(schema:any, baseUri:string):any;
	resolveUrl(base:string, href:string):string;
	freshApi():TV4;
	dropSchemas():void;
	reset():void;

	getMissingUris(exp?:RegExp):string[];
	getSchemaUris(exp?:RegExp):string[];
	getSchemaMap():TV4SchemaMap;
	errorCodes:TV4ErrorCodes;
}
declare module "tv4" {
	var tv4: TV4
	export = tv4;
}
