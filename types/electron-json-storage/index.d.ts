export interface DataOptions {
    dataPath: string;
}
export function getDefaultDataPath(): string;
export function setDataPath(directory?: string): void;
export function getDataPath(): string;
export function get(key: string, callback: (error: any, data: object) => void): void;
export function get(key: string, options: DataOptions, callback: (error: any, data: object) => void): void;
export function getSync(key: string, options?: DataOptions): object;
export function getMany(keys: ReadonlyArray<string>, callback: (error: any, data: object) => void): void;
export function getMany(
    keys: ReadonlyArray<string>,
    options: DataOptions,
    callback: (error: any, data: object) => void,
): void;
export function getAll(callback: (error: any, data: object) => void): void;
export function getAll(options: DataOptions, callback: (error: any, data: object) => void): void;
export function set(key: string, json: object, callback: (error: any) => void): void;
export function set(key: string, json: object, options: DataOptions, callback: (error: any) => void): void;
export function has(key: string, callback: (error: any, hasKey: boolean) => void): void;
export function has(key: string, options: DataOptions, callback: (error: any, hasKey: boolean) => void): void;
export function keys(callback: (error: any, keys: string[]) => void): void;
export function keys(options: DataOptions, callback: (error: any, keys: string[]) => void): void;
export function remove(key: string, callback: (error: any) => void): void;
export function remove(key: string, options: DataOptions, callback: (error: any) => void): void;
export function clear(callback: (error: any) => void): void;
export function clear(options: DataOptions, callback: (error: any) => void): void;
