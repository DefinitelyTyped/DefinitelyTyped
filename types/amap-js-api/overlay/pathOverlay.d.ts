declare namespace AMap {
    namespace PathOverlay {
        interface EventMap<I = PathOverlay> extends ShapeOverlay.EventMap<I> { }
        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            visible?: boolean;
            zIndex?: number;
            strokeColor?: string;
            strokeOpacity?: number;
            strokeWeight?: number;
            strokeStyle?: StrokeStyle;
            strokeDasharray?: number[];
            lineJoin?: StrokeLineJoin;
            lineCap?: StrokeLineCap;
        }
    }
    abstract class PathOverlay<ExtraData = any> extends ShapeOverlay<ExtraData> {
        constructor(options?: PathOverlay.Options<ExtraData>);
        getBounds(): Bounds | (this extends Rectangle ? undefined : null);
    }
}
