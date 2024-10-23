async function topLevel() {
    // Language Model

    // Negative tests
    await window.ai.languageModel.create({
        systemPrompt: "foo",
        // @ts-expect-error - System prompt cannot be part of the array if systemPrompt is specified.
        initialPrompts: [{ role: "system" }],
    });
    await window.ai.languageModel.create({
        // @ts-expect-error - System prompt must be first element of the initialPrompt array.
        initialPrompts: [{ role: "user" }, { role: "system" }],
    });

    // Positive tests
    const languageModel = await window.ai.languageModel.create({
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

    const languageModelCapabilities = await window.ai.languageModel.capabilities();
    console.log(
        languageModelCapabilities.available,
        languageModelCapabilities.defaultTopK,
        languageModelCapabilities.maxTopK,
        languageModelCapabilities.defaultTemperature,
        languageModelCapabilities.supportsLanguage("de"),
    );

    languageModel.addEventListener("contextoverflow", () => {});

    const promptTokens: number = await languageModel.countPromptTokens("foo", {
        signal: (new AbortController()).signal,
    });
    console.log(promptTokens);

    const languageModelResult: string = await languageModel.prompt("foo", { signal: (new AbortController()).signal });
    console.log(languageModelResult);

    for await (const chunk of languageModel.promptStreaming("foo", { signal: (new AbortController()).signal })) {
        console.log(chunk);
    }

    const languageModelClone1: AILanguageModel = await languageModel.clone();
    console.log(languageModelClone1);

    const languageModelClone2: AILanguageModel = await languageModel.clone({ signal: (new AbortController()).signal });
    console.log(languageModelClone2);

    languageModel.destroy();

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
}
