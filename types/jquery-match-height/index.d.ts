// Type definitions for jquery-match-height 0.7
// Project: https://github.com/liabru/jquery-match-height
// Definitions by: Andrea Briganti <https://github.com/kbytesys/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

// We cannot add the jQuery.fn definitions of the plugin until this
// issue is resolved
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12685

declare namespace JQueryMatchHeight {
    interface Options {
        byRow?: boolean;
        property?: string;
        target?: string;
        remove?: boolean;
    }
}

interface JQuery {
    /**
     * Set all selected elements to the height of the tallest.
     * If the items are on multiple rows, the items of each row will be set to the tallest of that row.
     *
     * @param options
     */
    matchHeight(options?: JQueryMatchHeight.Options): JQuery;
}
