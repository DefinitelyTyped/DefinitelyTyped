// Type definitions for ProtoBuf.js
// Project: https://github.com/dcodeIO/ProtoBuf.js
// Definitions by: Panu Horsmalahti
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ProtoBuf {
	interface IBuilder {
		build: <T>() => T;
	}

	interface IProtoBufMessage {
	    toArrayBuffer(): ArrayBuffer;
	    toBuffer(): Buffer;
	}

	export function loadProtoFile(filePath: string, callback: (builder: IBuilder) => void): any;
}

declare module "protobufjs" {
    export = ProtoBuf;
}
