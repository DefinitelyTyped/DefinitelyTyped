// Type definitions for electron-json-storage 3.1
// Project: https://github.com/electron-userland/electron-json-storage
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>,
//                 nrlquaker <https://github.com/nrlquaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export const DEFAULT_DATA_PATH: string;
export function setDataPath(directory: string): void;
export function getDataPath(): string;
export function get(key: string, callback: (error: any, data: object) => void): void;
export function getMany(keys: ReadonlyArray<string>, callback: (error: any, data: object) => void): void;
export function getAll(callback: (error: any, data: object) => void): void;
export function set(key: string, json: object, callback: (error: any) => void): void;
export function has(key: string, callback: (error: any, hasKey: boolean) => void): void;
export function keys(callback: (error: any, keys: string[]) => void): void;
export function remove(key: string, callback: (error: any) => void): void;
export function clear(callback: (error: any) => void): void;
