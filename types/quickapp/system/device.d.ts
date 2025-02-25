/**
 * 设备信息
 * 接口声明: {"name": "system.device"}
 */
declare module "@system.device" {
    interface GetInfoOptions {
        /**
         * 成功回调
         */
        success?: (data: GetInfoSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetInfoSuccessOptions {
        /**
         * 设备品牌
         */
        brand: string;
        /**
         * 设备生产商
         */
        manufacturer: string;
        /**
         * 设备型号
         */
        model: string;
        /**
         * 设备代号
         */
        product: string;
        /**
         * 操作系统名称
         */
        osType: string;
        /**
         * 操作系统版本名称
         */
        osVersionName: string;
        /**
         * 操作系统版本号
         */
        osVersionCode: number;
        /**
         * 运行平台版本名称
         */
        platformVersionName: string;
        /**
         * 运行平台版本号
         */
        platformVersionCode: number;
        /**
         * 系统语言
         */
        language: string;
        /**
         * 系统地区
         */
        region: string;
        /**
         * 屏幕宽
         */
        screenWidth: number;
        /**
         * 屏幕高
         */
        screenHeight: number;
        /**
         * 可使用窗口宽度
         * [1030+]
         */
        windowWidth: number;
        /**
         * 可使用窗口高度
         * [1030+]
         */
        windowHeight: number;
        /**
         * 状态栏高度
         * [1030+]
         */
        statusBarHeight: number;
        /**
         * 设备的屏幕密度
         * [1040+]
         */
        screenDensity: number;
        /**
         * 手机厂商系统的名称，如 ColorOS
         * [1080+]
         */
        vendorOsName: string;
        /**
         * 手机厂商系统的版本号
         * [1080+]
         */
        vendorOsVersion: string;
        /**
         * 针对异形屏(比如刘海屏、水滴屏和开孔屏)返回异形区域的位置大小。Array 中每个 item 表示一个异形区域的描述。
         * [1080+]
         * @description
         * item 参数：
         * - left:cutout 左边界距离屏幕左边距离
         * - top:cutout 上边界距离屏幕上边距离
         * - right:cutout 右边界距离屏幕右边距离
         * - bottom:cutout 下边界距离屏幕下边距离
         *
         * cutout 的坐标描述以竖屏为基准。即在横屏和竖屏下获取的 cutout 参数描述都是一样的。
         */
        cutout: Cutout[];
        /**
         * 当前快应用引擎的设备类型，手机版为'phone'，电视为'tv'，平板为'tablet'，折叠屏为'foldable'
         * [1090+]
         */
        deviceType: string;
        /**
         * 获取屏幕显示刷新率(获取帧率可能不为60, 90, 144等标准帧率)
         * [1100+]
         */
        screenRefreshRate: number;
    }

    interface Cutout {
        /**
         * cutout 左边界距离屏幕左边距离
         */
        left: number;
        /**
         * cutout 上边界距离屏幕上边距离
         */
        top: number;
        /**
         * cutout 右边界距离屏幕右边距离
         */
        right: number;
        /**
         * cutout 下边界距离屏幕下边距离
         */
        bottom: number;
    }

    interface GetIdOptions {
        /**
         * 支持 device、mac、user、advertising 1000+四种类型，可提供一至多个
         */
        type: ("device" | "mac" | "user" | "advertising")[];
        /**
         * 成功回调
         */
        success?: (data: GetIdSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝授权|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetIdSuccessOptions {
        /**
         * 设备唯一标识。在 Android 上返回 IMEI 或 MEID; 在 Android Q 之后，除了华为手机返回 aaid(应用匿名设备标识符)，其他厂商手机如果支持 oaid（匿名设备标识符）则返回 oaid，否则返回空值。
         */
        device?: string;
        /**
         * 设备的 mac 地址。在 Android M 及以上返回固定值：02:00:00:00:00:00
         */
        mac?: string;
        /**
         * 用户唯一标识。在 Android 上返回 androidid
         */
        user?: string;
        /**
         * 广告唯一标识。在 Android 上返回 aaid(应用匿名设备标识符)
         * [1000+]
         */
        advertising?: string;
    }

    /**
     * 获取设备信息
     */
    function getInfo(obj?: GetInfoOptions): void;

    /**
     * 批量获取设备标识，需要用户授权
     * @description
     * 权限要求
     * - 获取手机状态
     */
    function getId(Obj: GetIdOptions): void;

    interface GetDeviceIdOptions {
        /**
         * 成功回调
         */
        success?: (data: GetDeviceIdSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝授权|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetDeviceIdSuccessOptions {
        /**
         * 设备唯一标识。在 Android 上返回 IMEI 或 MEID; 在 Android Q 之后，除了华为手机返回 aaid(应用匿名设备标识符)，其他厂商手机如果支持 oaid（匿名设备标识符）则返回 oaid，否则返回空值。
         */
        deviceId: string;
    }

    /**
     * 获取设备唯一标识。需要用户授权
     * [1000+]
     * @description
     * 权限要求
     * - 获取手机状态
     */
    function getDeviceId(Obj?: GetDeviceIdOptions): void;

    interface GetUserIdOptions {
        /**
         * 成功回调
         */
        success?: (data: GetUserIdSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetUserIdSuccessOptions {
        /**
         * 用户唯一标识。在 Android 上返回 androidid
         */
        userId: string;
    }

    /**
     * 获取用户唯一标识
     * [1000+]
     */
    function getUserId(Obj?: GetUserIdOptions): void;

    interface GetAdvertisingIdOptions {
        /**
         * 成功回调
         */
        success?: (data: GetAdvertisingIdSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetAdvertisingIdSuccessOptions {
        /**
         * 广告唯一标识
         */
        advertisingId: string;
    }

    /**
     * 获取广告唯一标识
     * [1000+]
     */
    function getAdvertisingId(Obj?: GetAdvertisingIdOptions): void;

    interface GetSerialOptions {
        /**
         * 成功回调
         */
        success?: (data: GetSerialSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetSerialSuccessOptions {
        /**
         * 设备序列号
         */
        serial: string;
    }

    /**
     * 获取设备序列号
     * [1040+]
     * @deprecated
     * 根据Android平台要求，Android 10开始不允许向第三方应用提供SN，该接口将回调fail，建议使用其他系统标识符如OAID替代
     */
    function getSerial(Obj?: GetSerialOptions): void;

    interface GetTotalStorageOptions {
        /**
         * 成功回调
         */
        success?: (data: GetTotalStorageSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetTotalStorageSuccessOptions {
        /**
         * 存储空间的总大小，单位是 Byte。在 Android 上返回的是外部存储的总大小
         */
        totalStorage: number;
    }

    /**
     * 获取存储空间的总大小
     * [1000+]
     */
    function getTotalStorage(Obj?: GetTotalStorageOptions): void;

    interface GetAvailableStorageOptions {
        /**
         * 成功回调
         */
        success?: (data: GetAvailableStorageSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetAvailableStorageSuccessOptions {
        /**
         * 存储空间的可用大小，单位是 Byte。在 Android 上返回的是外部存储的可用大小
         */
        availableStorage: number;
    }

    /**
     * 获取存储空间的可用大小
     * [1000+]
     */
    function getAvailableStorage(Obj?: GetAvailableStorageOptions): void;

    interface GetCpuInfoOptions {
        /**
         * 成功回调
         */
        success?: (data: GetCpuInfoSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetCpuInfoSuccessOptions {
        /**
         * CPU 信息。在 Android 上返回的是/proc/cpuinfo 文件的内容
         */
        cpuInfo: string;
    }

    /**
     * 返回 CPU 信息
     * [1000+]
     */
    function getCpuInfo(Obj?: GetCpuInfoOptions): void;

    interface GetOAIDOptions {
        /**
         * 成功回调
         */
        success?: (data: GetOAIDSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetOAIDSuccessOptions {
        /**
         * oaid 的值,如果当前手机还不支持 oaid，返回空值
         */
        oaid: string;
    }

    /**
     * 返回厂商设备标识符中的 OAID（匿名设备标识符）
     * [1060+]
     */
    function getOAID(Obj?: GetOAIDOptions): void;

    /**
     * 同步方法获取平台版本信息
     * [1030+]
     */
    const platform: {
        /**
         * 运行平台版本名称
         */
        versionName: string;
        /**
         * 运行平台版本号
         */
        versionCode: number;
    };

    /**
     * 限制 oaid 以及 android q 以上的 deviceId 是否可以用于广告跟踪
     * [1060+]
     */
    const allowTrackOAID: boolean;

    /**
     * 同步方法获取宿主信息
     * [1070+]
     */
    const host: {
        /**
         * 宿主的包名。如调试器的名称是 org.hapjs.debugger
         */
        package: string;
        /**
         * 宿主的版本名称
         */
        versionName: string;
        /**
         * 宿主的版本号
         */
        versionCode: number;
    };
}

declare module "quickapp:@system.device" {
    export * from "@system.device";
}
