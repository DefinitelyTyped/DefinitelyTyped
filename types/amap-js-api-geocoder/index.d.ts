// Type definitions for non-npm package amap-js-api-geocoder 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/lnglat-to-address#m_AMap.Geocoder
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace Geocoder {
        interface EventMap {
            complete: Event<'complete', GeocodeResult | {} | ReGeocodeResult | BatchReGeocodeResult>;
            error: Event<'error', { info: string }>;
        }
        interface Options {
            /**
             * 城市
             */
            city?: string;
            /**
             * 中心点
             */
            radius?: number;
            /**
             * 语言类型
             */
            lang?: Lang;
            /**
             * 是否批量查询
             */
            batch?: boolean;
            /**
             * 是否返回详细信息
             */
            extensions?: 'base' | 'all';
        }
        interface BuildingArea {
            /**
             * 唯一标识
             */
            id: string;
            /**
             * 名称
             */
            name: string;
            /**
             * 中心点经纬度
             */
            location: LngLat;
        }
        interface GeocodeAddressComponent {
            /**
             * 社区
             */
            neighborhood: string;
            /**
             * 社区类型
             */
            neighborhoodType: string;
            /**
             * 楼/大厦
             */
            building: string;
            /**
             * 楼类型
             */
            buildingType: string;
            /**
             * 省
             */
            province: string;
            /**
             * 城市
             */
            city: string;
            /**
             * 区
             */
            district: string;
            /**
             * 乡镇
             */
            township: string;
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 街道
             */
            street: string;
            /**
             * 门牌号
             */
            streetNumber: string;
        }
        interface ReGeocodeAddressComponent {
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 所属商圈信息
             */
            businessAreas: BuildingArea[];
            /**
             * 社区
             */
            neighborhoodType: string;
            /**
             * 社区类型
             */
            neighborhood: string;
            /**
             * 楼/大厦
             */
            building: string;
            /**
             * 楼类型
             */
            buildingType: string;
            /**
             * 街道
             */
            street: string;
            /**
             * 门牌号
             */
            streetNumber: string;
            /**
             * 省
             */
            province: string;
            /**
             * 城市
             */
            city: string;
            /**
             * 区
             */
            district: string;
            /**
             * 乡镇
             */
            township: string;
        }
        interface Geocode {
            /**
             * 地址组成元素
             */
            addressComponent: GeocodeAddressComponent;
            /**
             * 格式化地址
             */
            formattedAddress: string;
            /**
             * 坐标
             */
            location: LngLat;
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 给定地址匹配级别
             */
            level: string;
        }
        interface GeocodeResult {
            /**
             * 状态说明
             */
            info: string;
            /**
             * 地理编码结果数目
             */
            resultNum: string;
            /**
             * 地理编码结果
             */
            geocodes: Geocode[];
        }
        interface Road {
            /**
             * 唯一标识
             */
            id: string;
            /**
             * 名称
             */
            name: string;
            /**
             * 道路离查询点最近距离
             */
            distance: number;
            /**
             * 道路上离查询点最近的点坐标
             */
            location: LngLat;
            /**
             * 与查询点的相对方位
             */
            direction: string;
        }
        interface Cross {
            /**
             * 道路离查询点最近距离
             */
            distance: number;
            /**
             * 与查询点的相对方位
             */
            direction: string;
            /**
             * 经纬度
             */
            location: LngLat;
            /**
             * 第一条道路id
             */
            first_id: string;
            /**
             * 第一条道路名称
             */
            first_name: string;
            /**
             * 第二条道路id
             */
            second_id: string;
            /**
             * 第二条道路名称
             */
            second_name: string;
        }
        interface ReGeocodePoi {
            /**
             * 唯一标识
             */
            id: string;
            /**
             * 名称
             */
            name: string;
            /**
             * 类型
             */
            type: string;
            /**
             * 电话
             */
            tel: string;
            /**
             * 该Poi到请求坐标的距离
             */
            distance: number;
            /**
             * 该Poi相对于请求坐标的方向
             */
            direction: string;
            /**
             * 址信息
             */
            address: string;
            /**
             * 坐标
             */
            location: LngLat;
            /**
             * 商圈名称
             */
            businessArea: string;
        }
        interface ReGeocodeAoi {
            adcode: string;
            area: string;
            id: string;
            location: LngLat;
            name: string;
            type: string;
        }
        interface ReGeocode {
            /**
             * 地址组成元素
             */
            addressComponent: ReGeocodeAddressComponent;
            /**
             * 格式化地址
             */
            formattedAddress: string;
            /**
             * 道路信息列表
             */
            roads: Road[];
            /**
             * 道路路口列表
             */
            crosses: Cross[];
            /**
             * 兴趣点列表
             */
            pois: ReGeocodePoi[];
            aois?: ReGeocodeAoi[];
        }
        interface ReGeocodeResult {
            /**
             * 状态说明
             */
            info: string;
            /**
             * 逆地理编码结果
             */
            regeocode: ReGeocode;
        }
        interface BatchReGeocodeResult {
            /**
             * 状态说明
             */
            info: string;
            /**
             * 批量逆地理编码结果
             */
            regeocodes: ReGeocode[];
        }
        type SearchStatus = 'complete' | 'no_data' | 'error';
    }
    class Geocoder extends EventEmitter {
        /**
         * 地理编码与逆地理编码
         * @param options 选项
         */
        constructor(options?: Geocoder.Options);
        /**
         * 根据给定的地址描述进行解析
         * @param address 地址描述
         * @param callback 回调
         */
        getLocation(
            address: string | string[],
            callback: (status: Geocoder.SearchStatus, result: Geocoder.GeocodeResult | string) => void
        ): void;
        /**
         * 设置地址描述所在城市
         * @param city 城市
         */
        setCity(city?: string): void;
        /**
         * 根据给定坐标进行解析
         * @param location 坐标
         * @param callback 回调
         */
        getAddress(
            location: LocationValue,
            callback: (status: Geocoder.SearchStatus, result: Geocoder.ReGeocodeResult | string) => void
        ): void;
        /**
         * 根据给定坐标进行解析
         * @param locations 坐标数组
         * @param callback 回调
         */
        getAddress(
            locations: LocationValue[],
            callback: (status: Geocoder.SearchStatus, result: Geocoder.BatchReGeocodeResult | string) => void
        ): void;

        // internal
        setLang(lang?: Lang): void;
        getLang(): Lang | undefined;
    }
}
