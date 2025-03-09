(async function() {
    window.ai.rewriter; // $ExpectType AIRewriterFactory

    /**
     * Create a rewriter
     */
    const model = await window.ai.rewriter.create();
    model; // $ExpectType AIRewriter

    /**
     * Rewrite
     */
    const result = await model.rewrite("A simple paragraph.");
    result; // $ExpectType string

    /**
     * Rewrite streaming
     */
    const streamResult = await model.rewriteStreaming("A simple paragraph.");
    for await (const chunk of streamResult) {
        chunk; // $ExpectType string
    }

    window.ai.rewriter.availability(); // $ExpectType Promise<AIAvailability>
})();
