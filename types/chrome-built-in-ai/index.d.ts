/// <reference path="ai-language-detector.d.ts" />
/// <reference path="ai-language-model.d.ts" />
/// <reference path="ai-rewriter.d.ts" />
/// <reference path="ai-summarizer.d.ts" />
/// <reference path="ai-translator.d.ts" />
/// <reference path="ai-writer.d.ts" />

interface Window {
    ai: AI;
}

declare var ai: AI;

interface AI {
    readonly translator: AITranslatorFactory;
    readonly languageDetector: AILanguageDetectorFactory;
    readonly summarizer: AISummarizerFactory;
    readonly languageModel: AILanguageModelFactory;
    readonly writer: AIWriterFactory;
    readonly rewriter: AIRewriterFactory;
}

type AICreateMonitorCallback = (monitor: AICreateMonitor) => void;

interface AICreateMonitor extends EventTarget {
    ondownloadprogress: (event: Event) => void;
}

type AIAvailability = "unavailable" | "downloadable" | "downloading" | "available";

type AICapability = "no" | "readily" | "after-download";

interface AIDestroyable {
    destroy: () => void;
}

interface AIReadableStream<T> {
    [Symbol.asyncIterator](): AsyncIterableIterator<T>;
}
