/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
declare function warning(condition: any, format: string, ...args: any[]): string;

declare namespace warning {}

export = warning;
