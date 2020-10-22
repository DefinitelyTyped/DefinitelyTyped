declare namespace AMap {
    namespace Polygon {
        interface EventMap<I = Polygon> extends PathOverlay.EventMap<I> { }
        interface Options<ExtraData = any> extends PathOverlay.Options<ExtraData> {
            /**
             * 多边形轮廓线的节点坐标数组
             */
            path?: LocationValue[] | LocationValue[][];
            /**
             * 多边形填充颜色
             */
            fillColor?: string;
            /**
             * 边形填充透明度
             */
            fillOpacity?: number;
        }

        interface GetOptionsResult<ExtraData = any> extends ShapeOverlay.GetOptionsResult<ExtraData> {
            /**
             * 多边形填充颜色
             */
            fillColor: string;
            /**
             * 边形填充透明度
             */
            fillOpacity: number;
            /**
             * 多边形轮廓线的节点坐标数组
             */
            path: LngLat[] | LngLat[][];
            /**
             * 折线拐点的绘制样式
             */
            lineJoin: StrokeLineJoin;
            texture: string;
        }
    }

    class Polygon<ExtraData = any> extends PathOverlay<ExtraData> {
        /**
         * 多边形
         * @param options 选项
         */
        constructor(options?: Polygon.Options<ExtraData>);
        /**
         * 设置多边形轮廓线节点数组
         * @param path 轮廓线节点
         */
        setPath(path: LocationValue[] | LocationValue[][]): void;
        /**
         * 获取多边形轮廓线节点数组
         */
        getPath(): LngLat[] | LngLat[][];
        /**
         * 修改多边形属性
         * @param options 属性
         */
        setOptions(options: Polygon.Options<ExtraData>): void;
        /**
         * 获取多边形的属性
         */
        getOptions(): Partial<
            this extends Omit<Ellipse, keyof Polygon> ? Ellipse.GetOptionsResult<ExtraData> :
            this extends Omit<Rectangle, keyof Polygon> ? Rectangle.GetOptionsResult<ExtraData> :
            Polygon.GetOptionsResult<ExtraData>
        >;
        /**
         * 获取多边形的面积
         */
        getArea(): number;
        /**
         * 判断指定点坐标是否在多边形范围内
         * @param point 坐标
         */
        contains(point: LocationValue): boolean;
    }
}
