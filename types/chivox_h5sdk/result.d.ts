import type { ChivoxCoreTypeEnum } from "./enum";

export interface BaseChivoxInternalWordDetail {
    /**
     * 开始下标（在整个段落中的字节位置）
     */
    beginindex: number;
    /**
     * 结束下标（在整个段落中的字节位置）
     */
    endindex: number;
    /**
     * 单词评分
     */
    score: number;
}

/**
 * 评测中 - 中文段落实时请求结果 - 单词
 */
export interface ChivoxCnPredRawInternalWordDetail extends BaseChivoxInternalWordDetail {
    /**
     * 汉字
     */
    chn_char: string;

    /**
     * 为了方便应用层原样回显refText，将 refText 作为一个字符数组，beginindex 表示单词的
     * 首字符在 refText 中的下标，下标从 0 开始。
     */
    beginindex: number;

    /**
     * 同 beginindex，表示单词的末字符在 refText 中的下标，下标从 0 开始。
     */
    endindex: number;

    /**
     * 拼音
     *
     * @example 'liang'
     */
    char: string;

    /**
     * 标准声调
     *
     * @example 3
     */
    tone: number;

    /**
     * 应该是组号？官方文档没写
     *
     * @example 0
     */
    group: number;

    /**
     * 单字评分
     *
     * @example 74
     */
    score: number;
}

/**
 * 评测中 - 英文段落实时请求结果 - 单词
 */
export interface ChivoxEnPredScoreInternalWordDetail extends BaseChivoxInternalWordDetail {
    /**
     * 单词内容
     */
    text: string;
}

/**
 * 评测中请求，不同题型请求参数有所不同
 */
export interface ChivoxInternalRequest<T extends `${ChivoxCoreTypeEnum}`> {
    /**
     * 不知道是干啥的，官方文档没写
     */
    sdk: {
        protocol: "websocket";
        version: string;
        source: number;
    };

    /** 单词会话 Id */
    tokenId: string;

    /**
     * 返回结果类型
     */
    result: {
        /**
         * 评测过程中，实时返回已读的内容
         */
        details: T extends "en.pred.score" ? ChivoxEnPredScoreInternalWordDetail[][]
            : T extends "cn.pred.raw" ? ChivoxCnPredRawInternalWordDetail[]
            : never;

        /**
         * 评测过程中，实时返回已读内容新增识别的单词
         *
         * @example '两只黄'
         */
        rec: string;

        /**
         * 当前语速
         */
        phnspeed: number;
    };

    /**
     * 是否最终评测结果
     * - 0: 表示该结果是录音过程中实时返回的;
     * - 1: 表示该结果是录音完成后最终评测结果;
     */
    eof: 0 | 1;

    /**
     * 事件类型
     */
    time: {
        /**
         * callback 时间
         *
         * @example '2025-01-16 12:12:59:484'
         */
        callback: string;
        /**
         * 开始时间
         *
         * @example '2025-01-16 12:12:56:471'
         */
        start: string;
        /**
         * 本次会话建立连接时间
         *
         * @example '2025-01-16 12:12:56:412'
         */
        connect: string;
    };
}

/**
 * 英文段落评测中请求结果
 */
export interface ChivoxEnPredScoreInternalRequest {
    /**
     * 返回结果类型
     */
    result: {
        /**
         * 评测过程中，实时返回已读的内容
         *
         * 是个二维数组，第一维是每一行（表示用 \n 换行的每一行），第二维是单词
         */
        details: {
            /**
             * 开始下标（在整个段落中的字节位置）
             */
            beginindex: number;
            /**
             * 结束下标（在整个段落中的字节位置）
             */
            endindex: number;
            /**
             * 单词评分
             */
            score: number;
            /**
             * 单词
             */
            text: string;
        }[][];

        /**
         * 评测过程中，实时返回已读内容新增识别的单词
         *
         * ** 注意，这里被驰声转换成小写了 **
         *
         * @example 'good morning. nice to see you.'
         */
        rec: string;

        /**
         * 当前语速
         */
        phnspeed: number;
    };
}

/**
 * 评测完成请求，不同题型请求参数有所不同
 */
export interface ChivoxFinishRequest<T extends `${ChivoxCoreTypeEnum}`> {
    /**
     * 不知道是干啥的，官方文档没写
     */
    sdk: {
        protocol: "websocket";
        version: string;
        source: number;
    };

    /** 单词会话 Id */
    tokenId: string;

    /**
     * 返回结果类型
     */
    result: T extends "en.pred.score" ? ChivoxEnPredScoreFinishRequest
        : T extends "cn.pred.raw" ? ChivoxCnPredRawFinishRequest
        : never;

    /**
     * 是否最终评测结果
     * - 0: 表示该结果是录音过程中实时返回的;
     * - 1: 表示该结果是录音完成后最终评测结果;
     */
    eof: 0 | 1;

    /**
     * 事件类型
     */
    time: {
        /**
         * callback 时间
         *
         * @example '2025-01-16 12:12:59:484'
         */
        callback: string;
        /**
         * 开始时间
         *
         * @example '2025-01-16 12:12:56:471'
         */
        start: string;
        /**
         * 本次会话建立连接时间
         *
         * @example '2025-01-16 12:12:56:412'
         */
        connect: string;
    };
}

export interface BaseChivoxFinishWord {
    beginindex: number;
    endindex: number;
}

/**
 * 中文段落评测结束 - 单词
 */
