(async function() {
    window.ai.translator; // $ExpectType AITranslatorFactory

    /**
     * Create a translator
     */
    const options: AITranslatorCreateOptions = {
        sourceLanguage: "en",
        targetLanguage: "ja",
    };
    const model = await window.ai.translator.create(options);
    model; // $ExpectType AITranslator

    /**
     * Translate
     */
    const result = await model.translate("Good morning!");
    result; // $ExpectType string

    /**
     * Translate streaming
     */
    const streamResult = await model.translateStreaming("Good morning!");
    for await (const chunk of streamResult) {
        chunk; // $ExpectType string
    }

    window.ai.translator.availability(options); // $ExpectType Promise<AIAvailability>
    window.ai.translator.capabilities(); // $ExpectType Promise<AITranslatorCapabilities>
})();
