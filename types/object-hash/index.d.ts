// Type definitions for object-hash v1.2.0
// Project: https://github.com/puleos/object-hash
// Definitions by: Michael Zabka <https://github.com/misak113>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
		unorderedArrays?: boolean;
		unorderedSets?: boolean;
		excludeKeys?: (key: string) => boolean;
	}

	export interface Hash {
		(object: any, options?: IOptions): string;
		sha1(object: any): string;
		keys(object: any): string;
		MD5(object: any): string;
		keysMD5(object: any): string;
	}

	export var HashStatic: Hash;
}
