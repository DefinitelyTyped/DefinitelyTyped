// Type definitions for ListJS v1.1.0
// Project: https://github.com/javve/list.js
// Definitions by: Marilyne Chan <https://github.com/marilynechan>
// Definitions by: Germain Bergeron  <https://github.com/germainbergeron>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

    sort(valueName: string, options: SortOptions);
    search(searchString?: string, columns?: any[]);
    get(valueName: string, value: any): Item[];
    update();
}

declare class Item {
    values(newValues?: any): any;
    elm: JQuery;
}
