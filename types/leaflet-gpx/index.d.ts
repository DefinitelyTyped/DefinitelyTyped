// Type definitions for leaflet-gpx 1.3
// Project: https://github.com/mpetazzoni/leaflet-gpx
// Definitions by: Viktor Soucek <https://github.com/soucekv>, Márton Molnár <https://github.com/molnarm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface GPXOptions {
        async?: boolean;
        max_point_interval?: number;
        marker_options?: MarkerOptions;
        polyline_options?: PolylineOptions;
        gpx_options?: { parseElements: ['track', 'route', 'waypoint'] };
    }

    class GPX extends FeatureGroup {
        constructor(gpx: string, options?: GPXOptions);
        get_duration_string(duration: number, hidems: boolean): string;
        get_duration_string_iso(duration: number, hidems: boolean): string;
        to_miles(kilometers: number): number;
        to_ft(meters: number): number;
        m_to_km(meters: number): number;
        m_to_mi(meters: number): number;

        get_name(): string;
        get_desc(): string;
        get_author(): string;
        get_copyright(): string;
        get_distance(): number;
        get_distance_imp(): number;

        get_start_time(): Date;
        get_end_time(): Date;
        get_moving_time(): number;
        get_total_time(): number;

        get_moving_pace(): number;
        get_moving_pace_imp(): number;

        get_moving_speed(): number;
        get_moving_speed_imp(): number;

        get_total_speed(): number;
        get_total_speed_imp(): number;

        get_elevation_gain(): number;
        get_elevation_loss(): number;
        get_elevation_gain_imp(): number;
        get_elevation_loss_imp(): number;
        get_elevation_data(): Array<[number, number, string]>;
        get_elevation_data_imp(): Array<[number, number, string]>;
        get_elevation_max(): number;
        get_elevation_min(): number;
        get_elevation_max_imp(): number;
        get_elevation_min_imp(): number;

        get_average_hr(): number;
        get_average_temp(): number;
        get_average_cadence(): number;
        get_heartrate_data(): Array<[number, number, string]>;
        get_heartrate_data_imp(): Array<[number, number, string]>;
        get_cadence_data(): Array<[number, number, string]>;
        get_temp_data(): Array<[number, number, string]>;
        get_cadence_data_imp(): Array<[number, number, string]>;
        get_temp_data_imp(): Array<[number, number, string]>;

        reload(): void;
    }
}
