/// <reference types="jquery" />

export interface Options {
    /**
     * Activate responsivenes
     */
    responsive?: boolean | undefined;

    /**
     * Activate zoom on mouse scroll
     */
    scrollZoom?: boolean | undefined;

    /**
     * Activate simultaneous crossfade of images on gallery change
     */
    imageCrossfade?: boolean | undefined;

    /**
     * Activate spinner icon or url
     */
    loadingIcon?: boolean | string | undefined;

    /**
     * Activate easing
     */
    easing?: boolean | undefined;
    easingType?: string | undefined;
    easingDuration?: number | undefined;

    /**
     * Used when zoomType set to lens
     */
    lensSize?: number | undefined;

    /**
     * Width of the zoomWindow
     */
    zoomWindowWidth?: number | undefined;

    /**
     * Height of the zoomWindow
     */
    zoomWindowHeight?: number | undefined;

    /**
     * x-axis offset of the zoom window
     */
    zoomWindowOffsetX?: number | undefined;

    /**
     * y-axis offset of the zoom window
     */
    zoomWindowOffsetY?: number | undefined;
    zoomWindowPosition?: number | string | undefined;

    /**
     * Speed of Lens fadeIn
     */
    lensFadeIn?: number | undefined;

    /**
     * Speed of Lens fadeOut
     */
    lensFadeOut?: number | undefined;

    /**
     * Speed of Window fadeIn
     */
    zoomWindowFadeIn?: number | undefined;

    /**
     * Speed of Window fadeOut
     */
    zoomWindowFadeOut?: number | undefined;

    /**
     * Speed of Tint fadeIn
     */
    zoomTintFadeIn?: number | undefined;

    /**
     * Speed of Tint fadeOut
     */
    zoomTintFadeOut?: number | undefined;

    /**
     * Border Size of the ZoomBox
     */
    borderSize?: number | undefined;

    /**
     * Enable Lens
     */
    zoomLens?: boolean | undefined;

    /**
     * Border Colour
     */
    borderColour?: string | undefined;

    /**
     * Width in pixels of the lens border
     */
    lensBorder?: number | undefined;

    /**
     * Type of lens
     */
    lensShape?: "square" | "round" | undefined;

    /**
     * Type of zoom
     */
    zoomType?: "lens" | "window" | "inner" | undefined;
    containLensZoom?: boolean | undefined;

    /**
     * Colour of the lens background
     */
    lensColour?: string | undefined;

    /**
     * Opacity of lens
     */
    lensOpacity?: number | undefined;
    lenszoom?: boolean | undefined;

    /**
     * Enable a tint overlay
     */
    tint?: boolean | undefined;

    /**
     * Colour of the tin
     */
    tintColour?: string | undefined;

    /**
     * Opacity of the tint
     */
    tintOpacity?: number | undefined;

    /**
     * This assigns a set of gallery links to the zoom image
     */
    gallery?: string | undefined;

    /**
     * Type of cursor
     */
    cursor?: "default" | "cursor" | "crosshair" | undefined;
    container?: string | undefined;

    /**
     * Attribute to plugin use for zoom
     */
    attrImageZoomSrc?: string | undefined;

    /**
     * In pixels the dimensions you want to constrain on
     */
    constrainSize?: number | false | undefined;
    constrainType?: "width" | "height" | undefined;
    debug?: boolean | undefined;
    easingAmount?: number | undefined;
    enabled?: boolean | undefined;
    galleryActiveClass?: string | undefined;
    gallerySelector?: string | false | undefined;
    galleryItem?: string | undefined;
    galleryEvent?: string | undefined;
    mantainZoomAspectRatio?: boolean | undefined;
    maxZoomLevel?: number | false | undefined;
    minZoomLevel?: number | undefined;
    preloading?: 0 | 1 | undefined;
    respond?: any[] | undefined;

    /**
     * Steps of the scrollzoom
     */
    scrollZoomIncrement?: number | undefined;
    touchEnabled?: boolean | undefined;
    zoomActivation?: "click" | "hover" | undefined;

    /**
     * Zoom container parent selector
     */
    zoomContainerAppendTo?: string | undefined;

    /**
     * Identifier for the zoom container
     */
    zoomId?: number | undefined;

    /**
     * Zoom level of image
     */
    zoomLevel?: number | undefined;
    zIndex?: number | undefined;
}
declare global {
    interface JQuery {
        /**
         * Initialize ElevateZoom Plugin
         */
        ezPlus(options?: Options): JQuery;
    }
}
