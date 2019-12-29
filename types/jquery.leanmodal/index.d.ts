// Type definitions for leanModal.js 1.1
// Project: http://leanmodal.finelysliced.com.au/
// Definitions by: FinelySliced <https://github.com/FinelySliced>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

interface JQueryLeanModalOption {
    top? : number;
    overlay? : number;
    closeButton? : String;
}

interface JQueryStatic {
    leanModal(): JQuery;
    leanModal(val : JQueryLeanModalOption): JQuery;
}

interface JQuery {
    leanModal(): JQuery;
    leanModal(val : JQueryLeanModalOption): JQuery;
}
