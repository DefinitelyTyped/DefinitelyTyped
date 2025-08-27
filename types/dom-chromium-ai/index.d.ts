// Shared infrastructure
// https://webmachinelearning.github.io/writing-assistance-apis/#supporting

interface CreateMonitor extends EventTarget {
    ondownloadprogress: ((this: CreateMonitor, ev: ProgressEvent) => any) | null;

    addEventListener<K extends keyof CreateMonitorEventMap>(
        type: K,
        listener: (this: CreateMonitor, ev: CreateMonitorEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof CreateMonitorEventMap>(
        type: K,
        listener: (this: CreateMonitor, ev: CreateMonitorEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

interface CreateMonitorEventMap {
    downloadprogress: ProgressEvent;
}

type CreateMonitorCallback = (monitor: CreateMonitor) => void;

type Availability = "unavailable" | "downloadable" | "downloading" | "available";

interface DestroyableModel {
    destroy(): void;
}

// Prompt API
// https://github.com/webmachinelearning/prompt-api?tab=readme-ov-file#full-api-surface-in-web-idl

declare abstract class LanguageModel extends EventTarget implements DestroyableModel {
    static create(options?: LanguageModelCreateOptions): Promise<LanguageModel>;
    static availability(options?: LanguageModelCreateCoreOptions): Promise<Availability>;
    static params(): Promise<LanguageModelParams>;

    prompt(input: LanguageModelPrompt, options?: LanguageModelPromptOptions): Promise<string>;

    promptStreaming(input: LanguageModelPrompt, options?: LanguageModelPromptOptions): ReadableStream<string>;

    append(input: LanguageModelPrompt, options?: LanguageModelAppendOptions): Promise<undefined>;

    measureInputUsage(input: LanguageModelPrompt, options?: LanguageModelPromptOptions): Promise<number>;

    readonly inputUsage: number;
    readonly inputQuota: number;

    onquotaoverflow: ((this: LanguageModel, ev: Event) => any) | null;

    addEventListener<K extends keyof LanguageModelEventMap>(
        type: K,
        listener: (this: LanguageModel, ev: LanguageModelEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof LanguageModelEventMap>(
        type: K,
        listener: (this: LanguageModel, ev: LanguageModelEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;

    readonly topK: number;
    readonly temperature: number;

    clone(options?: LanguageModelCloneOptions): Promise<LanguageModel>;
    destroy(): undefined;
}

interface LanguageModelEventMap {
    quotaoverflow: Event;
}

interface LanguageModelParams {
    readonly defaultTopK: number;
    readonly maxTopK: number;
    readonly defaultTemperature: number;
    readonly maxTemperature: number;
}

interface LanguageModelCreateCoreOptions {
    topK?: number;
    temperature?: number;

    expectedInputs?: LanguageModelExpected[];
    expectedOutputs?: LanguageModelExpected[];
    tools?: LanguageModelTool[];
}

interface LanguageModelCreateOptions extends LanguageModelCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: CreateMonitorCallback;

    initialPrompts?:
        | [LanguageModelSystemMessage, ...LanguageModelMessage[]]
        | LanguageModelMessage[];
}

interface LanguageModelPromptOptions {
    responseConstraint?: Record<string, unknown>;
    omitResponseConstraintInput?: boolean;
    signal?: AbortSignal;
}

interface LanguageModelAppendOptions {
    signal?: AbortSignal;
}

interface LanguageModelCloneOptions {
    signal?: AbortSignal;
}

interface LanguageModelExpected {
    type: LanguageModelMessageType;
    languages?: string[];
}

interface LanguageModelTool {
    name: string;
    description: string;
    inputSchema: object;
    execute: LanguageModelToolFunction;
}

interface LanguageModelToolFunction {
    (...args: any[]): Promise<string>;
}

type LanguageModelPrompt = LanguageModelMessage[] | string;

interface LanguageModelMessage {
    role: LanguageModelMessageRole;
    content: LanguageModelMessageContent[] | string;
    prefix?: boolean;
}

// Not in IDL, split up here for enforcing the system message as the first element
interface LanguageModelSystemMessage {
    role: LanguageModelSystemMessageRole;
    content: LanguageModelMessageContent[] | string;
}

interface LanguageModelMessageContent {
    type: LanguageModelMessageType;
    value: LanguageModelMessageValue;
}

type LanguageModelMessageRole = "user" | "assistant";
// Not in IDL, split up here for enforcing the system message as the first element
type LanguageModelSystemMessageRole = "system";

type LanguageModelMessageType = "text" | "image" | "audio";

type LanguageModelMessageValue = ImageBitmapSource | AudioBuffer | BufferSource | string;

// Writing Assistance APIs
// https://webmachinelearning.github.io/writing-assistance-apis/#idl-index

declare abstract class Summarizer implements DestroyableModel {
    static create(options?: SummarizerCreateOptions): Promise<Summarizer>;
    static availability(options?: SummarizerCreateCoreOptions): Promise<Availability>;

    summarize(input: string, options?: SummarizerSummarizeOptions): Promise<string>;
    summarizeStreaming(input: string, options?: SummarizerSummarizeOptions): ReadableStream<string>;

    readonly sharedContext: string;
    readonly type: SummarizerType;
    readonly format: SummarizerFormat;
    readonly length: SummarizerLength;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
    readonly expectedContextLanguages?: ReadonlyArray<string>;
    readonly outputLanguage?: string;

    measureInputUsage(input: string, options?: SummarizerSummarizeOptions): Promise<number>;

    readonly inputQuota: number;

    destroy(): void;
}

interface SummarizerCreateCoreOptions {
    type?: SummarizerType;
    format?: SummarizerFormat;
    length?: SummarizerLength;

    expectedInputLanguages?: ReadonlyArray<string>;
    expectedContextLanguages?: ReadonlyArray<string>;
    outputLanguage?: string;
}

interface SummarizerCreateOptions extends SummarizerCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: CreateMonitorCallback;

    sharedContext?: string;
}

interface SummarizerSummarizeOptions {
    signal?: AbortSignal;
    context?: string;
}

type SummarizerType = "tldr" | "teaser" | "key-points" | "headline";
type SummarizerFormat = "plain-text" | "markdown";
type SummarizerLength = "short" | "medium" | "long";

declare abstract class Writer implements DestroyableModel {
    static create(options?: WriterCreateOptions): Promise<Writer>;
    static availability(options?: WriterCreateCoreOptions): Promise<Availability>;

    write(input: string, options?: WriterWriteOptions): Promise<string>;
    writeStreaming(input: string, options?: WriterWriteOptions): ReadableStream<string>;

    readonly sharedContext?: string;
    readonly tone: WriterTone;
    readonly format: WriterFormat;
    readonly length: WriterLength;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
    readonly expectedContextLanguages?: ReadonlyArray<string>;
    readonly outputLanguage?: string;

    measureInputUsage(input: string, options?: WriterWriteOptions): Promise<number>;

    readonly inputQuota: number;

    destroy(): void;
}

interface WriterCreateCoreOptions {
    tone?: WriterTone;
    format?: WriterFormat;
    length?: WriterLength;

    expectedInputLanguages?: string[];
    expectedContextLanguages?: string[];
    outputLanguage?: string;
}

interface WriterCreateOptions extends WriterCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: CreateMonitorCallback;

    sharedContext?: string;
}

interface WriterWriteOptions {
    context?: string;
    signal?: AbortSignal;
}

type WriterTone = "formal" | "neutral" | "casual";
type WriterFormat = "plain-text" | "markdown";
type WriterLength = "short" | "medium" | "long";

declare abstract class Rewriter implements DestroyableModel {
    static create(options?: RewriterCreateOptions): Promise<Rewriter>;
    static availability(options?: RewriterCreateCoreOptions): Promise<Availability>;

    rewrite(input: string, options?: RewriterRewriteOptions): Promise<string>;
    rewriteStreaming(input: string, options?: RewriterRewriteOptions): ReadableStream<string>;

    readonly sharedContext: string;
    readonly tone: RewriterTone;
    readonly format: RewriterFormat;
    readonly length: RewriterLength;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
    readonly expectedContextLanguages?: ReadonlyArray<string>;
    readonly outputLanguage?: string;

    measureInputUsage(input: string, options?: RewriterRewriteOptions): Promise<number>;

    readonly inputQuota: number;

    destroy(): void;
}

interface RewriterCreateCoreOptions {
    tone?: RewriterTone;
    format?: RewriterFormat;
    length?: RewriterLength;

    expectedInputLanguages?: ReadonlyArray<string>;
    expectedContextLanguages?: ReadonlyArray<string>;
    outputLanguage?: string;
}

interface RewriterCreateOptions extends RewriterCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: CreateMonitorCallback;

    sharedContext?: string;
}

interface RewriterRewriteOptions {
    context?: string;
    signal?: AbortSignal;
}

type RewriterTone = "as-is" | "more-formal" | "more-casual";
type RewriterFormat = "as-is" | "plain-text" | "markdown";
type RewriterLength = "as-is" | "shorter" | "longer";

// Translator and Language Detector APIs
// https://webmachinelearning.github.io/translation-api/#idl-index

declare abstract class Translator implements DestroyableModel {
    static create(options: TranslatorCreateOptions): Promise<Translator>;
    static availability(options: TranslatorCreateCoreOptions): Promise<Availability>;

    translate(input: string, options?: TranslatorTranslateOptions): Promise<string>;
    translateStreaming(input: string, options?: TranslatorTranslateOptions): ReadableStream<string>;

    readonly sourceLanguage: string;
    readonly targetLanguage: string;

    measureInputUsage(input: string, options?: TranslatorTranslateOptions): Promise<number>;

    readonly inputQuota: number;

    destroy(): void;
}

interface TranslatorCreateCoreOptions {
    sourceLanguage: string;
    targetLanguage: string;
}

interface TranslatorCreateOptions extends TranslatorCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: CreateMonitorCallback;
}

interface TranslatorTranslateOptions {
    signal?: AbortSignal;
}

declare abstract class LanguageDetector implements DestroyableModel {
    static create(options?: LanguageDetectorCreateOptions): Promise<LanguageDetector>;
    static availability(options?: LanguageDetectorCreateCoreOptions): Promise<Availability>;

    detect(input: string, options?: LanguageDetectorDetectOptions): Promise<LanguageDetectionResult[]>;

    readonly expectedInputLanguages: ReadonlyArray<string>;

    measureInputUsage(input: string, options?: LanguageDetectorDetectOptions): Promise<number>;

    readonly inputQuota: number;

    destroy(): void;
}

interface LanguageDetectorCreateCoreOptions {
    expectedInputLanguages?: string[];
}

interface LanguageDetectorCreateOptions extends LanguageDetectorCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: CreateMonitorCallback;
}

interface LanguageDetectorDetectOptions {
    signal?: AbortSignal;
}

interface LanguageDetectionResult {
    detectedLanguage?: string;
    confidence?: number;
}
