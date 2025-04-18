interface AILanguageModelFactory {
    create: (options?: AILanguageModelCreateOptions) => Promise<AILanguageModel>;
    availability: (options?: AILanguageModelCreateCoreOptions) => Promise<AIAvailability>;
    params: () => Promise<AILanguageModelParams | undefined>;
    capabilities: () => Promise<AILanguageModelCapabilities>;
}

interface AILanguageModel extends AIDestroyable {
    prompt: (input: AILanguageModelPromptInput, options?: AILanguageModelPromptOptions) => Promise<string>;
    promptStreaming: (
        input: AILanguageModelPromptInput,
        options?: AILanguageModelPromptOptions,
    ) => ReadableStream<string> & AIReadableStream<string>;

    measureInputUsage: (input: AILanguageModelPromptInput, options?: AILanguageModelPromptOptions) => Promise<number>;
    readonly inputUsage: number;
    readonly inputQuota: number;
    onquotaoverflow: (event: Event) => void;

    readonly topK: number;
    readonly temperature: number;

    readonly tokensSoFar: number;
    readonly maxTokens: number;
    readonly tokensLeft: number;

    clone: (options?: AILanguageModelCloneOptions) => Promise<AILanguageModel>;
}

interface AILanguageModelParams {
    readonly defaultTopK: number;
    readonly maxTopK: number;
    readonly defaultTemperature: number;
    readonly maxTemperature: number;
}

interface AILanguageModelCreateCoreOptions {
    topK?: number;
    temperature?: number;

    expectedInputs?: Array<AILanguageModelExpectedInput>;
}

interface AILanguageModelCreateOptions extends AILanguageModelCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;

    systemPrompt?: string;
    initialPrompts?: Array<AILanguageModelPrompt>;
}

interface AILanguageModelPromptOptions {
    responseJSONSchema?: object;
    signal?: AbortSignal;
}

interface AILanguageModelCloneOptions {
    signal?: AbortSignal;
}

interface AILanguageModelExpectedInput {
    type: AILanguageModelPromptType;
    languages?: Array<string>;
}

type AILanguageModelPromptInput = AILanguageModelPrompt | Array<AILanguageModelPrompt>;

type AILanguageModelPrompt = string | AILanguageModelPromptDict;

interface AILanguageModelPromptDict {
    role?: AILanguageModelPromptRole;
    type?: AILanguageModelPromptType;
    content: AILanguageModelPromptContent;
}

type AILanguageModelPromptRole = "system" | "user" | "assistant";

type AILanguageModelPromptType = "text" | "image" | "audio";

type AILanguageModelPromptContent = ImageBitmapSource | AudioBuffer | BufferSource | string;

interface AILanguageModelCapabilities {
    available: AICapability;
    defaultTemperature: number;
    defaultTopK: number;
    maxTemperature: number;
    maxTopK: number;
}
