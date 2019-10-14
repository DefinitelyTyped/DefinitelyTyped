declare namespace AMap {
    namespace GeometryUtil {
        /**
         * 计算两个经纬度点之间的实际距离
         */
        function distance(
            point1: LocationValue,
            point2: LocationValue | LocationValue[]
        ): number;
        /**
         * 计算一个经纬度路径围成区域的实际面积
         */
        function ringArea(ring: LocationValue[]): number;
        /**
         * 判断一个经纬度路径是否为顺时针
         */
        function isClockwise(path: LocationValue[]): boolean;
        /**
         * 计算一个经纬度路径的实际长度
         */
        function distanceOfLine(line: LocationValue[]): number;
        /**
         * 计算两个经纬度面的交叉区域
         */
        function ringRingClip(
            ring1: LocationValue[],
            ring2: LocationValue[]
        ): Array<[number, number]>;
        /**
         * 判断两个经纬度面是否交叉
         */
        function doesRingRingIntersect(
            ring1: LocationValue[],
            ring2: LocationValue[]
        ): boolean;
        /**
         * 判断经纬度路径和经纬度面是否交叉
         */
        function doesLineRingIntersect(
            line: LocationValue[],
            ring: LocationValue[]
        ): boolean;
        /**
         * 判断两个经纬度路径是否相交
         */
        function doesLineLineIntersect(
            line1: LocationValue[],
            line2: LocationValue[]
        ): boolean;
        /**
         * 判断线段和多个环是否相交
         */
        function doesSegmentPolygonIntersect(
            point1: LocationValue,
            point2: LocationValue,
            polygon: LocationValue[][]
        ): boolean;
        /**
         * 判断线段和一个环是否相交
         */
        function doesSegmentRingIntersect(
            point1: LocationValue,
            point2: LocationValue,
            ring: LocationValue[]
        ): boolean;
        /**
         * 判断线段和一个路径是否相交
         */
        function doesSegmentLineIntersect(
            point1: LocationValue,
            point2: LocationValue,
            line: LocationValue[]
        ): boolean;
        /**
         * 判断两个线段是否相交
         */
        function doesSegmentsIntersect(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue,
            point4: LocationValue
        ): boolean;
        /**
         * 判断点是否在环内
         */
        function isPointInRing(point: LocationValue, ring: LocationValue[]): boolean;
        /**
         * 判断环是否在另一个环内
         */
        function isRingInRing(ring1: LocationValue[], ring2: LocationValue[]): boolean;
        /**
         * 判断点是否在多个环组成区域内
         */
        function isPointInPolygon(point: LocationValue, polygon: LocationValue[][]): boolean;
        /**
         * 判断点是否在多个环组成区域内
         */
        function makesureClockwise(path: Array<[number, number]>): Array<[number, number]>;
        /**
         * 将一个路径变为逆时针
         */
        function makesureAntiClockwise(path: Array<[number, number]>): Array<[number, number]>;
        /**
         * 计算P2P3上距离P1最近的点
         * @param point1 P1
         * @param point2 P2
         * @param point3 P3
         */
        function closestOnSegment(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue
        ): [number, number];
        /**
         * 计算line上距离P最近的点
         */
        function closestOnLine(point: LocationValue, line: LocationValue[]): [number, number];
        /**
         * 计算P2P3到P1的距离
         * @param point1 P1
         * @param point2 P2
         * @param point3 P3
         */
        function distanceToSegment(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue
        ): number;
        /**
         * 计算P到line的距离
         */
        function distanceToLine(point: LocationValue, line: LocationValue[]): number;
        /**
         * 判断P1是否在P2P3上
         * @param point1 P1
         * @param point2 P2
         * @param point3 P3
         * @param tolerance 误差范围
         */
        function isPointOnSegment(
            point1: LocationValue,
            point2: LocationValue,
            point3: LocationValue,
            tolerance?: number
        ): boolean;
        /**
         * 判断P是否在line上
         * @param point 点P
         * @param line 线
         * @param tolerance 误差范围
         */
        function isPointOnLine(
            point: LocationValue,
            line: LocationValue[],
            tolerance?: number
        ): boolean;
        /**
         * 判断P是否在ring的边上
         * @param point 点P
         * @param ring 环
         * @param tolerance 误差范围
         */
        function isPointOnRing(
            point: LocationValue,
            ring: LocationValue[],
            tolerance?: number
        ): boolean;
        /**
         * 判断P是否在多个ring的边上
         * @param point 点P
         * @param polygon 多边形
         * @param tolerance 误差范围
         */
        function isPointOnPolygon(
            point: LocationValue,
            polygon: LocationValue[][],
            tolerance?: number
        ): boolean;

        function doesPolygonPolygonIntersect(
            polygon1: LocationValue[],
            polygon2: LocationValue[]
        ): boolean;

        function distanceToPolygon(point: LocationValue, polygon: LocationValue[]): number;

        function triangulateShape(
            shape1: LngLat[] | Pixel[] | [number, number],
            shape2: LngLat[] | Pixel[] | [number, number]
        ): number[];
    }
}
