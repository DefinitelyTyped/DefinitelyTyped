declare namespace AMap {
    namespace Polyline {
        interface EventMap<I = Polyline> extends PathOverlay.EventMap<I> { }
        interface GetOptionsResult<ExtraData = any> extends ShapeOverlay.GetOptionsResult<ExtraData> {
            isOutline: boolean;
            outlineColor: string;
            geodesic: boolean;
            path: LngLat[];
            lineJoin: StrokeLineJoin;
            lineCap: StrokeLineCap;
            borderWeight: number;
            showDir: boolean;
            dirColor: string;
            dirImg: string;
        }

        interface Options<ExtraData = any> extends PathOverlay.Options<ExtraData> {
            isOutline?: boolean;
            outlineColor?: string;
            geodesic?: boolean;
            dirColor?: string;
            borderWeight?: number;
            showDir?: boolean;
            // internal
            path?: LocationValue[];
        }
    }

    class Polyline<ExtraData = any> extends PathOverlay<ExtraData> {
        constructor(options?: BezierCurve.Options<ExtraData> | Polyline.Options<ExtraData>);
        setPath(
            path: this extends Omit<BezierCurve, keyof Polyline> ?
                Array<Array<number | string | Array<string | number>>>
                : LocationValue[]
        ): void;
        getPath(): this extends Omit<BezierCurve, keyof Polyline> ?
            Array<LngLat & { controlPoints: LngLat[] }>
            : LngLat[];
        getLength(): number;
        setOptions(options: this extends Omit<BezierCurve, keyof Polyline> ?
            Partial<BezierCurve.Options<ExtraData>>
            : Polyline.Options<ExtraData>
        ): void;
        getOptions(): Partial<Polyline.GetOptionsResult<ExtraData>>;
    }
}
