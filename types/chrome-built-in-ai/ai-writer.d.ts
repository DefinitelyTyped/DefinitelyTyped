interface AIWriterFactory {
    create: (options?: AIWriterCreateOptions) => Promise<AIWriter>;
    availability: (options?: AIWriterCreateCoreOptions) => Promise<AIAvailability>;
}

interface AIWriter extends AIDestroyable {
    write: (writingTask: string, options?: AIWriterWriteOptions) => Promise<string>;
    writeStreaming: (
        writingTask: string,
        options?: AIWriterWriteOptions,
    ) => ReadableStream<string> & AIReadableStream<string>;

    readonly sharedContext: string;
    readonly tone: AIWriterTone;
    readonly format: AIWriterFormat;
    readonly length: AIWriterLength;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
    readonly expectedContextLanguages?: ReadonlyArray<string>;
    readonly outputLanguage?: string;

    measureInputUsage: (input: string, options?: AIWriterWriteOptions) => Promise<number>;
    readonly inputQuota: number;
}

interface AIWriterCreateCoreOptions {
    tone?: AIWriterTone;
    format?: AIWriterFormat;
    length?: AIWriterLength;

    expectedInputLanguages?: Array<string>;
    expectedContextLanguages?: Array<string>;
    outputLanguage?: string;
}

interface AIWriterCreateOptions extends AIWriterCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;

    sharedContext?: string;
}

interface AIWriterWriteOptions {
    context?: string;
    signal?: AbortSignal;
}

type AIWriterTone = "formal" | "neutral" | "casual";

type AIWriterFormat = "plain-text" | "markdown";

type AIWriterLength = "short" | "medium" | "long";
