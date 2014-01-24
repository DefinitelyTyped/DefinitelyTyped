// Type definitions for store.js
// Project: https://github.com/marcuswestin/store.js/
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// store.js exposes a simple API for cross browser local storage

interface StoreJSStatic {
	set(key: string, value: any): any;
	get(key: string): any;
	remove(key: string): void;
	clear(): void;
	enabled: boolean;
	disabled: boolean;
	transact(key: string, defaultValue: any, transactionFn?: (val: any) => void): void;
	getAll(): any;
	serialize(value: any): string;
	deserialize(value: string): any;
}

declare var store: StoreJSStatic;
