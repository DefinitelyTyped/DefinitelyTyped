interface AITranslatorFactory {
    create: (options: AITranslatorCreateOptions) => Promise<AITranslator>;
    availability: (options: AITranslatorCreateCoreOptions) => Promise<AIAvailability>;
    capabilities: () => Promise<AITranslatorCapabilities>;
}

interface AITranslator extends AIDestroyable {
    translate: (input: string, options?: AITranslatorTranslateOptions) => Promise<string>;
    translateStreaming: (
        input: string,
        options?: AITranslatorTranslateOptions,
    ) => ReadableStream<string> & AIReadableStream<string>;

    readonly sourceLanguage: string;
    readonly targetLanguage: string;
}

interface AITranslatorCreateCoreOptions {
    sourceLanguage: string;
    targetLanguage: string;
}

interface AITranslatorCreateOptions extends AITranslatorCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;
}

interface AITranslatorTranslateOptions {
    signal?: AbortSignal;
}

interface AITranslatorCapabilities {
    available: AICapability;
    languagePairAvailable: (sourceLanguage: string, targetLanguage: string) => AICapability;
}
