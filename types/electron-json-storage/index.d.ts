// Type definitions for electron-json-storage
// Project: https://github.com/jviotti/electron-json-storage
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function get(key: string, callback: (error: any, data: Object) => void): void;
export declare function set(key: string, json: Object, callback: (error: any) => void): void;
export declare function has(key: string, callback: (error: any, hasKey: boolean) => void): void;
export declare function keys(callback: (error: any, keys: string[]) => void): void;
export declare function remove(key: string, callback: (error: any) => void): void;
export declare function clear(callback: (error: any) => void): void;
