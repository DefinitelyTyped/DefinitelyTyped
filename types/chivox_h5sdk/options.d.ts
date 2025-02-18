import type { ChivoxCoreTypeEnum } from "./enum";
import type { ChivoxPreset } from "./preset";

export {};

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    & Omit<T, Keys>
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<T, K>>;
    }[Keys];

export interface ChivoxSignature {
    /** 生成签名的时间戳字符串，单位：毫秒(ms)，长度为13 */
    timestamp: string;
    /**
     * 签名字符串
     * 字母小写，通过算法
     * alg(appkey + timestamp + secretKey)
     * 生成，详见签名示例
     */
    sig: string;
}

export interface ChivoxOptions {
    /** 评测模式 */
    coreType: `${ChivoxCoreTypeEnum}`;

    /**
     * 获取验证身份信息的接口地址
     */
    signature: () => Promise<ChivoxSignature>;

    /**
     * 单次语音评测限制时长，不能超出限制时长
     *
     * https://www.chivox.com/opendoc/#/ChineseDoc/coreCn/
     */
    timeout?: number;

    onInit?: (msg: string) => void;

    onError?: (res: { id: number; message: string }) => void;
}

/**
 * 驰声 Record 方法需要的 Options
 */
export interface ChivoxRecordOptions<T extends `${ChivoxCoreTypeEnum}`> {
    /**
     * 时长（毫秒），默认选用引擎的限制时长
     */
    duration?: number;

    /**
     * 录音前是否播放 "ding" 声
     *
     * @default true
     */
    playDing?: boolean;

    /**
     * 音频类型，固定为 wav，不可修改
     */
    audioType: "wav";

    /**
     * 评测类型参数
     */
    serverParams: ChivoxPreset<T>;

    /**
     * 开始录音后生成 recordId 后的 Callback
     */
    onRecordIdGenerated?: (tokenId: string) => void;

    /**
     * 必传入，否则驰声的 JS SDK 会报错
     */
    onStart: () => void;

    /**
     * 录音结束回调
     */
    onStop?: () => void;

    /**
     * 评测中打分回调
     */
    onInternalScore?: (res: any) => void;

    /**
     * 评测结束，打分回调
     *
     * **必传入**，否则驰声的 JS SDK 会报错
     */
    onScore: (res: any) => void;

    /**
     * 评测失败回调
     */
    onScoreError?: (res: any) => void;

    /**
     * 显示音量条
     */
    showVolumeBar?: (res: any) => void;
}

/** 驰声录音需要的 Options */
export type ChivoxRecorderOptions =
    & {
        /**
         * 驰声授权的appKey
         */
        appKey: string;
        /**
         * 签名sig的加密类型
         *
         * @default "sha1"
         *
         * - 支持的加密类型有：
         * - sha1
         * - sha256
         * - md5
         */
        alg?: "sha1" | "sha256" | "md5";

        /**
         * 指定SDK的评分服务器地址
         *
         * @default "wss://cloud.chivox.com"
         */
        server?: string;

        recordId?: string;

        micWatch?: boolean;

        /**
         * 初始化成功时
         *
         * @param message 'success'
         */
        onInit: (message: string) => void;

        /**
         * 初始化失败时
         *
         * @param res 错误信息
         */
        onError: (res: { id: number; message: string }) => void;

        /**
         * 连接状态变化时的回调函数
         *
         * @param code 50100: 已连接，50101: 连接失败，50109: 连接中
         * @returns
         */
        onConnectorStatusChange?: (code: 50101 | 50109 | 50100) => void;
    }
    & RequireAtLeastOne<{
        /**
         * 获取验证身份信息的接口地址
         */
        sigurl?: string;

        /**
         * 获取验证身份信息的接口地址
         */
        signature: () => {
            /** 生成签名的时间戳字符串，单位：毫秒(ms)，长度为13 */
            timestamp: string;
            /**
             * 签名字符串
             * 字母小写，通过算法
             * alg(appkey + timestamp + secretKey)
             * 生成，详见签名示例
             */
            sig: string;
        };
    }, "sigurl" | "signature">;
