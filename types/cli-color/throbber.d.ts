declare namespace setupThrobber {
    export interface Throbber {
        start(): void;
        stop(): void;
        restart(): void;
    }

    export class Iterator {
        readonly index: number;
        readonly running: boolean;
        next(): string;
        reset(): string;
    }
}
/**
 * Writes throbber string to *write* function at given *interval*. Optionally throbber output can be formatted with given *format* function
 */
declare function setupThrobber(write: (str: string) => void, interval: number, format?: (throbber: string) => string): setupThrobber.Throbber;
export = setupThrobber;
