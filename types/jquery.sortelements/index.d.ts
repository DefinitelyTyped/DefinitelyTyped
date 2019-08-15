// Type definitions for jQuery.sortElements
// Project: http://james.padolsey.com/javascript/sorting-elements-with-jquery/
// Definitions by: Tim Bureck <https://github.com/tbureck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQuery {
    sortElements(comparator:Function, getSortable?:Function):JQuery;
}
