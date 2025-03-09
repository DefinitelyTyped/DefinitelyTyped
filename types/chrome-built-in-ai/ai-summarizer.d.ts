interface AISummarizerFactory {
    create: (options?: AISummarizerCreateOptions) => Promise<AISummarizer>;
    availability: (
        options?: AISummarizerCreateCoreOptions,
    ) => Promise<AIAvailability>;
    capabilities: () => Promise<AISummarizerCapabilities>;
}

interface AISummarizer extends AIDestroyable {
    summarize: (
        input: string,
        options?: AISummarizerSummarizeOptions,
    ) => Promise<string>;
    summarizeStreaming: (
        input: string,
        options?: AISummarizerSummarizeOptions,
    ) => ReadableStream<string> & AIReadableStream<string>;

    readonly sharedContext: string;
    readonly type: AISummarizerType;
    readonly format: AISummarizerFormat;
    readonly length: AISummarizerLength;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
    readonly expectedContextLanguages?: ReadonlyArray<string>;
    readonly outputLanguage?: string;

    measureInputUsage: (
        input: string,
        options?: AISummarizerSummarizeOptions,
    ) => Promise<number>;
    readonly inputQuota: number;
}

interface AISummarizerCreateCoreOptions {
    type?: AISummarizerType;
    format?: AISummarizerFormat;
    length?: AISummarizerLength;

    expectedInputLanguages?: Array<string>;
    expectedContextLanguages?: Array<string>;
    outputLanguage?: string;
}

interface AISummarizerCreateOptions extends AISummarizerCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;

    sharedContext?: string;
}

interface AISummarizerSummarizeOptions {
    signal?: AbortSignal;
    context?: string;
}

type AISummarizerType = "tl;dr" | "teaser" | "key-points" | "headline";

type AISummarizerFormat = "plain-text" | "markdown";

type AISummarizerLength = "short" | "medium" | "long";

interface AISummarizerCapabilities {
    available: AICapability;
    languageAvailable: (targetLanguage: string) => AICapability;
    createOptionsAvailable: (options: AISummarizerCreateOptions) => AICapability;
}
