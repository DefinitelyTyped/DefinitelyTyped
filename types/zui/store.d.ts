// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StoreStatic {
    enable: boolean;
    storage: any;
    length(): number;
    remove(key: string): any;
    get<T>(key: string): T;
    set<T>(key: string, value?: T): any;
    key(index: number): string;
    forEach<T>(cb: (key: string, value: T) => any): any;
    serialize(value: any): string;
    deserialize<T>(value: string): T;
    getAll<T>(): T;
    removeItem(key: string): any;
    getItem(key: string): string;
    setItem(key: string, value: any): any;
    clear(): void;

    page: any;
    pageGet(key: string): any;
    pageSet(key: string, value: any): any;
    pageRemove(key: string): any;
    pageSave(): any;
    pageClear(): any;
}