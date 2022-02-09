declare namespace AMap {
    namespace Circle {
        interface EventMap<I = Circle> extends ShapeOverlay.EventMap<I> {
            setCenter: Event<'setCenter'>;
            setRadius: Event<'setRadius'>;
        }

        interface Options<ExtraData = any> {
            map?: Map | undefined;
            zIndex?: number | undefined;
            center?: LocationValue | undefined;
            bubble?: boolean | undefined;
            cursor?: string | undefined;
            radius?: number | undefined;
            strokeColor?: string | undefined;
            strokeOpacity?: number | undefined;
            strokeWeight?: number | undefined;
            fillColor?: string | undefined;
            fillOpacity?: number | undefined;
            strokeStyle?: StrokeStyle | undefined;
            extData?: ExtraData | undefined;
            strokeDasharray?: number[] | undefined;

            // internal
            visible?: boolean | undefined;
            unit?: 'meter' | 'px' | undefined; // 'might be typo'
        }

        type GetOptionsResult<ExtraData = any> = Merge<Polygon.GetOptionsResult<ExtraData>, {
            path: LngLat[];
            center: LngLat;
            radius: number;
        }>;
    }

    class Circle<ExtraData = any> extends ShapeOverlay<ExtraData> {
        /**
         * 圆形覆盖物
         * @param options 覆盖物选项
         */
        constructor(options?: Circle.Options<ExtraData>);
        /**
         * 设置圆中心点
         * @param center 中心点经纬度
         * @param preventEvent 阻止触发事件
         */
        setCenter(center: LocationValue, preventEvent?: boolean): void;
        /**
         * 获取圆中心点
         */
        getCenter(): LngLat | undefined;
        /**
         * 获取圆外切矩形范围
         */
        getBounds(): Bounds | null;
        /**
         * 设置圆形的半径
         * @param radius 半径
         * @param preventEvent 阻止触发事件
         */
        setRadius(radius: number, preventEvent?: boolean): void;
        /**
         * 获取圆形的半径
         */
        getRadius(): number;
        /**
         * 修改选项
         * @param options 选项
         */
        setOptions(options?: Circle.Options<ExtraData>): void;
        /**
         * 获取选项
         */
        getOptions(): Partial<Circle.GetOptionsResult<ExtraData>>;
        /**
         * 判断指定点坐标是否在圆内
         * @param point 坐标
         */
        contains(point: LocationValue): boolean;

        // internal
        getPath(count?: number): LngLat[];
    }
}
