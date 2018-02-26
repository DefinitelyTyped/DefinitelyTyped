/**
 * Adds a traffic incident and flow data to the map.
 * @requires The Microsoft.Maps.Traffic module.
 */
declare module Microsoft.Maps.Traffic {
    /** Options that can be customized in the Traffic manager. */
    export interface ITrafficOptions {
        /** Displays the traffic flow layer. */
        flowVisible?: boolean;

        /** Displays all traffic incidents. */
        incidentsVisible?: boolean;

        /** Displays the traffic legend. */
        legendVisible?: boolean;

        /**
        * Sets the opacity of the traffic flow tile layer. Must be a number between 0 and 1. The default is 1 unless the map
        * mode is set to lite, in which case the default is set to 0.7.
        */
        opacity?: number;
    }

    /**
     * The TrafficManager class provides the ability to show traffic flow and incident data on top of the map. When creating an
     * instance of the TrafficManager class the map must be passed as an argument to the constructor.
     * @requires The Microsoft.Maps.Traffic module.
     */
    export class TrafficManager {
        /**
        * @constructor
        * @requires The Microsoft.Maps.Traffic module.
        * @param map A map instnce to attach the traffic manager to.
        */
        constructor(map: Map);

        /** Hides all traffic data. */
        public hide(): void;

        /** Hides the traffic flow layer. */
        public hideFlow(): void;

        /** Hides all traffic incidents. */
        public hideIncidents(): void;

        /** Hides the traffic legend. */
        public hideLegend(): void;

        /**
        * Sets the options for the traffic manager.
        * @param options The options for the traffic manager.
        */
        public setOptions(options: ITrafficOptions): void;

        /** Displays all traffic data. */
        public show(): void;

        /** Displays the traffic flow layer. */
        public showFlow(): void;

        /** Displays all traffic incidents. */
        public showIncidents(): void;

        /** Displays the traffic legend. */
        public showLegend(): void;

    }
}