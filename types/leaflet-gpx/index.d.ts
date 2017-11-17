// Type definitions for leaflet-polylinedecorator 1.1
// Project: https://github.com/bbecquet/Leaflet.PolylineDecorator#readme
// Definitions by: Viktor Soucek <https://github.com/soucekv>
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
        constructor(gpx: any, options?: GPXOptions);
        get_duration_string(duration: any, hidems: any): any;
        get_duration_string_iso(duration: any, hidems: any): any;
        to_miles(v: any): any;
        to_ft(v: any): any;
        m_to_km(v: any): any;
        m_to_mi(v: any): any;

        get_name(): any;
        get_desc(): any;
        get_author(): any;
        get_copyright(): any;
        get_distance(): any;
        get_distance_imp(): any;

        get_start_time(): any;
        get_end_time(): any;
        get_moving_time(): any;
        get_total_time(): any;

        get_moving_pace(): any;
        get_moving_pace_imp(): any;

        get_moving_speed(): any;
        get_moving_speed_imp(): any;

        get_total_speed(): any;
        get_total_speed_imp(): any;

        get_elevation_gain(): any;
        get_elevation_loss(): any;
        get_elevation_gain_imp(): any;
        get_elevation_loss_imp(): any;
        get_elevation_data(): any;
        get_elevation_data_imp(): any;
        get_elevation_max(): any;
        get_elevation_min(): any;
        get_elevation_max_imp(): any;
        get_elevation_min_imp(): any;

        get_average_hr(): any;
        get_average_temp(): any;
        get_average_cadence(): any;
        get_heartrate_data(): any;
        get_heartrate_data_imp(): any;
        get_cadence_data(): any;
        get_temp_data(): any;
        get_cadence_data_imp(): any;
        get_temp_data_imp(): any;

        reload(): void;
    }
}
