/// <reference types="jquery"/>

interface WatermarkOptions {
    className?: string | undefined; // Default class name for all watermarks
    useNative?: boolean | undefined; // If true, plugin will detect and use native browser support for watermarks, if available. (e.g., WebKit's placeholder attribute.)
    hideBeforeUnload?: boolean | undefined; // If true, all watermarks will be hidden during the window beforeunload event.
}

interface Watermark {
    options: WatermarkOptions;

    show(element: string): void;
    hide(element: string): void;
    showAll(): void;
    hideAll(): void;
}

interface JQuery {
    watermark(text: string, options?: WatermarkOptions): JQuery;
}

interface JQueryStatic {
    watermark: Watermark;
}
