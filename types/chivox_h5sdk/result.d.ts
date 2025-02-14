export interface ChivoxInternalWordDetail {
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
 * 评测中请求，不同题型请求参数有所不同
 */
export interface ChivoxInternalRequest {
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
        details: ChivoxInternalWordDetail[][];

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
    eof: 0;

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
