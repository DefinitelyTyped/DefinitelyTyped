// Type definitions for waypoints 4.x
// Project: https://github.com/imakewebthings/waypoints
// Definitions by: Dominik Bułaj <https://github.com/dominikbulaj>, Alexey Kolotovchenkov <https://github.com/Koloto>, Sergei Dorogin <https://github.com/evil-shrike>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface WaypointOptionsBase {
    offset?: string|number|(() => number);
    continuous?: boolean;
    enabled?: boolean;
    group?: string;
    horizontal?: boolean;
}
interface WaypointOptions extends WaypointOptionsBase {
    element: HTMLElement;
    handler: (this: Waypoint, direction?: string) => void;
    context?: HTMLElement;
}

declare class WaypointGroup {
    first: () => Waypoint;
    last: () => Waypoint;
    name: string;
    axis: string;
    waypoints: Waypoint[];
}

declare class WaypointContext {
    adapter: WaypointAdapter;
    element: HTMLElement|Window;
    waypoints: {horizontal: {}, vertical: {}}; // http://imakewebthings.com/waypoints/api/context/#waypoints-property
    destroy: () => Waypoint;
    refresh: () => Waypoint;
}

declare class WaypointAdapter {
    constructor(element: HTMLElement);
    innerHeight(): number;
    innerWidth(): number;
    off(event: string): undefined;
    offset(): {top: number, left: number};
    on(event: string, handler: () => void): undefined;
    outerHeight(includeMargin: boolean): number;
    outerWidth(includeMargin: boolean): number;
    scrollLeft(): number;
    scrollTop(): number;
    static extend(...objects: any[]): any;
    static inArray(value: any, array: any[], startIndex: number): number;
    static isEmptyObject(object: any): boolean;
}

declare class Waypoint {
    constructor(options: WaypointOptions);
    // properties
    adapter: WaypointAdapter;
    context: WaypointContext;
    element: HTMLElement;
    group: WaypointGroup;
    options: WaypointOptions;
    triggerPoint: number;

    // Instance Methods
    destroy(): Waypoint;
    disable(): Waypoint;
    enable(): Waypoint;
    next(): Waypoint | string; // actually `null` not string
    previous(): Waypoint | string; // actually `null` not string
    // Class Methods
    static destroyAll(): void;
    static disableAll(): void;
    static enableAll(): void;
    static refreshAll(): void;
    static viewportHeight(): number;
    static viewportWidth(): number;
    static adapters: {
        push: ({name: string, Adapter: WaypointAdapter})
    };
    static Adapter: WaypointAdapter;
    // Waypoint.Context
    static Context: {
        findByElement(element: HTMLElement): WaypointContext|undefined;
    };
}
