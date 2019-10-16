// Type definitions for object-hash v1.3.1
// Project: https://github.com/puleos/object-hash
// Definitions by: Michael Zabka <https://github.com/misak113>, Artur Diniz <https://github.com/artdiniz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require("stream");

import HashStatic = ObjectHash.HashStatic;
export = HashStatic;
export as namespace objectHash;

declare namespace ObjectHash {
	export interface IOptions {
		algorithm?: string;
		encoding?: string;
		excludeValues?: boolean;
		ignoreUnknown?: boolean;
		replacer?: (value: any) => any;
		respectFunctionProperties?: boolean;
        respectFunctionNames?: boolean;
        respectType?: boolean;
		unorderedArrays?: boolean;
        unorderedSets?: boolean;
        unorderedObjects?: boolean;
		excludeKeys?: (key: string) => boolean;
	}

	export interface Hash {
		(object: any, options?: IOptions): string;
		sha1(object: any): string;
		keys(object: any): string;
		MD5(object: any): string;
		keysMD5(object: any): string;
		writeToStream(value: any, stream: stream.PassThrough): void;
		writeToStream(value: any, options: IOptions, stream: stream.PassThrough): void;
	}

	export var HashStatic: Hash;
}
