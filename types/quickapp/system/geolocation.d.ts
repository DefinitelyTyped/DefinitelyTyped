/**
 * 地理位置
 * 接口声明: {"name": "system.geolocation"}
 */
declare module "@system.geolocation" {
    interface GetLocationOptions {
        /**
         * 设置超时时间，单位是 ms，默认值为 30000。在权限被系统拒绝或者定位设置不当的情况下，有可能永远不能返回结果，因而需要设置超时。超时后会使用 fail 回调
         */
        timeout?: number;
        /**
         * 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84
         * [1050+]
         */
        coordType?: string;
        /**
         * 成功回调
         */
        success: (data: GetLocationSuccessOptions) => void;
        /**
         * 失败回调，原因可能是用户拒绝
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取定位权限失败|
         * |204|超时返回|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1000|系统位置开关关闭 [1000+]|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetLocationSuccessOptions {
        /**
         * 经度
         */
        longitude: number;
        /**
         * 纬度
         */
        latitude: number;
        /**
         * 精度
         * [1040+]
         */
        accuracy: number;
        /**
         * 时间
         * [1040+]
         */
        time: number;
    }

    /**
     * 获取地理位置
     */
    function getLocation(obj: GetLocationOptions): void;

    interface OpenLocationOptions {
        /**
         * 纬度，范围为 -90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度，范围为 -180~180，负数表示西经
         */
        longitude: number;
        /**
         * 坐标系，支持 wgs84 和 gcj02，默认使用 wgs84
         */
        coordType?: string;
        /**
         * 缩放比例，范围为 5~18，默认值是 18
         */
        scale?: number;
        /**
         * 位置名
         */
        name?: string;
        /**
         * 地址的详细说明
         */
        address?: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取定位权限失败|
         * |202|经纬度参数非法|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1000|跳转导航出错|
         * |1001|未安装地图应用|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 使用快应用内置地图查看位置，并且允许拉起第三方地图应用发起导航
     * @description
     * 权限要求
     * - 精确设备定位
     */
    function openLocation(obj: OpenLocationOptions): void;

    interface ChooseLocationOptions {
        /**
         * 指定中心点纬度，如果为空则显示当前位置
         */
        latitude?: number;
        /**
         * 指定中心点经度，如果为空则显示当前位置
         */
        longitude?: number;
        /**
         * 坐标系，支持 wgs84 和 gcj02，默认使用 wgs84。仅作用于指定中心点的经纬度坐标系，成功回调的返回值国内坐标固定使用 gcj02 坐标系，国外坐标固定使用 wgs84 坐标系
         */
        coordType?: string;
        /**
         * 成功回调
         */
        success: (data: ChooseLocationSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取定位权限失败|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1000|所选位置无效|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ChooseLocationSuccessOptions {
        /**
         * 位置名称
         */
        name: string;
        /**
         * 详细地址
         */
        address: string;
        /**
         * 返回值经纬度的坐标系，国内坐标固定使用 gcj02 坐标系，国外坐标固定使用 wgs84 坐标系
         */
        coordType: string;
        /**
         * 纬度，浮点数，范围为 -90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度，浮点数，范围为 -180~180，负数表示西经
         */
        longitude: number;
    }

    /**
     * 打开快应用内置地图选择位置
     * [1070+]
     * @description
     * 权限要求
     * 精确设备定位
     */
    function chooseLocation(obj: ChooseLocationOptions): void;

    interface GetLocationTypeOptions {
        /**
         * 成功回调
         */
        success: (data: GetLocationTypeSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetLocationTypeSuccessOptions {
        /**
         * 支持的类型['gps','network']
         */
        types: string[];
    }

    /**
     * 获取系统当前支持的定位类型
     * [1010+]
     * @description
     * 权限要求
     * - 精确设备定位
     */
    function getLocationType(obj: GetLocationTypeOptions): void;

    interface SubscribeOptions {
        /**
         * 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean;
        /**
         * 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84
         * [1050+]
         */
        coordType?: string;
        /**
         * 每次位置信息发生变化，都会被回调
         */
        callback: (data: SubscribeCallbackOptions) => void;
        /**
         * 失败回调，原因可能是用户拒绝授权
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取定位权限失败|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1000|系统位置开关关闭 [1000+]|
         */
        fail?: (data: any, code: number) => void;
    }

    interface SubscribeCallbackOptions {
        /**
         * 经度
         */
        longitude: number;
        /**
         * 纬度
         */
        latitude: number;
        /**
         * 精确度
         * [1040+]
         */
        accuracy: number;
        /**
         * 时间戳，单位为毫秒
         * [1040+]
         */
        time: number;
    }

    /**
     * 监听地理位置。如果多次调用，仅最后一次调用生效
     * @description
     * 权限要求
     * - 精确设备定位
     */
    function subscribe(obj: SubscribeOptions): void;

    /**
     * 取消监听地理位置
     */
    function unsubscribe(): void;

    /**
     * 获取支持的坐标系类型
     * [1050+]
     * @description
     * 返回值：
     * 字符串数组。当前支持的坐标系类型，如['wgs84']
     */
    function getSupportedCoordTypes(): string[];

    interface GeocodeQueryOptions {
        /**
         * 地址所在城市
         */
        city: string;
        /**
         * 地址
         */
        address: string;
        /**
         * 成功回调
         */
        success: (data: GeocodeQuerytSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GeocodeQuerytSuccessOptions {
        /**
         * 经度
         */
        longitude: number;
        /**
         * 纬度
         */
        latitude: number;
    }

    /**
     * 地理编码，只支持国内地理位置
     * [1080+]
     */
    function geocodeQuery(obj: GeocodeQueryOptions): void;

    interface ReverseGeocodeQueryOptions {
        /**
         * 经度
         */
        longitude: number;
        /**
         * 纬度
         */
        latitude: number;
        /**
         * 坐标系，支持 wgs84 和 gcj02，默认使用 wgs84。
         */
        coordType?: string;
        /**
         * success 回调的返回值是否需要包含设置位置附近的 POI 信息。默认 false ，即 success 回调中不返回 poiInfoList 信息
         */
        includePoiInfo?: boolean;
        /**
         * 成功回调
         */
        success: (data: ReverseGeocodeQuerySuccessOptions) => void;
        /**
         * 失败回调，原因可能是用户拒绝
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ReverseGeocodeQuerySuccessOptions {
        /**
         * 国家名称
         */
        countryName: string;
        /**
         * 省份名称
         */
        province: string;
        /**
         * 城市名称
         */
        city: string;
        /**
         * 区县名称
         */
        district: string;
        /**
         * 街道名称（行政区划中的街道层级）
         */
        street: string;
        /**
         * 简要地址信息
         */
        address: string;
        /**
         * 设置位置附近的POI信息[{OBJECT}]
         */
        poiInfoList?: PoiInfo[];
    }

    interface PoiInfo {
        /**
         * poi名字
         */
        poiName: string;
        /**
         * 经度
         */
        longitude: number;
        /**
         * 纬度
         */
        latitude: number;
        /**
         * 所在城市
         */
        city: string;
        /**
         * 地址
         */
        address: string;
        /**
         * 电话
         */
        phone: string;
    }

    /**
     * 逆地理编码，只支持国内地理位置
     * [1080+]
     */
    function reverseGeocodeQuery(obj: ReverseGeocodeQueryOptions): void;
}

declare module "quickapp:@system.geolocation" {
    export * from "@system.geolocation";
}
