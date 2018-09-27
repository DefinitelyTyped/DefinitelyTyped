// Type definitions for Elastic APM Node.js Agent 1.x
// Project: https://www.elastic.co/solutions/apm
// Definitions by: Shahaed Hasan <https://github.com/shahaed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = a;

declare const a: a.Agent;

declare namespace a {
    interface Agent {
        currentTransaction: any;
        logger: any;

        start(opts?: AgentOptions): Agent;
        isStarted(): boolean;
        addFilter(filter: (payload: any) => any): void;
        setUserContext(context: Context): boolean;
        setCustomContext(context: any): boolean;
        setTag(name: string, value: string): any;
        addTags(tags: any): any;
        captureError(error: Error | string | object, options?: object, callback?: (err?: any) => any): void;
        startTransaction(name?: string, type?: string): any;
        endTransaction(result?: any): any;
        setTransactionName(name: string): any;
        startSpan(name?: string, type?: any): any;
        handleUncaughtExceptions(callback?: (err: Error) => any): any;
        flush(callback?: any): any;
        lambda(type: any, handler?: any): any;
    }

    interface AgentOptions {
        serviceName?: string;
        secretToken?: string;
        serverUrl?: string;
        verifyServerCert?: boolean;
        serviceVersion?: string;
        active?: boolean;
        instrument?: boolean;
        asyncHooks?: boolean;
        ignoreUrls?: Array<RegExp | string>;
        ignoreUserAgents?: Array<RegExp | string>;
        captureBody?: string;
        errorOnAbortedRequests?: boolean;
        abortedErrorThreshold?: number;
        transactionSampleRate?: number;
        hostname?: string;
        frameworkName?: string;
        frameworkVersion?: string;
        logLevel?: string;
        logger?: any;
        captureExceptions?: boolean;
        captureErrorLogStackTraces?: string;
        captureSpanStackTraces?: boolean;
        sourceLinesErrorAppFrames?: number;
        sourceLinesErrorLibraryFrames?: number;
        sourceLinesSpanAppFrames?: number;
        sourceLinesSpanLibraryFrames?: number;
        errorMessageMaxLength?: number;
        stackTraceLimit?: number;
        transactionMaxSpans?: number;
        flushInterval?: number;
        serverTimeout?: number;
        maxQueueSize?: number;
        filterHttpHeaders?: boolean;
        disableInstrumentations?: string;
    }

    interface Context {
        id?: string;
        username?: string;
        email?: string;
    }
}
