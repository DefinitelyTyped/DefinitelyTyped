declare namespace AMap {
    namespace PathOverlay {
        interface EventMap<I = PathOverlay> extends ShapeOverlay.EventMap<I> { }
        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            /**
             * 是否可见
             */
            visible?: boolean;
            /**
             * 覆盖物层级
             */
            zIndex?: number;
            /**
             * 描边线条颜色
             */
            strokeColor?: string;
            /**
             * 描边线条透明度
             */
            strokeOpacity?: number;
            /**
             * 描边宽度
             */
            strokeWeight?: number;
            /**
             * 描边样式
             */
            strokeStyle?: StrokeStyle;
            /**
             * 虚线间隔
             */
            strokeDasharray?: number[];
            /**
             * 折线拐点的绘制样式
             */
            lineJoin?: StrokeLineJoin;
            /**
             * 折线两端线帽的绘制样式
             */
            lineCap?: StrokeLineCap;
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
