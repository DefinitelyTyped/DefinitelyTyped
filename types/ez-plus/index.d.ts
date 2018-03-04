// Type definitions for jQuery ElevateZoom Plus Plugin 1.2
// Project: https://github.com/igorlino/elevatezoom-plus
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export interface Options {
    /**
     * Activate responsivenes
     */
    responsive?: boolean;

    /**
     * Activate zoom on mouse scroll
     */
    scrollZoom?: boolean;

    /**
     * Activate simultaneous crossfade of images on gallery change
     */
    imageCrossfade?: boolean;

    /**
     * Activate spinner icon
     */
    loadingIcon?: boolean;

    /**
     * Activate easing
     */
    easing?: boolean;
    easingType?: string;
    easingDuration?: number;

    /**
     * Used when zoomType set to lens
     */
    lensSize?: number;

    /**
     * Width of the zoomWindow
     */
    zoomWindowWidth?: number;

    /**
     * Height of the zoomWindow
     */
    zoomWindowHeight?: number;

    /**
     * x-axis offset of the zoom window
     */
    zoomWindowOffsetX?: number;

    /**
     * y-axis offset of the zoom window
     */
    zoomWindowOffsetY?: number;
    zoomWindowPosition?: number|string;

    /**
     * Speed of Lens fadeIn
     */
    lensFadeIn?: number;

    /**
     * Speed of Lens fadeOut
     */
    lensFadeOut?: number;

    /**
     * Speed of Window fadeIn
     */
    zoomWindowFadeIn?: number;

    /**
     * Speed of Window fadeOut
     */
    zoomWindowFadeOut?: number;

    /**
     * Speed of Tint fadeIn
     */
    zoomTintFadeIn?: number;

    /**
     * Speed of Tint fadeOut
     */
    zoomTintFadeOut?: number;

    /**
     * Border Size of the ZoomBox
     */
    borderSize?: number;

    /**
     * Enable Lens
     */
    zoomLens?: boolean;

    /**
     * Border Colour
     */
    borderColour?: string;

    /**
     * Width in pixels of the lens border
     */
    lensBorder?: number;

    /**
     * Type of lens
     */
    lensShape?: 'square' | 'round';

    /**
     * Type of zoom
     */
    zoomType?: 'lens' | 'window' | 'inner';
    containLensZoom?: boolean;

    /**
     * Colour of the lens background
     */
    lensColour?: string;

    /**
     * Opacity of lens
     */
    lensOpacity?: number;
    lenszoom?: boolean;

    /**
     * Enable a tint overlay
     */
    tint?: boolean;

    /**
     * Colour of the tin
     */
    tintColour?: string;

    /**
     * Opacity of the tint
     */
    tintOpacity?: number;

    /**
     * This assigns a set of gallery links to the zoom image
     */
    gallery?: string;

    /**
     * Type of cursor
     */
    cursor?: 'default' | 'cursor' | 'crosshair';
}
declare global {
    interface JQuery {
        /**
         * Initialize ElevateZoom Plugin
         */
        ezPlus(options?: Options): JQuery;
    }
}
