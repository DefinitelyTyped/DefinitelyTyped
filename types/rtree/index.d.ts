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

declare class RTree {
    insert(bounds: Rectangle, element: Object): boolean;
    remove(area: Rectangle, element?: Object): any[];
    geoJSON(geoJSON: any): void;
    bbox(arg1: any, arg2?: any, arg3?: number, arg4?: number): any[];
    search(area: Rectangle, return_node?: boolean, return_array?: any[]): any[];
    toJSON(printing?: string | number): string;
}

declare const rtreeLib: {
    (max_node_width?: number): RTree;
    fromJSON(json: string): RTree;
};

export = rtreeLib;
