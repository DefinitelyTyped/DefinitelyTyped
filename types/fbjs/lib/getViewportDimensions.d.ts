/**
 * Gets the viewport dimensions including any scrollbars.
 */
declare function getViewportDimensions(): getViewportDimensions.ViewportDimensions;

declare namespace getViewportDimensions {
    export type ViewportDimensions = {
        width: number;
        height: number;
    };

    var withoutScrollbars: () => ViewportDimensions;
}

export = getViewportDimensions;
