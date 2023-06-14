// Type definitions for Leaflet.Sync 0.2
// Project: https://github.com/jieter/Leaflet.Sync
// Definitions by: Gabriel O. Martins <https://github.com/OliverBiel/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';

declare module 'leaflet' {
    interface SyncMapOptions {
        noInitialSync?: boolean;
        syncCursor?: boolean;
        syncCursorMarkerOptions?: CircleMarkerOptions;
        offsetFn?: (center: LatLngExpression, zoom: number, refMap: Map, targetMap: Map) => LatLngExpression;
    }

    interface Map {
        sync(map: Map, options?: SyncMapOptions): this;
        unsync(map: Map): this;
        isSynced(otherMap?: Map): boolean;
    }

    interface Sync {
        offsetHelper(
            ratioRef: [number, number] | number[],
            ratioTarget: [number, number] | number[],
        ): (center: LatLngExpression, zoom: number, refMap: Map, targetMap: Map) => LatLngExpression;
    }

    const Sync: Sync;
}
