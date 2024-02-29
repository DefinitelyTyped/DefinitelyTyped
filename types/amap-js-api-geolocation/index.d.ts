/// <reference types="amap-js-api" />
/// <reference types="amap-js-api-geocoder" />

declare namespace AMap {
    namespace Geolocation {
        interface EventMap {
            complete: Event<"complete", GeolocationResult>;
            error: Event<"error", ErrorStatus>;
        }
        type ButtonPosition = "LT" | "LB" | "RT" | "RB";
        interface Options {
            /**
             * 是否使用高精度
             */
            enableHighAccuracy?: boolean | undefined;
            /**
             * 超时毫秒数
             */
            timeout?: number | undefined;
            /**
             * 是否禁止使用IP定位，默认值为0
             * 0: 可以使用IP定位
             * 1: 手机设备禁止使用IP定位
             * 2: PC上禁止使用IP定位
             * 3: 所有终端禁止使用IP定位
             */
            noIpLocate?: number | undefined;
            /**
             * 是否禁止使用浏览器Geolocation定位，默认值为0
             * 0: 可以使用浏览器定位
             * 1: 手机设备禁止使用浏览器定位
             * 2: PC上禁止使用浏览器定位
             * 3: 所有终端禁止使用浏览器定位
             */
            noGeoLocation?: number | undefined;
            /**
             * 是否PC端为优先使用浏览器定位
             */
            GeoLocationFirst?: boolean | undefined;
            /**
             * 缓存毫秒数
             */
            maximumAge?: number | undefined;
            /**
             * 是否转换成高德坐标
             */
            convert?: boolean | undefined;
            /**
             * 是否显示定位按钮
             */
            showButton?: boolean | undefined;
            /**
             * 自定义定位按钮的内容
             */
            buttonDom?: string | HTMLElement | undefined;
            /**
             * 定位按钮可停靠的位置
             * “LT”：左上角
             * “LB”：左下角
             * “RT”：右上角
             * “RB”：右下角
             */
            buttonPosition?: ButtonPosition | undefined;
            /**
             * 按钮距离停靠位置的偏移量
             */
            buttonOffset?: Pixel | undefined;
            /**
             * 定位成功时是否在定位位置显示一个Marker
             */
            showMarker?: boolean | undefined;
            /**
             * 定位点Marker的配置
             */
            markerOptions?: Marker.Options | undefined;
            /**
             * 定位成功并且有精度信息时，是否用一个圆圈circle表示精度范围
             */
            showCircle?: boolean | undefined;
            /**
             * 定位点Circle的配置
             */
            circleOptions?: Circle.Options | undefined;
            /**
             * 定位成功后，是否把定位得到的坐标设置为地图中心点坐标
             */
            panToLocation?: boolean | undefined;
            /**
             * 定位成功且显示精度范围时，是否把地图视野调整到正好显示精度范围
             */
            zoomToAccuracy?: boolean | undefined;
            /**
             * 是否使用安卓定位sdk用来进行定位
             */
            useNative?: boolean | undefined;
            /**
             * 是否返回详细信息
             */
            extensions?: "all" | "base" | undefined;
            // internal
            convertUrl?: string | undefined;
            stopWhenPermissionDenied?: boolean | undefined;
        }
        type LocationType = "html5" | "ip" | "sdk";
        interface GeolocationResult extends Geocoder.ReGeocode {
            /**
             * 定位结果
             */
            position: LngLat;
            /**
             * 精度
             */
            accuracy: number | null;
            /**
             * 定位结果的来源
             */
            location_type: LocationType;
            /**
             * 形成当前定位结果的一些信息
             */
            message: string;
            /**
             * 是否已经转换成高德坐标
             */
            isConverted: boolean;
            /**
             * 状态信息
             */
            info: string;
            /**
             * 状态码
             */
            status: 1;
        }
        interface ErrorStatus {
            /**
             * 错误信息
             */
            info: string;
            /**
             * 造成定位失败结果的一些有用信息
             */
            message: string;
            /**
             * 状态码
             */
            status: 0;
        }
        interface CityResult {
            /**
             * 区域编码
             */
            adcode: string;
            /**
             * 范围
             */
            bounds: number[];
            /**
             * 中心点
             */
            center: [number, number];
            /**
             * 城市
             */
            city: string;
            /**
             * 城市编码
             */
            citycode: string;
            /**
             * 国家
             */
            country: string;
            /**
             * 状态信息
             */
            info: string;
            /**
             * 是否已转换成高德坐标
             */
            isConverted: boolean;
            /**
             * 信息描述
             */
            message: string;
            /**
             * 省份
             */
            province: string;
            /**
             * 状态码
             */
            status: 1;
        }
        type SearchStatus = "complete" | "error";
    }

    class Geolocation extends EventEmitter {
        /**
         * 定位服务
         * @param options 选项
         */
        constructor(options?: Geolocation.Options);
        /**
         * 是否支持浏览器定位
         */
        isSupported(): boolean;
        /**
         * 获取用户当前的精确位置信息
         * @param callback 回调
         */
        getCurrentPosition(
            callback: (
                status: Geolocation.SearchStatus,
                result: Geolocation.GeolocationResult | Geolocation.ErrorStatus,
            ) => void,
        ): void;
        /**
         * 使用浏览器定位接口监控当前位置，移动端有效
         */
        watchPosition(): string | undefined | null;
        /**
         * 取消对当前位置的监控
         * @param wathcId 监控id
         */
        clearWatch(wathcId: string): string | undefined;
        /**
         * 进行IP城市查询
         * @param callback 回调
         */
        getCityInfo(
            callback: (
                status: Geolocation.SearchStatus,
                result: Geolocation.CityResult | Geolocation.ErrorStatus,
            ) => void,
        ): void;
    }
}
