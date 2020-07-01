// Type definitions for signal-exit 3.0
// Project: https://github.com/tapjs/signal-exit
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = signalExit;

declare function signalExit(
    callback: (code: number | null, signal: signalExit.Signal | null) => void,
    options?: signalExit.Options
): () => void;

declare namespace signalExit {
    function load(): void;
    function unload(): void;
    function signals(): Signal[];

    type Signal = 'SIGABRT' | 'SIGALRM' | 'SIGHUP' | 'SIGINT' | 'SIGTERM' | string;

    interface Options {
        alwaysLast?: boolean;
    }
}
