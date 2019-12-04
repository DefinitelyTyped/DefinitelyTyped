import clc = require('cli-color');

declare namespace setupThrobber {
    export interface Throbber {
        start(): void;
        stop(): void;
        restart(): void;
    }
}

declare function setupThrobber(write: (str: string) => any, period: number, format?: clc.Format): setupThrobber.Throbber;
export = setupThrobber;
