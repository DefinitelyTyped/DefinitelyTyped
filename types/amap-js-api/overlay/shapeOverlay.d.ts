declare namespace AMap {
    namespace ShapeOverlay {
        interface EventMap<I = ShapeOverlay> extends Overlay.EventMap<I> {
            show: Event<'show', { target: I }>;
            hide: Event<'hide', { target: I }>;
            options: Event<'options'>;
            change: Event<'change', { target: I }>;
        }
        interface GetOptionsResult<ExtraData = any> {
            /**
             * 所属地图
             */
            map: Map;
            /**
             * 层级
             */
            zIndex: number;
            /**
             * 线条颜色
             */
            strokeColor: string;
            /**
             * 线条透明度
             */
            strokeOpacity: number;
            /**
             * 线条宽度
             */
            strokeWeight: number;
            /**
             * 线条样式，虚线或者实线
             */
            strokeStyle: StrokeStyle;
            /**
             * 虚线的分段
             */
            strokeDasharray: number[];
            /**
             * 自定义属性
             */
            extData: ExtraData | {};
            /**
             * 事件是否穿透到地图
             */
            bubble: boolean;
            /**
             * 是否支持点击
             */
            clickable: boolean;
        }
    }
    abstract class ShapeOverlay<ExtraData = any> extends Overlay<ExtraData> {
        /**
         * 设置覆盖物属性
         * @param options 属性
         */
        abstract setOptions(options: {}): void;
        /**
         * 获得属性
         */
        abstract getOptions(): {};
        /**
         * 获得层级
         */
        getzIndex(): number;
        /**
         * 设置层级
         * @param zIndex 层级
         */
        setzIndex(zIndex: number): void;
        /**
         * 返回可见
         */
        getVisible(): boolean;
        /**
         * 设置是否可以拖拽
         */
        setDraggable(draggable: boolean): void;
    }
}
