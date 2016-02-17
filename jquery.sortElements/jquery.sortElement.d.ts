// Type definitions for jQuery.sortElements
// Project: http://james.padolsey.com/javascript/sorting-elements-with-jquery/
// Definitions by: Tim Bureck <https://github.com/tbureck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../jquery/jquery.d.ts'/>

interface JQuery {
    sortElements(comparator:Function, getSortable?:Function):JQuery;
}
