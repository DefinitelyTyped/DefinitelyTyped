// Type definitions for jquery.customSelect.js 0.5.1
// Project: http://adam.co/lab/jquery/customselect//
// Definitions by: adamcoulombe <https://github.com/adamcoulombe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryCustomSelectOption {
    customClass?: string | undefined;
    mapClass?: boolean | undefined;
    mapStyle?: boolean | undefined;
}

interface JQuery {
    customSelect(val: JQueryCustomSelectOption): JQuery;
}
