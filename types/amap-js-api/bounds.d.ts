declare namespace AMap {
    class Bounds {
        /**
         * 地物对象的经纬度矩形范围。
         * @param southWest 西南角经纬度
         * @param northEast 东北角经纬度
         */
        constructor(southWest: LngLat, northEast: LngLat);
        /**
         * 指定点坐标是否在矩形范围内
         * @param point 制定坐标
         */
        contains(point: LocationValue): boolean;
        /**
         * 获取当前Bounds的中心点经纬度坐标
         */
        getCenter(): LngLat;
        /**
         * 获取西南角坐标
         */
        getSouthWest(): LngLat;
        /**
         * 获取东南角坐标
         */
        getSouthEast(): LngLat;
        /**
         * 获取东北角坐标
         */
        getNorthEast(): LngLat;
        /**
         * 获取西北角坐标
         */
        getNorthWest(): LngLat;
        /**
         * 以字符串形式返回地物对象的矩形范围
         */
        toString(): string;
    }
}
