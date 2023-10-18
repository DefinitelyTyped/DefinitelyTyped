export function start(group: string): string;
export function end(group: string): string;
export function wrap(group: string, content: string): string;
export function pushStart(ret: string[], group: string): void;
export function pushEnd(ret: string[], group: string): void;
export function isTravis(): boolean;
