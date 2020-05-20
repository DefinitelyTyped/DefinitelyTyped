// Type definitions for snazzy-info-window 1.1
// Project: https://github.com/atmist/snazzy-info-window
// Definitions by: Milos Danilov <https://github.com/milosd92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="googlemaps" />

declare namespace SnazzyInfoWindow {
    type PlacementOptions =
        'top' | 'bottom' | 'left' | 'right';

    interface Offset {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    }

    interface EdgeOffset {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface Border {
        width: string;
        color?: string;
    }

    interface Shadow {
        h?: string;
        v?: string;
        blur?: string;
        spread?: string;
        opacity?: string;
        color: string;
    }

    interface Callbacks {
        /**
         * Called before the info window attempts to open.
         * Return false to cancel the open.
         */
        beforeOpen?(): boolean | void;

        /**
         * Called when the info window is opening.
         * This occurs at the end of the OverlayView onAdd() implementation.
         * At this point the info window is added to the DOM but is not drawn yet.
         */
        open?(): boolean | void;

        /**
         * Called when the info window has opened.
         * This occurs at the end of the OverlayView draw() implementation.
         * At this point the info window is added to the DOM and should be visible.
         */
        afterOpen?(): boolean | void;

        /**
         * Called before the info window attempts to close.
         * Return false to cancel the close.
         */
        beforeClose?(): boolean | void;

        /**
         * Called when the info window is closing.
         * This occurs at the beginning of the OverlayView onRemove() implementation.
         * At this point the info window is still in the DOM.
         */
        close?(): boolean | void;

        /**
         * Called after the info window has closed.
         * This occurs at the end of the OverlayView onRemove() implementation.
         * At this point the info window should be removed from the DOM.
         */
        afterClose?(): boolean | void;
    }

    interface InfoWindowOptions {
        /**
         * The Google Maps marker associated to this info window.
         */
        marker?: google.maps.Marker;

        /**
         * The text or DOM Element to insert into the info window body.
         */
        content?: string | HTMLElement;

        /**
         * Choose where you want the info window to be displayed, relative to the marker.
         */
        placement?: PlacementOptions;

        /**
         * The Google Map associated to this info window.
         * Only required if you are not using a marker.
         */
        map?: google.maps.Map;

        /**
         * The latitude and longitude where the info window is anchored.
         * The offset will default to 0px when using this option.
         * Only required if you are not using a marker.
         */
        position?: google.maps.LatLng | google.maps.LatLngLiteral;

        /**
         * An optional CSS class to assign to the wrapper container of the info window.
         * Can be used for applying custom CSS to the info window.
         */
        wrapperClass?: string;

        /**
         * The max width in pixels of the info window.
         * @example 200
         */
        maxWidth?: number;

        /**
         * The max height in pixels of the info window.
         * @example 200
         */
        maxHeight?: number;

        /**
         * The offset from the marker.
         * This value should be different for each placement.
         * By default the offset is configured for the default Google Maps marker.
         *
         * @example
         * offset: {
         *   top: '10px',
         *   left: '20px'
         * }
         *
         */
        offset?: Offset;

        /**
         * The offset from the map edge in pixels which is used when panning an info window into view.
         *
         * @example
         * edgeOffset: {
         *   top: 20,
         *   right: 20,
         *   bottom: 20,
         *   left: 20
         * }
         */
        edgeOffset?: EdgeOffset;

        /**
         * The color to use for the background of the info window.
         * Possible Values: Any valid CSS color value.
         * @example '#FF0000', 'blue'
         */
        backgroundColor?: string;

        /**
         * A custom padding size around the content of the info window.
         * Possible Values: Any valid CSS size value.
         * @example '10px', '2em', '5%'
         */
        padding?: string;

        /**
         * A custom border around the info window.
         * Set to false to completely remove the border.
         * The units used for border should be the same as pointer.
         * @example
         * border: {
         *   width: '10px',
         *   color: '#FF0000'
         * }
         */
        border?: Border | boolean;

        /**
         * A custom CSS border radius property to specify the rounded corners of the info window.
         * @example '2px 20px'
         */
        borderRadius?: string;

        /**
         * The font color to use for the content inside the body of the info window.
         * Possible Values: Any valid CSS color value.
         * @example '#FF0000', 'blue'
         */
        fontColor?: string;

        /**
         * The font size to use for the content inside the body of the info window.
         * Possible Values: Any valid CSS font size value.
         */
        fontSize?: string;

        /**
         * The height of the pointer from the info window to the marker.
         * Set to false to completely remove the pointer.
         * The units used for pointer should be the same as border.
         * Possible Values: Any valid CSS size value.
         * @example '10px'
         */
        pointer?: string | boolean;

        /**
         * The CSS properties for the shadow of the info window.
         * Set to false to completely remove the shadow.
         * @default
         * shadow: {
         *   h: '0px',
         *   v: '3px',
         *   blur: '6px',
         *   spread: '0px',
         *   opacity: 0.5,
         *   color: '#000'
         * }
         */
        shadow?: Shadow | boolean;

        /**
         * Determines if the info window will open when the marker is clicked.
         * An internal listener is added to the Google Maps click event which calls the open() method.
         * @default true
         */
        openOnMarkerClick?: boolean;

        /**
         * Determines if the info window will close when the map is clicked.
         * An internal listener is added to the Google Maps click event which calls the close() method.
         * This will not activate on the Google Maps drag event when the user is panning the map.
         * @default true
         */
        closeOnMapClick?: boolean;

        /**
         * Determines if the info window will close when any other Snazzy Info Window is opened.
         * @default false
         */
        closeWhenOthersOpen?: boolean;

        /**
         * Determines if the info window will show a close button.
         * @default true
         */
        showCloseButton?: boolean;

        /**
         * The text or DOM Element to replace the default close button.
         * No click handler or positioning is added to your markup if you use this option.
         */
        closeButtonMarkup?: boolean;

        /**
         * Determines if the info window will be panned into view when opened.
         * @default true
         */
        panOnOpen?: boolean;

        /**
         * All callbacks are optional and can access the info window instance via this.
         */
        callbacks?: Callbacks;
    }
}

declare class SnazzyInfoWindow extends google.maps.OverlayView {
    constructor(opts: SnazzyInfoWindow.InfoWindowOptions);

    /**
     * Will attempt to open the info window.
     */
    open(): void;

    /**
     * Will attempt to close the info window.
     */
    close(): void;

    /**
     * Determines if the info window is open.
     */
    isOpen(): boolean;

    /**
     * Will destroy the info window.
     * If the info window is open it will be forced closed bypassing the regular beforeClose callback.
     * All Google Map event listeners associated to this info window will be removed.
     */
    destroy(): void;

    /**
     * Set the content in the info window.
     * This can be called at any time.
     * @param content string od DOM element
     */
    setContent(content: string | HTMLElement): void;

    /**
     * Set the position of the info window.
     * A valid Google Map instance must be associated to the info window.
     * This could be either through the marker or map option.
     */
    setPosition(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void;

    /**
     * Will return the DOM Element for the wrapper container of the info window.
     */
    getWrapper(): HTMLElement;
}

export = SnazzyInfoWindow;
