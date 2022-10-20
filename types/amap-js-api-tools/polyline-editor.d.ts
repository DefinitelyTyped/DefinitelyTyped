declare namespace AMap {
    namespace PolylineEditor {
        interface Options {
            createOptions?: object | undefined;
            editOptions?: object | undefined;
            controlOptions?: CircleMarker | undefined;
            midControlOptions?: CircleMarker.CircleMarkerOptions | undefined;
        }
        interface EventMap {
            addnode: Event<'addnode', {target: Polyline, lnglat: LngLat, pixel: Pixel}>;
            removenode: Event<'removenode', {target: Polyline, lnglat: LngLat, pixel: Pixel}>;
            adjust: Event<'adjust', {target: Polyline, lnglat: LngLat, pixel: Pixel}>;
            add: Event<'add', {target: Polyline}>;
            end: Event<'end', {target: Polyline}>;
        }
    }

    class PolylineEditor extends EventEmitter {
        constructor(map: Map, polyline?: Polyline, opts?: PolylineEditor.Options);
        setTarget(overlay?: Polyline): void;
        getTarget(): Polyline | undefined;
        open(): void;
        close(): void;
    }
}
