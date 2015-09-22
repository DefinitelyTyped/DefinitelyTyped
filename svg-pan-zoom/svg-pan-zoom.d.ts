// Type definitions for svg-pan-zoom v2.3.9
// Project: https://github.com/ariutta/svg-pan-zoom
// Definitions by: Chintan Shah <https://github.com/Promact>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module SvgPanZoom {

    interface OptionConfig {
        panEnabled?: boolean; // enable or disable panning (default enabled)
        controlIconsEnabled?: boolean; // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
        zoomEnabled?: boolean; // enable or disable zooming (default enabled)
        dblClickZoomEnabled?: boolean; // enable or disable zooming by double clicking (default enabled)
        zoomScaleSensitivity?: number; // Zoom sensitivity
        minZoom?: number; // Minimum Zoom level
        maxZoom?: number; // Maximum Zoom level
        fit?: boolean; // enable or disable viewport fit in SVG (default true)
        center?: boolean; // enable or disable viewport centering in SVG (default true)
        beforeZoom?: (scale:number) => void;
        onZoom?: (scale:number) => void;
        beforePan?: (point:IPoint) => void;
        onPan?: (x:number, y:number) => void;
        refreshRate?: any; // in hz
    }

    interface IPoint {
        x: number;
        y: number;
    }

    interface ISvgPanZoom {
        /**
         * Creates a new SvgPanZoom instance with given element selector.
         *
         * @param svg selector of the tag on which it is to be applied.
         * @param options provides customization options at the initialization of the object.
         */
        (svg:any, options?:OptionConfig):  ISvgPanZoom;

        /**
         * Enables Panning on svg element
         */
        enablePan(): void;

        /**
         * Disables panning on svg element
         */
        disablePan(): void;

        /**
         * Checks if Panning is enabled or not
         * @return true or false based on panning settings
         */
        isPanEnabled(): boolean;


        setBeforePan(fn: (point:IPoint)=> void): void;

        setOnPan(fn: (x:number, y:number)=> void): void;

        enableZoom(): void;

        disableZoom(): void;

        isZoomEnabled(): boolean;

        enableControlIcons(): void;

        disableControlIcons(): void;

        isControlIconsEnabled(): boolean;

        enableDblClickZoom(): void;

        disableDblClickZoom(): void;

        setZoomScaleSensitivity(scale: number): void;

        setMinZoom(zoom: number): void;

        setMaxZoom(zoom: number): void;

        setBeforeZoom(fn: (scale: number) => void): void;

        setOnZoom(fn: (scale: number) => void): void;

        zoom(scale: number):void;

        zoomIn(): void;

        zoomOut(): void;

        zoomBy(scale: number): void;

        resetZoom(): void;

        /**
         * Get zoom scale/level
         *
         * @return {float} zoom scale
         */
        getZoom(): number;

        /**
         * Adjust viewport size (only) so it will fit in SVG
         * Does not center image
         *
         * @param  {bool} dropCache drop viewBox cache and recalculate SVG's viewport sizes. Default false
         */
        fit(dropCache?: boolean): void;

        /**
         * Adjust viewport pan (only) so it will be centered in SVG
         * Does not zoom/fit image
         *
         * @param  {bool} dropCache drop viewBox cache and recalculate SVG's viewport sizes. Default false
         */
        center(dropCache?: boolean): void;

        /**
         * Recalculates cached svg dimensions and controls position
         */
        resize(): void;

        /**
         * Pan to a rendered position
         *
         * @param  {object} point {x: 0, y: 0}
         */
        pan(point: IPoint): void;

        /**
         * Relatively pan the graph by a specified rendered position vector
         *
         * @param  {object} point {x: 0, y: 0}
         */
        panBy(point: IPoint): void;

        /**
         * Get pan vector
         *
         * @return {object} {x: 0, y: 0}
         */
        getPan(): IPoint;

        zoomAtPoint(scale:number, point:IPoint): boolean;

        zoomAtPointBy(scale:number, point:IPoint): boolean;
    }
}

declare var svgPanZoom:SvgPanZoom.ISvgPanZoom;