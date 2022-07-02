export let level: number;
export let padding: string;
export function error(message: string): void;
export function title(title: string, comment?: string): void;
export function tabbed(message: string, success?: boolean): void;
export function success(message: string): void;
export function fail(message: string): void;
export function space(): void;
export function debugError(target: string, stack: string): void;
