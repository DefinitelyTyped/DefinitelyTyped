declare namespace AMap {
    namespace Rectangle {
        interface EventMap<I = Rectangle> extends Polygon.EventMap<I> {
            setBounds: Event<'setBounds'>;
        }

        interface Options<ExtraData = any> extends Polygon.Options<ExtraData> {
            /**
             * 矩形的范围
             */
            bounds?: Bounds;
        }
        type GetOptionsResult<ExtraData = any> = Merge<Polygon.GetOptionsResult<ExtraData>, {
            /**
             * 路径节点数组
             */
            path: LngLat[];
            /**
             * 矩形的范围
             */
            bounds: Bounds;
            texture: string;
        }>;
    }
    class Rectangle<ExtraData = any> extends Polygon<ExtraData> {
        /**
         * 矩形
         * @param options 选项
         */
        constructor(options?: Rectangle.Options<ExtraData>);
        /**
         * 获取矩形范围
         * @param bounds 矩形的范围
         * @param preventEvent 阻止触发事件
         */
        setBounds(bounds: Bounds, preventEvent?: boolean): void;
        /**
         *     修改矩形属性
         * @param options 属性
         */
        setOptions(options: Partial<Rectangle.Options>): void;
    }
}
