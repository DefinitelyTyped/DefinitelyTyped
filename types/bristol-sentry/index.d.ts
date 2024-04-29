import * as raven from "raven";

interface FormattedLog {
    message: string;
    extra: readonly object[];
    error?: Error | undefined;
}

interface SentryConfig {
    client?: {} | raven.Client | undefined;
}

export = makeSentryTarget;

declare function makeSentryTarget(config: SentryConfig): () => void;

declare namespace makeSentryTarget {
    function formatter(opts: object, severity: string, date: Date, elems: readonly any[]): FormattedLog;
}
