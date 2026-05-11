declare function iopipe(config?: iopipe.LibraryConfig): iopipe.FunctionWrapper;

declare namespace iopipe {
    function label(label: string): void;

    function metric(label: string, value: number): void;

    namespace mark {
        function start(label: string): void;
        function end(label: string): void;
    }

    interface LibraryConfig {
        debug?: boolean | undefined;
        token?: string | undefined;
        networkTimeout?: number | undefined;
        timeoutWindow?: number | undefined;
    }

    type FunctionWrapper = <T>(handler: T) => T;
}

export = iopipe;
