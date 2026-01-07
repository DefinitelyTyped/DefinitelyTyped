declare function isTypedArray(object: unknown): boolean;

declare function createCanvasElement(): HTMLCanvasElement;

declare function setConsoleFunction(
    fn: (type: "log" | "warn" | "error", message: string, ...params: unknown[]) => void,
): void;

declare function getConsoleFunction(): (type: "log" | "warn" | "error", message: string, ...params: unknown[]) => void;

declare function log(...params: unknown[]): void;

declare function warn(...params: unknown[]): void;

declare function error(...params: unknown[]): void;

declare function warnOnce(...params: unknown[]): void;

declare function probeAsync(gl: WebGLRenderingContext, sync: WebGLSync, interval: number): Promise<void>;

export {
    createCanvasElement,
    error,
    getConsoleFunction,
    isTypedArray,
    log,
    probeAsync,
    setConsoleFunction,
    warn,
    warnOnce,
};
