import type { ChivoxCoreTypeEnum } from "./enum";

/** 驰声 - 评测预设 */
export interface BaseChivoxPreset {
    /** 评测类型 */
    coreType: `${ChivoxCoreTypeEnum}`;

    /**
     *  评测文本
     */
    refText: string;

    /**
     *  评分分制，百分制
     */
    rank: number;

    /**
     * 评测结果中是否返回音频 url
     *
     * - 0: 不返回
     * - 1: 返回
     */
    attachAudioUrl?: 1 | 0;

    /**
     * 评分超时计时器（毫秒）
     * 当在 SDK 设置时间（默认 60s）未返回录音结果 表示录音评分超时，SDK主动断开连接并返回评分超时错误
     *
     * @default 60000
     */
    coreTimeout?: number;
}

/**
 * 中文 - 段落 预设类型
 */
export interface ChivoxPresetCnPredRaw extends BaseChivoxPreset {
    coreType: "cn.pred.raw";

    /**
     * 结果控制参数
     */
    result?: {
        /** 详细得分选项 */
        details?: {
            /**
             * 是否显示单字级评分
             *
             * - 0: 不显示
             * - 1: 显示
             *
             * @default 0
             */
            word?: number;

            /**
             * 是否实时返回已读内容
             *
             * @default 0
             *
             * - 0: 不返回
             * - 1: 通用模式, 返回的结果按照文本的顺序从前往后输出；;
             * - 2: 背诵模式, 返回的结果严格按照文本顺序从前往后;如果前面的句子有漏读，即使后面的句子正常朗读也不会返回；
             * - 3: 自由模式, 返回用户实际朗读的参考文本中的内容，不考虑文本的前后顺序;
             */
            ext_cur_wrd?: number;

            /**
             * 总分松紧度调节开关
             *
             * -  传参范围为[-1,-0.9, ... 0.9, 1]。
             * - 传参为0和不传该参数一样，不对打分分数进行调整。
             * - 传参为正数，提高打分分数，传参越大提高的分数越多。
             * - 传参为负数，降低打分分数，传参越小降低的分数越多
             */
            gop_adjust?: number;
        };
    };
}

/**
 * 英文 - 单词 预设类型
 */
export interface ChivoxPresetEnWordScore extends BaseChivoxPreset {
    coreType: "en.word.score";

    /**
     * 评分分制，默认百分制。
     * 支持 4 分制或百分制，可填 4 或 100。
     */
    rank: 4 | 100;

    /**
     * 指定发音类型
     *
     * - 1: 英式发音
     * - 2: 美式发音
     * - 3: 不区分
     *
     * @default 3
     *
     * 支持K12词汇，其它非K12词汇还在更新中。非K12词汇评测返回结果中accent值是0。
     */
    accent?: 1 | 2 | 3;

    /**
     * 浊化开关，可填0或1，默认是1
     *
     * - 0: 表示用户发音浊化和非浊化都算正确。
     * - 1: 表示用户发音必须浊化才算正确。
     *
     * @default 1
     */
    voiced?: 1 | 0;

    /**
     * 结果控制参数
     */
    result?: {
        /** 详细得分选项 */
        details?: {
            /**
             * 是否实时返回已读内容
             *
             * @default 0
             *
             * - 0: 不返回
             * - 1: 通用模式, 返回的结果按照文本的顺序从前往后输出；;
             * - 2: 背诵模式, 返回的结果严格按照文本顺序从前往后;如果前面的句子有漏读，即使后面的句子正常朗读也不会返回；
             * - 3: 自由模式, 返回用户实际朗读的参考文本中的内容，不考虑文本的前后顺序;
             */
            ext_cur_wrd?: number;

            /**
             * 总分松紧度调节开关
             *
             * -  传参范围为[-1,-0.9, ... 0.9, 1]。
             * - 传参为0和不传该参数一样，不对打分分数进行调整。
             * - 传参为正数，提高打分分数，传参越大提高的分数越多。
             * - 传参为负数，降低打分分数，传参越小降低的分数越多
             */
            gop_adjust?: number;
        };
    };
}

