// Type definitions for datadog-winston 1.0
// Project: https://https://github.com/itsfadnis/datadog-winston
// Definitions by: Matt Hintzke <https://github.com/mhintzke13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as Transport from "winston-transport";

export interface DataDogTransportOptions extends Transport.TransportStreamOptions {
    apiKey: string;
    hostname: string;
    service: string;
    ddsource: string;
    ddtags: string;
}

export class DataDogTransport extends Transport {
    constructor(options?: DataDogTransportOptions);

    log?(info: any, next: () => void): void;
}
