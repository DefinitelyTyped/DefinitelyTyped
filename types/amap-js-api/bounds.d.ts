declare namespace AMap {
    class Bounds {
        /**
         * 地物对象的经纬度矩形范围。
         * @param coords 由西南角，东北角经纬度组成的数组，分别是[西南角经度， 西南角纬度，东北角经度，东北角纬度]
         */
        constructor(coords?: [number, number, number, number]);
        /**
         * 地物对象的经纬度矩形范围。
         * @param southWest 西南角经纬度
         * @param northEast 东北角经纬度
         */
        constructor(southWest: LocationValue, northEast: LocationValue);
        /**
         * 地物对象的经纬度矩形范围。
         * @param southWestLng 西南角经度
         * @param southWestLat 西南角纬度
         * @param northEastLng 东北角经度
         * @param northEastLat 东北角纬度
         */
        constructor(southWestLng: number, southWestLat: number, northEastLng: number, northEastLat: number);
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
