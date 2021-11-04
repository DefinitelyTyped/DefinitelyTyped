/**
 * 语音合成
 * 接口声明: { "name": "service.texttoaudio" }
 */
declare module '@service.texttoaudio' {
    /**
     * 语音播报，输入需要播报的文本内容，实时播报
     * @param obj
     */
    function speak(obj: {
        /**
         * 文本语言 zh_CN（中国大陆）en_US(英文)
         */
        lang: string;
        /**
         * 需要播报的文本内容，限制长度小于 4000 个字符
         */
        content: string;
        /**
         * 设置语速，不设置默认为正常值（1），取值大于 0，不同语音引擎取值区间不同，超过将取区间边界值。（0.5 为半速、2 为二倍速）
         */
        rate?: number;
        /**
         * 设置音调，不设置默认为正常值（1），取值大于 0，不同语音引擎取值区间不同，超过将取区间边界值。（值越大音调越高）
         */
        pitch?: number;
        /**
         * 成功回调
         */
        success: (data: {
            /**
             * 请求成功，本次操作唯一标识
             */
            utteranceId: string;
        }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 1001: 系统版本过低，不支持此功能(Android L 或以上才支持)
         * 1002: 初始化失败
         * 1003: 输入的文本长度超限
         * 1004: 语言不支持
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 语音合成，输入需要合成的文本内容，生成本地音频文件
     * @param obj
     */
    function textToAudioFile(obj: {
        /**
         * 文本语言 zh_CN（中国大陆）en_US(英文)
         */
        lang: string;
        /**
         * 需要合成的文本内容，限制长度小于 4000 个字符
         */
        content: string;
        /**
         * 设置语速，不设置默认为正常值（1），取值大于 0，不同语音引擎取值区间不同，超过将取区间边界值。（0.5 为半速、2 为二倍速）
         */
        rate?: number;
        /**
         * 设置音调，不设置默认为正常值（1），取值大于 0，不同语音引擎取值区间不同，超过将取区间边界值。（值越大音调越高）
         */
        pitch?: number;
        /**
         * 成功回调
         */
        success: (data: { filePath: string; utteranceId: string }) => void;
        /**
         * 失败回调
         * 202: 参数错误
         * 1001: 系统版本过低，不支持此功能(Android L 或以上才支持)
         * 1002: 初始化失败
         * 1003: 输入的文本长度超限
         * 1004: 语言不支持
         * 1005: io 异常
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 是否支持语言类型
     * @param obj
     */
    function isLanguageAvailable(obj: {
        /**
         * 文本语言 zh_CN（中国大陆）en_US(英文)
         */
        lang: string;
        /**
         * 成功回调
         */
        success: (data: {
            /**
             * true：支持，false：不支持
             */
            isAvailable: boolean;
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
     * 注册状态监听，监听每个操作的状态，通过 id 区分（语音播报 id 的前缀为"speak"，语音合成 id 的前缀为"speakAudio"）
     * @param obj
     */
    function onttsstatechange(): void;

    /**
     * 停止，无论当前处于语音播报还是保存到文件的过程
     */
    function stop(): number;

    /**
     * 判断语音是否正在播放或者合成
     */
    function isSpeaking(): boolean;
}
