// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="jquery" />
/// <reference types="knockout" />

// Command /////////////////////////////////////////////

interface KoliteCommand {
    // canExecute: ko.Computed<boolean>;
    execute(...args: any[]): any;
}

interface KoliteAsyncCommand extends KoliteCommand {
    isExecuting: ko.Observable<boolean>;
}

interface KoLiteCommandOptions {
    execute(...args: any[]): any;
    canExecute?: (isExecuting: boolean) => any;
}

// when not AMD, add to ko object
declare namespace ko {
    function command(options: KoLiteCommandOptions): KoliteCommand;
    function asyncCommand(options: KoLiteCommandOptions): KoliteAsyncCommand;
}

// when using AMD, it is exported
interface KnockoutCommandStatic {
    command(options: KoLiteCommandOptions): KoliteCommand;
    asyncCommand(options: KoLiteCommandOptions): KoliteAsyncCommand;
}

declare namespace ko {
    namespace utils {
        function wrapAccessor(accessor: any): Function;
    }

    interface BindingHandlers {
        command: BindingHandler;
    }
}

// Ambient declarations for typescript+requirejs
declare var kocommand: KnockoutCommandStatic;
declare module 'kocommand' {
    export = kocommand;
}
