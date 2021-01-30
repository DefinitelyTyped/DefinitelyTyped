// Type definitions for reactjs-localstorage 1.0
// Project: https://github.com/null-none/react-localstorage
// Definitions by: Rick Wilson <https://github.com/rwilson504>
//                 Dan Cox <https://github.com/powerappsdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace reactLocalStorage {
    function set(key: string, value: any): any;
    function get(key: string, defaultValue?: any, silent?: boolean): any;
    function setObject(key: string, value: any): any;
    function getObject(key: string, defaultValue?: {}, silent?: boolean): any;
    function clear(): void;
    function remove(key: string): void;
}
