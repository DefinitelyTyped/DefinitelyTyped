// Type definitions for rtree 1.4.0
// Project: https://github.com/leaflet-extras/RTree
// Definitions by: Omede Firouz <https://github.com/oefirouz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface RTreeStatic {
    insert(bounds: Rectangle, element: Object): boolean;
    remove(area: Rectangle, element?: Object): any[];
    geoJSON(geoJSON: any): void;
    bbox(arg1: any, arg2?: any, arg3?: number, arg4?: number): any[];
    search(area: Rectangle, return_node?: boolean, return_array?: any[]): any[];
}

interface RTreeFactory {
    (max_node_width?: number): RTreeStatic;
}

declare var RTree: RTreeFactory;
