export type LogLevel = "debug" | "info" | "warn" | "error" | "none";
export let Debug: (...args: any[]) => void;
export let Info: (...args: any[]) => void;
export let Warn: (...args: any[]) => void;
export let Error: (...args: any[]) => void;
export function initLogging(level?: LogLevel): void;
export function getLogging(): LogLevel;
