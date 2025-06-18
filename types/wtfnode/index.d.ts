export function dump(): void;
export function init(): void;
export function setLogger(type: "info" | "warn" | "error", fn: (message?: any, ...optionalParams: any[]) => void): void;
export function resetLoggers(): void;
