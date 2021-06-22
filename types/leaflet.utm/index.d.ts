// Type definitions for Leaflet.UTM 0.0
// Project: https://github.com/jjimenezshaw/Leaflet.UTM
// Definitions by: Andrew Lineyschikov <https://github.com/Elcaten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    function utm(params: { x: number; y: number; zone: number; band: string; southHemi: boolean }): Utm;

    namespace Utm {
        interface ToStringOptions {
            /** Number of decimals for x and y. Default 1. */
            decimals?: number;
            /**
             * String defining the format to use.
             * Default `{x}{sep} {y}{sep} {zone}{band}{sep} {datum}`, where:
             * `{x}: easting`
             * `{y}: northing`
             * `{zone}: UTM zone, value between 1 and 60`
             * `{band}: Band letter, between C and X`
             * `{datum}: WGS84`
             * `{hemi}: Hemisphere, north or south`
             * `{sep}: separator`
             */
            format?: string;
            /** Separator used in the format. Default ','. */
            sep?: string;
            /** String used in the format for field {hemi} in the north hemisphere. Default 'North'. */
            north?: string;
            /** String used in the format for field {hemi} in the south hemisphere. Default 'South'. */
            south?: string;
        }

        function setDefaultOptions(
            params:
                | ToStringOptions
                | ((opts: ToStringOptions, defaultOpts: ToStringOptions) => ToStringOptions)
                | null
        ): void;
    }

    class Utm {
        private constructor();
        x: number;
        y: number;
        zone: number;
        band: string;
        southHemi: boolean;
        toString(options?: Utm.ToStringOptions): string;
        latLng(noException?: boolean): LatLng;
        normalize(): LatLng;
        equals(other: Utm): boolean;
        clone(): Utm;
    }

    interface LatLng {
        utm(zone?: number, southHemi?: boolean): Utm;
    }
}
