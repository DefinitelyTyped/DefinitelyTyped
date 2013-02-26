// Type definitions for Zynga Viewporter v2.1
// Project: https://github.com/zynga/viewporter
// Definitions by: Boris Yankov https://github.com/borisyankov
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Viewporter {
    preventPageScroll: bool;
    forceDetection: bool;
    ACTIVE: bool;
    READY: bool;

    isLandscape(): bool;
    ready(callback: EventListener): void;
    change(callback: EventListener): void;
    refresh(): void;
}

declare var viewporter: Viewporter;