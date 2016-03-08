// Type definitions for jQuery Succinct v1.1.0
// Project: http://mikeking.io/succinct/
// Definitions by: Matt Brooks <https://github.com/EnableSoftware>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module JQuerySuccinct {
    interface Options {
        size?: number;
        omission?: string;
        ignore?: boolean;
    }
}

interface JQuery {
    succinct(settings?: JQuerySuccinct.Options): JQuery;
}