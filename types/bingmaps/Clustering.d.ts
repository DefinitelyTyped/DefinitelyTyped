declare module Microsoft.Maps {
    /** The options used to customize how the ClusterLayer functions. */
    export interface IClusterLayerOptions {
        /**
        * A callback function that is fired after the clustering for a map view has completed. This is useful if you want to generate a list of locations based on what is in the current view.
        */
        callback?: () => void;

        /**
        * A callback function that allows you to process a clustered pushpin before it is added to a layer. This is useful if you want to add events or set style options on the clustered pushpin.
        */
        clusteredPinCallback?: (pin: ClusterPushpin) => void;

        /**
        * Indicates if the layer should cluster the locations or not. Default: true
        */
        clusteringEnabled?: boolean;

        /**
        * Defines how clusters are positioned on the map. Default: MeanAverage
        */
        clusterPlacementType?: ClusterPlacementType;

        /**
        * The width and height of the gird cells used for clustering in pixels. Default: 45
        */
        gridSize?: number;

        /**
        * Offsets the placement of clustered pushpins by a set number of pixels. This option is only available when the placement type is set to GridCenter.
        * This is useful if you have multiple cluster layers on the map and you want to offset the clustered pushpins between the layers so that they are visible,
        * otherwise the clusters from the different layers would overlap completely.
        */
        layerOffset?: Point;

        /**
        * A boolean indicating if the layer is visible or not.
        */
        visible?: boolean;

        /**
        * The z-index of the layer.
        */
        zIndex?: number;
    }

    /**
    * Used to specify how a clustered pushpin should be positioned relative to the pushpins it contains.
    * @requires The Microsoft.Maps.Clustering module.
    */
    export enum ClusterPlacementType {
        /**
        * Mean Average placement calculates the average position of a group of coordinates. This method creates a more realistic representation of the data,
        * however requires more processing power and increases the chances of pushpins overlapping.
        */
        MeanAverage,

        /**
        * This method is the simplest way to represent a cluster. It places the cluster at the first location in the cluster. This method may not accurately
        * represent the data but requires little processing power.
        */
        FirstLocation
    }

    /**
     * This class extends the Pushpin class and has all the same methods and properties plus the following properties.
     * @requires The Microsoft.Maps.Clustering module.
     */
    export class ClusterPushpin extends Pushpin {
        /** An array of all the pushpins that are in the cluster. */
        containedPushpins: Pushpin[];

        /**
        * The grid cell key that can be used retrieve the clustered pushpin(s) from the clustering layer. This is useful when creating a clickable list that
        * link items in the list to clusters or pushpins on the map. Your list just needs to store the gridKey value.
        */
        gridKey: number;
    }

    /**
     * This class allows you to easily add in client side clustering to your application. Client Side Clustering is a method where pushpins that are close
     * together are grouped and represented as a single pushpin, often using a different icon to indicate the cluster. This is a great way to improve both
     * the user experience and performance of the map.
     * @requires The Microsoft.Maps.Clustering module.
     */
    export class ClusterLayer implements IDataLayer {
        /**
        * @constructor
        * @requires The Microsoft.Maps.Clustering module.
        * @param pushpins An array of pushpins to cluster in the layer.
        * @param options The options used to customize how the ClusterLayer functions.
        */
        constructor(pushpins: Pushpin[], options?: IClusterLayerOptions);

        /** Clears all the data in the cluster layer. */
        public clear(): void;

        /**
        * Gets all the pushpins that are in the current map view. If clustering is disabled, all pushpins in the clustering layer are returned.
        * @returns All the pushpins that are in the current map view. If clustering is disabled, all pushpins in the clustering layer are returned.
        */
        public getDisplayedPushpins(): Pushpin[];

        /**
        * Gets the current options used by the cluster layer.
        * @returns The current options used by the cluster layer.
        */
        public getOptions(): IClusterLayerOptions;

        /**
        * Gets all pushpins that are in the layers.
        * @returns An array of all the pushpins that are in the layers.
        */
        public getPushpins(): Pushpin[];

        /**
        * Gets the original pushpins that are in the specified grid cell.
        * @param The gridKey index to retrieve the pushpins for.
        * @returns The original pushpins that are in the specified grid cell.
        */
        public getPushpinsByGridKey(gridKey: number): Pushpin[];

        /**
        * Gets the pushpin in the specified cluster grid cell which can be either a ClusterPushpin if there are multiple pushpins in a cell or a single Pushpin.
        * @param The gridKey index to retrieve the pushpins for.
        * @returns The pushpin in the specified cluster grid cell which can be either a ClusterPushpin if there are multiple pushpins in a cell or a single Pushpin.
        */
        public getClusterPushpinByGridKey(gridKey: number): ClusterPushpin | Pushpin;

        /**
        * Sets the clustering options to use in the layer.
        * @params options The clustering options to use in the layer.
        */
        public setOptions(options: IClusterLayerOptions): void;

        /**
        * Sets the array of pushpins that are used in the clustering layer.
        * @param pushpins An array of pushpins that are to be used by the clustering layer.
        */
        public setPushpins(pushpins: Pushpin[]): void;
    }
}