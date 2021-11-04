// Type definitions for wtfnode 0.7
// Project: https://github.com/myndzi/wtfnode
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function dump(): void;
export function init(): void;
export function setLogger(type: 'info' | 'warn' | 'error', fn: (message?: any, ...optionalParams: any[]) => void): void;
export function resetLoggers(): void;
