declare namespace EZUIKit {
    interface EZUIKitPlayerOptions {
        /**
         * @description 播放器容器 DOM 的 id
         */
        id: string;
        /**
         * @description 授权过程获取的 access_token
         */
        accessToken: string;
        /**
         * @description 视频 ezopen 协议播放地址
         * @example
         * { url: "ezopen://open.ys7.com/${设备序列号}/{通道号}.live" }
         * @example
         * { url: "ezopen://open.ys7.com/${设备序列号}/{通道号}.hd.live" }
         * @example
         * { url: "ezopen://open.ys7.com/${设备序列号}/{通道号}.rec?begin=yyyyMMddhhmmss" }
         */
        url: string;
        /**
         * @description 是否默认开启声音 1：打开（默认） 0：关闭
         * @default 1
         */
        audio?: number;
        /**
         * @description 视频宽度，默认值为容器容器 DOM 宽度
         */
        width?: number;
        /**
         * @description 视频高度，默认值为容器容器 DOM 高度
         */
        height?: number;
        /**
         * @description 设置静态资源地址, 自定义可以自行下载 `ezuikit_static`放置在自己的服务器下， 设置 {staticPath: "/ezuikit_static"}
         */
        staticPath?: string;
        /**
         * @description 播放器模板，可以通过选定模板，使用内置的播放器样式，组件 simple：极简版;standard：标准版;security：安防版;vioce：语音版
         */
        template?: string;
        /**
         * @description themeData 将主题数据本地化，设置本地数据，需要删除 `template` 参数
         * 你可以通过 themeData 修改按钮位置，颜色，头部底部颜色等配置。
         */
        themeData?: Record<string, any>;
        /**
         * @description 视频头部可选UI组件，可选值：capturePicture：截图,save：录像保存,zoom：电子放大
         */
        header?: Array<"capturePicture" | "save" | "zoom">;
        /**
         * @description 视频底部部可选UI组件，可选值：talk：对讲,broadcast：语音播报,hd：高清标清切换,fullScreen：全屏
         */
        footer?: Array<"talk" | "broadcast" | "hd" | "fullScreen">;
        /**
         * @description 按需加载插件，可选值： talk：对讲
         */
        plugin?: string[];
        /**
         * @description 播放成功回调
         */
        handleSuccess?: (...args: any[]) => void;
        /**
         * @description 播放错误回调
         */
        handleError?: (...args: any[]) => void;
        /**
         * @description 为避免频繁拖动播放异常，可设置模板回放时间轴拖动防抖间隔，默认值为2000（2秒），可取2000（2秒），3000（3秒），4000（4秒），5000（5秒）
         */
        seekFrequency?: () => number;
    }

    class EZUIKitPlayer {
        constructor(options: EZUIKit.EZUIKitPlayerOptions);

        /**
         * @description 开启播放
         * @example
         * // 方式一
         * player.play();
         * // 方式二
         * player.play().then(()=>{ console.log("执行播放成功后其他动作");});
         */
        play(): Promise<void>;

        /**
         * @description 结束播放
         * @example
         * // 方式一
         * player.stop();
         * // 方式二
         * player.stop().then(()=>{ console.log("执行停止成功后其他动作");});
         */
        stop(): Promise<void>;

        /**
         * @description 暂停播放
         */
        pause(): Promise<void>;

        /**
         * @description 开启声音
         */
        openSound(): Promise<number>;

        /**
         * @description 关闭声音
         */
        closeSound(): Promise<number>;

        /**
         * @description 开始录像
         */
        startSave(): Promise<any>;

        /**
         * @description 结束录像
         */
        stopSave(): Promise<any>;

        /**
         * @description 视频截图
         * @example
        * // 方式1 - 下载到本地
          player.capturePicture("文件名");
          // 方式2 - 返回base64格式
          const capCallback = (data) => {
             console.log("data",data)
          }
          player.capturePicture('default',capCallback)
         */
        capturePicture(filename: string, fn?: (data: any) => void): void;

        /**
         * 全屏（自动适配移动端和PC端全屏）
         */
        fullScreen(): void;

        /**
         * @description 取消全屏
         */
        cancelFullScreen(): void;

        /**
         * @description 获取播放时间回调
         * @example
         * player.getOSDTime()
              .then((time) => { console.log("获取到的当前播放时间", time)});
         */
        getOSDTime(): Promise<{ code: number; data: number; retCode: number }>;

        /**
         * @description 开始对讲
         */
        startTalk(): void;

        /**
         * @description 结束对讲
         */
        stopTalk(): void;

        /**
         * @description 重置画面宽高
         */
        reSize(width: number, height: number): void;

        /**
         * @description 开启电子放大
         */
        enableZoom(): Promise<void>;

        /**
         * @description 关闭电子放大
         */
        closeZoom(): Promise<void>;

        /**
         * @description 切换地址播放
         */
        changePlayUrl(opts: {
            /**
             * 播放地址类型，"live":预览，"rec"：回放；“cloud.rec”：云存储回放
             */
            type: "live" | "rec" | "cloud.rec";
            /**
             * 设备序列号,存在英文字母的设备序列号，字母需为大写
             */
            deviceSerial: string;
            /**
             * 通道号
             */
            channelNo: number;
            /**
             * 授权过程获取的access_token
             */
            accessToken?: string;
            /**
             * 是否为高清 true-主码流（高清） false-子码流(标清)
             */
            hd?: boolean;
            /**
             * 设备验证码（加密设备播放需要输入验证码）
             */
            validCode?: string;
            /**
             * type类型为回放有效，开始时间 格式为“YYYYMMDDHHmmss”
             */
            begin?: string;
            /**
             * type类型为回放有效，结束时间 格式为 “YYYYMMDDHHmmss”
             */
            end?: string;
        }): Promise<void>;
    }
}

export default EZUIKit;
