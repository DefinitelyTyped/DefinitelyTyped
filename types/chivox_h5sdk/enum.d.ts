/**
 * 评测类型枚举
 *
 * https://www.chivox.com/opendoc/#/ChineseDoc/coreEn
 */
export enum ChivoxCoreTypeEnum {
    /**
     * 英文语音评测 - 自然拼读评测，输出总分、音标、单词得分
     */
    EN_NSP_SCORE = "en.nsp.score",
    /**
     * 英文语音评测 - 单词评测，输出总分、每个音素得分
     */
    EN_WORD_SCORE = "en.word.score",
    /**
     * 英文语音评测 - 单词评测，输出总分、每个音素纠音结果(多读、漏读、错读)
     */
    EN_WORD_PRON = "en.word.pron",
    /**
     * 英文语音评测 - 支持评测多个单词，支持乱序朗读
     */
    EN_VOCABS_PRON = "en.vocabs.pron",
    /**
     * 英文语音评测 - 句子评测，输出总分、流利度、完整度、准确度和每个单词得分
     */
    EN_SENT_SCORE = "en.sent.score",
    /**
     * 英文语音评测 - 句子评测，输出总分、流利度、完整度、准确度和每个单词的纠音结果(多读、漏读、错读)
     */
    EN_SENT_PRON = "en.sent.pron",
    /**
     * 英文语音评测 - 针对单词、词组、句子在朗读的过程中实时输出评测结果
     */
    EN_RLTM_SCORE = "en.rltm.score",
    /**
     * 英文语音评测 - 篇章朗读、段落朗读
     */
    EN_PRED_SCORE = "en.pred.score",
    /**
     * 英文语音评测 - 口语选择题
     */
    EN_CHOC_SCORE = "en.choc.score",
    /**
     * 英文语音评测 - 情景问答、交际应用、回答问题、听后回答等
     */
    EN_SCNE_EXAM = "en.scne.exam",
    /**
     * 英文语音评测 - 听后复述、故事复述、话题简述、看图说话、口头作文、口语表达、信息转述等
     */
    EN_PRTL_EXAM = "en.prtl.exam",
    /**
     * 英文语音评测 - 语音转文字，并输出发音评测分数
     */
    EN_ASR_REC = "en.asr.rec",
    /**
     * 中文语音评测 - 中文单字评测（汉字）
     */
    CN_WORD_RAW = "cn.word.raw",
    /**
     * 中文语音评测 - 中文单字评测（拼音）
     */
    CN_WORD_SCORE = "cn.word.score",
    /**
     * 中文语音评测 - 中文词句评测
     */
    CN_SENT_RAW = "cn.sent.raw",
    /**
     * 中文语音评测 - 中文段落
     */
    CN_PRED_RAW = "cn.pred.raw",
    /**
     * 中文语音评测 - 中文有限分支识别
     */
    CN_REC_RAW = "cn.rec.raw",
    /**
     * 中文语音评测 - 中文汉字AITalk
     */
    CN_RECSCORE_RAW = "cn.recscore.raw",
}
