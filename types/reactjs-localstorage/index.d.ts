export namespace reactLocalStorage {
    function set(key: string, value: string | number | boolean): string;
    function get<T = string | number | boolean>(key: string, defaultValue?: T, silent?: boolean): T;
    function setObject(key: string, value: object): string;
    function getObject(key: string, defaultValue?: object, silent?: boolean): object;
    function clear(): void;
    function remove(key: string): void;
}
