export type JournalPrint = (args: string[]) => void;

export function ready(): void;
/**
 * @param interval milliseconds
 */
export function startWatchdogMode(interval: number): void;
export function stopWatchdogMode(): void;
/**
 * @param text status string to systemd, which will append to the service's log
 */
export function sendStatus(text: string): void;
export const journalPrint: JournalPrint;
export interface Log {
    emerg: JournalPrint;
    emergency: JournalPrint;
    alert: JournalPrint;
    crit: JournalPrint;
    critical: JournalPrint;
    err: JournalPrint;
    error: JournalPrint;
    warning: JournalPrint;
    warn: JournalPrint;
    notice: JournalPrint;
    info: JournalPrint;
    debug: JournalPrint;
}
export const log: Log;

// internal functions

export function stopping(pid: number): void;
export function watchdog(): void;

/**
 * Check if the process was called by systemd with Watchdog mode enabled
 * @returns the amount of milliseconds watchdog has been set to, or 0 if it has not been set
 */
export function watchdogInterval(): number;

/**
 * Unwrapped sendStatus. Sends raw string without prepending `STATUS=` and appending new line char `\n`
 */
export function sendState(args: string[]): void;
