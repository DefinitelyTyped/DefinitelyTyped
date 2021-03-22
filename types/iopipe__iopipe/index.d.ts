// Type definitions for @iopipe/iopipe 1.12
// Project: https://github.com/iopipe/iopipe, https://github.com/iopipe/the-meta-package
// Definitions by: Javon Harper <https://github.com/javonharper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function iopipe(config?: iopipe.LibraryConfig): iopipe.FunctionWrapper;

declare namespace iopipe {
    function label(label: string): void;

    function metric(label: string, value: number): void;

    namespace mark {
        function start(label: string): void;
        function end(label: string): void;
    }

    interface LibraryConfig {
        debug?: boolean;
        token?: string;
        networkTimeout?: number;
        timeoutWindow?: number;
    }

    type FunctionWrapper = <T>(handler: T) => T;
}

export = iopipe;
