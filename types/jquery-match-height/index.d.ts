// Type definitions for jquery-match-height 0.7
// Project: https://github.com/liabru/jquery-match-height
// Definitions by: Andrea Briganti <https://github.com/kbytesys/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQueryMatchHeight {
    _throttle: number;
    _maintainScroll: boolean;
    _groups: any[];

    /**
     * Set all selected elements to the height of the tallest.
     * If the items are on multiple rows, the items of each row will be set to the tallest of that row.
     *
     * @param options
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
        byRow?: boolean;
        property?: string;
        target?: string;
        remove?: boolean;
    }
}

interface JQuery {
    matchHeight: JQueryMatchHeight;
}
