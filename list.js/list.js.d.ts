// Type definitions for ListJS v1.1.0
// Project: https://github.com/javve/list.js
// Definitions by: Germain Bergeron <https://github.com/germainbergeron>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface ListOptions {
    valueNames?: string[];
    item?: string;
    listClass?: string;
    searchClass?: string;
    sortClass?: string;
    indexAsync?: boolean;
    page?: number;
    i?: number;
}

interface SortOptions {
    order: string;
}

declare class List {
    constructor(idOrElement: any, options: ListOptions, values?: any[]);

    items: Item[];
    visibleItems: Item[];

    sort(valueName: string, options: SortOptions): void;
    search(searchString?: string, columns?: any[]): any;
    get(valueName: string, value: any): Item[];
    add(value: any, callback?: Function): Item[];
    add(values: any[], callback?: Function): Item[];
    remove(valueName: string, value: any, options?: any): number;

    update(): List;
}

declare class Item {
    values(newValues?: any): any;
    elm: JQuery;
}