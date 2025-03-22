(async function() {
    window.ai.languageDetector; // $ExpectType AILanguageDetectorFactory

    /**
     * Create a language detector
     */
    const model = await window.ai.languageDetector.create();
    model; // $ExpectType AILanguageDetector

    /**
     * Detect a string
     */
    const result = await model.detect("Hello World");
    result; // $ExpectType LanguageDetectionResult[]

    /**
     * Check detector's availability and capabilities
     */
    window.ai.languageDetector.availability(); // $ExpectType Promise<AIAvailability>
    window.ai.languageDetector.capabilities(); // $ExpectType Promise<AILanguageDetectorCapabilities>
})();
