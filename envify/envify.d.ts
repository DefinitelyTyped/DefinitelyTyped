// Type definitions for envify
// Project: https://github.com/hughsk/envify
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "envify" {
	var envify: (file: string, environment: { [name: string]: any }) => NodeJS.ReadWriteStream;
	export = envify;
}

declare module "envify/custom" {
	function envify(environment: { [name: string]: any }): (file: string, environment: { [name: string]: any }) => NodeJS.ReadWriteStream;
	export = envify;
}
