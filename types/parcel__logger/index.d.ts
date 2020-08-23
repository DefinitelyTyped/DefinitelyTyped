// Type definitions for @parcel/logger 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LogEvent } from 'parcel__core';
import { Diagnostic, Diagnostifiable } from 'parcel__diagnostic';

export class Logger {
    onLog(cb: (event: LogEvent) => unknown): { dispose(): unknown; };
    verbose(diagnostic: Diagnostic | Diagnostic[]): void;
    info(diagnostic: Diagnostic | Diagnostic[]): void;
    log(diagnostic: Diagnostic | Diagnostic[]): void;
    warn(diagnostic: Diagnostic | Diagnostic[]): void;
    error(input: Diagnostifiable, realOrigin?: string): void;
    progress(message: string): void;
}

declare const logger: Logger;

export default logger;