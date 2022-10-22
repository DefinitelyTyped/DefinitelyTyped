declare namespace AMap {
    namespace PolygonEditor {
        interface Options {
            createOptions?: object | undefined;
            editOptions?: object | undefined;
            controlOptions?: CircleMarker | undefined;
            midControlOptions?: CircleMarker.CircleMarkerOptions | undefined;
        }
        interface EventMap {
            addnode: Event<'addnode', {target: Polygon, lnglat: LngLat, pixel: Pixel}>;
            removenode: Event<'removenode', {target: Polygon, lnglat: LngLat, pixel: Pixel}>;
            adjust: Event<'adjust', {target: Polygon, lnglat: LngLat, pixel: Pixel}>;
            move: Event<'move', {target: Polygon, lnglat: LngLat, pixel: Pixel}>;
            add: Event<'add', {target: Polygon}>;
            end: Event<'end', {target: Polygon}>;
        }
    }

    class PolygonEditor extends EventEmitter {
        constructor(map: Map, polygon?: Polygon, opts?: PolygonEditor.Options);
        open(): void;
        setTarget(tar: any, overlay: Polygon): void;
        getTarget(): Polygon | undefined;
        setAdsorbPolygons(list: Polygon | Polygon[]): void;
        clearAdsorbPolygons(): void;
        addAdsorbPolygons(list: Polygon | Polygon[]): void;
        removeAdsorbPolygons(list: Polygon | Polygon[]): void;
        close(): void;
    }
}
