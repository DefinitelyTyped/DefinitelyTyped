import * as Leaflet from "leaflet";

declare global {
    namespace L {
        namespace AwesomeMarkers {
            var version: string;

            function icon(options: AwesomeMarkers.IconOptions): AwesomeMarkers.Icon;

            interface IconStatic extends Leaflet.IconStatic {
                /**
                 * Creates an icon instance with the given options.
                 */
                new(options: IconOptions): Icon;

                Default: {
                    /**
                     * Creates a default icon instance with the given options.
                     */
                    new(options?: IconOptions): Icon.Default;

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

            var Icon: AwesomeMarkers.IconStatic;
        }
    }
}
