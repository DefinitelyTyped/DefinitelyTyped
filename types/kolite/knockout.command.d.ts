// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="knockout" />


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

// when not AMD, add to ko object
interface KnockoutStatic {
    command(options: KoLiteCommandOptions): KoliteCommand;
    asyncCommand(options: KoLiteCommandOptions): KoliteAsyncCommand;
} 

// when using AMD, it is exported
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

// Ambient declarations for typescript+requirejs
declare var kocommand: KnockoutCommandStatic;
declare module 'kocommand'{
    export = kocommand;
}

