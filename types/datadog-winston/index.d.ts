// Type definitions for datadog-winston 1.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Matt Hintzke <https://github.com/me>
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
