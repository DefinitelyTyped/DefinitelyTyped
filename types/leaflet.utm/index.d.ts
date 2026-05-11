import * as L from "leaflet";

declare module "leaflet" {
    function utm(params: { x: number; y: number; zone: number; band: string; southHemi: boolean }): Utm;

    namespace Utm {
        interface ToStringOptions {
            /** Number of decimals for x and y. Default 1. */
            decimals?: number | undefined;
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
            format?: string | undefined;
            /** Separator used in the format. Default ','. */
            sep?: string | undefined;
            /** String used in the format for field {hemi} in the north hemisphere. Default 'North'. */
            north?: string | undefined;
            /** String used in the format for field {hemi} in the south hemisphere. Default 'South'. */
            south?: string | undefined;
        }

        function setDefaultOptions(
            params:
                | ToStringOptions
                | ((opts: ToStringOptions, defaultOpts: ToStringOptions) => ToStringOptions)
                | null,
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
