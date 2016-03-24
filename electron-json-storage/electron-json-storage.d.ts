// Type definitions for electron-json-storage
// Project: https://github.com/jviotti/electron-json-storage
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "electron-json-storage" {
	export function get(key: string, callback: (error: any, data: Object) => void): void;
	export function set(key: string, json: Object, callback: (error: any) => void): void;
	export function has(key: string, callback: (error: any, hasKey: boolean) => void): void;
	export function keys(callback: (error: any, keys: string[]) => void): void;
	export function remove(key: string, callback: (error: any) => void): void;
	export function clear(callback: (error: any) => void): void;
}
