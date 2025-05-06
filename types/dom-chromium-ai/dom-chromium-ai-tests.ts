async function topLevel() {
    // Language Model

    // Negative tests
    await self.ai.languageModel.create({
        systemPrompt: "foo",
        // @ts-expect-error - System prompt cannot be part of the array if systemPrompt is specified.
        initialPrompts: [{ role: "system" }],
    });
    await self.ai.languageModel.create({
        // @ts-expect-error - System prompt must be first element of the initialPrompt array.
        initialPrompts: [{ role: "user" }, { role: "system" }],
    });

    // Positive tests
    // System prompt in create options
    const languageModel1 = await self.ai.languageModel.create({
        topK: 1,
        temperature: 0,
        signal: (new AbortController()).signal,
        systemPrompt: "foo",
        initialPrompts: [{ role: "assistant", content: "foo" }, { role: "user", content: "foo" }],
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    // System prompt in initial prompts
    const languageModel2 = await self.ai.languageModel.create({
        initialPrompts: [
            { role: "system", content: "foo" },
            { role: "assistant", content: "foo" },
            { role: "user", content: "foo" },
        ],
    });
    console.log(languageModel2);

    const languageModelCapabilities = await self.ai.languageModel.capabilities();
    console.log(
        languageModelCapabilities.available,
        languageModelCapabilities.defaultTopK,
        languageModelCapabilities.maxTopK,
        languageModelCapabilities.defaultTemperature,
        languageModelCapabilities.maxTemperature,
        languageModelCapabilities.languageAvailable("de"),
    );

    languageModel1.addEventListener("contextoverflow", () => {});

    const promptTokens1: number = await languageModel1.countPromptTokens("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(promptTokens1);

    const promptTokens2: number = await languageModel1.countPromptTokens({ role: "assistant", content: "foo" }, {
        signal: (new AbortController()).signal,
    });
    console.log(promptTokens2);

    const promptTokens3: number = await languageModel1.countPromptTokens([
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

    const summarizer = await self.ai.summarizer.create({
        length: "short",
        format: "plain-text",
        type: "tl;dr",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const summarizerCapabilities = await self.ai.summarizer.capabilities();
    console.log(
        summarizerCapabilities.available,
        summarizerCapabilities.supportsType("teaser"),
        summarizerCapabilities.supportsFormat("plain-text"),
        summarizerCapabilities.supportsLength("long"),
        summarizerCapabilities.languageAvailable("de"),
    );

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

    const writer = await self.ai.writer.create({
        tone: "casual",
        format: "plain-text",
        length: "long",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const writerCapabilities = await self.ai.writer.capabilities();
    console.log(
        writerCapabilities.available,
        writerCapabilities.supportsTone("casual"),
        writerCapabilities.supportsFormat("plain-text"),
        writerCapabilities.supportsLength("long"),
        writerCapabilities.languageAvailable("de"),
    );

    const writerResult: string = await writer.write("foo", { signal: (new AbortController()).signal, context: "foo" });
    console.log(writerResult);

    for await (
        const chunk of writer.writeStreaming("foo", { signal: (new AbortController()).signal, context: "foo" })
    ) {
        console.log(chunk);
    }

    writer.destroy();

    // Rewriter

    const rewriter = await self.ai.rewriter.create({
        tone: "as-is",
        format: "plain-text",
        length: "as-is",
        sharedContext: "foo",
        signal: (new AbortController()).signal,
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const rewriterCapabilities = await self.ai.rewriter.capabilities();
    console.log(
        rewriterCapabilities.available,
        rewriterCapabilities.supportsTone("more-casual"),
        rewriterCapabilities.supportsFormat("plain-text"),
        rewriterCapabilities.supportsLength("as-is"),
        rewriterCapabilities.languageAvailable("de"),
    );

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

    const translator = await self.ai.translator.create({
        sourceLanguage: "de",
        targetLanguage: "en",
        signal: (new AbortController()).signal,
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    console.log(
        translator.sourceLanguage,
        translator.targetLanguage,
    );

    const translatorCapabilities = await self.ai.translator.capabilities();
    console.log(
        translatorCapabilities.available,
        translatorCapabilities.languagePairAvailable("de", "en"),
    );

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

    const languageDetector = await self.ai.languageDetector.create({
        signal: (new AbortController()).signal,
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const languageDetectorCapabilities = await self.ai.languageDetector.capabilities();
    console.log(
        languageDetectorCapabilities.available,
        languageDetectorCapabilities.languageAvailable("de"),
    );

    const [languageDetectorResult]: LanguageDetectionResult[] = await languageDetector.detect("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(languageDetectorResult.detectedLanguage);
    console.log(languageDetectorResult.confidence);

    languageDetector.destroy();
}
