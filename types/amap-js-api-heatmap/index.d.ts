// Type definitions for non-npm package amap-js-api-heatmap 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/layer#m_AMap.Heatmap
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />
declare namespace AMap {
    namespace Heatmap {
        interface Options {
            /**
             * 热力图中单个点的半径，默认：30，单位：pixel
             */
            radius?: number;
            /**
             * 热力图的渐变区间
             */
            gradient?: { [key: string]: string };
            /**
             * 热力图透明度数组，取值范围[0,1]，0表示完全透明，1表示不透明
             * 默认：[0,1]
             */
            opacity?: [number, number];
            /**
             * 支持的缩放级别范围，取值范围[3-18]
             * 默认：[3,18]
             */
            zooms?: [number, number];

            rejectMapMask?: boolean;
            visible?: boolean;
            radiusUnit?: string;
            blur?: number;
            zIndex?: number;
            renderOnZooming?: boolean;
            ['3d']?: {
                heightScale?: number;
                heightBezier?: number[];
                gridSize?: number;
                drawGridLine?: boolean;
            };
        }
        interface Data {
            /**
             * 经度
             */
            lng: number;
            /**
             * 维度
             */
            lat: number;
            /**
             * 权重
             */
            count: number;
        }
        interface DataSet {
            /**
             * 权重的最大值
             */
            max?: number;
            /**
             * 坐标数据集
             */
            data: Data[];
        }
    }

    class Heatmap {
        /**
         * 热力图
         * @param map 地图对象
         * @param opts 热力图选项
         */
        constructor(map: Map, opts?: Heatmap.Options);
        /**
         * 设置热力图要叠加的地图对象
         * @param map 地图对象
         */
        setMap(map: Map): void;
        /**
         * 设置热力图属性
         * @param opts 热力图属性
         */
        setOptions(opts?: Heatmap.Options): void;
        /**
         * 设置热力图展现的数据集，数据格式详见
         * https://lbs.amap.com/api/javascript-api/reference/layer#m_AMap.Heatmap
         * @param dataset 数据集
         */
        setDataSet(dataset: Heatmap.DataSet | {
            data: string;
            dataParser?(data: any): Heatmap.DataSet;
        }): void;
        /**
         * 向热力图数据集中添加坐标点，count不填写时默认：1
         * @param lng 经度
         * @param lat 维度
         * @param count 权重
         */
        addDataPoint(lng: number, lat: number, count?: number): void;
        /**
         * 隐藏热力图
         */
        hide(): void;
        /**
         * 显示热力图
         */
        show(): void;
        /**
         * 获取热力图叠加地图对象
         */
        getMap(): Map;
        /**
         * 	获取热力图的属性信息
         */
        getOptions(): Heatmap.Options;
        /**
         * 输出热力图的数据集，数据结构同setDataSet中的数据集
         */
        getDataSet(): Heatmap.DataSet;
        // internal

        setzIndex(zIndex: number): void;
        getzIndex(): number;
    }
}
