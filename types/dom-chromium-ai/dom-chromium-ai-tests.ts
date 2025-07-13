async function topLevel() {
    // Language Model

    await LanguageModel.create({
        // @ts-expect-error - System prompt must be first element of the initialPrompt array.
        initialPrompts: [{ role: "user", content: "foo" }, { role: "system", content: "foo" }],
    });

    const languageModel = await LanguageModel.create({
        topK: 1,
        temperature: 0,
        expectedInputs: [{ type: "text", languages: ["de"] }],
        expectedOutputs: [{ type: "text", languages: ["de"] }],
        tools: [
            {
                name: "getWeather",
                description: "Get the weather in a location.",
                inputSchema: {
                    type: "object",
                    properties: {
                        location: {
                            type: "string",
                            description: "The city to check for the weather condition.",
                        },
                    },
                    required: ["location"],
                },
                async execute({ location }) {
                    return `The weather in ${location} is sunny.`;
                },
            },
        ],
        signal: (new AbortController()).signal,
        initialPrompts: [{ role: "system", content: "foo" }, { role: "assistant", content: "foo", prefix: true }],
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const languageModelAvailability1: Availability = await LanguageModel.availability();
    console.log(languageModelAvailability1);

    const languageModelAvailability2: Availability = await LanguageModel.availability({
        topK: 1,
        temperature: 0,
        expectedInputs: [{ type: "image" }],
        expectedOutputs: [{ type: "text", languages: ["de"] }],
    });
    console.log(languageModelAvailability2);

    const languageModelParams = await LanguageModel.params();
    console.log(
        languageModelParams.defaultTopK,
        languageModelParams.maxTopK,
        languageModelParams.defaultTemperature,
        languageModelParams.maxTemperature,
    );

    const schema = {
        type: "object",
        required: ["name"],
        additionalProperties: false,
        properties: {
            name: {
                type: "string",
            },
        },
    };

    const assistantResult1: string = await languageModel.prompt("foo", {
        signal: (new AbortController()).signal,
        responseConstraint: schema,
        omitResponseConstraintInput: true,
    });
    console.log(assistantResult1);

    const assistantResult2: string = await languageModel.prompt([{ role: "assistant", content: "foo", prefix: true }]);
    console.log(assistantResult2);

    const assistantResult3: string = await languageModel.prompt([
        { role: "assistant", content: "foo" },
        { role: "user", content: [{ type: "image", value: new Image() }] },
    ]);
    console.log(assistantResult3);

    for await (
        const chunk of languageModel.promptStreaming("foo", {
            signal: (new AbortController()).signal,
            responseConstraint: schema,
            omitResponseConstraintInput: true,
        })
    ) {
        console.log(chunk);
    }

    for await (
        const chunk of languageModel.promptStreaming([{ role: "assistant", content: "foo" }], {
            signal: (new AbortController()).signal,
        })
    ) {
        console.log(chunk);
    }

    for await (
        const chunk of languageModel.promptStreaming([
            { role: "assistant", content: "foo" },
            { role: "user", content: [{ type: "image", value: new Image() }] },
        ], { signal: (new AbortController()).signal })
    ) {
        console.log(chunk);
    }

    await languageModel.append("foo");
    await languageModel.append([{ role: "assistant", content: "foo" }]);
    await languageModel.append("foo", { signal: (new AbortController()).signal });
    await languageModel.append([{ role: "assistant", content: "foo" }], { signal: (new AbortController()).signal });

    const languageModelInputUsage1: number = await languageModel.measureInputUsage("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(languageModelInputUsage1);

    const languageModelInputUsage2: number = await languageModel.measureInputUsage([{
        role: "assistant",
        content: "foo",
    }], {
        signal: (new AbortController()).signal,
    });
    console.log(languageModelInputUsage2);

    const languageModelInputUsage3: number = await languageModel.measureInputUsage([
        { role: "assistant", content: "foo" },
        { role: "user", content: "bar" },
    ], { signal: (new AbortController()).signal });
    console.log(languageModelInputUsage3);

    console.log(
        languageModel.inputUsage,
        languageModel.inputQuota,
    );

    const quotaOverflowListener = (e: Event) => {
        console.log(e);
    };
    languageModel.onquotaoverflow = quotaOverflowListener;
    languageModel.addEventListener("quotaoverflow", quotaOverflowListener);
    languageModel.removeEventListener("quotaoverflow", quotaOverflowListener);

    console.log(
        languageModel.topK,
        languageModel.temperature,
    );

    const languageModelClone1: LanguageModel = await languageModel.clone();
    console.log(languageModelClone1);

    const languageModelClone2: LanguageModel = await languageModel.clone({ signal: (new AbortController()).signal });
    console.log(languageModelClone2);

    languageModel.destroy();

    // Summarizer

    const summarizer = await Summarizer.create({
        type: "tldr",
        format: "plain-text",
        length: "short",
        expectedInputLanguages: ["de"],
        expectedContextLanguages: ["de"],
        outputLanguage: "en",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const summarizerAvailability1: Availability = await Summarizer.availability();
    console.log(summarizerAvailability1);

    const summarizerAvailability2: Availability = await Summarizer.availability({
        type: "teaser",
        format: "plain-text",
        length: "long",
        expectedInputLanguages: ["de"],
        expectedContextLanguages: ["de"],
        outputLanguage: "en",
    });
    console.log(summarizerAvailability2);

    const summarizerResult: string = await summarizer.summarize("foo", {
        signal: (new AbortController()).signal,
        context: "foo",
    });
    console.log(summarizerResult);

    for await (
        const chunk of summarizer.summarizeStreaming("foo", { signal: (new AbortController()).signal, context: "foo" })
    ) {
        console.log(chunk);
    }

    console.log(
        summarizer.sharedContext,
        summarizer.type,
        summarizer.format,
        summarizer.length,
        summarizer.expectedInputLanguages,
        summarizer.expectedContextLanguages,
        summarizer.outputLanguage,
    );

    const summarizerInputUsage: number = await summarizer.measureInputUsage("foo", {
        signal: (new AbortController()).signal,
        context: "foo",
    });
    console.log(summarizerInputUsage, summarizer.inputQuota);

    summarizer.destroy();

    // Writer

    const writer = await Writer.create({
        tone: "casual",
        format: "plain-text",
        length: "long",
        expectedInputLanguages: ["de"],
        expectedContextLanguages: ["de"],
        outputLanguage: "en",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const writerAvailability1: Availability = await Writer.availability();
    console.log(writerAvailability1);

    const writerAvailability2: Availability = await Writer.availability({
        tone: "casual",
        format: "plain-text",
        length: "long",
        expectedInputLanguages: ["de"],
        expectedContextLanguages: ["de"],
        outputLanguage: "en",
    });

    const writerResult: string = await writer.write("foo", { signal: (new AbortController()).signal, context: "foo" });
    console.log(writerResult);

    for await (
        const chunk of writer.writeStreaming("foo", { signal: (new AbortController()).signal, context: "foo" })
    ) {
        console.log(chunk);
    }

    console.log(
        writer.sharedContext,
        writer.tone,
        writer.format,
        writer.length,
        writer.expectedInputLanguages,
        writer.expectedContextLanguages,
        writer.outputLanguage,
    );

    const writerInputUsage: number = await writer.measureInputUsage("foo", {
        signal: (new AbortController()).signal,
        context: "foo",
    });
    console.log(writerInputUsage, writer.inputQuota);

    writer.destroy();

    // Rewriter

    const rewriter = await Rewriter.create({
        tone: "as-is",
        format: "plain-text",
        length: "as-is",
        expectedInputLanguages: ["de"],
        expectedContextLanguages: ["de"],
        outputLanguage: "en",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const rewriterAvailability1: Availability = await Rewriter.availability();
    console.log(rewriterAvailability1);

    const rewriterAvailability2: Availability = await Rewriter.availability({
        tone: "more-casual",
        format: "plain-text",
        length: "as-is",
        expectedInputLanguages: ["de"],
        expectedContextLanguages: ["de"],
        outputLanguage: "en",
    });
    console.log(rewriterAvailability2);

    const rewriterResult: string = await rewriter.rewrite("foo", {
        signal: (new AbortController()).signal,
        context: "foo",
    });
    console.log(rewriterResult);

    for await (
        const chunk of rewriter.rewriteStreaming("foo", { signal: (new AbortController()).signal, context: "foo" })
    ) {
        console.log(chunk);
    }

    console.log(
        rewriter.sharedContext,
        rewriter.tone,
        rewriter.format,
        rewriter.length,
        rewriter.expectedInputLanguages,
        rewriter.expectedContextLanguages,
        rewriter.outputLanguage,
    );

    const rewriterInputUsage: number = await rewriter.measureInputUsage("foo", {
        signal: (new AbortController()).signal,
        context: "foo",
    });
    console.log(rewriterInputUsage, rewriter.inputQuota);

    rewriter.destroy();

    // Translator

    const translator = await Translator.create({
        sourceLanguage: "de",
        targetLanguage: "en",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const translatorAvailability: Availability = await Translator.availability({
        sourceLanguage: "de",
        targetLanguage: "en",
    });

    const translatorResult: string = await translator.translate("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(translatorResult);

    for await (
        const chunk of translator.translateStreaming("foo", { signal: (new AbortController()).signal })
    ) {
        console.log(chunk);
    }

    console.log(
        translator.sourceLanguage,
        translator.targetLanguage,
    );

    const translatorInputUsage: number = await translator.measureInputUsage("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(
        translatorInputUsage,
        translator.inputQuota,
    );

    translator.destroy();

    // Language detector

    const languageDetector = await LanguageDetector.create({
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const languageDetectorAvailability1: Availability = await LanguageDetector.availability();
    console.log(languageDetectorAvailability1);

    const languageDetectorAvailability2: Availability = await LanguageDetector.availability({
        expectedInputLanguages: ["de"],
    });
    console.log(languageDetectorAvailability2);

    const [languageDetectorResult]: LanguageDetectionResult[] = await languageDetector.detect("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(languageDetectorResult.detectedLanguage);
    console.log(languageDetectorResult.confidence);

    languageDetector.destroy();
}
