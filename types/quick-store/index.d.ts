// Type definitions for quick-store 0.1
// Project: https://www.npmjs.com/package/quick-store (repository is deleted)
// Definitions by: Glenn <https://github.com/promise>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = QuickStore;

interface dbContents { [key: string]: value; }
type value = string | number | dbContents | value[] | boolean | null;
type callback<value> = (data: value) => any;
type callbackExists<optionalCallback, returnIfExists, returnIfNoExists> = optionalCallback extends callback<any> ? returnIfExists : returnIfNoExists;

declare function QuickStore(filename?: string, data?: dbContents): QuickStore.Database;

declare namespace QuickStore {
    interface Database {
        put(data: dbContents, callback?: callback<dbContents>): void;
        setItem(key: string, value: value, callback?: callback<dbContents>): void;
        getItem(key: string, callback: callback<value>): void;
        removeItem(key: string, callback?: callback<dbContents>): void;
        clear(callback?: callback<dbContents>): void;
        get<optionalCallback extends callback<dbContents> | undefined>(callback?: optionalCallback): callbackExists<optionalCallback, void, dbContents>;
        change(filename: string): void;
    }
}
