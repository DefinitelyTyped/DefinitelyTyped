// -------- Shared Infrastructure --------
export namespace AI {
    /**
     * Represents the availability status of an AI model or feature.
     */
    enum Availability {
        Unavailable = "unavailable",
        Downloadable = "downloadable",
        Downloading = "downloading",
        Available = "available",
    }

    /**
     * A mixin interface for models that can be destroyed to free up resources.
     */
    interface DestroyableModel {
        /**
         * Destroys the model instance, releasing any associated resources.
         */
        destroy(): void;
    }

    /**
     * An EventTarget that monitors the download progress of a model.
     */
    interface CreateMonitor extends EventTarget {
        /**
         * Event handler for download progress events.
         */
        ondownloadprogress: ((this: CreateMonitor, ev: ProgressEvent) => any) | null;
    }

    /**
     * Callback function to receive a CreateMonitor instance.
     * @param monitor The CreateMonitor instance to observe download progress.
     */
    type CreateMonitorCallback = (monitor: CreateMonitor) => void;

    // Note: Types like ImageBitmapSource, AudioBuffer, BufferSource, AbortSignal,
    // ReadableStream, EventTarget are assumed to be globally available
    // (e.g., from lib.dom.d.ts in a TypeScript project).
}


// -------- Prompt API --------
export namespace AIPrompt {
    /**
     * Represents the possible types of content in a language model message.
     * It can be an ImageBitmapSource, AudioBuffer, BufferSource (e.g., for binary data), or a string.
     */
    type LanguageModelMessageContentValue =
        | ImageBitmapSource
        | AudioBuffer
        | BufferSource
        | string;

    /**
     * Defines the role of the author of a message in a language model prompt.
     */
    enum LanguageModelMessageRole {
        System = "system", // Instructions or context for the model
        User = "user",     // Input from the end-user
        Assistant = "assistant", // Responses from the model
    }

    /**
     * Defines the type of content in a language model message part.
     */
    enum LanguageModelMessageType {
        Text = "text",
        Image = "image",
        Audio = "audio",
    }

    /**
     * Represents a single piece of content within a language model message.
     */
    export interface LanguageModelMessageContent {
        type: LanguageModelMessageType;
        content: LanguageModelMessageContentValue;
    }

    /**
     * Represents a complete message in a language model prompt, including its role and content parts.
     */
    export interface LanguageModelMessage {
        role: LanguageModelMessageRole;
        content: LanguageModelMessageContent[];
    }

    /**
     * A shorthand for a simple text message within a language model prompt.
     * Equivalent to `{ role: providedValue.role, content: [{ type: "text", content: providedValue.content }] }`.
     */
    export interface LanguageModelMessageShorthand {
        role: LanguageModelMessageRole;
        content: string; // Represents the text content
    }

    /**
     * Defines the input for a language model's prompt method.
     * It can be a sequence of canonical messages, a sequence of shorthand messages,
     * or a single string (shorthand for a user message with text content).
     */
    export type LanguageModelPrompt =
        | LanguageModelMessage[]
        | LanguageModelMessageShorthand[]
        | string; // Shorthand for [{ role: "user", content: [{ type: "text", content: providedValue }] }]

    /**
     * Defines the initial prompts for creating a language model.
     * Omits the single string shorthand available in LanguageModelPrompt.
     */
    export type LanguageModelInitialPrompts =
        | LanguageModelMessage[]
        | LanguageModelMessageShorthand[];

    /**
     * Describes an expected type of input for the language model, including content type and languages.
     */
    export interface LanguageModelExpectedInput {
        type: LanguageModelMessageType;
        languages: string[]; // sequence<DOMString>
    }

    /**
     * Core options for creating or checking availability of a LanguageModel.
     */
    export interface LanguageModelCreateCoreOptions {
        topK?: number; // Unrestricted double, allowing +Infinity
        temperature?: number; // Unrestricted double, allowing +Infinity
        expectedInputs?: LanguageModelExpectedInput[];
    }

    /**
     * Options for creating a LanguageModel instance.
     */
    export interface LanguageModelCreateOptions extends LanguageModelCreateCoreOptions {
        signal?: AbortSignal;
        monitor?: AI.CreateMonitorCallback; // Unified to use the non-prefixed CreateMonitorCallback
        initialPrompts?: LanguageModelInitialPrompts;
    }

