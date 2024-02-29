import * as Leaflet from "leaflet";

declare module "leaflet" {
    namespace AwesomeMarkers {
        const version: string;

        interface AwesomeMarkersIconOptions extends BaseIconOptions {
            /**
             * Name of the icon. See glyphicons or font-awesome.
             */
            icon?: string | undefined;

            /**
             * Select de icon library. 'fa' for font-awesome or 'glyphicon' for bootstrap 3.
             */
            prefix?: "fa" | "glyphicon" | undefined;

            /**
             * Color of the marker
             */
            markerColor?:
                | "red"
                | "darkred"
                | "orange"
                | "green"
                | "darkgreen"
                | "blue"
                | "purple"
                | "darkpurple"
                | "cadetblue"
                | undefined;

            /**
             * Color of the icon. 'white', 'black' or css code (hex, rgba etc).
             */
            iconColor?: "white" | "black" | string | undefined;

            /**
             * Make the icon spin. true or false. Font-awesome required
             */
            spin?: boolean | undefined;

            /**
             * Additional classes in the created tag
             */
            extraClasses?: string | undefined;
        }

        function icon(options: AwesomeMarkersIconOptions): Icon;

        class Icon extends Leaflet.Icon<AwesomeMarkersIconOptions> {
            constructor(options?: AwesomeMarkersIconOptions);
        }
    }
}
