// Type definitions for envify
// Project: https://github.com/hughsk/envify
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "envify" {
	var envify: Function;
	export = envify;
}

declare module "envify/custom" {
	function envify(environment: { [name: string]: any }): Function;
	export = envify;
}
