// Type definitions for iopipe 1.6
// Project: https://github.com/iopipe/the-meta-package#readme
// Definitions by: Javon Harper <https://github.com/javonharper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LibraryConfig {
    debug?: boolean;
    token?: string;
    networkTimeout?: number;
    timeoutWindow?: number;
}

type FunctionWrapper = (wrappedFunction: any) => void;

declare module "@iopipe/iopipe" {
    namespace mark {
        function start(label: string): void;
        function end(label: string): void;
    }

    function label(label: string): void;
    function metric(label: string, number: number): void;

    export default function iopipe(config?: LibraryConfig): FunctionWrapper;
}

declare module "@iopipe/core" {
    namespace mark {
        function start(label: string): void;
        function end(label: string): void;
    }

    function label(label: string): void;
    function metric(label: string, number: number): void;

    export default function iopipe(config?: LibraryConfig): FunctionWrapper;
}
