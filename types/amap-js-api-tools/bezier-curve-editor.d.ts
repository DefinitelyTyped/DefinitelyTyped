declare namespace AMap {
    namespace BezierCurveEditor {
        interface Options {
            createOptions?: object | undefined;
            editOptions?: object | undefined;
            controlOptions?: Marker.Options | undefined;
            midControlOptions?: Marker.Options | undefined;
            bezierControlPoint?: Marker.Options | undefined;
            bezierControlLine?: Polyline.Options | undefined;
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
