/**
 * Wi-Fi [1020+]
 * 接口声明: {"name": "system.wifi"}
 */
declare module "@system.wifi" {
    interface WifiInfo {
        /**
         * Wi-Fi 设备的 SSID
         */
        SSID: string;
        /**
         * Wi-Fi 设备的 BSSID
         */
        BSSID: string;
        /**
         * Wi-Fi 是否安全
         */
        secure: boolean;
        /**
         * Wi-Fi 信号强度
         */
        signalStrength: number;
    }

    interface ConnectOptions {
        /**
         * Wi-Fi 设备的 SSID
         */
        SSID: string;
        /**
         * Wi-Fi 设备的 BSSID
         */
        BSSID: string;
        /**
         * Wi-Fi 设备密码
         */
        password?: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |500|应用在后台无法进行操作|
         * |1000|Wi-Fi 密码错误|
         * |1001|连接超时|
         * |1002|重复连接 Wi-Fi|
         * |1003|未打开 Wi-Fi 开关|
         * |1005|无效 SSID|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }
    /**
     * 连接Wi-Fi。若已知Wi-Fi信息，可以直接利用该接口连接
     */
    function connect(obj: ConnectOptions): void;

    interface ScanOptions {
        /**
         * 扫描请求发起成功
         */
        success?: () => void;
        /**
         * 扫描请求发起失败
         * @description
         * |错误码|说明|
         * |---|---|
         * |500|应用在后台无法进行操作|
         * |1003|未打开 Wi-Fi 开关|
         * |1004|未打开位置服务开关。Android 6.0 及以上版本，没有打开位置服务开关会导致无法正常扫描周边的 Wi-Fi 信息|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 请求获取Wi-Fi列表，在onscanned事件中返回Wi-Fi列表数据[权限要求:粗略设备定位]
     */
    function scan(obj?: ScanOptions): void;

    interface GetConnectedWifiOptions {
        /**
         * 成功回调
         */
        success?: (data: WifiInfo) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |200|当前没有 Wi-Fi 连接|
         * |500|应用在后台无法进行操作|
         * |1003|未打开 Wi-Fi 开关|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    /**
     * 获取已连接中的Wi-Fi信息[权限要求:粗略设备定位]
     */
    function getConnectedWifi(obj?: GetConnectedWifiOptions): void;

    interface OnScannedOptions {
        /**
         * Wi-Fi 列表数据
         */
        wifiList: WifiInfo[];
    }

    /**
     * 监听在获取到Wi-Fi列表数据时的事件，在回调中将返回wifiList[权限要求:粗略设备定位]
     */
    function onscanned(data: OnScannedOptions): void;

    interface OnStateChangedOptions {
        /**
         * Wi-Fi 是否连接的状态标识。
         * 连接断开：0；
         * 连接成功：1
         */
        state: number;
        /**
         * Wi-Fi 的 SSID。连接成功时有效
         */
        SSID: string;
        /**
         * Wi-Fi 的 BSSID。连接成功时有效
         */
        BSSID: string;
        /**
         * Wi-Fi 是否安全。连接成功时有效
         */
        secure: boolean;
        /**
         * Wi-Fi 信号强度。连接成功时有效
         */
        signalStrength: number;
    }

    /**
     * 监听连接和断开Wi-Fi的事件
     * @description
     * 权限要求
     * - 粗略设备定位
     */
    function onstatechanged(data: OnStateChangedOptions): void;
}

declare module "quickapp:@system.wifi" {
    export * from "@system.wifi";
}
