// Type definitions for sd-notify 2.8
// Project: https://github.com/systemd/node-sd-notify#readme
// Definitions by: Jan Beseda <https://github.com/Cheprer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7

declare namespace SdNotify {
    type JournalPrint = (args: string[]) => void;

    function ready(): void;
    /**
     * @param interval milliseconds
     */
    function startWatchdogMode(interval: number): void;
    function stopWatchdogMode(): void;
    /**
     * @param text status string to systemd, which will append to the service's log
     */
    function sendStatus(text: string): void;
    const journalPrint: JournalPrint;
    interface Log {
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

    // internal functions

    function stopping(pid: number): void;
    function watchdog(): void;

    /**
     * Check if the process was called by systemd with Watchdog mode enabled
     * @returns the amount of milliseconds watchdog has been set to, or 0 if it has not been set
     */
    function watchdogInterval(): number;

    /**
     * Unwrapped sendStatus. Sends raw string without prepending `STATUS=` and appending new line char `\n`
     */
    function sendState(args: string[]): void;
}

export = SdNotify;
