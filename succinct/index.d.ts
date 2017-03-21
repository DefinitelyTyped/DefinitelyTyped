// Type definitions for jQuery Succinct v1.1.0
// Project: http://mikeking.io/succinct/
// Definitions by: Matt Brooks <https://github.com/EnableSoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

declare namespace JQuerySuccinct {
    interface Options {
        size?: number;
        omission?: string;
        ignore?: boolean;
    }
}

interface JQuery {
    succinct(settings?: JQuerySuccinct.Options): JQuery;
}
