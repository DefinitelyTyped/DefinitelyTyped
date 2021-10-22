// Type definitions for datadog-winston 1.0
// Project: https://github.com/itsfadnis/datadog-winston
// Definitions by: Matt Hintzke <https://github.com/mhintzke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import TransportStream = require("winston-transport");

declare namespace DatadogWinston {
    interface DatadogTransportOptions extends TransportStream.TransportStreamOptions {
        apiKey: string;
        hostname?: string | undefined;
        service?: string | undefined;
        ddsource?: string | undefined;
        ddtags?: string | undefined;
        intakeRegion?: string | undefined;
    }
}

declare class DatadogWinston extends TransportStream {
    constructor(options: DatadogWinston.DatadogTransportOptions);

    log?(info: any, next: () => void): void;
}

export = DatadogWinston;