    /**
     * Options for the prompt and promptStreaming methods of a LanguageModel.
     */
    export interface LanguageModelPromptOptions {
        responseConstraint?: object; // Can be refined if the structure is known, e.g., Record<string, any>
        signal?: AbortSignal;
    }

    /**
     * Options for the append method of a LanguageModel.
     */
    export interface LanguageModelAppendOptions {
        signal?: AbortSignal;
    }

    /**
     * Options for cloning a LanguageModel instance.
     */
    export interface LanguageModelCloneOptions {
        signal?: AbortSignal;
    }

    /**
     * Parameters of a created LanguageModel instance.
     */
    export interface LanguageModelParams {
        readonly defaultTopK: number; // unsigned long
        readonly maxTopK: number; // unsigned long
        readonly defaultTemperature: number; // float
        readonly maxTemperature: number; // float
    }

    /**
     * A dictionary that can be used to construct a language model prompt,
     * typically representing a single message part.
     */
    export interface LanguageModelPromptDict {
        role?: LanguageModelMessageRole; // Defaults to "user"
        type?: LanguageModelMessageType; // Defaults to "text". Note: LanguageModelMessageContent also has a 'type'.
        content: LanguageModelMessageContent; // Required. This object itself contains 'type' and 'content' (value).
    }

    /**
     * Represents a language model instance capable of generating responses to prompts.
     */
    export interface LanguageModel extends EventTarget {
        /**
         * Generates a response from the language model based on the input prompt.
         * Throws "NotSupportedError" DOMException if role = "system" is used in certain contexts.
         */
        prompt(
            input: LanguageModelPrompt,
            options?: LanguageModelPromptOptions
        ): Promise<string>;

        /**
         * Generates a streaming response from the language model.
         * Throws "NotSupportedError" DOMException if role = "system" is used in certain contexts.
         */
        promptStreaming(
            input: LanguageModelPrompt,
            options?: LanguageModelPromptOptions
        ): ReadableStream<string>; // Assuming chunks are strings

        /**
         * Appends input to the model's internal state, without generating an immediate response.
         * Throws "NotSupportedError" DOMException if role = "system" is used in certain contexts.
         */
        append(
            input: LanguageModelPrompt,
            options?: LanguageModelAppendOptions
        ): Promise<void>; // IDL undefined return type in Promise becomes void

        /**
         * Measures the input usage (e.g., token count) for a given prompt.
         */
        measureInputUsage(
            input: LanguageModelPrompt,
            options?: LanguageModelPromptOptions
        ): Promise<number>; // double

        readonly inputUsage: number; // double
        readonly inputQuota: number; // unrestricted double
        onquotaoverflow: ((this: LanguageModel, ev: Event) => any) | null;

        readonly topK: number; // unsigned long
        readonly temperature: number; // float

        /**
         * Creates a copy of the language model instance.
         */
        clone(options?: LanguageModelCloneOptions): Promise<LanguageModel>;

        /**
         * Destroys the model instance, releasing resources.
         */
        destroy(): void;
    }

    /**
     * Represents the constructor and static methods for the LanguageModel API.
     */
    export interface LanguageModelConstructor {
        /**
         * Creates a new LanguageModel instance.
         */
        create(options?: LanguageModelCreateOptions): Promise<LanguageModel>;

        /**
         * Checks the availability of the language model.
         */
        availability(options?: LanguageModelCreateCoreOptions): Promise<AI.Availability>;

        /**
         * Retrieves parameters related to the language model.
         */
        params(): Promise<LanguageModelParams | null>;

        prototype: LanguageModel;
    }
    // In a global context, this would be available as:
    // declare var LanguageModel: LanguageModelConstructor;
}


// -------- Writing Assistance APIs --------
export namespace AIWritingAssistance {

    // ---- Summarizer ----
    export enum SummarizerType {
        TlDr = "tl;dr",
        Teaser = "teaser",
        KeyPoints = "key-points",
        Headline = "headline",
    }

