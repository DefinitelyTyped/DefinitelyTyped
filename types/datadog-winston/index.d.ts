// Type definitions for datadog-winston 1.0
// Project: https://github.com/itsfadnis/datadog-winston
// Definitions by: Matt Hintzke <https://github.com/mhintzke13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as Transport from "winston-transport";

declare namespace DatadogWinston {
    interface DatadogTransportOptions extends Transport.TransportStreamOptions {
        apiKey: string;
        hostname?: string;
        service?: string;
        ddsource?: string;
        ddtags?: string;
    }
}

declare class DatadogWinston extends Transport {
    constructor(options: DatadogWinston.DatadogTransportOptions);

    log?(info: any, next: () => void): void;
}

export = DatadogWinston;
