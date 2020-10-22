declare namespace AMap {
    class ArrayBounds {
        constructor(bounds: LocationValue[]);
        bounds: LngLat[];
        /**
         * 判断传入的点是否在ArrayBounds内
         * @param point 目标点
         */
        contains(point: LocationValue): boolean;

        // internal
        toBounds(): Bounds;
        getCenter(): LngLat;
    }
}
