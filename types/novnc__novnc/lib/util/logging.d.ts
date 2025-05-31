export type LogLevel = "debug" | "info" | "warn" | "error" | "none";
export function Debug(...args: any[]): void;
export function Info(...args: any[]): void;
export function Warn(...args: any[]): void;
export function Error(...args: any[]): void;
export function initLogging(level?: LogLevel): void;
export function getLogging(): LogLevel;
