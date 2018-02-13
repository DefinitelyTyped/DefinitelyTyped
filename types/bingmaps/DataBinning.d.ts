/// <reference path="SpatialMath.d.ts"/>

declare module Microsoft.Maps {

    /**
     * Specifies the shape of data bin rendered in the layer.
     */
    export enum DataBinType {
        /* Renders data bins as circles in a square grid. */
        circle,

        /* Renders data bins as hexagons with a flat top edge. */
        hexagon,

        /* Renders data bins as circles in a hexagonal grid. */
        hexCircle,

        /* Renders data bins as hexagons with a pointy top corner. */
        pointyHexagon,

        /* Renders data bins as a square grid. */
        square
    }

    /**
     * A set options the define how a data binning layer is rendered.
     */
    export interface IDataBinningOptions {
        /* The name of a property in the Pushpin.metadata object on which to perform calculations (average, count, sum) against the pushpins in each data bin. */
        aggregationProperty?: string;

        /*
         * A callback function which defines the color a data bin polygon should be. This callback recieves data bin information
         * along with the min and max calculated metrics for the data set. If set, this callback function must return a color value.
         */
        colorCallback?: (binInfo: IDataBinInfo, min: IDataBinMetrics, max: IDataBinMetrics) => string | Color;

        /* The shape of the data bin to generate. Default: hexagon */
        dataBinType?: DataBinType;

        /* The distance units of the radius option. Default: meters */
        distanceUnits?: SpatialMath.DistanceUnits;

        /* The default options used for rendering the data bin polygons. */
        polygonOptions?: IPolygonOptions;

        /*
         * A spatial distance which will be converted into a pixel distance at the equater and used to generate symetrically sized data bins
         * that have the apprimate spatial distance radius. Default: 1000
         */
        radius?: number;

        /*
         * A callback function which defines how much to scale a data bins size. This callback recieves data bin information
         * along with the min and max calculated metrics for the data set. If set, this callback function must return a number between 0 and 1.
         */
        scaleCallback?: (binInfo: IDataBinInfo, min: IDataBinMetrics, max: IDataBinMetrics) => number;
    }

    /**
    * A set of values calculated from the pushpins in a data bin.
    */
    export interface IDataBinMetrics {

        /* The average value of the aggregation property of the pushpins in a data bin. */
        average?: number;

        /* The number of pushpins in a data bin. */
        count?: number;

        /* The number of pushpins in the data bin who's aggregation property has a value. */
        countNotBlank?: number;

        /* The number of pushpins in the data bin who's aggregation property is a valid number. */
        countNumbers?: number;

        /* The sum of the aggregation property of the pushpins in a data bin.  */
        sum?: number;
    }

    /**
    * The result of a calculated data bin.
    */
    export interface IDataBinInfo {
        /* An array of all the pushpins that are in the data bin. */
        containedPushpins: Microsoft.Maps.Pushpin[];

        /* A set of calculated metric values determined using the aggregationProperty value of all the pushpins contained in the data bin. */
        metrics: IDataBinMetrics;
    }

    /**
     *  A polygon which represents a data bin on the map and contains the data bin information.
     */

    export class DataBinPolygon extends Polygon {
        /* Information about the data bin; the contained pushpins and calculated metrics. */
        public dataBinInfo: IDataBinInfo;
    }

    /**
     * This class provides a data binning visualization for the map. It takes in an array of pushpins, groups them into
     * symmetrical shapes that fit together in a grid such as hexagons. Aggregation of data values are done and can be
     * used to customize how the data bins are rendered on the map (i.e. scale / color) .
     */
    export class DataBinningLayer extends Layer {
        /**
         * Initializes the data binning layer.
         * @param pushpins The array of pushpins that are used to generate the data bins.
         * @param options The options used for calculating and rendering the data bins.
         */
        constructor(pushpins?: Pushpin[], options?: IDataBinningOptions);

        /**
         * Gets the options used for calculating and rendering the data bins.
         * @returns The options used for calculating and rendering the data bins.
         */
        public getOptions(): IDataBinningOptions;

        /**
         * Gets all pushpins that are in the layers.
         * @returns All pushpins that are in the layers.
         */
        public getPushpins(): Pushpin[];

        /**
         * Sets the array of pushpins that are used to generate the data bins.
         * @param pushpins The array of pushpins that are used to generate the data bins.
         */
        public setPushpins(pushpins: Pushpin[]): void;

        /**
         * Clears all the data in the data binning layer.
         */
        public clear(): void;

        /**
         * Cleans up any resources this object is consuming.
         */
        public dispose(): void;

        /**
         * Sets the options used for calculating and rendering the data bins.
         * @param options The options used for calculating and rendering the data bins.
         */
        public setOptions(options: IDataBinningOptions): void;
    }
}