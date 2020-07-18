/* Type definitions for jQuery Adapter for waypoints 4.0 */

/// <reference types="waypoints" />

interface JQuery {
    waypoint(handler: (this: Waypoint, direction?: string) => void, options?: WaypointOptionsJQuery): JQuery;
    waypoint(options?: WaypointOptionsJQuery): JQuery;
}

interface WaypointOptionsJQuery extends WaypointOptionsBase {
    handler?: (this: Waypoint, direction?: string) => void;
    context?: HTMLElement|string;
}