    export enum SummarizerFormat {
        PlainText = "plain-text",
        Markdown = "markdown",
    }

    export enum SummarizerLength {
        Short = "short",
        Medium = "medium",
        Long = "long",
    }

    export interface SummarizerCreateCoreOptions {
        type?: SummarizerType;
        format?: SummarizerFormat;
        length?: SummarizerLength;
        expectedInputLanguages?: string[];
        expectedContextLanguages?: string[];
        outputLanguage?: string;
    }

    export interface SummarizerCreateOptions extends SummarizerCreateCoreOptions {
        signal?: AbortSignal;
        monitor?: AI.CreateMonitorCallback;
        sharedContext?: string;
    }

    export interface SummarizerSummarizeOptions {
        signal?: AbortSignal;
        context?: string;
    }

    export interface Summarizer extends AI.DestroyableModel {
        summarize(
            input: string,
            options?: SummarizerSummarizeOptions
        ): Promise<string>;

        summarizeStreaming(
            input: string,
            options?: SummarizerSummarizeOptions
        ): ReadableStream<string>;

        readonly sharedContext: string;
        readonly type: SummarizerType;
        readonly format: SummarizerFormat;
        readonly length: SummarizerLength;
        readonly expectedInputLanguages: ReadonlyArray<string> | null;
        readonly expectedContextLanguages: ReadonlyArray<string> | null;
        readonly outputLanguage: string | null;

        measureInputUsage(
            input: string,
            options?: SummarizerSummarizeOptions
        ): Promise<number>;
        readonly inputQuota: number;
    }

    export interface SummarizerConstructor {
        create(options?: SummarizerCreateOptions): Promise<Summarizer>;
        availability(options?: SummarizerCreateCoreOptions): Promise<AI.Availability>;
        prototype: Summarizer;
    }
    // declare var Summarizer: SummarizerConstructor;


    // ---- Writer ----
    export enum WriterTone {
        Formal = "formal",
        Neutral = "neutral",
        Casual = "casual",
    }

    export enum WriterFormat {
        PlainText = "plain-text",
        Markdown = "markdown",
    }

    export enum WriterLength {
        Short = "short",
        Medium = "medium",
        Long = "long",
    }

    export interface WriterCreateCoreOptions {
        tone?: WriterTone;
        format?: WriterFormat;
        length?: WriterLength;
        expectedInputLanguages?: string[];
        expectedContextLanguages?: string[];
        outputLanguage?: string;
    }

    export interface WriterCreateOptions extends WriterCreateCoreOptions {
        signal?: AbortSignal;
        monitor?: AI.CreateMonitorCallback;
        sharedContext?: string;
    }

    export interface WriterWriteOptions {
        context?: string;
        signal?: AbortSignal;
    }

    export interface Writer extends AI.DestroyableModel {
        write(
            input: string,
            options?: WriterWriteOptions
        ): Promise<string>;

        writeStreaming(
            input: string,
            options?: WriterWriteOptions
        ): ReadableStream<string>;

        readonly sharedContext: string;
        readonly tone: WriterTone;
        readonly format: WriterFormat;
        readonly length: WriterLength;
        readonly expectedInputLanguages: ReadonlyArray<string> | null;
        readonly expectedContextLanguages: ReadonlyArray<string> | null;
        readonly outputLanguage: string | null;

        measureInputUsage(
            input: string,
            options?: WriterWriteOptions
        ): Promise<number>;
        readonly inputQuota: number;
    }

    export interface WriterConstructor {
        create(options?: WriterCreateOptions): Promise<Writer>;
        availability(options?: WriterCreateCoreOptions): Promise<AI.Availability>;
        prototype: Writer;
    }
    // declare var Writer: WriterConstructor;


    // ---- Rewriter ----
    export enum RewriterTone {
        AsIs = "as-is",
        MoreFormal = "more-formal",
        MoreCasual = "more-casual",
    }

    export enum RewriterFormat {
        AsIs = "as-is",
        PlainText = "plain-text",
        Markdown = "markdown",
    }

    export enum RewriterLength {
        AsIs = "as-is",
        Shorter = "shorter",
        Longer = "longer",
    }

