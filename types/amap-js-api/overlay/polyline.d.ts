declare namespace AMap {
    namespace Polyline {
        interface EventMap<I = Polyline> extends PathOverlay.EventMap<I> { }
        interface GetOptionsResult<ExtraData = any> extends ShapeOverlay.GetOptionsResult<ExtraData> {
            /**
             * 线条是否带描边
             */
            isOutline: boolean;
            /**
             * 线条描边颜色
             */
            outlineColor: string;
            /**
             * 是否绘制成大地线
             */
            geodesic: boolean;
            /**
             * 折线的节点数组
             */
            path: LngLat[];
            /**
             * 折线拐点的绘制样式
             */
            lineJoin: StrokeLineJoin;
            /**
             * 折线两端线帽的绘制样式
             */
            lineCap: StrokeLineCap;
            /**
             * 描边的宽度
             */
            borderWeight: number;
            /**
             * 是否延路径显示方向箭头
             */
            showDir: boolean;
            /**
             * 方向箭头颜色
             */
            dirColor: string;
            /**
             * 方向箭头图片
             */
            dirImg: string;
        }

        interface Options<ExtraData = any> extends PathOverlay.Options<ExtraData> {
            /**
             * 线条是否带描边
             */
            isOutline?: boolean;
            /**
             * 线条描边颜色
             */
            outlineColor?: string;
            /**
             * 是否绘制成大地线
             */
            geodesic?: boolean;
            /**
             * 方向箭头颜色
             */
            dirColor?: string;
            /**
             * 描边的宽度
             */
            borderWeight?: number;
            /**
             * 是否延路径显示方向箭头
             */
            showDir?: boolean;

            // internal
            /**
             * 折线的节点数组
             */
            path?: LocationValue[];
        }
    }

    class Polyline<ExtraData = any> extends PathOverlay<ExtraData> {
        /**
         * 折线
         * @param options 选项
         */
        constructor(options?: BezierCurve.Options<ExtraData> | Polyline.Options<ExtraData>);
        /**
         * 设置组成该折线的节点数组
         * @param path 节点数组
         */
        setPath(
            path: this extends Omit<BezierCurve, keyof Polyline> ?
                Array<Array<number | string | Array<string | number>>>
                : LocationValue[]
        ): void;
        /**
         * 获取折线路径的节点数组
         */
        getPath(): this extends Omit<BezierCurve, keyof Polyline> ?
            Array<LngLat & { controlPoints: LngLat[] }>
            : LngLat[];
        /**
         * 获取折线的总长度（单位：米）
         */
        getLength(): number;
        /**
         * 设置线的属性
         * @param options 属性
         */
        setOptions(options: this extends Omit<BezierCurve, keyof Polyline> ?
            Partial<BezierCurve.Options<ExtraData>>
            : Polyline.Options<ExtraData>
        ): void;
        /**
         * 获取线的属性
         */
        getOptions(): Partial<Polyline.GetOptionsResult<ExtraData>>;
    }
}
