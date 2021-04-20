// Type definitions for leaflet-freehandshapes 0.3
// Project: https://github.com/bozdoz/Leaflet.FreeHandShapes
// Definitions by: Cynthia Meng <https://github.com/cynthiameng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'leaflet';
import * as geojson from 'geojson';

declare module 'leaflet' {
    interface FreeHandShapesOptions {
        polygon?: PolylineOptions;
        polyline?: PolylineOptions;
        simplify_tolerance?: number;
        merge_polygons?: boolean;
        concave_polygons?: boolean;
    }

    class FreeHandShapes extends FeatureGroup {
        constructor(options?: FreeHandShapesOptions);
        initialize(options?: FreeHandShapesOptions): void;
        addLayer(layer: Layer, noevent?: boolean): this;
        getEvents(): {[name: string]: LeafletEventHandlerFn};
        drawStartedEvents(onoff?: 'on' | 'off'): void;
        zoomMoveStart(): void;
        startDraw(): void;
        stopDraw(): void;
        mouseDown(event: LeafletMouseEvent): void;
        mouseMove(event: LeafletMouseEvent): void;
        mouseUpLeave(): void;
        polygonClick(polygon: Polygon, event?: LeafletEvent): void;
        getPolygon(latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][]): Polygon;
        addPolygon(latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][], force?: boolean, nomerge?: boolean, noevent?: boolean): void;
        subtractPolygon(latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][], force?: boolean): void;
        getSimplified(latlngs?: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][]): LatLngTuple[];
        merge(latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][]): void;
        subtract(polygon: Polygon): void;
        getLatLngsFromJSON(json: geojson.Feature): any[];
        getCoordsFromLatLngs(latlngs: any[]): any[];
        resetTracer(): void;
        setMapPermissions(method?: 'enable' | 'disable'): void;
        setMode(type?: 'add' | 'subtract' | 'view' | 'delete'): void;
        setMapClass(): void;
    }

    interface Polygon {
        getGroup(): void;
        destroy(): void;
        onClick(event: LeafletEvent): void;
    }
}