    export interface RewriterCreateCoreOptions {
        tone?: RewriterTone;
        format?: RewriterFormat;
        length?: RewriterLength;
        expectedInputLanguages?: string[];
        expectedContextLanguages?: string[];
        outputLanguage?: string;
    }

    export interface RewriterCreateOptions extends RewriterCreateCoreOptions {
        signal?: AbortSignal;
        monitor?: AI.CreateMonitorCallback;
        sharedContext?: string;
    }

    export interface RewriterRewriteOptions {
        context?: string;
        signal?: AbortSignal;
    }

    export interface Rewriter extends AI.DestroyableModel {
        rewrite(
            input: string,
            options?: RewriterRewriteOptions
        ): Promise<string>;

        rewriteStreaming(
            input: string,
            options?: RewriterRewriteOptions
        ): ReadableStream<string>;

        readonly sharedContext: string;
        readonly tone: RewriterTone;
        readonly format: RewriterFormat;
        readonly length: RewriterLength;
        readonly expectedInputLanguages: ReadonlyArray<string> | null;
        readonly expectedContextLanguages: ReadonlyArray<string> | null;
        readonly outputLanguage: string | null;

        measureInputUsage(
            input: string,
            options?: RewriterRewriteOptions
        ): Promise<number>;
        readonly inputQuota: number;
    }

    export interface RewriterConstructor {
        create(options?: RewriterCreateOptions): Promise<Rewriter>;
        availability(options?: RewriterCreateCoreOptions): Promise<AI.Availability>;
        prototype: Rewriter;
    }
    // declare var Rewriter: RewriterConstructor;
}


// -------- Translation API --------
export namespace AITranslation {

    // ---- Translator ----
    export interface TranslatorCreateCoreOptions {
        sourceLanguage: string; // Required
        targetLanguage: string; // Required
    }

    export interface TranslatorCreateOptions extends TranslatorCreateCoreOptions {
        signal?: AbortSignal;
        monitor?: AI.CreateMonitorCallback;
    }

    export interface TranslatorTranslateOptions {
        signal?: AbortSignal;
    }

    export interface Translator extends AI.DestroyableModel {
        translate(
            input: string,
            options?: TranslatorTranslateOptions
        ): Promise<string>;

        translateStreaming(
            input: string,
            options?: TranslatorTranslateOptions
        ): ReadableStream<string>;

        readonly sourceLanguage: string;
        readonly targetLanguage: string;

        measureInputUsage(
            input: string,
            options?: TranslatorTranslateOptions
        ): Promise<number>;
        readonly inputQuota: number;
    }

    export interface TranslatorConstructor {
        create(options: TranslatorCreateOptions): Promise<Translator>; // Options are required
        availability(options: TranslatorCreateCoreOptions): Promise<AI.Availability>; // Options are required
        prototype: Translator;
    }
    // declare var Translator: TranslatorConstructor;


    // ---- LanguageDetector ----
    export interface LanguageDetectionResult {
        detectedLanguage: string;
        confidence: number; // double
    }

    export interface LanguageDetectorCreateCoreOptions {
        expectedInputLanguages?: string[];
    }

    export interface LanguageDetectorCreateOptions extends LanguageDetectorCreateCoreOptions {
        signal?: AbortSignal;
        monitor?: AI.CreateMonitorCallback;
    }

    export interface LanguageDetectorDetectOptions {
        signal?: AbortSignal;
    }

    export interface LanguageDetector extends AI.DestroyableModel {
        detect(
            input: string,
            options?: LanguageDetectorDetectOptions
        ): Promise<LanguageDetectionResult[]>; // sequence<LanguageDetectionResult>

        readonly expectedInputLanguages: ReadonlyArray<string> | null;

        measureInputUsage(
            input: string,
            options?: LanguageDetectorDetectOptions
        ): Promise<number>;
        readonly inputQuota: number;
    }

    export interface LanguageDetectorConstructor {
        create(options?: LanguageDetectorCreateOptions): Promise<LanguageDetector>;
        availability(options?: LanguageDetectorCreateCoreOptions): Promise<AI.Availability>;
        prototype: LanguageDetector;
    }
    // declare var LanguageDetector: LanguageDetectorConstructor;
}