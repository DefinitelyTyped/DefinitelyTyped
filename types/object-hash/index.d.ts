// Type definitions for object-hash v1.1.8
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
	}

	interface HashTableItem {
		value: any;
		count: number;
	}

	interface HashTableItemWithKey extends HashTableItem {
		hash: string;
	}

	export interface HashTable {
		add(...values: any[]): HashTable;
		remove(...values: any[]): HashTable;
		hasKey(key: string): boolean;
		getValue(key: string): any;
		getCount(key: string): number;
		table(): { [key: string]: HashTableItem };
		toArray(): HashTableItemWithKey[];
		reset(): HashTable;
	}

	export interface HashTableStatic {
		(options?: IOptions): HashTable;
	}

	export interface Hash {
		(object: any, options?: IOptions): string;
		sha1(object: any): string;
		keys(object: any): string;
		MD5(object: any): string;
		keysMD5(object: any): string;
		HashTable: HashTableStatic;
	}

	export var HashStatic: Hash;
}
