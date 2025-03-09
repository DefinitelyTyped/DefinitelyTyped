(async function() {
    window.ai.summarizer; // $ExpectType AISummarizerFactory

    /**
     * Create a summarizer
     */
    const model = await window.ai.summarizer.create();
    model; // $ExpectType AISummarizer

    /**
     * Summarize
     */
    const result = await model.summarize("A simple paragraph.");
    result; // $ExpectType string

    /**
     * Summarize streaming
     */
    const streamResult = await model.summarizeStreaming("A simple paragraph.");
    for await (const chunk of streamResult) {
        chunk; // $ExpectType string
    }

    window.ai.summarizer.availability(); // $ExpectType Promise<AIAvailability>
    window.ai.summarizer.capabilities(); // $ExpectType Promise<AISummarizerCapabilities>
})();
