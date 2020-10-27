// Type definitions for list.js 1.5
// Project: http://listjs.com
// Definitions by: Jeffrey Meng <https://github.com/jeffreymeng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare class List {
    listContainer: HTMLElement;
    list: HTMLElement;
    items: object[];
    visibleItems: object[];
    matchingItems: object[];
    searched: boolean;
    filtered: boolean;
    alphabet: string;

    constructor(element: string | HTMLElement, options?: List.ListOptions, values?: object[]);

    add(values: object[], callback?: (item: List.ListItem) => void): void;
    remove(valueName: string, value: any): number;
    get(valueName: string, value: any): List.ListItem[];
    sort(valueName: string, options: List.SortOptions): void;
    search(searchString: string, columns?: string[]): void;
    clear(): void;
    filter(filterFunction?: (item: List.ListItem) => boolean): void;
    size(): number;
    show(i: number, page: number): void;
    update(): void;
    reIndex(): void;
    fuzzySearch(searchString: string, columns?: string[]): void;
    on(event: List.Event, callback: (list: List) => void): List;
}

declare namespace List {
    interface ListItem {
        elm: HTMLElement;

        values(newValues: object): void;
        values(): object;
        show(): void;
        hide(): void;
        matching(): boolean;
        visible(): boolean;
    }

    interface ListOptions {
        valueNames?: string[];
        item?: string;
        listClass?: string;
        searchClass?: string;
        sortClass?: string;
        indexAsync?: boolean;
        page?: number;
        i?: number;
        pagination?: boolean;
        fuzzySearch?: FuzzySearchOptions;
    }

    interface FuzzySearchOptions {
        searchClass?: string;
        location?: number;
        distance?: number;
        threshold?: number;
        multiSearch?: boolean;
    }

    interface SortOptions {
        order?: string;
        alphabet?: string;
        insensitive?: boolean;
        sortFunction?: (a: object, b: object) => number | undefined;
    }

    type Event =
        | 'updated'
        | 'filterStart'
        | 'filterComplete'
        | 'searchStart'
        | 'searchComplete'
        | 'sortStart'
        | 'sortComplete';
}

export = List;
