// Type definitions for jQuery Adapter for waypoints 4.0
// Project: https://github.com/imakewebthings/waypoints
// Definitions by: Sergei Dorogin <https://github.com/evil-shrike>, Dominik Bułaj <https://github.com/dominikbulaj>, Alexey Kolotovchenkov <https://github.com/Koloto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="waypoints" />

interface JQuery {
	waypoint(handler: (this: Waypoint, direction?: string) => void, options?: WaypointOptionsJQuery): JQuery;
	waypoint(options?: WaypointOptionsJQuery): JQuery;
}

interface WaypointOptionsJQuery extends WaypointOptionsBase {
    handler?: (this: Waypoint, direction?: string) => void;
    context?: any; // Actually it's - `HTMLElement|string` but tsc fails with error TS2430: Interface 'WaypointOptionsJQuery' incorrectly extends interface 'WaypointOptionsBase'
}
