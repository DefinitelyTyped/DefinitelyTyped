/// <reference types="jquery"/>

interface JQueryMatchHeight {
    _throttle: number;
    _maintainScroll: boolean;
    _groups: any[];

    /**
     * Set all selected elements to the height of the tallest.
     * If the items are on multiple rows, the items of each row will be set to the tallest of that row.
     */
    (options?: JQueryMatchHeight.Options): JQuery;
    _update(): void;
    _rows($item: JQuery): any[];
    _beforeUpdate(event: JQueryEventObject, groups: any[]): any;
    _afterUpdate(event: JQueryEventObject, groups: any[]): any;
    _apply(elements: any, options: any): void;
}

declare namespace JQueryMatchHeight {
    interface Options {
        byRow?: boolean | undefined;
        property?: string | undefined;
        target?: string | undefined;
        remove?: boolean | undefined;
    }
}

interface JQuery {
    matchHeight: JQueryMatchHeight;
}
