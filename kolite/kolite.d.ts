// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />


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

interface KnockoutBindingHandlers {
    activity: KnockoutBindingHandler;
}

interface JQuery {
    activity: KoLiteActivity;
    activityEx(isLoading: bool): JQuery;
}


// DirtyFlag /////////////////////////////////////////////

interface DirtyFlag {
    isDirty: KnockoutComputed;
    new (objectToTrack: any, isInitiallyDirty?: bool, hashFunction?: () => any);
    reset(): void;
}

interface KnockoutStatic {
    DirtyFlag: DirtyFlag;
}


// Command /////////////////////////////////////////////

interface KoliteCommand {
    canExecute: KnockoutComputed;
    execute(...args: any[]): any;
}

interface KoLiteCommandOptions {
    execute?: any;
    canExecute?: (isExecuting: bool) => any;
}

interface KnockoutStatic {
    command(options: KoLiteCommandOptions): KoliteCommand;
    asyncCommand(optons: KoLiteCommandOptions): KoliteCommand;
}

interface KnockoutUtils {
    wrapAccessor(accessor): Function;
}

interface KnockoutBindingHandlers {
    command: KnockoutBindingHandler;
}