export interface ChivoxCnPredRawFinishWord extends BaseChivoxFinishWord {
    /**
     * 读音
     *
     * @example 'chun'
     */
    char: string;

    /**
     * 文字
     *
     * @example '春'
     */
    chn_char: string;

    /**
     * 单个字的用户发音声调置信度，一共5个数字，
     * 分别表示发音为轻声，一声，二声，三声，四声的概率，
     * 最大的数字所在的声调即为该字实际发音的声调。
     */
    confidence: [number, number, number, number, number];

    /**
     * 单字发音时间
     */
    dur: number;
    group: number;

    /**
     * 汉字错误类型
     * - 0: 朗读正确
     * - 1: 多读
     * - 2: 漏读
     */
    is_err: number;

    /**
     * 汉字整体得分
     */
    overall: number;

    /** 无调发音得分: 字包含的所有无调拼音的发音整体水平 */
    phn: number;
    pron: number;

    /**
     * 单字得分
     */
    score: number;

    /**
     * 单字在音频中的起始时间
     */
    start: number;

    /**
     * 单字在音频中的结束时间
     */
    end: number;

    /** 标准声调值（0~4） */
    tone: 0 | 1 | 2 | 3 | 4;

    /**
     * 声调得分
     */
    tonescore: number;
}

/**
 * 中文段落评测结束结果
 */
export interface ChivoxCnPredRawFinishRequest {
    /**
     * 评测过程中，实时返回已读的内容
     */
    details: {
        /**
         * 开始下标（在整个段落中的字节位置）
         */
        beginindex: number;
        /**
         * 结束下标（在整个段落中的字节位置）
         */
        endindex: number;
        /**
         * 单词评分
         */
        score: number;
        /**
         * 单词
         */
        text: string;

        /**
         * 该句子的文字内容
         */
        chn_text: string;

        /**
         * 单句发音时间
         */
        dur: number;

        /**
         * 句子在音频中的结束时间
         */
        end: number;

        /**
         * 标记本句是否漏读
         * - 0:未漏读
         * - 1:漏读
         */
        is_leak: 0 | 1;

        /**
         * 句子总分
         */
        overall: number;

        /**
         * 无调发音得分:
         * 单句包含的所有无调拼音的发音整体水平
         */
        phn: number;

        pron: number;

        /**
         * 句子拼音
         */
        py_text: string;

        /**
         * 句子在音频中的起始时间
         */
        start: number;

        /**
         * 句子在音频中的结束时间
         */
        tone: number;

        /**
         * 该句中，每个汉字的结果
         */
        words: ChivoxCnPredRawFinishWord[];
    }[];

    /**
     * 流利度评分
     */
    fluency: {
        /** 流利度得分 */
        overall: number;
        /** 停顿次数 */
        pause: number;
        /** 语速 */
        speed: number;
    };

    /**
     * 准确度得分
     */
    accuracy: number;

    chars: {
        /**
         * 进行测评的汉字内容
         *
         * @example "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。"
         */
        chn_input: string;
    };

    forceout: number;

    info: {
        /** 音频质量 */
        tipId: number;

        /**
         * 错误信息提示
         *
         * 当提示"post proc failed"可能是音频没有录制成功或者引擎没有检测到用户的有效语音，
         * 可以提示用户重新录音
         */
        tips: string;
    };

    /** 完整度得分 */
    integrity: number;

    /**
     * 段落整体得分
     *
     * 综合考虑了段落的无调发音(phn)和声调(tone)
     */
    overall: number;

    /**
     * 无调发音得分
     *
     * 单句包含的所有无调拼音的发音整体水平
     */
    phn: number;

    /** 声调得分 */
    tone: number;

    /** 音频时长（单位：毫秒） */
    wavetime: number;

    pretime: number;
    pron: number;
    rank: number;
    res: "chn.pred.G4.D4.0.4";
    systime: number;
    textmode: number;
    timerate: number;
}

/**
 * 英文段落评测结束 - 单词
 */
export interface ChivoxEnPredScoreFinishWord extends BaseChivoxFinishWord {
    dur: number;
    /**
     * 单词评分
     */
    score: number;
    end: number;
    toneref: number;
    stressscore: number;
    tonescore: number;
    text: string;
    is_err: number;
    stressref: number;
    accent: number;
    start: number;
}

/**
 * 英文段落评测结束结果
 */
export interface ChivoxEnPredScoreFinishRequest {
    /**
     * 评测过程中，实时返回已读的内容
     *
     * 是个二维数组，第一维是每一行（表示用 \n 换行的每一行），第二维是单词
     */
    details: {
        /**
         * 开始下标（在整个段落中的字节位置）
         */
        beginindex: number;
        /**
         * 结束下标（在整个段落中的字节位置）
         */
        endindex: number;
        /**
         * 单词评分
         */
        score: number;
        /**
         * 单词
         */
        text: string;

        words: ChivoxEnPredScoreFinishWord[];
    }[];

    rank: number;
    res: "eng.pred.G4.D4.0.5";
    integrity: number;
    forceout: number;
    pron: number;
    rhythm: number;
    textmode: number;
    systime: number;
    oov_words: object;
    fluency: {
        pause: number;
        overall: number;
        speed: number;
    };
    info: {
        snr: number;
        trunc: number;
        clip: number;
        volume: number;
        tipId: number;
    };
    /**
     * 该段落总分
     */
    overall: number;
    pretime: number;
    timerate: number;
    accuracy: number;
    wavetime: number;
    delaytime: number;
}
