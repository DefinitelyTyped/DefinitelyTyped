// Type definitions for bristol-sentry 0.0
// Project: https://github.com/jeffijoe/bristol-sentry#readme
// Definitions by: Elliott Campbell <https://github.com/ElliottCampbellJHA>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as raven from 'raven';

interface FormattedLog {
    message: string;
    extra: ReadonlyArray<object>;
    error?: Error;
}

interface SentryConfig {
    client?: {} | raven.Client;
}

export = makeSentryTarget;

declare function makeSentryTarget(config: SentryConfig): () => void;

declare namespace makeSentryTarget {
    function formatter(opts: object, severity: string, date: Date, elems: ReadonlyArray<any>): FormattedLog;
}
