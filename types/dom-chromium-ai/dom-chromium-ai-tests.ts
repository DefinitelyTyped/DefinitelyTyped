async function topLevel() {
    // Language Model

    await LanguageModel.create({
        // @ts-expect-error - System prompt must be first element of the initialPrompt array.
        initialPrompts: [{ role: "user", content: "foo" }, { role: "system", content: "foo" }],
    });

    // Positive tests
    // System prompt in create options
    const languageModel1 = await LanguageModel.create({
        topK: 1,
        temperature: 0,
        signal: (new AbortController()).signal,
        initialPrompts: [{ role: "assistant", content: "foo" }, { role: "user", content: "foo" }],
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    // System prompt in initial prompts
    const languageModel2 = await LanguageModel.create({
        initialPrompts: [
            { role: "system", content: "foo" },
            { role: "assistant", content: "foo" },
            { role: "user", content: "foo" },
        ],
    });
    console.log(languageModel2);

    const languageModelAvailability = await LanguageModel.availability();
    console.log(languageModelAvailability);

    const languageModelParams = await LanguageModel.params();
    console.log(
        languageModelParams.defaultTopK,
        languageModelParams.maxTopK,
        languageModelParams.defaultTemperature,
        languageModelParams.maxTemperature,
    );

    languageModel1.addEventListener("contextoverflow", () => {});

    const promptTokens1: number = await languageModel1.measureInputUsage("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(promptTokens1);

    const promptTokens2: number = await languageModel1.measureInputUsage({ role: "assistant", content: "foo" }, {
        signal: (new AbortController()).signal,
    });
    console.log(promptTokens2);

    const promptTokens3: number = await languageModel1.measureInputUsage([
        { role: "assistant", content: "foo" },
        { role: "user", content: "bar" },
    ], { signal: (new AbortController()).signal });
    console.log(promptTokens3);

    const assistantResult1: string = await languageModel1.prompt("foo", { signal: (new AbortController()).signal });
    console.log(assistantResult1);

    const assistantResult2: string = await languageModel1.prompt({ role: "assistant", content: "foo" });
    console.log(assistantResult2);

    const assistantResult3: string = await languageModel1.prompt([
        { role: "assistant", content: "foo" },
        { role: "user", content: "bar" },
    ]);
    console.log(assistantResult3);

    for await (const chunk of languageModel1.promptStreaming("foo", { signal: (new AbortController()).signal })) {
        console.log(chunk);
    }

    for await (
        const chunk of languageModel1.promptStreaming({ role: "assistant", content: "foo" }, {
            signal: (new AbortController()).signal,
        })
    ) {
        console.log(chunk);
    }

    for await (
        const chunk of languageModel1.promptStreaming([
            { role: "assistant", content: "foo" },
            { role: "user", content: "bar" },
        ], { signal: (new AbortController()).signal })
    ) {
        console.log(chunk);
    }

    const languageModelClone1: AILanguageModel = await languageModel1.clone();
    console.log(languageModelClone1);

    const languageModelClone2: AILanguageModel = await languageModel1.clone({ signal: (new AbortController()).signal });
    console.log(languageModelClone2);

    languageModel1.destroy();

    // Summarizer

    const summarizer = await Summarizer.create({
        length: "short",
        format: "plain-text",
        type: "tl;dr",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const summarizerAvailability = await Summarizer.availability();
    console.log(summarizerAvailability);

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

    summarizer.destroy();

    // Writer

    const writer = await Writer.create({
        tone: "casual",
        format: "plain-text",
        length: "long",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const writerAvailability = await Writer.availability();
    console.log(writerAvailability);

    const writerResult: string = await writer.write("foo", { signal: (new AbortController()).signal, context: "foo" });
    console.log(writerResult);

    for await (
        const chunk of writer.writeStreaming("foo", { signal: (new AbortController()).signal, context: "foo" })
    ) {
        console.log(chunk);
    }

    writer.destroy();

    // Rewriter

    const rewriter = await Rewriter.create({
        tone: "as-is",
        format: "plain-text",
        length: "as-is",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: CreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const rewriterAvailability = await Rewriter.availability();
    console.log(rewriterAvailability);

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

    console.log(
        translator.sourceLanguage,
        translator.targetLanguage,
    );

    const translatorAvailability = await Translator.availability({
        sourceLanguage: "de",
        targetLanguage: "en",
    });
    console.log(translatorAvailability);

    const translatorResult: string = await translator.translate("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(translatorResult);

    for await (
        const chunk of translator.translateStreaming("foo", { signal: (new AbortController()).signal })
    ) {
        console.log(chunk);
    }

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

    const languageDetectorAvailability = await LanguageDetector.availability();
    console.log(languageDetectorAvailability);

    const [languageDetectorResult]: LanguageDetectionResult[] = await languageDetector.detect("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(languageDetectorResult.detectedLanguage);
    console.log(languageDetectorResult.confidence);

    languageDetector.destroy();
}
