(async function() {
    window.ai.writer; // $ExpectType AIWriterFactory

    /**
     * Create a writer
     */
    const model = await window.ai.writer.create();
    model; // $ExpectType AIWriter

    /**
     * Write
     */
    const result = await model.write("Write a formal email");
    result; // $ExpectType string

    /**
     * Write streaming
     */
    const streamResult = await model.writeStreaming("Write a formal email");
    for await (const chunk of streamResult) {
        chunk; // $ExpectType string
    }

    window.ai.writer.availability(); // $ExpectType Promise<AIAvailability>
})();
