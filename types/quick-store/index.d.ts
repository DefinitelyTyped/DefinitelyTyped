export = QuickStore;

interface DatabaseContents {
    [key: string]: Value;
}
type Value = string | number | DatabaseContents | Value[] | boolean | null;
type Callback<Value> = (data: Value) => void;

declare function QuickStore(filename?: string, data?: DatabaseContents): QuickStore.Database;

declare namespace QuickStore {
    interface Database {
        put(data: DatabaseContents, callback?: Callback<DatabaseContents>): void;
        setItem(key: string, value: Value, callback?: Callback<DatabaseContents>): void;
        getItem(key: string, callback: Callback<Value>): void;
        removeItem(key: string, callback?: Callback<DatabaseContents>): void;
        clear(callback?: Callback<DatabaseContents>): void;
        get(callback: Callback<DatabaseContents>): void;
        get(): DatabaseContents;
        change(filename: string): void;
    }
}
