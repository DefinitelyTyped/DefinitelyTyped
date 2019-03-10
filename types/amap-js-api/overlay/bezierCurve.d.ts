declare namespace AMap {
    namespace BezierCurve {
        interface EventMap<I = BezierCurve> extends Polyline.EventMap<I> { }
        type Options<ExtraData = any> = Merge<Polyline.Options<ExtraData>, {
            // internal
            path: Array<Array<number | string | Array<string | number>>>;
            tolerance?: number;
            interpolateNumLimit?: [number | number];
        }>;

        interface GetOptionsResult<ExtraData = any> extends Polyline.GetOptionsResult<ExtraData> {
            path: Array<LngLat & { controlPoints: LngLat[] }>;
        }
    }
    class BezierCurve<ExtraData = any> extends Polyline<ExtraData> {
        constructor(options: BezierCurve.Options<ExtraData>);
        getOptions(): Partial<BezierCurve.GetOptionsResult<ExtraData>>;
        // internal
        getInterpolateLngLats(): LngLat[];
        getSerializedPath(): number[][];
    }
}
