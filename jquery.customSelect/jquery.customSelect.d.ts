// Type definitions for jquery.customSelect.js 0.5.1
// Project: http://adam.co/lab/jquery/customselect//
// Definitions by: adamcoulombe <https://github.com/adamcoulombe>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

interface JQueryCustomSelectOption {
    customClass?: string;
    mapClass?: boolean;
    mapStyle?: boolean;
}

interface JQuery {
    customSelect(val:JQueryCustomSelectOption): JQuery;
}