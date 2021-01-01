// Type definitions for drift-zoom 1.4
// Project: https://github.com/imgix/drift
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Drift;

declare class Drift {
    constructor(triggerEl: HTMLElement, options?: Drift.Options);

    readonly isShowing: boolean;
    zoomFactor: number;

    setZoomImageURL(imageURL: string): void;
    disable(): void;
    enable(): void;
    destroy(): void;
}

declare namespace Drift {
    interface Options {
        /** @default 'drift-' */
        namespace?: string | null;
        /** @default false */
        showWhitespaceAtEdges?: boolean;
        /** @default false */
        containInline?: boolean;
        /** @default 0 */
        inlineOffsetX?: number;
        /** @default 0 */
        inlineOffsetY?: number;
        /** @default document.body */
        inlineContainer?: HTMLElement;
        /** @default 'data-zoom' */
        sourceAttribute?: string;
        /** @default 3 */
        zoomFactor?: number;
        /** @default document.body */
        paneContainer?: HTMLElement;
        /** @default 375 */
        inlinePane?: number;
        /** @default true */
        handleTouch?: boolean;
        onShow?: (() => void) | null;
        onHide?: (() => void) | null;
        /** @default true */
        injectBaseStyles?: boolean;
        /** @default 0 */
        hoverDelay?: number;
        /** @default 0 */
        touchDelay?: number;
        /** @default false */
        hoverBoundingBox?: boolean;
        /** @default false */
        touchBoundingBox?: boolean;
        /** @default document.body */
        boundingBoxContainer?: HTMLElement;
    }
}

export = Drift;
