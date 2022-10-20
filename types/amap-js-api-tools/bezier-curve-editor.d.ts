declare namespace AMap {
    namespace BezierCurveEditor {
        interface Options {
            createOptions?: Object | undefined;
            editOptions?: Object | undefined;
            controlOptions?: AMap.Marker.Options | undefined;
            midControlOptions?: AMap.Marker.Options | undefined;
            bezierControlPoint?: AMap.Marker.Options | undefined;
            bezierControlLine?: AMap.Polyline.Options | undefined;
        }
        interface EventMap {
            addnode: Event<'addnode', {target: BezierCurve, lnglat: LngLat, pixel: Pixel}>;
            removenode: Event<'removenode', {target: BezierCurve, lnglat: LngLat, pixel: Pixel}>;
            adjust: Event<'adjust', {target: BezierCurve, lnglat: LngLat, pixel: Pixel}>;
            add: Event<'add', {target: BezierCurve}>;
            end: Event<'end', {target: BezierCurve}>;
        }
    }

    class BezierCurveEditor extends EventEmitter {
        constructor(map: Map, BezierCurve: BezierCurve, opts?: BezierCurveEditor.Options);
        open(): void;
        setTarget(tar: any, overlay: BezierCurve): void;
        getTarget(): BezierCurve | undefined;
        close(): void;
    }
}