/**
 * 英文 - 实时评测 预设类型
 */
export interface ChivoxPresetEnRltmScore extends BaseChivoxPreset {
    coreType: "en.rltm.score";

    /**
     * 评分分制，默认百分制。
     * 支持 1-100。
     */
    rank: number;

    /**
     * 指定发音类型
     *
     * - 1: 英式发音
     * - 2: 美式发音
     * - 3: 不区分
     *
     * @default 3
     *
     * 支持K12词汇，其它非K12词汇还在更新中。非K12词汇评测返回结果中accent值是0。
     */
    accent?: 1 | 2 | 3;

    /**
     * 浊化开关，可填0或1，默认是1
     *
     * - 0: 表示用户发音浊化和非浊化都算正确。
     * - 1: 表示用户发音必须浊化才算正确。
     *
     * @default 1
     */
    voiced?: 1 | 0;

    /**
     * 结果控制参数
     */
    result?: {
        /** 详细得分选项 */
        details?: {
            /**
             * 是否实时返回已读内容
             *
             * @default 0
             *
             * - 0: 不返回
             * - 1: 通用模式, 返回的结果按照文本的顺序从前往后输出；;
             * - 2: 背诵模式, 返回的结果严格按照文本顺序从前往后;如果前面的句子有漏读，即使后面的句子正常朗读也不会返回；
             * - 3: 自由模式, 返回用户实际朗读的参考文本中的内容，不考虑文本的前后顺序;
             */
            ext_cur_wrd?: number;
        };
    };
}

/**
 * 英文 - 段落 预设类型
 */
export interface ChivoxPresetEnPredScore extends BaseChivoxPreset {
    coreType: "en.pred.score";

    /**
     * 评分分制，默认百分制。
     * 支持 1-100。
     */
    rank: number;

    /**
     * 指定发音类型
     *
     * - 1: 英式发音
     * - 2: 美式发音
     * - 3: 不区分
     *
     * @default 3
     *
     * 支持K12词汇，其它非K12词汇还在更新中。非K12词汇评测返回结果中accent值是0。
     */
    accent?: 1 | 2 | 3;

    /**
     * 浊化开关，可填0或1，默认是1
     *
     * - 0: 表示用户发音浊化和非浊化都算正确。
     * - 1: 表示用户发音必须浊化才算正确。
     *
     * @default 1
     */
    voiced?: 1 | 0;

    /**
     * 结果控制参数
     */
    result?: {
        /** 详细得分选项 */
        details?: {
            /**
             * 是否返回单词详细得分，默认0。
             * - 0: 不返回
             * - 1: 返回
             *
             * @default 0
             */
            word?: number;

            /**
             * 是否开启连读失爆检测，默认为0。
             * - 0: 不开启
             * - 1: 开启
             *
             * @default 0
             */
            connti?: number;

            /**
             * 总分松紧度调节开关
             *
             * -  传参范围为[-1,-0.9, ... 0.9, 1]。
             * - 传参为0和不传该参数一样，不对打分分数进行调整。
             * - 传参为正数，提高打分分数，传参越大提高的分数越多。
             * - 传参为负数，降低打分分数，传参越小降低的分数越多
             */
            gop_adjust?: number;

            /**
             * 是否实时返回已读内容
             *
             * @default 0
             *
             * - 0: 不返回
             * - 1: 通用模式, 返回的结果按照文本的顺序从前往后输出；;
             * - 2: 背诵模式, 返回的结果严格按照文本顺序从前往后;如果前面的句子有漏读，即使后面的句子正常朗读也不会返回；
             * - 3: 自由模式, 返回用户实际朗读的参考文本中的内容，不考虑文本的前后顺序;
             */
            ext_cur_wrd?: number;
        };
    };
}

export type ChivoxPreset<T extends `${ChivoxCoreTypeEnum}`> = T extends "cn.pred.raw" ? ChivoxPresetCnPredRaw
    : T extends "en.word.score" ? ChivoxPresetEnWordScore
    : T extends "en.rltm.score" ? ChivoxPresetEnRltmScore
    : T extends "en.pred.score" ? ChivoxPresetEnPredScore
    : never;
