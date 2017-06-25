// Type definitions for Leaflet.awesome-markers plugin 2.1
// Project: https://github.com/sigma-geosistemas/Leaflet.awesome-markers#properties
// Definitions by: Marcel Sebek <https://github.com/sebek64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import L = require('leaflet');

declare module 'leaflet' {
    namespace AwesomeMarkers {
        var version: string;

        function icon(options: AwesomeMarkers.IconOptions): AwesomeMarkers.Icon;

        class Icon extends L.BaseIcon {
            constructor(options?: AwesomeMarkers.IconOptions);
            options: AwesomeMarkers.IconOptions;
        }

        interface IconOptions extends L.BaseIconOptions {
            /**
            * Name of the icon. See glyphicons or font-awesome.
            */
            icon?: string;

            /**
            * Select de icon library. 'fa' for font-awesome or 'glyphicon' for bootstrap 3.
            */
            prefix?: 'fa' | 'glyphicon';

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
    }
}
