// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="knockout" />


// Activity /////////////////////////////////////////////

interface KoLiteActivityOptions {
    color?: any;
    segments?: number;
    space?: number;
    length?: number;
    width?: number;
    speed?: number;
    align?: string;
    valign?: string;
    padding?: number;
}

interface KoLiteActivity {
    (options: KoLiteActivityOptions): JQuery;
    defaults: KoLiteActivityOptions;
    getOpacity(options: { steps?: number; segments?: number; opacity?: number; }, i: number): number;
}

interface KoLiteActivityDefaultOptions {
    activityClass?: string,
    container?: string,
    inactiveClass?: string
}

interface KoLiteActivityBindingHandler extends KnockoutBindingHandler {
    defaultOptions: KoLiteActivityDefaultOptions
}

interface KnockoutBindingHandlers {
    activity: KoLiteActivityBindingHandler;
}

interface JQuery {
    activity: KoLiteActivity;
    activityEx(isLoading: boolean): JQuery;
}
