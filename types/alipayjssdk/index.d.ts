/**
 * Alipay JSSDK 提供丰富的支付宝原生 API，可以方便调用支付宝提供的能力，达到媲美原生应用的体验，如页面跳转，支付功能等。
 *
 * This API just for [Alipay](https://apps.apple.com/us/app/alipay-simplify-your-life/id3332062896)
 *
 * 基于[官方文档](https://myjsapi.alipay.com/alipayjsapi/index.html)编写的**Type definition**
 *
 * 相对于官方文档，有以下调整
 * - 所有接口均使用`Promise`
 * - 移除了部分除`on/off`开头接口入参`callback`回调函数。请使用`OPTION.complete`代替
 * - 移除了`OPTION.success`和`OPTION.fail`，请使用`Promise`的`then`、`catch`代替
 * - 部分接口移除了`OPTION`简略入参
 *
 * ### 安装使用
 *  ```js
 *      <script src="https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js"></script>
 *  ```
 *
 * ### 错误约定
 * Alipay JSSDK 调用出错时 catch 的参数里会包含一个特殊的字段 error（Number 类型），作为 API 调用的错误码，示例:
 * ```json
 * {
 *   error: 1,
 *   errorMessage: '接口不存在'
 * }
 * ```
 */

declare namespace AlipayJSSDK {
    type IAnyObject = Record<string, any>;
    type IStringObject = Record<string, string>;
    type IObjArray = IAnyObject[];

    /** 接口调用结束的回调 */
    type CompleteCallBack = (obj: unknown) => void;
    type OnOffCallBack = (obj: unknown) => void;

    /** 网络状态信息 */
    interface NetworkTypeResult {
        /** 网络是否可用 */
        networkAvailable: boolean;
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType: "UNKNOWN" | "NOTREACHABLE" | "WIFI" | "3G" | "2G" | "4G" | "WWAN";
    }

    /** 蓝牙设备信息 */
    interface BluetoothDeviceInfo {
        /** 蓝牙设备名称，某些设备可能没有 */
        name?: string;
        /** 值与 name 一致 */
        deviceName: string;
        /** 广播设备名称 */
        localName: string;
        /** 设备 Id */
        deviceId: string;
        /** 设备信号强度 */
        RSSI: string;
        /** 设备的广播内容 */
        advertisData: string;
    }

    interface ap {
        /**
         * =============================== 网络请求 ========================================================
         */
        /**
         * [ap.connectSocket(OPTION)](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/connectSocket.html)
         *
         * 向指定服务器发起 WebSocket 连接请求。可直接传入一个字符串作为 OPTION.url 参数。
         *
         * | error | 说明 |
         * | - | - |
         * | 1 | Error Unknown. |
         * | 2 | Connect when already connected. |
         * | 3 | Empty URL. |
         * | 4 | Illegal URL format. |
         * | 5 | URL scheme not ws or wss |
         * | 6 | Timed out connecting to server. |
         * | 7 | Invalid server certificate. |
         * | 8 | Invalid Sec-WebSocket-Accept response. |
         * | 9 | Server specified Sec-WebSocket-Protocol that wasn’t requested. |
         * | 10 | Invalid State: Cannot send until connection is open. |
         * | 11 | Error writing to stream. |
         * | 12 | Unable to allocate memory to read from socket. |
         */
        connectSocket(optios: {
            /** 目标服务器 url */
            url: string;
            /** 请求的参数 */
            data?: IAnyObject;
            /** 设置请求的头部信息 */
            headers?: IStringObject;

            complete?: CompleteCallBack;
        }): Promise<unknown>;

        /**
         * [ap.sendSocketMessage(OPTION)](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/sendSocketMessage.html)
         *
         * 通过 WebSocket 连接发送数据，需要先 ap.connectSocket，并在 ap.onSocketOpen 回调之后才能发送。
         */
        sendSocketMessage(optios: {
            /** 请求的参数 */
            data?: string | ArrayBuffer;
            complete?: CompleteCallBack;
        }): Promise<unknown>;

        /**
         * [ap.onSocketOpen()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/onSocketOpen.html)
         *
         * 监听 WebSocket 连接打开事件。
         */
        onSocketOpen(): Promise<unknown>;

        /**
         * [ap.offSocketOpen()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/offSocketOpen.html)
         *
         * 移除 WebSocket 打开事件监听。
         */
        offSocketOpen(): Promise<unknown>;

        /**
         * [ap.closeSocket()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/closeSocket.html)
         *
         * 关闭 WebSocket 连接
         */
        closeSocket(): Promise<unknown>;

        /**
         * [ap.onSocketClose()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/onSocketClose.html)
         *
         * 监听 WebSocket 关闭事件。
         */
        onSocketClose(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offSocketClose()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/offSocketClose.html)
         *
         * 移除 WebSocket 关闭事件监听。
         */
        offSocketClose(): Promise<unknown>;

        /**
         * [ap.onSocketError()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/onSocketError.html)
         *
         * 监听 WebSocket 报错事件。
         */
        onSocketError(): Promise<unknown>;

        /**
         * [ap.offSocketError()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/offSocketError.html)
         *
         * 移除 WebSocket 报错事件监听。
         */

        offSocketError(): Promise<unknown>;

        /**
         * [ap.onSocketMessage()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/onSocketMessage.html)
         *
         * 监听 WebSocket 接受到服务器的消息事件。
         */
        onSocketMessage(): Promise<{
            data: string | ArrayBuffer;
        }>;
        /**
         * [ap.offSocketMessage()](https://myjsapi.alipay.com/alipayjsapi/network/webSocket/offSocketMessage.html)
         *
         * 移除 WebSocket 消息事件监听
         */
        offSocketMessage(): Promise<unknown>;

        /**
         * =============================== 数据 ========================================================
         */
        /**
         * [ap.setSessionData(OPTION)](https://myjsapi.alipay.com/alipayjsapi/data/session/setSessionData.html)
         *
         * 写入会话级数据。
         */
        setSessionData(optios: {
            /** 要写入的数据，每个 key/value 的组合为一个数据项 */
            data: IAnyObject;
            complete?: CompleteCallBack;
        }): Promise<{}>;

