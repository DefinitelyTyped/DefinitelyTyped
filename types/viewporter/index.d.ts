interface Viewporter {
    preventPageScroll: boolean;
    forceDetection: boolean;
    ACTIVE: boolean;
    READY: boolean;

    isLandscape(): boolean;
    ready(callback: EventListener): void;
    change(callback: EventListener): void;
    refresh(): void;
}

declare var viewporter: Viewporter;
