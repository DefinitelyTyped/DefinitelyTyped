export = signalExit;

declare function signalExit(
    callback: (code: number | null, signal: signalExit.Signal | null) => void,
    options?: signalExit.Options,
): () => void;

declare namespace signalExit {
    function load(): void;
    function unload(): void;
    function signals(): Signal[];

    type Signal = "SIGABRT" | "SIGALRM" | "SIGHUP" | "SIGINT" | "SIGTERM" | string;

    interface Options {
        alwaysLast?: boolean | undefined;
    }
}
