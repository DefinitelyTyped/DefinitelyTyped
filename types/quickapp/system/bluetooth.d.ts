/**
 * 蓝牙接口 [1040+]
 * 接口声明: {"name": "system.bluetooth"}
 */
declare module '@system.bluetooth' {
    /**
     * 初始化蓝牙模块
     * @param obj
     */
    function openAdapter(obj: {
        /**
         * 是否打开系统蓝牙开关。设置为 true，在系统蓝牙开关关闭的情况下会弹框提示是否打开。默认值 false
         */
        operateAdapter?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 bluetooth.openAdapter 成对调用。
     * @param obj
     */
    function closeAdapter(obj: {
        /**
         * 是否关闭系统蓝牙开关。设置为 true，调用时会关闭系统蓝牙开关。默认值 false
         */
        operateAdapter?: boolean;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取本机蓝牙适配器状态。
     * @param obj
     */
    function getAdapterState(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 蓝牙适配器是否可用
             */
            available: boolean;
            /**
             * 是否正在搜索设备
             */
            discovering: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /*
     * 监听蓝牙适配器状态变化事件
     */
    function onadapterstatechange(data: { available: boolean; discovering: boolean }): void;

    /**
     * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 bluetooth.stopDevicesDiscovery 方法停止搜索。
     * @param obj
     */
    function startDevicesDiscovery(obj: {
        /**
         * 要搜索的主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备
         */
        service?: string[];
        /**
         * 默认值为 false。是否允许重复上报同一设备。如果允许重复上报，则 bluetooth.ondevicefound 方法会多次上报同一设备，但是 RSSI 值会有不同
         */
        allowDuplicatesKey: boolean;
        /**
         * 单位毫秒，默认值为 0。上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报
         */
        interval?: number;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
     */
    function stopDevicesDiscovery(obj: {
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
     * @param obj
     */
    function getDevices(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 	蓝牙模块生效期间已发现的蓝牙设备
             */
            devices: Device[];
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 监听寻找到新设备的事件
     */
    function ondevicefound(data: {
        /**
         * 新搜索到的设备列表，devices 返回值见 getDevices
         */
        devices: Device[];
    }): void;

    /**
     * 根据 uuid 获取处于已连接状态的设备。
     * @param obj
     */
    function getConnectedDevices(obj: {
        /**
         * 蓝牙设备主 service 的 uuid 列表
         */
        services: string[];
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * uuid 对应的的已连接设备列表
             */
            devices: Device2[];
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 连接低功耗蓝牙设备。若快应用有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
     * @param obj
     */
    function createBLEConnection(obj: {
        /**
         * 用于区分设备的 id
         */
        deviceId: string;
        /**
         * 超时时间，单位 ms，不填表示不会超时
         */
        timeout?: number;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 断开与低功耗蓝牙设备的连接。
     * @param obj
     */
    function closeBLEConnection(obj: {
        /**
         * 用于区分设备的 id
         */
        deviceId: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取设备服务信息
     * @param obj
     */
    function getBLEDeviceServices(obj: {
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 设备服务列表
             */
            services: Device2[];
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取蓝牙设备某个服务中所有特征值(characteristic)。
     * @param obj
     */
    function getBLEDeviceCharacteristics(obj: {
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
         */
        serviceId: string;
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 设备服务列表
             */
            characteristics: Characteristy[];
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用
     * @param obj
     */
    function readBLECharacteristicValue(obj: {
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
     * @param obj
     */
    function writeBLECharacteristicValue(obj: {
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * 蓝牙设备特征值对应的二进制值
         */
        value: ArrayBuffer;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。另外，必须先启用 notifyBLECharacteristicValueChange 才能监听到设备 characteristicValueChange 事件
     * @param obj
     */
    function notifyBLECharacteristicValueChange(obj: {
        /**
         * 是否启用 notify
         */
        state: boolean;
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 监听低功耗蓝牙设备的特征值变化。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
     */
    function onblecharacteristicvaluechange(data: {
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * 特征值最新的值
         */
        value: ArrayBuffer;
    }): void;

    /**
     * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
     */
    function onbleconnectionstatechange(data: {
        /**
         * 蓝牙设备 id
         */
        deviceId: string;
        /**
         * 是否处于已连接状态
         */
        connected: boolean;
    }): void;
}

interface Device {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
    /**
     * 当前蓝牙设备的信号强度
     */
    RSSI: number;
    /**
     * 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段
     */
    advertisData: ArrayBuffer;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段
     */
    advertisServiceUUIDs: string[];
    /**
     * 当前蓝牙设备的广播数据段中的 LocalName 数据段
     */
    localName: string;
    /**
     * 当前蓝牙设备的广播数据段中的 ServiceData 数据段，key 为 uuid 的 String 值，value 为对应的 ServiceData 的 ArrayBuffer
     */
    serviceData: object;
}

interface Device2 {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
}

interface Characteristy {
    /**
     * 蓝牙设备服务的 uuid
     */
    uuid: string;
    /**
     * 该特征值支持的操作类型
     */
    properties: {
        /**
         * 该特征值是否支持 read 操作
         */
        read: boolean;
        /**
         * 该特征值是否支持 write 操作
         */
        write: boolean;
        /**
         * 该特征值是否支持 notify 操作
         */
        notify: boolean;
        /**
         * 该特征值是否支持 indicate 操作
         */
        indicate: boolean;
    };
}
