// Type definitions for travis-fold 0.1
// Project: https://github.com/macbre/travis-fold
// Definitions by: Andy Hanson <https://github.com/andy-ms>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function start(group: string): string;
export function end(group: string): string;
export function wrap(group: string, content: string): string;
export function pushStart(ret: string[], group: string): void;
export function pushEnd(ret: string[], group: string): void;
export function isTravis(): boolean;
