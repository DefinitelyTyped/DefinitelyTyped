// Type definitions for autosize.JQuery 1.18.6
// Project: http://www.jacklmoore.com/autosize/
// Definitions by: Mathieu Cnatin <https://github.com/harcher81/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module AutosizeModule {
    interface AutosizeOptions {
        className?: string;
        append?: string;
        callback?: () => any;
        resizeDelay?: number;
        placeholder?: boolean;
    }

    interface Autosize {
        (options?: AutosizeOptions): JQuery;
    }
}

interface JQuery {
    autosize: AutosizeModule.Autosize;
}