// Type definitions for reactjs-localstorage 1.0
// Project: https://github.com/null-none/react-localstorage
// Definitions by: Rick Wilson <https://github.com/rwilson504>
//                 Dan Cox <https://github.com/powerappsdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export namespace reactLocalStorage {
    function set(key: string, value: string | number | boolean): string;
    function get<T = string | number | boolean>(key: string, defaultValue?: T, silent?: boolean): T;
    function setObject(key: string, value: object): string;
    function getObject(key: string, defaultValue?: object, silent?: boolean): object;
    function clear(): void;
    function remove(key: string): void;
}