        /**
         * [ap.getSessionData(OPTION | keys | key)](https://myjsapi.alipay.com/alipayjsapi/data/session/getSessionData.html)
         *
         * 读取会话级数据。可用于页面间传递数据
         * 可直接传入一个数组作为 OPTION.keys，或直接传入一个字符串，作为 OPTION.keys 数组中的某一个 key。
         */
        getSessionData(
            optios:
                | {
                    keys: string[];
                    complete?: CompleteCallBack;
                }
                | string[]
                | string,
        ): Promise<{
            /**
             * keys 相应字段对应的数据
             */
            data: IAnyObject;
        }>;

        /**
         * [ap.parseQueryString(queryString)](https://myjsapi.alipay.com/alipayjsapi/data/querystring/parseQueryString.html)
         *
         * 把 URL 中的 queryString 解析成一个对象。
         * @param queryString 可不填，默认解析window.location.search
         * @returns 默认{}, queryString 解析结果。可配合 ap.pushWindow 等的 data 参数一起使用
         */
        parseQueryString(queryString?: string): IAnyObject;

        /**
         * =============================== 媒体 ========================================================
         */

        /**
         * [ap.chooseImage(OPTION | count)](https://myjsapi.alipay.com/alipayjsapi/media/image/chooseImage.html)
         *
         * 拍照或从手机相册中选择图片。可直接传入一个数字作为 OPTION.count 参数。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 10 | 用户取消操作 |
         * | 11 | 操作失败（权限不够） |
         */
        chooseImage(
            option:
                | {
                    /** 最大可选照片数，默认1张，上限9张 */
                    count?: number;
                    /** 相册选取或者拍照，默认 ['camera', 'album'] */
                    sourceType?: Array<"camera" | "album">;
                    complete?: CompleteCallBack;
                }
                | number,
        ): Promise<{
            /** 图片文件路径 */
            apFilePaths: string[];
            apFilePathsV2: string[];
            tempFiles: Array<{
                /** 创建时间 时间戳 */
                creationDate: number;
                /** 文件路径 */
                path: string;
                /** 文件大小 */
                size: number;
            }>;
        }>;

        /**
         * [ap.previewImage(OPTION | urls)](https://myjsapi.alipay.com/alipayjsapi/media/image/previewImage.html)
         *
         * 预览图片。可直接传入一个图片链接数组作为 OPTION.urls 参数。
         */
        previewImage(
            option:
                | {
                    /** 要预览的图片链接列表 */
                    urls: string[];
                    /** 当前显示图片索引，默认 0 */
                    current?: number;
                    complete?: CompleteCallBack;
                }
                | string[],
        ): Promise<{}>;

        /**
         * [ap.chooseVideo(OPTION | maxDuration)](https://myjsapi.alipay.com/alipayjsapi/media/video/chooseVideo.html)
         *
         * 录制或从手机相册中选择视频。可直接传入一个数字作为 OPTION.maxDuration 参数。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 10 | 用户取消操作 |
         * | 11 | 操作失败（权限不够） |
         * | 12 | 数据处理失败 |
         */
        chooseVideo(
            option?:
                | {
                    /** 最大录制时长，单位秒，默认60s */
                    maxDuration?: number;
                    /** 相册选取或者拍照，默认 ['camera','album'] */
                    sourceType?: Array<"camera" | "album">;
                    /** 前置或者后置摄像头，默认前后都有，即：[‘front’, ‘back’] */
                    camera?: string[];
                    complete?: CompleteCallBack;
                }
                | number,
        ): Promise<{
            /** 视频文件路径 */
            apFilePath: string;
            tempVideoThumbPath: string;
            creationDate: number;
            modifyDate: number;
            scene: string;
            /** 选定视频的时间长度，单位秒 */
            duration: number;
            /** 选定视频的数据量大小 */
            size: number;
            /** 选定视频的宽 */
            width: number;
            /** 选定视频的高 */
            height: number;
        }>;

        /**
         * [ap.playBackgroundAudio(OPTION)](https://myjsapi.alipay.com/alipayjsapi/media/audio/playBackgroundAudio.html)
         *
         * 开始播放音乐。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 失败时会有对应描述 |
         */
        playBackgroundAudio(
            option:
                | {
                    /** 音乐链接地址 */
                    url: string;
                    /** 音乐标题 */
                    title?: string;
                    /** 演唱者 */
                    singer?: string;
                    /** 音乐描述 */
                    describe?: string;
                    /** logo URL */
                    logo?: string;
                    /** 封面 URL */
                    cover?: string;
                    complete?: CompleteCallBack;
                }
                | string[],
        ): Promise<unknown>;

        /**
         * [ap.pauseBackgroundAudio()](https://myjsapi.alipay.com/alipayjsapi/media/audio/pauseBackgroundAudio.html)
         *
         * 暂停播放音乐。
         */
        pauseBackgroundAudio(): Promise<unknown>;

        /**
         * [ap.seekBackgroundAudio(OPTION | position)](https://myjsapi.alipay.com/alipayjsapi/media/audio/seekBackgroundAudio.html)
         *
         * 控制音乐播放进度。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 失败时会有对应描述 |
         */
        seekBackgroundAudio(
            option:
                | {
                    /** 音乐位置，单位秒 */
                    position: number;
                    complete?: CompleteCallBack;
                }
                | number,
        ): Promise<unknown>;

        /**
         * [ap.stopBackgroundAudio()](https://myjsapi.alipay.com/alipayjsapi/media/audio/stopBackgroundAudio.html)
         *
         * 停止播放音乐
         */
        stopBackgroundAudio(): Promise<unknown>;

        /**
         * [ap.getBackgroundAudioPlayerState()](https://myjsapi.alipay.com/alipayjsapi/media/audio/getBackgroundAudioPlayerState.html)
         *
         * 获取音乐播放的状态。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 失败时会有对应描述 |
         */
        getBackgroundAudioPlayerState(): Promise<{
            /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
            status: 0 | 1 | 2;
            /** 音乐总时长，单位秒 */
            duration: number;
            /** 当前播放位置，单位秒 */
            currentPosition: number;
            /** 缓冲百分比 */
            downloadPercent: number;
            /** 音乐链接地址 */
            url: string;
        }>;

