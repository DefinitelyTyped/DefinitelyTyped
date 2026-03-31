export interface DumpOptions {
    /**
     * Whether to include full stack traces in output, default false
     */
    fullStacks?: boolean;
}
export function dump(options?: DumpOptions): void;
export function init(): void;
export function setLogger(type: "info" | "warn" | "error", fn: (message?: any, ...optionalParams: any[]) => void): void;
export function resetLoggers(): void;
