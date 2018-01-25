// Type definitions for jQuery Adapter for waypoints 4.0
// Project: https://github.com/imakewebthings/waypoints
// Definitions by: Sergei Dorogin <https://github.com/evil-shrike>, Dominik Bułaj <https://github.com/dominikbulaj>, Alexey Kolotovchenkov <https://github.com/Koloto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="waypoints" />

interface JQuery {
	waypoint(handler: (this: Waypoint, direction?: string) => void, options?: WaypointOptionsJQuery): JQuery;
	waypoint(options?: WaypointOptionsJQuery): JQuery;
}

interface WaypointOptionsJQuery extends WaypointOptionsBase {
    handler?: (this: Waypoint, direction?: string) => void;
    context?: HTMLElement|string;
}
