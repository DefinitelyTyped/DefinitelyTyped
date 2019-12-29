// Type definitions for local-storage 1.4
// Project: https://github.com/bevacqua/local-storage
// Definitions by: Sasha Grin <https://github.com/tup1tsa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Listener = (newValue: any, oldValue: any, url: string) => any;

interface Accessor {
    /**
     * Invokes set if value is present and get otherwise
     * https://github.com/bevacqua/local-storage#lskey-value
     */
    (key: string, value: any): boolean;
    (key: string): any;

    /**
     * Internally uses JSON.parse to parse value from storage without try/catch
     * https://github.com/bevacqua/local-storage#lsgetkey
     */
    get(key: string): any;

    /**
     * Internally uses JSON.stringify before saving.
     * https://github.com/bevacqua/local-storage#lssetkey-value
     */
    set(key: string, value: any): boolean;

    /** https://github.com/bevacqua/local-storage#lsremovekey */
    remove(key: string): boolean;

    /** https://github.com/bevacqua/local-storage#lsclear */
    clear(): boolean;

    /** https://github.com/bevacqua/local-storage#lsonkey-fn */
    on(key: string, callback: Listener): void;

    /** https://github.com/bevacqua/local-storage#lsoffkey-fn */
    off(key: string, callback: Listener): void;
}

declare const accessor: Accessor;
export = accessor;
