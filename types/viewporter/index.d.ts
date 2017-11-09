// Type definitions for Zynga Viewporter v2.1
// Project: https://github.com/zynga/viewporter
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
