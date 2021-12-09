declare namespace AMap {
    namespace PathOverlay {
        interface EventMap<I = PathOverlay> extends ShapeOverlay.EventMap<I> { }
        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            /**
             * 是否可见
             */
            visible?: boolean | undefined;
            /**
             * 覆盖物层级
             */
            zIndex?: number | undefined;
            /**
             * 描边线条颜色
             */
            strokeColor?: string | undefined;
            /**
             * 描边线条透明度
             */
            strokeOpacity?: number | undefined;
            /**
             * 描边宽度
             */
            strokeWeight?: number | undefined;
            /**
             * 描边样式
             */
            strokeStyle?: StrokeStyle | undefined;
            /**
             * 虚线间隔
             */
            strokeDasharray?: number[] | undefined;
            /**
             * 折线拐点的绘制样式
             */
            lineJoin?: StrokeLineJoin | undefined;
            /**
             * 折线两端线帽的绘制样式
             */
            lineCap?: StrokeLineCap | undefined;
        }
    }
    abstract class PathOverlay<ExtraData = any> extends ShapeOverlay<ExtraData> {
        constructor(options?: PathOverlay.Options<ExtraData>);
        /**
         * 获取范围
         */
        getBounds(): Bounds | (this extends Rectangle ? undefined : null);
    }
}
