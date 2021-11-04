declare namespace AMap {
    namespace BezierCurve {
        interface EventMap<I = BezierCurve> extends Polyline.EventMap<I> { }
        type Options<ExtraData = any> = Merge<Polyline.Options<ExtraData>, {
            /**
             * 贝瑟尔曲线的路径
             */
            path: Array<Array<number | string | Array<string | number>>>;
            // internal
            tolerance?: number | undefined;
            interpolateNumLimit?: [number | number] | undefined;
        }>;

        interface GetOptionsResult<ExtraData = any> extends Polyline.GetOptionsResult<ExtraData> {
            /**
             * 贝瑟尔曲线的路径
             */
            path: Array<LngLat & { controlPoints: LngLat[] }>;
        }
    }
    class BezierCurve<ExtraData = any> extends Polyline<ExtraData> {
        /**
         * 贝瑟尔曲线
         * @param options 覆盖物选项
         */
        constructor(options: BezierCurve.Options<ExtraData>);
        /**
         * 获取覆盖物选项
         */
        getOptions(): Partial<BezierCurve.GetOptionsResult<ExtraData>>;
        // internal
        getInterpolateLngLats(): LngLat[];
        getSerializedPath(): number[][];
    }
}
