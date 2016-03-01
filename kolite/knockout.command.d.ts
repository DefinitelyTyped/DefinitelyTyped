// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />


// Command /////////////////////////////////////////////

interface KoliteCommand {
    canExecute: KnockoutComputed<boolean>;
    execute(...args: any[]): any;
}

interface KoliteAsyncCommand extends KoliteCommand {
    isExecuting: KnockoutObservable<boolean>;
}

interface KoLiteCommandOptions {
    execute(...args: any[]): any;
    canExecute?: (isExecuting: boolean) => any;
}

interface KnockoutCommandStatic {
    command(options: KoLiteCommandOptions): KoliteCommand;
    asyncCommand(options: KoLiteCommandOptions): KoliteAsyncCommand;
}

interface KnockoutUtils {
    wrapAccessor(accessor: any): Function;
}

interface KnockoutBindingHandlers {
    command: KnockoutBindingHandler;
}

declare var kocommand: KnockoutCommandStatic;
declare module 'kocommand'{
    export = kocommand;
}

