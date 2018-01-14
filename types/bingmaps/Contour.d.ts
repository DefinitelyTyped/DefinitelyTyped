declare module Microsoft.Maps {

    /**
     * The contour layer options
     */
    interface IContourLayerOptions {
        /** The z-index of this layer */
        zIndex?: number;

        /** Whether the layer is visible */
        visible?: boolean;

        /** A callback function which defines the color of the contour line fill. */
        colorCallback?: (contourValue: number | string) => string | Color;

        /** The polygon options that apply to all contour lines of this layer */
        polygonOptions?: IPolygonOptions;
    }

    /**
     * The contour line of a contour layer
     */
    export class ContourLine extends Polygon {
        /** The contour lines that are directly nested inside this contour line */
        public innerContourLines: ContourLine[];

        /** The outer/parent contour line of this contour */
        public outerContourLine: ContourLine;

        /** The data value associated with this contour line */
        public contourValue: number | string;

        /**
         * @constructor
         * @param boundary The boundary of this contour line
         * @param contourValue The value associated with this contour line
         */
        constructor(boundary: Location[], contourValue?: number | string);
    }

    /**
     * The contour layer class.
     */
    export class ContourLayer extends Layer {
        /**
         * @constructor
         * @param contourLines The contour lines that compose this layer.
         * @param options The contour layer options.
         */
        constructor(contourLines: ContourLine[], options?: IContourLayerOptions);

        /**
         * Clears all data on the contour layer.
         */
        public clear(): void;

        /**
         * Gets the contour lines of this layer.
         * @returns The contour lines of this layer.
         */
        public getContourLines(): ContourLine[];

        /**
         * Gets the polygons that were generated from the contour lines in this layer.
         * @returns The polygons that were generated from the contour lines in this layer.
         */
        public getContourPolygons(): Polygon[];

        /**
         * Retrieves the options of this contour layer.
         * @returns The options of this contour layer.
         */
        public getOptions(): IContourLayerOptions;

        /**
         * Sets the contour lines used to calculate the polygon areas of this layer.
         * @param contourLines The contour lines used to calculate the polygon areas of this layer.
         */
        public setContourLines(contourLines: ContourLine[]): void;

        /**
         * Sets the options of the contour layer.
         * @param options The new options to update the layer.
         */
        public setOptions(options: IContourLayerOptions): void;
    }
}