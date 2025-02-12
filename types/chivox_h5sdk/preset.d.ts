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

export type ChivoxPreset = ChivoxPresetCnPredRaw;
