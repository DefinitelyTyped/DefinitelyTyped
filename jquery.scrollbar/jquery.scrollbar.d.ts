interface JQueryScrollbarOptions {
    autoScrollSize?: boolean;
    autoUpdate?: boolean;
    disableBodyScroll?: boolean;
    duration?: number;
    ignoreMobile?: boolean;
    ignoreOverlay?: boolean;
    scrollStep?: number;
    showArrows?: boolean;
    stepScrolling?: boolean;
    type?: string;
    scrollx?: any;
    scrolly?: any;
    onDestroy?: () => void;
    onInit?: () => void;
    onScroll?: () => void;
    onUpdate?: () => void;
}

interface JQueryScrollbarStatic {
    destroy(): void;
    getScrollbar(d: string): JQuery;
    init(options?: JQueryScrollbarOptions): void;
}

interface JQuery {
    scrollbar(options?: JQueryScrollbarOptions): JQuery;
}