// Type definitions for ProtoBuf.js
// Project: https://github.com/dcodeIO/ProtoBuf.js
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module ProtoBuf {
	export interface IBuilder {
		build: <T>() => T;
	}

	export interface IProtoBufMessage {
	    toArrayBuffer(): ArrayBuffer;
	    toBuffer(): Buffer;
	}

	export function loadProtoFile(filePath: string, callback: (builder: IBuilder) => void): any;
}

declare module "protobufjs" {
    export = ProtoBuf;
}
