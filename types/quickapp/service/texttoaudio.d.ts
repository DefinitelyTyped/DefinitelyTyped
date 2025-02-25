/**
 * 语音合成
 * 接口声明: { "name": "service.texttoaudio" }
 */
declare module "@service.texttoaudio" {
    type Lang = "zh_CN" | "en_US";

    interface SpeakOptions {
        /**
         * 文本语言 zh_CN（中国大陆）en_US(英文)
         */
        lang: Lang;
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
        success?: (data: SpeakSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |1001|系统版本过低，不支持此功能|(Android L 或以上才支持)
         * |1002|初始化失败|
         * |1003|输入的文本长度超限|
         * |1004|语言不支持|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface SpeakSuccessOptions {
        /**
         * 请求成功，本次操作唯一标识
         */
        utteranceId: string;
    }

    /**
     * 语音播报，输入需要播报的文本内容，实时播报
     */
    function speak(obj: SpeakOptions): void;

    interface TextToAudioFileOptions {
        /**
         * 文本语言 zh_CN（中国大陆）en_US(英文)
         */
        lang: Lang;
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
        success?: (data: TextToAudioFileSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |1001|系统版本过低，不支持此功能|(Android L 或以上才支持)
         * |1002|初始化失败|
         * |1003|输入的文本长度超限|
         * |1004|语言不支持|
         * |1005|io 异常|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface TextToAudioFileSuccessOptions {
        /**
         * 生成文件路径
         */
        filePath: string;
        /**
         * 请求成功，本次操作唯一标识
         */
        utteranceId: string;
    }

    /**
     * 语音合成，输入需要合成的文本内容，生成本地音频文件
     */
    function textToAudioFile(obj: TextToAudioFileOptions): void;

    interface IsLanguageAvailableOptions {
        /**
         * 文本语言 zh_CN（中国大陆）en_US(英文)
         */
        lang: Lang;
        /**
         * 成功回调
         */
        success?: (data: IsLanguageAvailableSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface IsLanguageAvailableSuccessOptions {
        /**
         * true：支持，false：不支持
         */
        isAvailable: boolean;
    }

    /**
     * 是否支持语言类型
     */
    function isLanguageAvailable(obj: IsLanguageAvailableOptions): void;

    interface OnTtsStateChangeOptions {
        /**
         * 操作对应的 id 标识
         */
        utteranceId: string;
        /**
         * 本次操作的状态，可能的取值有四种: onStart、onDone、onStop、onError
         */
        state: "onStart" | "onDone" | "onStop" | "onError";
    }

    /**
     * 注册状态监听，监听每个操作的状态，通过 id 区分（语音播报 id 的前缀为"speak"，语音合成 id 的前缀为"speakAudio"）
     */
    function onttsstatechange(data: OnTtsStateChangeOptions): void;

    /**
     * 停止，无论当前处于语音播报还是保存到文件的过程
     * @returns 0: 请求成功 -1: 请求失败
     */
    function stop(): 0 | -1;

    /**
     * 判断语音是否正在播放或者合成
     * @returns true: 正在播报或合成过程中，false: 不在播报或合成过程中
     */
    function isSpeaking(): boolean;
}

declare module "quickapp:@service.texttoaudio" {
    export * from "@service.texttoaudio";
}
