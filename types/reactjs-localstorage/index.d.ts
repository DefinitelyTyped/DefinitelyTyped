// Type definitions for reactjs-localstorage 1.0
// Project: https://github.com/null-none/react-localstorage
// Definitions by: Rick Wilson <https://github.com/rwilson504>
//                 Dan Cox <https://github.com/powerappsdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace reactLocalStorage;

export function set(key: string, value: any): any;
export function get(key: string, defaultValue?: any, silent?: boolean): any;
export function setObject(key: string, value: any): any;
export function getObject(key: string, defaultValue?: {}, silent?: boolean): any;
export function clear(): void;
export function remove(key: string): void;
