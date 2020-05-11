// Type definitions for express-correlation-id 1.2
// Project: https://github.com/toboid/express-correlation-id#readme
// Definitions by: Nate <https://github.com/natemara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler } from "express-serve-static-core";

declare const correlator: {
    (options?: { header?: string }): RequestHandler;
    getId(): string | undefined;
};

export = correlator;
