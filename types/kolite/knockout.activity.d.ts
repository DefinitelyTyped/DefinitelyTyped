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
    segments?: number | undefined;
    space?: number | undefined;
    length?: number | undefined;
    width?: number | undefined;
    speed?: number | undefined;
    align?: string | undefined;
    valign?: string | undefined;
    padding?: number | undefined;
}

interface KoLiteActivity {
    (options: KoLiteActivityOptions): JQuery;
    defaults: KoLiteActivityOptions;
    getOpacity(options: { steps?: number | undefined; segments?: number | undefined; opacity?: number | undefined; }, i: number): number;
}

interface KoLiteActivityDefaultOptions {
    activityClass?: string | undefined,
    container?: string | undefined,
    inactiveClass?: string | undefined
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
