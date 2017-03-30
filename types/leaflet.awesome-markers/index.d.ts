// Type definitions for Leaflet.awesome-markers plugin v2.0
// Project: https://github.com/lvoogdt/Leaflet.awesome-markers
// Definitions by: Egor Komarov <https://github.com/Odrin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Leaflet from "leaflet";

declare global { namespace L {
    module AwesomeMarkers {
        var version: string;

        function icon(options: AwesomeMarkers.IconOptions): AwesomeMarkers.Icon;

        interface IconStatic extends Leaflet.IconStatic {
            /**
              * Creates an icon instance with the given options.
              */
            new (options: IconOptions): Icon;

            Default: {
                /**
                  * Creates a default icon instance with the given options.
                  */
                new (options?: IconOptions): Icon.Default;

                imagePath: string;
            };
        }

        interface Icon extends Leaflet.Icon {
            options: AwesomeMarkers.IconOptions;
        }

        interface IconOptions extends Leaflet.IconOptions {
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
            markerColor?: 'red' | 'darkred' | 'orange' | 'green' | 'darkgreen' | 'blue' | 'purple' | 'darkpuple' | 'cadetblue';

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

        var Icon: AwesomeMarkers.IconStatic;
    }
} }
