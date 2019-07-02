// Type definitions for sumologger 1.0
// Project: https://github.com/helix-collective/node-sumologic
// Definitions by: banadiga <https://github.com/banadiga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace SumoLogger {}

declare class SumoLogger {
    constructor(collectorCode: string, opts?: object);

    replaceConsole(): void;
    restoreConsole(): void;
    augmentConsole(): void;
    log(): void;
    info(): void;
    error(): void;
    warn(): void;
}

export = SumoLogger;
