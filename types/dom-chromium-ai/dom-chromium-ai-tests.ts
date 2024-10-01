async function topLevel() {
    // Assistant

    // Negative tests
    await window.ai.assistant.create({
        systemPrompt: "foo",
        // @ts-expect-error - System prompt cannot be part of the array if systemPrompt is specified.
        initialPrompts: [{ role: "system" }],
    });
    await window.ai.assistant.create({
        // @ts-expect-error - System prompt must be first element of the initialPrompt array.
        initialPrompts: [{ role: "user" }, { role: "system" }],
    });

    // Positive tests
    const assistant = await window.ai.assistant.create({
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

    const assistantCapabilities = await window.ai.assistant.capabilities();
    console.log(
        assistantCapabilities.available,
        assistantCapabilities.defaultTopK,
        assistantCapabilities.maxTopK,
        assistantCapabilities.defaultTemperature,
        assistantCapabilities.supportsLanguage("de"),
    );

    assistant.addEventListener("contextoverflow", () => {});

    const promptTokens: number = await assistant.countPromptTokens("foo", { signal: (new AbortController()).signal });
    console.log(promptTokens);

    const assistantResult: string = await assistant.prompt("foo", { signal: (new AbortController()).signal });
    console.log(assistantResult);

    for await (const chunk of assistant.promptStreaming("foo", { signal: (new AbortController()).signal })) {
        console.log(chunk);
    }

    const assistantClone1: AIAssistant = await assistant.clone();
    console.log(assistantClone1);

    const assistantClone2: AIAssistant = await assistant.clone({ signal: (new AbortController()).signal });
    console.log(assistantClone2);

    assistant.destroy();

    // Summarizer

    const summarizer = await window.ai.summarizer.create({
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

    const summarizerCapabilities = await window.ai.summarizer.capabilities();
    console.log(
        summarizerCapabilities.available,
        summarizerCapabilities.supportsType("teaser"),
        summarizerCapabilities.supportsFormat("plain-text"),
        summarizerCapabilities.supportsLength("long"),
        summarizerCapabilities.supportsInputLanguage("de"),
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

    const writer = await window.ai.writer.create({
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

    const writerCapabilities = await window.ai.writer.capabilities();
    console.log(
        writerCapabilities.available,
        writerCapabilities.supportsTone("casual"),
        writerCapabilities.supportsFormat("plain-text"),
        writerCapabilities.supportsLength("long"),
        writerCapabilities.supportsInputLanguage("de"),
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

    const rewriter = await window.ai.rewriter.create({
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

    const rewriterCapabilities = await window.ai.rewriter.capabilities();
    console.log(
        rewriterCapabilities.available,
        rewriterCapabilities.supportsTone("more-casual"),
        rewriterCapabilities.supportsFormat("plain-text"),
        rewriterCapabilities.supportsLength("as-is"),
        rewriterCapabilities.supportsInputLanguage("de"),
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

    const translator = await window.ai.translator.create({
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

    const translatorCapabilities = await window.ai.translator.capabilities();
    console.log(
        translatorCapabilities.available,
        translatorCapabilities.canTranslate("de", "en"),
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

    const languageDetector = await window.ai.languageDetector.create({
        signal: (new AbortController()).signal,
        monitor(m: AICreateMonitor) {
            m.addEventListener("downloadprogress", (e) => {
                console.log(e.loaded, e.total);
            });
        },
    });

    const languageDetectorCapabilities = await window.ai.languageDetector.capabilities();
    console.log(
        languageDetectorCapabilities.available,
        languageDetectorCapabilities.canDetect("de"),
    );

    const [languageDetectorResult]: LanguageDetectionResult[] = await languageDetector.detect("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(languageDetectorResult.detectedLanguage);
    console.log(languageDetectorResult.confidence);

    languageDetector.destroy();
}
