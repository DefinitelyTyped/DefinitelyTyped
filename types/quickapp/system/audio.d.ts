/**
 * 音频 [1000+]
 * 接口声明: {"name": "system.audio"}
 */
declare module '@system.audio' {
    /**
     * 播放的音频媒体uri
     */
    let src: string;

    /**
     * 音频的当前进度，单位秒，对值设置可以调整播放进度
     */
    let currentTime: number;

    /**
     * 音频的播放时长，单位秒，未知返回NaN
     */
    const duration: number;

    /**
     * 音频是否自动播放，默认false
     */
    let autoplay: boolean;

    /**
     * 音频是否循环播放，默认false
     */
    let loop: boolean;

    /**
     * 音频的音量，默认当前系统媒体音量，音量变化范围[0.0,1.0]
     */
    let volume: number;

    /**
     * 音频是否静音，默认false
     */
    let muted: boolean;

    /**
     * 音频标题，未设置时显示正在播放或者暂停播放
     * [1040+]
     */
    let title: string;

    /**
     *  歌手名，未设置时显示正在播放或者暂停播放
     * [1040+]
     */
    let artist: string;

    /**
     *  指定使用音频类型，可设置的值有 music、voicecall，值为 music 时使用扬声器播放，voicecall 时使用听筒播放，默认为 music。
     * [1040+]
     */
    let cover: string;

    /**
     * 指定使用音频类型，可设置的值有 music、voicecall，值为 music 时使用扬声器播放，voicecall 时使用听筒播放，默认为 music
     * [1040+]
     */
    let streamType: string;

    /**
     * 音频是否在通知栏中显示音频播放状态，默认true
     * [1010+]
     */
    let notificationVisible: boolean;

    /**
     * 在调用play方法后或者autoplay为true时的回调事件
     */
    function onplay(): void;

    /**
     * 在调用pause方法后的回调事件
     */
    function onpause(): void;

    /**
     * 在调用 stop 方法后的回调事件
     */
    function onstop(): void;

    /**
     * 第一次获取到音频数据的回调事件
     */
    function onloadeddata(): void;

    /**
     * 播放结束时的回调事件
     */
    function onended(): void;

    /**
     * 播放时长变化时的回调事件
     */
    function ondurationchange(): void;

    /**
     * 播放发生错误时的回调事件
     */
    function onerror(): void;

    /**
     * 播放进度变化时触发，触发频率4HZ
     */
    function ontimeupdate(): void;

    /**
     * 通知栏点击上一首按钮时触发
     * [1040+]
     */
    function onprevious(): void;

    /**
     * 通知栏点击下一首按钮时触发
     * [1040+]
     */
    function onnext(): void;

    /**
     * 开始播放音频
     */
    function play(): void;

    /**
     * 暂停播放音频
     */
    function pause(): void;

    /**
     * 停止音频播放，可以通过 play 重新播放音频
     * [1030+]
     */
    function stop(): void;

    /**
     * 获取当前播放状态数据
     * [1050+]
     * @param obj
     */
    function getPlayState(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 播放状态,分别为'play','pause','stop'
             */
            state: string;
            /**
             * 当前播放的音频媒体 uri，停止时返回空字符串
             */
            src: string;
            /**
             * 当前音频的当前进度，单位秒,停止时返回-1
             */
            currentTime: number;
            /**
             * 当前音频是否在自动播放
             */
            autoplay: boolean;
            /**
             * 当前音频是否在循环播放
             */
            loop: boolean;
            /**
             * 当前音频的音量，默认当前系统媒体音量，音量变化范围[0.0,1.0]
             */
            volume: number;
            /**
             * 当前音频是否在静音播放
             */
            muted: boolean;
            /**
             * 当前音频是否正在通知栏中显示音频播放状态
             */
            notificationVisible: boolean;
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
}
