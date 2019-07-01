declare namespace AMap {
    namespace Ellipse {
        interface EventMap<I = Ellipse> extends ShapeOverlay.EventMap<I> {
            setPath: Event<'setPath'>;
            setCenter: Event<'setCenter'>;
        }

        interface Options<ExtraData = any> extends Polygon.Options<ExtraData> {
            /**
             * 椭圆的中心
             */
            center?: LocationValue;
            /**
             * 椭圆半径
             */
            radius?: [number, number];
        }
        type GetOptionsResult<ExtraData = any> = Merge<Circle.GetOptionsResult<ExtraData>, {
            radius: [number, number];
        }>;
    }

    class Ellipse<ExtraData = any> extends Polygon<ExtraData> {
        /**
         * 椭圆
         * @param options 选项
         */
        constructor(options?: Ellipse.Options<ExtraData>);
        /**
         * 获取椭圆的中心点
         */
        getCenter(): LngLat | undefined;
        /**
         * 设置椭圆的中心点
         * @param center 中心点
         * @param preventEvent 阻止触发事件
         */
        setCenter(center: LocationValue, preventEvent?: boolean): void;
        /**
         * 修改椭圆属性
         * @param options 属性
         */
        setOptions(options: Ellipse.Options<ExtraData>): void;

        // internal
        setRadius(radius: [number, number], preventEvent?: boolean): void;
        getRadius(): [number, number];
    }
}
