(async function() {
    window.ai.languageModel; // $ExpectType AILanguageModelFactory

    /**
     * Create a language model
     */
    const session = await window.ai.languageModel.create();
    session; // $ExpectType AILanguageModel

    /**
     * Prompt
     */
    const result = await session.prompt("What is Chrome built-in AI?");
    result; // $ExpectType string

    /**
     * Prompt streaming
     */
    const streamResult = await session.promptStreaming("What is Chrome built-in AI?");
    for await (const chunk of streamResult) {
        chunk; // $ExpectType string
    }

    window.ai.languageModel.availability(); // $ExpectType Promise<AIAvailability>
    window.ai.languageModel.params(); // $ExpectType Promise<AILanguageModelParams | undefined>
    window.ai.languageModel.capabilities(); // $ExpectType Promise<AILanguageModelCapabilities>
})();
