// Type definitions for jQuery tinyscrollbar 1.8
// Project: http://baijs.nl/tinyscrollbar/
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

module JQueryTinyScrollbar {
    export interface JQueryTinyScrollbarOptions {
        invertscroll?: bool;
        axis?: string;
        wheel?: number;
        scroll?: bool;
        lockscroll?: bool;
        size?: any; //string or number
        sizethumb?: any; //string or number 
    }
}
interface JQuery {
    tinyscrollbar(options?: JQueryTinyScrollbar.JQueryTinyScrollbarOptions): JQuery;
    tinyscrollbar_update(options?: any): JQuery;
}