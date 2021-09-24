// Type definitions for drift-zoom 1.5
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
        namespace?: string | null | undefined;
        /** @default false */
        showWhitespaceAtEdges?: boolean | undefined;
        /** @default false */
        containInline?: boolean | undefined;
        /** @default 0 */
        inlineOffsetX?: number | undefined;
        /** @default 0 */
        inlineOffsetY?: number | undefined;
        /** @default document.body */
        inlineContainer?: HTMLElement | undefined;
        /** @default 'data-zoom' */
        sourceAttribute?: string | undefined;
        /** @default 3 */
        zoomFactor?: number | undefined;
        /** @default document.body */
        paneContainer?: HTMLElement | undefined;
        /** @default 375 */
        inlinePane?: number | undefined;
        /** @default true */
        handleTouch?: boolean | undefined;
        onShow?: (() => void) | null | undefined;
        onHide?: (() => void) | null | undefined;
        /** @default true */
        injectBaseStyles?: boolean | undefined;
        /** @default 0 */
        hoverDelay?: number | undefined;
        /** @default 0 */
        touchDelay?: number | undefined;
        /** @default false */
        hoverBoundingBox?: boolean | undefined;
        /** @default false */
        touchBoundingBox?: boolean | undefined;
        /** @default document.body */
        boundingBoxContainer?: HTMLElement | undefined;
        /** @default false */
        passive?: boolean | undefined;
    }
}

export = Drift;
