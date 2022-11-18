// Type definitions for proc-log 3.0
// Project: https://github.com/npm/proc-log#readme
// Definitions by: JDB <https://github.com/legodude17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Calls process.emit('log', 'error', ...args). The highest log level. For printing extremely serious errors that indicate something went wrong.
 */
export function error(...args: any[]): void;
/**
 * Calls process.emit('log', 'warn', ...args). A fairly high log level. Things that the user needs to be aware of, but which won't necessarily cause improper functioning of the system.
 */
export function warn(...args: any[]): void;
/**
 * Calls process.emit('log', 'notice', ...args). Notices which are important, but not necessarily dangerous or a cause for excess concern.
 */
export function notice(...args: any[]): void;
/**
 * Calls process.emit('log', 'info', ...args). Informative messages that may benefit the user, but aren't particularly important.
 */
export function info(...args: any[]): void;
/**
 * Calls process.emit('log', 'verbose', ...args). Noisy output that is more detail that most users will care about.
 */
export function verbose(...args: any[]): void;
/**
 * Calls process.emit('log', 'silly', ...args). Extremely noisy excessive logging messages that are typically only useful for debugging.
 */
export function silly(...args: any[]): void;
/**
 * Calls process.emit('log', 'http', ...args). Information about HTTP requests made and/or completed.
 */
export function http(...args: any[]): void;
/**
 * Calls process.emit('log', 'pause'). Used to tell the consumer to stop printing messages.
 */
export function pause(): void;
/**
 * Calls process.emit('log', 'resume'). Used to tell the consumer that it is ok to print messages again.
 */
export function resume(): void;
/**
 * An array of strings of all log method names.
 */
export const LEVELS: ['error', 'warn', 'notice', 'info', 'verbose', 'silly', 'http'];
export type LogLevel = 'error' | 'warn' | 'notice' | 'info' | 'verbose' | 'silly' | 'http';
