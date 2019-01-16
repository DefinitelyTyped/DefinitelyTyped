// Type definitions for iopipe__iopipe 1.12
// Project: https://github.com/iopipe/iopipe (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
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

    type FunctionWrapper = (handler: any) => void;
}

export = iopipe;
