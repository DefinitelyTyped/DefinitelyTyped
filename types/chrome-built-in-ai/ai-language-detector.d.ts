interface AILanguageDetectorFactory {
    create: (options?: AILanguageDetectorCreateOptions) => Promise<AILanguageDetector>;
    availability: (options?: AILanguageDetectorCreateCoreOptions) => Promise<AIAvailability>;
    capabilities: () => Promise<AILanguageDetectorCapabilities>;
}

interface AILanguageDetector extends AIDestroyable {
    detect: (input: string, options?: AILanguageDetectorDetectOptions) => Promise<Array<LanguageDetectionResult>>;

    readonly expectedInputLanguages?: ReadonlyArray<string>;
}

interface AILanguageDetectorCreateCoreOptions {
    expectedInputLanguages?: Array<string>;
}

interface AILanguageDetectorCreateOptions extends AILanguageDetectorCreateCoreOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;
}

interface AILanguageDetectorDetectOptions {
    signal?: AbortSignal;
}

interface LanguageDetectionResult {
    detectedLanguage: string;
    confidence: number;
}

interface AILanguageDetectorCapabilities {
    available: AICapability;
    languagePairAvailable: (targetLanguage: string) => AICapability;
}
