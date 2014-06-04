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
    activityEx(isLoading: boolean): JQuery;
}


// DirtyFlag /////////////////////////////////////////////

interface DirtyFlag {
    isDirty: KnockoutComputed<boolean>;
    new (objectToTrack: any, isInitiallyDirty?: boolean, hashFunction?: () => any);
    reset(): void;
}

interface KnockoutStatic {
    DirtyFlag: DirtyFlag;
}


// Command /////////////////////////////////////////////

interface KoliteCommand {
    canExecute: KnockoutComputed<boolean>;
    execute(...args: any[]): any;
}

interface KoliteAsyncCommand extends KoliteCommand {
    isExecuting: KnockoutObservable<boolean>;
}

interface KoLiteCommandOptions {
    execute?: any;
    canExecute?: (isExecuting: boolean) => any;
}

interface KnockoutStatic {
    command(options: KoLiteCommandOptions): KoliteCommand;
    asyncCommand(optons: KoLiteCommandOptions): KoliteAsyncCommand;
}

interface KnockoutUtils {
    wrapAccessor(accessor): Function;
}

interface KnockoutBindingHandlers {
    command: KnockoutBindingHandler;
}