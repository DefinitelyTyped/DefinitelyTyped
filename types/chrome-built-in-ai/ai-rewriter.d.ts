interface AIRewriterFactory {
    create: (options?: AIRewriterCreateOptions) => Promise<AIRewriter>;
    availability(options?: AIRewriterCreateCoreOptions): Promise<AIAvailability>;
}

interface AIRewriter extends AIDestroyable {
    rewrite: (
        input: string,
        options?: AIRewriterRewriteOptions,
    ) => Promise<string>;
    rewriteStreaming: (
        input: string,
        options?: AIRewriterRewriteOptions,
    ) => ReadableStream<string> & AIReadableStream<string>;

    readonly sharedContext: string;
    readonly tone: AIRewriterTone;
    readonly format: AIRewriterFormat;
    readonly length: AIRewriterLength;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
    readonly expectedContextLanguages?: ReadonlyArray<string>;
    readonly outputLanguage?: string;

    measureInputUsage: (
        input: string,
        options?: AIRewriterRewriteOptions,
    ) => Promise<number>;
    readonly inputQuota: number;
}

interface AIRewriterCreateCoreOptions {
    tone?: AIRewriterTone;
    format?: AIRewriterFormat;
    length?: AIRewriterLength;

    expectedInputLanguages?: Array<string>;
    expectedContextLanguages?: Array<string>;
    outputLanguage?: string;
}

interface AIRewriterCreateOptions extends AIRewriterCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;

    sharedContext?: string;
}

interface AIRewriterRewriteOptions {
    context?: string;
    signal?: AbortSignal;
}

type AIRewriterTone = "as-is" | "more-formal" | "more-casual";

type AIRewriterFormat = "as-is" | "plain-text" | "markdown";

type AIRewriterLength = "as-is" | "shorter" | "longer";
