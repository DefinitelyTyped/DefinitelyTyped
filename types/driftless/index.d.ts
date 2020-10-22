// Type definitions for driftless 2.0
// Project: https://github.com/dbkaplun/driftless
// Definitions by: Dan Delany <https://github.com/dandelany>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        customClearTimeout?: (...args: any[]) => void;
    }
): void;
