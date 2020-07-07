type ReferOverlayOptions<O> =
    O extends AMap.BezierCurve ? AMap.BezierCurve.Options
    : O extends AMap.Polyline ? AMap.Polyline.Options
    : O extends AMap.Circle ? AMap.Circle.Options
    : O extends AMap.Ellipse ? AMap.Ellipse.Options
    : O extends AMap.Polygon ? AMap.Polygon.Options
    : O extends AMap.Text ? AMap.Text.Options
    : O extends AMap.Marker ? AMap.Marker.Options
    : O extends AMap.Rectangle ? AMap.Rectangle.Options
    : any;

declare namespace AMap {
    class OverlayGroup<O extends Overlay = Overlay, ExtraData = any> extends Overlay<ExtraData> {
        /**
         * 覆盖物集合
         * @param overlays 覆盖物
         */
        constructor(overlays?: O | O[]);
        /**
         * 添加单个覆盖物到集合中，不支持添加重复的覆盖物
         * @param overlay 覆盖物
         */
        addOverlay(overlay: O | O[]): this;
        /**
         *     添加覆盖物数组到集合中，不支持添加重复的覆盖物
         * @param overlay 覆盖物数组
         */
        addOverlays(overlay: O | O[]): this;
        /**
         * 返回当前集合中所有的覆盖物
         */
        getOverlays(): O[];
        /**
         * 判断传入的覆盖物实例是否在集合中
         * @param overlay 覆盖物
         */
        hasOverlay(overlay: O | ((this: null, item: O, index: number, list: O[]) => boolean)): boolean;
        /**
         * 从集合中删除传入的覆盖物实例
         * @param overlay 覆盖物
         */
        removeOverlay(overlay: O | O[]): this;
        /**
         *     从集合中删除传入的覆盖物实例数组
         * @param overlay 覆盖物数组
         */
        removeOverlays(overlay: O | O[]): this;
        /**
         * 清空集合
         */
        clearOverlays(): this;
        /**
         * 对集合中的覆盖物做迭代操作
         * @param iterator 迭代回调
         * @param context 执行上下文
         */
        eachOverlay<C = O>(iterator: (this: C, overlay: O, index: number, overlays: O[]) => void, context?: C): this;
        /**
         * 指定集合中里覆盖物的显示地图
         * @param map 地图
         */
        setMap(map: null | Map): this;
        /**
         * 修改覆盖物属性
         * @param options 属性
         */
        setOptions(options: ReferOverlayOptions<O>): this;
        /**
         * 在地图上显示集合中覆盖物
         */
        show(): this;
        /**
         *     在地图上隐藏集合中覆盖物
         */
        hide(): this;
        /**
         * 查找集合中的覆盖物
         * @param finder 查找回调
         */
        getOverlay(finder: ((this: null, item: O, index: number, list: O[]) => boolean) | O): O | null;
    }
}
