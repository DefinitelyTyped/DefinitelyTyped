import * as raven from "raven";

interface FormattedLog {
    message: string;
    extra: ReadonlyArray<object>;
    error?: Error | undefined;
}

interface SentryConfig {
    client?: {} | raven.Client | undefined;
}

export = makeSentryTarget;

declare function makeSentryTarget(config: SentryConfig): () => void;

declare namespace makeSentryTarget {
    function formatter(opts: object, severity: string, date: Date, elems: ReadonlyArray<any>): FormattedLog;
}
