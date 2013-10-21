// Typescript type definitions for jQuery.splitter by NN
// Project: https://github.com/e1ven/jQuery-Splitter
// Original project: http://methvin.com/splitter/vsplitter-docking.html
// Definitions by: NN <https://github.com/NN--->
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../jquery/jquery.d.ts'/>
/// <reference path='../jquery.cookie/jquery.cookie.d.ts'/>

declare class JQuerySplitterOptions {
    
}

interface JQuery {
    splitter(args?: JQuerySplitterOptions): JQuery;

    splitterSetWidth(width: number): JQuery;
    splitterSetOption(option: any, value: any): JQuery;
}