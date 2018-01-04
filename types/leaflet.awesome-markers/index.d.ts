// Type definitions for Leaflet.awesome-markers plugin 2.0
// Project: https://github.com/sigma-geosistemas/Leaflet.awesome-markers#properties
// Definitions by: Marcel Sebek <https://github.com/sebek64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Leaflet from "leaflet";

declare module 'leaflet' {
    namespace AwesomeMarkers {
        const version: string;

        interface AwesomeMarkersIconOptions extends BaseIconOptions {
            /**
             * Name of the icon. See glyphicons or font-awesome.
             */
            icon?: string;

            /**
             * Select de icon library. 'fa' for font-awesome 4, 'fa*' for font-awesome 5, or 'glyphicon' for bootstrap 3.
             */
            prefix?: 'fa' | 'fas' | 'far' | 'fal' | 'fab' | 'glyphicon';

            /**
             * Color of the marker
             */
            markerColor?: 'red' | 'darkred' | 'orange' | 'green' | 'darkgreen' | 'blue' | 'purple' | 'darkpurple' | 'cadetblue';

            /**
             * Color of the icon. 'white', 'black' or css code (hex, rgba etc).
             */
            iconColor?: 'white' | 'black' | string;

            /**
             * Make the icon spin. true or false. Font-awesome required
             */
            spin?: boolean;

            /**
             * Additional classes in the created tag
             */
            extraClasses?: string;
        }

        function icon(options: AwesomeMarkersIconOptions): Icon;

        class Icon extends Leaflet.Icon<AwesomeMarkersIconOptions> {
            constructor(options?: AwesomeMarkersIconOptions);
        }
    }
}
