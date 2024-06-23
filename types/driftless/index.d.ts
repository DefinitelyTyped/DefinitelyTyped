export function setDriftlessTimeout(
    callback: ((...args: any[]) => void) | string,
    delayMs: number,
    ...params: any[]
): number;

export function setDriftlessInterval(
    callback: ((...args: any[]) => void) | string,
    delayMs: number,
    ...params: any[]
): number;

export function clearDriftless(
    id: number,
    options?: {
        customClearTimeout?: ((...args: any[]) => void) | undefined;
    },
): void;