        /**
         * [ap.onBackgroundAudioPlay()](https://myjsapi.alipay.com/alipayjsapi/media/audio/onBackgroundAudioPlay.html)
         *
         * 监听音乐播放事件。
         */
        onBackgroundAudioPlay(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offBackgroundAudioPlay()](https://myjsapi.alipay.com/alipayjsapi/media/audio/offBackgroundAudioPlay.html)
         *
         * 移除音乐播放事件的监听。
         */
        offBackgroundAudioPlay(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onBackgroundAudioPause()](https://myjsapi.alipay.com/alipayjsapi/media/audio/onBackgroundAudioPause.html)
         *
         * 监听音乐暂停事件。
         */
        onBackgroundAudioPause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offBackgroundAudioPause()](https://myjsapi.alipay.com/alipayjsapi/media/audio/offBackgroundAudioPause.html)
         *
         * 移除音乐暂停事件的监听。
         */
        offBackgroundAudioPause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onBackgroundAudioStop()](https://myjsapi.alipay.com/alipayjsapi/media/audio/onBackgroundAudioStop.html)
         *
         * 监听音乐停止事件。
         */
        onBackgroundAudioStop(callBack?: OnOffCallBack): Promise<unknown>;
        /**
         * [ap.offBackgroundAudioStop()](https://myjsapi.alipay.com/alipayjsapi/media/audio/offBackgroundAudioStop.html)
         *
         * 移除音乐停止事件的监听。
         */
        offBackgroundAudioStop(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * =============================== 位置 ========================================================
         */
        /**
         * [ap.getLocation(OPTION)](https://myjsapi.alipay.com/alipayjsapi/location/get/getLocation.html)
         *
         * 获取当前的地理位置信息。
         *
         * 此接口使用的是高德坐标系, 如果获取到的高的坐标系用在其他地图会导致坐标偏移
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | GPS打开，但定位失败 |
         * | 13 | 获取地理位置信息失败 |
         * | 14 | 定位超时 |
         * | 15 | 网络错误 |
         * | 16 | GPS未打开或用户未授权 |
         */
        getLocation(option?: {
            /** 钱包经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位 */
            cacheTimeout?: number;
            /** 支持 0：详细逆地理编码，带周边信；1：逆地理编码到城市；2：仅获取经纬度、速度和精度。默认为 2 */
            type?: number;
            /** 定位超时失败回调时间，单位秒。默认10s */
            timeout?: number;
            /** 自定义业务类型  */
            bizType?: string;
            complete?: CompleteCallBack;
        }): Promise<{
            longitude: string; // 经度
            latitude: string; // 纬度
            accuracy: number; // 精度，单位米
            speed: number; // 速度，单位毫秒
            country: string; // 国家名
            countryCode: string; // 国家编号
            province: string; // 省份名
            city: string; // 城市名
            cityCode: string; // 城市编码
            adCode: string; // 区域编码
            // 街道门牌信息，结构是：{street, number}
            streetNumber: {
                street: string;
                number: string;
            };
            // 定位点附近的 POI 信息
            pois: Array<{
                name: string;
                address: string;
            }>;
        }>;

        /**
         * [ap.openLocation(OPTION)](https://myjsapi.alipay.com/alipayjsapi/location/open/openLocation.html)
         *
         * 使用支付宝内置地图查看位置。
         *
         * 此接口使用的是高德坐标系，在使用导航功能时如果用户选择了高德之外的其他地图应用可能导致坐标偏移
         */
        openLocation(option: {
            /** 经度 */
            longitude: string;
            /** 纬度 */
            latitude: string;
            /** 位置名称 */
            name?: string;
            /** 地址的详细说明 */
            address?: string;
            /** 缩放比例，范围3~19，默认为15 */
            scale?: number;
            complete?: CompleteCallBack;
        }): Promise<{}>;

        /**
         * ===============================  设备功能 ========================================================
         */

        /**
         * [ap.getNetworkType()](https://myjsapi.alipay.com/alipayjsapi/device/network/getNetworkType.html)
         *
         * 获取当前网络状态
         */
        getNetworkType(): Promise<NetworkTypeResult>;

        /**
         * [ap.onNetworkChange()](https://myjsapi.alipay.com/alipayjsapi/device/network/onNetworkChange.html)
         *
         * 监听网络环境发生变化的事件
         *
         * 3G切换到4G时系统不会发出网络切换通知。 4G切到3G时，会先从4G跳到2G，然后再从2G跳3G，因此会通知两次
         */
        onNetworkChange(callBack?: OnOffCallBack): Promise<NetworkTypeResult>;

        /**
         * [ap.offNetworkChange()](https://myjsapi.alipay.com/alipayjsapi/device/network/offNetworkChange.html)
         *
         * 移除网络环境发生变化事件的监听。
         */
        offNetworkChange(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.scan(OPTION | type)](https://myjsapi.alipay.com/alipayjsapi/device/scan/scan.html)
         *
         * 扫码
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 10 | 用户取消 |
         * | 11 | 操作失败 |
         */
        scan(option?: {
            /** 扫描目标类型，支持 qr / bar，相应扫码选框会不同，默认 qr */
            type: "qr" | "bar";
            complete?: CompleteCallBack;
        }): Promise<{
            /** 扫码所得数据 */
            code: string;
        }>;

        /**
         * [ap.watchShake()](https://myjsapi.alipay.com/alipayjsapi/device/shake/watchShake.html)
         *
         * 摇一摇功能。每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API。
         */
        watchShake(): Promise<unknown>;

        /**
         * ===============================  蓝牙 =======================
         *
         * **[蓝牙模块相关错误码](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/errorCodes.html)**
         *
         * | 错误码 | 说明 | 解决方案 |
         * | - | - | - |
         * | 10000 | 未初始化蓝牙适配器 | 调用my.openBluetoothAdapter ｜
         * | 10001 | 当前蓝牙适配器不可用 | 检查当前设备是否支持BLE并开启蓝牙功能 ｜
         * | 10002 | 没有找到指定设备 | 检查deviceId是否错误，或者是否开启外设广播 ｜
         * | 10003 | 连接失败 | 检查deviceId是否错误，目标蓝牙外设是否开启广播 ｜
         * | 10004 | 没有找到指定服务 | 检查serviceId，确认目标外设是否拥有该服务 ｜
         * | 10005 | 没有找到指定特征值 | 检查characteristId是否正确、检查目标外设特定service下是否具备该特征 ｜
         * | 10006 | 当前连接已断开 | 连接断开，重新连接 ｜
         * | 10007 | 当前特征值不支持此操作 | 检查特征是否具备读\写\通知等功能 ｜
         * | 10008 | 其余所有系统上报的异常 | 其他未知错误，具体问题具体分析 ｜
         * | 10009 | Android 系统特有，系统版本低于 4.3 不支持BLE | 提示用户不支持 ｜
         * | 10010 | 没有找到指定描述符 | 检查serviceId、characteristId是否正确 ｜
         * | 10011 | 设备 id 不可用/为空 | 使用正确的deviceId ｜
         * | 10012 | 服务 id 不可用/为空 | 使用正确的serviceId ｜
         * | 10013 | 特征 id 不可用/为空 | 使用正确的characteristId ｜
         * | 10014 | 发送的数据为空或格式错误 | 检查写数据或者HEX转化是否错误 ｜
         * | 10015 | 操作超时 | 重新操作 ｜
         * | 10016 | 缺少参数 | 检查调用的参数，并重新操作 ｜
         * | 10017 | 写入特征值失败 | 写失败，检查外设特征是否支持写操作，是否断开连接 ｜
         * | 10018 | 读取特征值失败 | 读失败，检查外设特征是否支持读操作，是否断开连接 ｜
         */

        /**
         * [ap.openBluetoothAdapter()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/openBluetoothAdapter.html)
         *
         * 初始化支付宝客户端的蓝牙模块。在调用支付宝蓝牙模块其它相关 API 之前，须调先调用此接口。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 蓝牙未打开 |
         * | 13 | 与系统蓝牙服务的链接暂时丢失 |
         * | 14 | 未授权支付宝使用蓝牙功能 |
         * | 15 | 未知错误 |
         */
        openBluetoothAdapter(): Promise<{
            /** 是否支持 BLE */
            isSupportBLE: boolean;
            complete?: CompleteCallBack;
        }>;

        /**
         * [ap.closeBluetoothAdapter()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/closeBluetoothAdapter.html)
         *
         * 关闭支付宝客户客户端蓝牙模块，该方法将断开所有已建立的蓝牙连接并释放系统资源。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 关闭失败 |
         */
        closeBluetoothAdapter(): Promise<unknown>;

        /**
         * [ap.getBluetoothAdapterState()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/getBluetoothAdapterState.html)
         *
         * 获取本机蓝牙模块状态。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 获取失败 |
         */
        getBluetoothAdapterState(): Promise<{
            /** 是否正在搜索设备 */
            discovering: boolean;
            /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
            available: boolean;
            complete?: CompleteCallBack;
        }>;

        /**
         * [ap.startBluetoothDevicesDiscovery(OPTION)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/startBluetoothDevicesDiscovery.html)
         *
         * 开始搜寻附近的蓝牙外围设备。搜索结果将在 bluetoothDeviceFound 事件中返回。
         *
         * ~~可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。~~
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 开始搜索失败 |
         */
        startBluetoothDevicesDiscovery(option: {
            /** 蓝牙设备主 service 的 uuid 列表 */
            services: string[];
            /** 是否允许重复上报同一设备， 如果允许重复上报，则onBluetoothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同 */
            allowDuplicatesKey?: boolean;
            /** 上报设备的间隔，单位为ms，默认为0ms，意思是找到新设备立即上报，否则根据传入的间隔上报 */
            interval?: number;
            complete?: CompleteCallBack;
        }): Promise<unknown>;

        /**
         * [ap.stopBluetoothDevicesDiscovery()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/stopBluetoothDevicesDiscovery.html)
         *
         * 停止搜寻附近的蓝牙外围设备。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 停止搜索失败 |
         */
        stopBluetoothDevicesDiscovery(): Promise<unknown>;

        /**
         * [ap.getBluetoothDevices(OPTION)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/getBluetoothDevices.html)
         *
         * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。
         * ~~可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。~~
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 获取失败 |
         */
        getBluetoothDevices(option?: {
            /** 蓝牙设备主 service 的 uuid 列表 */
            services: string[];
            complete?: CompleteCallBack;
        }): Promise<{
            /** service 的 uuid 对应的(如果有传入 services)设备列表 */
            devices: BluetoothDeviceInfo[];
        }>;

        /**
         * [ap.getConnectedBluetoothDevices(OPTION)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/getConnectedBluetoothDevices.html)
         *
         * 根据 service 的 uuid 获取处于已连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。
         * ~~也可直接传入一个字符串作为 OPTION.services 的第一项。~~
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 获取失败 |
         */
        getConnectedBluetoothDevices(option?: {
            /** 蓝牙设备主 service 的 uuid 列表，如果services 为空，则返回所有的已经连接的设备 */
            services: string[];
            complete?: CompleteCallBack;
        }): Promise<{
            /** service 的 uuid 对应的(如果有传入 services)设备列表 */
            devices: BluetoothDeviceInfo[];
        }>;

        /**
         * [ap.connectBLEDevice(OPTION | deviceId)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/connectBLEDevice.html)
         *
         * 连接低功耗蓝牙设备。可直接传入一个字符串作为 OPTION.deviceId。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 链接失败 |
         */
        connectBLEDevice(
            option:
                | {
                    /** 蓝牙设备 id */
                    deviceId: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.disconnectBLEDevice(OPTION | deviceId)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/disconnectBLEDevice.html)
         *
         * 断开与低功耗蓝牙设备的连接。可直接传入一个字符串作为 OPTION.deviceId。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 断开失败 |
         */
        disconnectBLEDevice(
            option:
                | {
                    /** 蓝牙设备 id */
                    deviceId: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.writeBLECharacteristicValue(OPTION)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/writeBLECharacteristicValue.html)
         *
         * 向低功耗蓝牙设备特征值中写入数据。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 写入数据失败 |
         */
        writeBLECharacteristicValue(option: {
            /** 蓝牙设备 id，参考 device 对象 */
            deviceId: string;
            /** 蓝牙特征值对应 service 的 uuid */
            serviceId: string;
            /** 蓝牙特征值的 uuid */
            characteristicId: string;
            /** notify 的 descriptor 的 uuid */
            descriptorId?: string;
            /** 蓝牙设备特征值对应的值，16进制字符串,限制在20字节内。写入的二进制数据需要进行 hex 编码。 */
            value: string;
            complete?: CompleteCallBack;
        }): Promise<unknown>;

        /**
         * [ap.readBLECharacteristicValue(OPTION)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/readBLECharacteristicValue.html)
         *
         * 读取低功耗蓝牙设备特征值中的数据。调用后在 `ap.onBLECharacteristicValueChange()` 事件中接收数据返回。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 读取数据失败 |
         */
        readBLECharacteristicValue(option: {
            /** 蓝牙设备 id，参考 device 对象 */
            deviceId: string;
            /** 蓝牙特征值对应 service 的 uuid */
            serviceId: string;
            /** 蓝牙特征值的 uuid */
            characteristicId: string;
            complete?: CompleteCallBack;
        }): Promise<{
            /** 设备特征值信息 */
            characteristic: {
                /** 蓝牙设备特征值的 value */
                value: string;
                /** 蓝牙特征值对应 service 的 uuid */
                serviceId: string;
                /** 蓝牙特征值的 uuid */
                characteristicId: string;
            };
        }>;

        /**
         * [ap.notifyBLECharacteristicValueChange(OPTION)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/notifyBLECharacteristicValueChange.html)
         *
         * 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 启动失败 |
         */
        notifyBLECharacteristicValueChange(option: {
            /** 蓝牙设备 id，参考 device 对象 */
            deviceId: string;
            /** 蓝牙特征值对应 service 的 uuid */
            serviceId: string;
            /** 蓝牙特征值的 uuid */
            characteristicId: string;
            /** notify 的 descriptor 的 uuid */
            descriptorId?: string;
            /** 是否启用notify或indicate */
            state?: string;
            complete?: CompleteCallBack;
        }): Promise<unknown>;

        /**
         * [ap.getBLEDeviceServices(OPTION | deviceId)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/getBLEDeviceServices.html)
         *
         * 获取蓝牙设备所有 service（服务）。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 获取失败 |
         */
        getBLEDeviceServices(
            option:
                | {
                    /** 蓝牙设备 id，参考 device 对象 */
                    deviceId: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<{
            /** service 对象 */
            services: Array<{
                /** 蓝牙设备服务的uuid */
                serviceId: string;
                /** 该服务是否为主服务 */
                isPrimary: boolean;
            }>;
        }>;

        /**
         * [ap.getBLEDeviceCharacteristics(OPTION | deviceId)](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/getBLEDeviceCharacteristics.html)
         *
         * 获取蓝牙设备所有 characteristic（特征值）
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 12 | 获取失败 |
         */
        getBLEDeviceCharacteristics(
            option:
                | {
                    /** 蓝牙设备 id，参考 device 对象 */
                    deviceId: string;
                    /** 蓝牙特征值对应 service 的 uuid */
                    serviceId: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<{
            /** 设备特征值列表 */
            characteristics: Array<{
                /** 蓝牙设备特征值的 uuid */
                characteristicId: string;
                /** 蓝牙设备特征值对应服务的 uuid */
                serviceId: string;
                /** 蓝牙设备特征值对应的16进制值 */
                value: string;
                /** 该特征值支持的操作类型 */
                properties: {
                    /** 该特征值是否支持 read 操作 */
                    read: boolean;
                    /** 该特征值是否支持 write 操作 */
                    write: boolean;
                    /** 该特征值是否支持 notify 操作 */
                    notify: boolean;
                    /** 该特征值是否支持 indicate 操作 */
                    indicate: boolean;
                };
            }>;
        }>;

        /**
         * [ap.onBluetoothDeviceFound()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/onBluetoothDeviceFound.html)
         *
         * 搜索到新的蓝牙设备时触发此事件。
         */
        onBluetoothDeviceFound(callBack?: OnOffCallBack): Promise<{
            /** 新搜索到的设备列表 */
            devices: BluetoothDeviceInfo;
        }>;

        /**
         * [ap.offBluetoothDeviceFound()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/offBluetoothDeviceFound.html)
         *
         * 移除寻找到新的蓝牙设备事件的监听。
         */
        offBluetoothDeviceFound(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onBLECharacteristicValueChange()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/onBLECharacteristicValueChange.html)
         *
         * 监听低功耗蓝牙设备的特征值变化的事件。
         */
        onBLECharacteristicValueChange(callBack?: OnOffCallBack): Promise<{
            /** 蓝牙设备 id，参考 device 对象 */
            deviceId: string;
            /** 特征值所属 service 的 uuid */
            serviceId: string;
            /** 特征值 uuid */
            characteristicId: string;
            /** 特征值最新的16进制值 */
            value: string;
            complete?: CompleteCallBack;
        }>;

        /**
         * [ap.offBLECharacteristicValueChange()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/offBLECharacteristicValueChange.html)
         *
         * 移除低功耗蓝牙设备的特征值变化事件的监听。
         */
        offBLECharacteristicValueChange(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onBLEConnectionStateChanged()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/onBLEConnectionStateChanged.html)
         *
         * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
         */
        onBLEConnectionStateChanged(callBack?: OnOffCallBack): Promise<{
            /** 蓝牙设备 id，参考 device 对象 */
            deviceId: string;
            /** 连接目前的状态 */
            connected: boolean;
            complete?: CompleteCallBack;
        }>;

        /**
         * [ap.offBLEConnectionStateChanged()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/offBLEConnectionStateChanged.html)
         *
         * 移除低功耗蓝牙连接的错误事件的监听。
         */
        offBLEConnectionStateChanged(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onBluetoothAdapterStateChange()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/onBluetoothAdapterStateChange.html)
         *
         * 监听本机蓝牙状态变化的事件。
         */
        onBluetoothAdapterStateChange(callBack?: OnOffCallBack): Promise<{
            /** 蓝牙模块是否可用 */
            available: boolean;
            /** 蓝牙模块是否处于搜索状态 */
            discovering: boolean;
        }>;

        /**
         * [ap.offBluetoothAdapterStateChange()](https://myjsapi.alipay.com/alipayjsapi/device/bluetooth/offBluetoothAdapterStateChange.html)
         *
         * 移除本机蓝牙状态变化的事件的监听。
         */
        offBluetoothAdapterStateChange(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onCompassChange()](https://myjsapi.alipay.com/alipayjsapi/device/compass/onCompassChange.html)
         *
         * 监听罗盘数据变化的事件。
         */
        onCompassChange(callBack?: OnOffCallBack): Promise<{
            /** 方向度数 */
            direction: number;
        }>;

        /**
         * [ap.offCompassChange()](https://myjsapi.alipay.com/alipayjsapi/device/compass/offCompassChange.html)
         *
         * 移除罗盘数据变化事件的监听。
         */
        offCompassChange(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onAccelerometerChange()](https://myjsapi.alipay.com/alipayjsapi/device/accelerometer/onAccelerometerChange.html)
         *
         * 监听重力感应变化
         */
        onAccelerometerChange(callBack?: OnOffCallBack): Promise<{
            /** x轴 */
            x: number;
            /** y轴 */
            y: number;
            /** z轴 */
            z: number;
            complete?: CompleteCallBack;
        }>;

        /**
         * [ap.offAccelerometerChange()](https://myjsapi.alipay.com/alipayjsapi/device/accelerometer/offAccelerometerChange.html)
         *
         * 移除重力感应变化事件的监听
         */
        offAccelerometerChange(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * ===============================  窗口 ========================================================
         */

        /**
         * [ap.pushWindow(OPTION | url)](https://myjsapi.alipay.com/alipayjsapi/navigation/window/pushWindow.html)
         *
         * 打开一个新的页面，自带转场动画。可直接传入一个字符串作为 OPTION.url 参数。
         */
        pushWindow(
            option:
                | {
                    /** 要打开的页面url */
                    url: string;
                    /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
                    data?: Record<string, string>;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.popWindow(OPTION | data)](https://myjsapi.alipay.com/alipayjsapi/navigation/window/popWindow.html)
         *
         * 关闭当前页面。可直接传入一个对象作为 OPTION.data 参数。
         */
        popWindow(
            option?:
                | {
                    /** 传递的 data 对象将会被即将露出的页面通过 onResume 事件接收 */
                    data?: Record<string, string>;
                    complete?: CompleteCallBack;
                }
                | Record<string, string>,
        ): Promise<unknown>;

        /**
         * [ap.popTo(OPTION | urlPattern | index)](https://myjsapi.alipay.com/alipayjsapi/navigation/window/popTo.html)
         *
         * 可以一次回退多级页面。可直接传入一个字符串作为 OPTION.urlPattern 参数，或直接传入一个整数作为 OPTION.index 参数。
         */
        popTo(
            option:
                | {
                    /** 目标页面的完整 URL */
                    url?: string;
                    /** 目标页面的 URL 匹配表达式（ URL 如果包含 urlPattern，匹配成功） */
                    urlPattern?: string;
                    /** 目标页面在会话页面栈中的索引；如果小于零，则将与当前页面的 index 相加 */
                    index?: number;
                    /** 传递的 data 对象将会被即将露出的页面通过 onResume 事件接收 */
                    data?: Record<string, string>;
                    complete?: CompleteCallBack;
                }
                | number
                | string,
        ): Promise<unknown>;

        /**
         * [ap.redirectTo(OPTION | url)](https://myjsapi.alipay.com/alipayjsapi/navigation/window/redirectTo.html)
         *
         * 替换当前页面，并且不会产生历史记录。可直接传入一个字符串作为 OPTION.url 参数。
         */
        redirectTo(
            option:
                | {
                    /** 要打开的页面url */
                    url: string;
                    /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
                    data?: Record<string, string>;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.onResume()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/onResume.html)
         *
         * 当一个页面重新可见时，会触发此事件，包括下列两种情况：
         *
         *  - 从后台被唤起和锁屏界面恢复，触发 appResume 的同时会触发此事件。
         *  - 通过 popWindow/popTo 从下个页面回退，触发 pageResume 的同时会触发此事件。
         *
         *  此外，如果这个页面是通过 popWindow/popTo 到达，且传递了 data 参数，此页可以获取到 data。
         */
        onResume(callBack?: OnOffCallBack): Promise<{
            /** 通过 popWindow/popTo 传递的 data 参数 */
            data: IAnyObject;
        }>;

        /**
         * [ap.offResume()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/offResume.html)
         *
         * 移除 resume 事件的监听。
         */
        offResume(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onPause()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/onPause.html)
         *
         * 当一个页面不可见时，会触发此事件。包括下面两种情况：
         *
         *  - 被压入后台和锁屏，触发 appPause 的同时会触发此事件
         *  - 通过 pushWindow 打开下个页面，当前页面触发 pagePause 的同时会触发此事件。
         */
        onPause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offPause()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/offPause.html)
         *
         * 移除 pause 事件的监听。
         */
        offPause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onPageResume()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/onPageResume.html)
         *
         * 当一个页面重新可见时(仅指从下个页面回退)，会触发此事件。
         *
         *  如果这个页面通过 popWindow/popTo 到达时传递了 data 参数，此页可以获取到 data。
         */
        onPageResume(callBack?: OnOffCallBack): Promise<{
            /** 通过 popWindow/popTo 传递的 data 参数 */
            data: IAnyObject;
        }>;

        /**
         * [ap.offPageResume()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/offPageResume.html)
         *
         * 移除 pageResume 事件的监听。
         */
        offPageResume(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onPagePause()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/onPagePause.html)
         *
         * 当一个页面不可见时(仅指 pushWindow 到下个页面)，会触发此事件。
         */
        onPagePause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offPagePause()](https://myjsapi.alipay.com/alipayjsapi/navigation/event/offPagePause.html)
         *
         * 移除 pagePause 事件的监听。
         */
        offPagePause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onAppPause()](https://myjsapi.alipay.com/alipayjsapi/navigation/appevent/onAppPause.html)
         *
         * 监听应用压后台事件。
         */
        onAppPause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offAppPause()](https://myjsapi.alipay.com/alipayjsapi/navigation/appevent/offAppPause.html)
         *
         * 移除应用压后台事件的监听。
         */
        offAppPause(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.onAppResume()](https://myjsapi.alipay.com/alipayjsapi/navigation/appevent/onAppResume.html)
         *
         * 监听应用从后台唤起事件。
         */
        onAppResume(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offAppResume()](https://myjsapi.alipay.com/alipayjsapi/navigation/appevent/offAppResume.html)
         *
         * 移除应用从后台唤起事件的监听。
         */
        offAppResume(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * ===============================  窗口 ========================================================
         */

        /**
         * [ap.alert(OPTION | content)](https://myjsapi.alipay.com/alipayjsapi/ui/notice/alert.html)
         *
         * 显示 alert 警告框。可直接传入一个字符串作为 OPTION.content 参数。
         *
         * alert 不像window.alert，会不阻塞 JS 代码执行，即先后弹2个的话，最后看到的是后弹的那个。
         */
        alert(
            option:
                | {
                    /** alert框的标题 */
                    title?: string;
                    /** alert框的内容 */
                    content: string;
                    /** 按钮文字，默认’确定’ */
                    buttonText?: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.confirm(OPTION | content)](https://myjsapi.alipay.com/alipayjsapi/ui/notice/confirm.html)
         *
         * 显示 confirm 确认框。可直接传入一个字符串作为 OPTION.content 参数。
         *
         * `ap.confirm`和`ap.alert`一样，它也不是阻塞式的，即先后弹2个的话，最后看到的是后弹的那个。
         */
        confirm(
            option:
                | {
                    /** confirm框的标题 */
                    title?: string;
                    /** confirm框的内容 */
                    content: string;
                    /** 确定按钮文字，默认’确定’ */
                    confirmButtonText?: string;
                    /** 取消按钮文字，默认’取消’ */
                    cancelButtonText?: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<{
            /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
            confirm: boolean;
        }>;

        /**
         * [ap.showToast(OPTION | content)](https://myjsapi.alipay.com/alipayjsapi/ui/notice/showToast.html)
         *
         * 显示弱提示。可选择多少秒之后消失。可直接传入一个字符串作为 OPTION.content 参数。
         */
        showToast(
            option:
                | {
                    /** 文字内容 */
                    content: string;
                    /** toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none’。其中 exception 类型必须传文字信息 */
                    type?: "none" | "success" | "fail" | "exception";
                    /** 显示时长，单位为 ms，默认 2000 */
                    duration?: number;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.hideToast()](https://myjsapi.alipay.com/alipayjsapi/ui/notice/hideToast.html)
         *
         * 隐藏弱提示。
         */
        hideToast(): Promise<unknown>;

        /**
         * [ap.showLoading(OPTION | content)](https://myjsapi.alipay.com/alipayjsapi/ui/notice/showLoading.html)
         *
         * 显示加载提示。可直接传入一个字符串作为 OPTION.content 参数。
         */
        showLoading(
            option:
                | {
                    /** loading 的文字提示 */
                    content?: string;
                    /** 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 ap.hideLoading 则不会显示 */
                    delay?: number;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.hideLoading()](https://myjsapi.alipay.com/alipayjsapi/ui/notice/hideLoading.html)
         *
         * 隐藏加载提示。
         */
        hideLoading(): Promise<unknown>;

        /**
         * [ap.showActionSheet(OPTION)](https://myjsapi.alipay.com/alipayjsapi/ui/notice/showActionSheet.html)
         *
         * 显示操作菜单。
         */
        showActionSheet(option: {
            /** 菜单标题 */
            title?: string;
            /** 菜单按钮的文字数组 */
            items: string[];
            /** 取消按钮文案，默认为「取消」 */
            cancelButtonText?: string;
            complete?: CompleteCallBack;
        }): Promise<{
            /** 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 */
            index: number;
        }>;

        /**
         * [ap.onTitleClick()](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/onTitleClick.html)
         *
         * 监听导航栏标题点击事件。在点击文字时才触发，点击导航栏其他空白地方不会触发
         */
        onTitleClick(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.offTitleClick()](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/offTitleClick.html)
         *
         * 移除导航栏标题点击事件的监听。
         */
        offTitleClick(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.setNavigationBar(OPTION | title)](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/setNavigationBar.html)
         *
         * 设置导航栏标题及样式。可直接传入一个字符串作为 OPTION.title 参数
         */
        setNavigationBar(
            option:
                | {
                    /** 导航栏标题 */
                    title?: string;
                    /** 图片链接地址，必须 https，请使用一张3x高清图，尺寸450*90。若设置了 image，则 title 参数失效 */
                    image?: string;
                    /** 导航栏背景色，支持16进制颜色值 */
                    backgroundColor?: string;
                    /** 导航栏底部边框颜色，支持16进制颜色值。若设置了 backgroundColor，borderBottomColor 会不生效，默认会和 backgroundColor 颜色一样 */
                    borderBottomColor?: string;
                    /** 是否重置导航栏为支付宝默认配色，默认 false。 */
                    reset?: boolean;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<unknown>;

        /**
         * [ap.showNavigationBarLoading()](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/showNavigationBarLoading.html)
         *
         * 显示导航栏加载图标。
         */
        showNavigationBarLoading(): Promise<unknown>;
        /**
         * [ap.hideNavigationBarLoading()](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/hideNavigationBarLoading.html)
         *
         * 隐藏导航栏加载图标。
         */
        hideNavigationBarLoading(): Promise<unknown>;

        /**
         * [ap.setOptionButton(OPTION)](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/setOptionButton.html)
         *
         * 设置导航栏右侧按钮
         */
        setOptionButton(option: {
            /** 监听 optionButton 点击事件 */
            onClick?: (index: number) => void;
            /** 重置到系统默认按钮，默认为 false。当为 true 时，忽略其他参数 */
            reset?: boolean;
            /** 是否阻止默认的分享功能，指定 iconType 的情况下点击时，会弹分享面板，`preventDefault: true` 会阻止默认分享面板弹出 */
            preventDefault?: boolean;
            /** 按钮数组，数组中每个项是一个对象 */
            items: Array<{
                /** 按钮标题，与 type、icon 三选一。 */
                title?: string;
                /** 按钮标题文字颜色，与 type、icon 三选一。 */
                color?: string;
                /** 按钮图标类型，与 title、icon 三选一。支持 user / filter / search / add / settings / scan / info / help / locate / more */
                type?: "user" | "filter" | "search" | "add" | "settings" | "scan" | "info" | "help" | "locate" | "more";
                /** 按钮图标，支持 base64。与 type 三选一 */
                icon?: string;
                /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
                badge?: string | number;
            }>;
            complete?: CompleteCallBack;
        }): Promise<unknown>;
        /**
         * [ap.showOptionButton()](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/showOptionButton.html)
         *
         * 显示导航栏右侧按钮。
         */
        showOptionButton(): Promise<unknown>;
        /**
         * [ap.hideOptionButton()](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/hideOptionButton.html)
         *
         * 隐藏导航栏右侧按钮。
         */
        hideOptionButton(): Promise<unknown>;

        /**
         * [ap.showPopMenu(OPTION)](https://myjsapi.alipay.com/alipayjsapi/ui/navigationbar/showPopMenu.html)
         *
         * 显示导航栏右上角弹出的下拉菜单。可直接传入一个数组作为 OPTION.items 参数。
         */
        showPopMenu(option: {
            items:
                | Array<{
                    /** 菜单标题，可直接作为 items 数组元素。 */
                    title?: string;
                    /** 菜单图标，支持 base64 */
                    icon?: string;
                    /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
                    badge?: string | number;
                }>
                | string[];
            complete?: CompleteCallBack;
        }): Promise<{
            /** 被点击的菜单项的索引，从0开始 */
            index: number;
        }>;

        /**
         * [ap.allowPullDownRefresh(OPTION | allow)](https://myjsapi.alipay.com/alipayjsapi/ui/pulldown/allowPullDownRefresh.html)
         *
         * 下拉刷新开关。可直接传入一个布尔值作为 OPTION.allow 参数。
         */
        allowPullDownRefresh(
            option:
                | {
                    allow: boolean;
                    complete?: CompleteCallBack;
                }
                | boolean,
        ): Promise<unknown>;

        /**
         * [ap.onPullDownRefresh()](https://myjsapi.alipay.com/alipayjsapi/ui/pulldown/onPullDownRefresh.html)
         *
         * 监听页面下拉事件。
         */
        onPullDownRefresh(callBack?: OnOffCallBack): Promise<{
            /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
            refreshAvailable: boolean;
        }>;

        /**
         * [ap.offPullDownRefresh()](https://myjsapi.alipay.com/alipayjsapi/ui/pulldown/offPullDownRefresh.html)
         *
         * 移除页面下拉刷新事件的监听。
         */
        offPullDownRefresh(callBack?: OnOffCallBack): Promise<unknown>;

        /**
         * [ap.choosePhoneContact()](https://myjsapi.alipay.com/alipayjsapi/ui/contact/choosePhoneContact.html)
         *
         * 选择系统通信录中某个联系人的电话。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 10 | 没有权限; |
         * | 11 | 用户取消操作(或设备未授权使用通讯录) |
         */
        choosePhoneContact(): Promise<{
            /**
             * 选中的联系人姓名
             */
            name: string;
            /**
             * 选中的联系人手机号
             */
            mobile: string;
        }>;

        /**
         * [ap.chooseAlipayContact()](https://myjsapi.alipay.com/alipayjsapi/ui/contact/chooseAlipayContact.html)
         *
         * 打开支付宝通讯录，选择一个或者多个支付宝联系人。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 10 | 没有权限; |
         * | 11 | 用户取消操作 |
         */
        chooseAlipayContact(
            option?:
                | {
                    /** 单次最多选择联系人个数，默认 1，最大 10 */
                    count?: number;
                    complete?: CompleteCallBack;
                }
                | number,
        ): Promise<{
            /** 选中的支付宝联系人数组 */
            contacts: Array<{
                /** 账号的真实姓名 */
                realName: string;
                /** 账号对应的手机号码 */
                mobile: string;
                /** 账号的邮箱 */
                email: string;
                /** 账号的头像链接 */
                avatar: string;
                /** 支付宝账号 userId */
                userId: string;
            }>;
        }>;

        /**
         * [ap.chooseCity(OPTION)](https://myjsapi.alipay.com/alipayjsapi/ui/city/chooseCity.html)
         *
         * 打开城市选择列表。
         */
        chooseCity(option?: {
            /** 是否显示当前定位城市，默认 false */
            showLocatedCity?: boolean;
            /** 是否显示热门城市，默认 true */
            showHotCities?: boolean;
            /** 自定义城市列表，列表内对象字段见下表 */
            cities?: Array<{
                /** 城市名 */
                city: string;
                /** 行政区划代码 */
                adCode: string;
                /** 城市名对应拼音拼写，方便用户搜索 */
                spell: string;
            }>;
            /** 自定义热门城市列表，列表内对象字段见下表  */
            hotCities?: Array<{
                /** 城市名 */
                city: string;
                /** 行政区划代码 */
                adCode: string;
                /** 城市名对应拼音拼写，方便用户搜索 */
                spell: string;
            }>;
            complete?: CompleteCallBack;
        }): Promise<{
            /** 城市名 */
            city: string;
            /** 行政区划代码 */
            adCode: string;
        }>;

        /**
         * [ap.datePicker(OPTION | formate)](https://myjsapi.alipay.com/alipayjsapi/ui/date/datePicker.html)
         *
         * 选择日期。可直接传入一个字符串作为 OPTION.formate 参数。
         *
         * | 错误码 | 说明 |
         * | - | - |
         * | 11 | 用户取消操作 |
         */
        datePicker(
            option?:
                | {
                    /** 返回的日期格式，默认 yyyy-MM-dd。支持 HH:mm:ss, yyyy-MM-dd, yyyy-MM-dd HH:mm:ss 三种格式 */
                    formate?: string;
                    /** 初始选择的日期时间，默认当前时间 */
                    currentDate?: string;
                    /** 最小日期时间 */
                    startDate?: string;
                    /** 最大日期时间 */
                    endDate?: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<{
            /** 选择的日期时间 */
            date: string;
        }>;

        /**
         * ===============================  窗口 ========================================================
         */
        /**
         * [ap.tradePay(OPTION | orderStr)](https://myjsapi.alipay.com/alipayjsapi/util/pay/tradePay.html)
         *
         * 发起支付
         *
         * 可直接传入一个字符串作为 OPTION.orderStr 参数
         * > 注：外部商户类APP支付orderStr字串拼接方式可参考 [这篇文档](https://opendocs.alipay.com/open/204/105465/)
         */
        tradePay(
            option:
                | {
                    /** 交易号，多个交易号请用英文分号`;`分隔 */
                    tradeNO?: string;
                    /** 商户id */
                    partnerID?: string;
                    /** 交易类型，默认为 ‘trade’ */
                    bizType?: string;
                    /** 交易子类型 */
                    bizSubType?: string;
                    /** 支付额外的参数，格式为JSON字符串 */
                    bizContext?: string;
                    /** 完整的支付参数拼接成的字符串，从服务端获取。需要入驻蚂蚁金服开放平台 */
                    orderStr?: string;
                    complete?: CompleteCallBack;
                }
                | string,
        ): Promise<{
            /**
             * 支付结果状态码，详见下表
             *
             * | resultCode | 说明 |
             * | - | - |
             * | 9000 | 订单支付成功 |
             * | 8000 | 正在处理中 |
             * | 4000 | 订单支付失败 |
             * | 6001 | 用户中途取消 |
             * | 6002 | 网络连接出错 |
             * | 99 | 用户点击忘记密码导致快捷界面退出(only iOS) |
             */
            resultCode: string;
        }>;

        /**
         * [ap.getServerTime()](https://myjsapi.alipay.com/alipayjsapi/util/server/getServerTime.html)
         *
         * 获取当前服务器时间的毫秒数
         */
        getServerTime(): Promise<{
            /** 服务器时间的毫秒数 */
            time: number;
        }>;
    }
}

declare const ap: AlipayJSSDK.ap;
