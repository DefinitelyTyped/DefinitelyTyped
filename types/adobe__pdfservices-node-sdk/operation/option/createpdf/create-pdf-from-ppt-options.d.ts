/**
 * Parameters for converting PPT Files to PDF using {@link CreatePDFOperation}.
 */
export class CreatePDFFromPPTOptions {
    static get SupportedDocumentLanguage(): {
        /**
         * Represents "Danish (Denmark)" locale
         */
        DA_DK: string;
        /**
         * Represents "Lithuanian (Lithuania)" locale
         */
        LT_LT: string;
        /**
         * Represents "Slovenian (Slovenia)" locale
         */
        SL_SI: string;
        /**
         * Represents "Greek (Greece)" locale
         */
        EL_GR: string;
        /**
         * Represents "Russian (Russia)" locale
         */
        RU_RU: string;
        /**
         * Represents "English (United States)" locale
         */
        EN_US: string;
        /**
         * Represents "Chinese (Hong Kong)" locale
         */
        ZH_HK: string;
        /**
         * Represents "Hungarian (Hungary)" locale
         */
        HU_HU: string;
        /**
         * Represents "Estonian (Estonia)" locale
         */
        ET_EE: string;
        /**
         * Represents "Portuguese (Brazil)" locale
         */
        PT_BR: string;
        /**
         * Represents "Ukrainian (Ukraine)" locale
         */
        UK_UA: string;
        /**
         * Represents "Norwegian (Norway)" locale
         */
        NB_NO: string;
        /**
         * Represents "Polish (Poland)" locale
         */
        PL_PL: string;
        /**
         * Represents "Latvian (Latvia)" locale
         */
        LV_LV: string;
        /**
         * Represents "Finnish (Finland)" locale
         */
        FI_FI: string;
        /**
         * Represents "Japanese (Japan)" locale
         */
        JA_JP: string;
        /**
         * Represents "Spanish (Spain)" locale
         */
        ES_ES: string;
        /**
         * Represents "Bulgarian (Bulgaria)" locale
         */
        BG_BG: string;
        /**
         * Represents "English (United Kingdom)" locale
         */
        EN_GB: string;
        /**
         * Represents "Czech (Czech Republic)" locale
         */
        CS_CZ: string;
        /**
         * Represents "Maltese (Malta)" locale
         */
        MT_MT: string;
        /**
         * Represents "German (Germany)" locale
         */
        DE_DE: string;
        /**
         * Represents "Croatian (Croatia)" locale
         */
        HR_HR: string;
        /**
         * Represents "Slovak (Slovakia)" locale
         */
        SK_SK: string;
        /**
         * Represents "Serbian (Serbia)" locale
         */
        SR_SR: string;
        /**
         * Represents "Catalan (Canada)" locale
         */
        CA_CA: string;
        /**
         * Represents "Macedonian (Macedonia)" locale
         */
        MK_MK: string;
        /**
         * Represents "Korean (Korea)" locale
         */
        KO_KR: string;
        /**
         * Represents "German (Switzerland)" locale
         */
        DE_CH: string;
        /**
         * Represents "Dutch (Netherlands)" locale
         */
        NL_NL: string;
        /**
         * Represents "Chinese (China)" locale
         */
        ZH_CN: string;
        /**
         * Represents "Swedish (Sweden)" locale
         */
        SV_SE: string;
        /**
         * Represents "Italian (Italy)" locale
         */
        IT_IT: string;
        /**
         * Represents "Norwegian (Norway)" locale
         */
        NO_NO: string;
        /**
         * Represents "Turkish (Turkey)" locale
         */
        TR_TR: string;
        /**
         * Represents "French (France)" locale
         */
        FR_FR: string;
        /**
         * Represents "Romanian (Romania)" locale
         */
        RO_RO: string;
        /**
         * Represents "Hebrew (Israel)" locale
         */
        IW_IL: string;
    };
    /**
     * Returns a builder for {@link CreatePDFFromPPTOptions}.
     */
    static get Builder(): any;
    constructor(builder: any);
    documentLanguage: any;
    createTaggedPDF: any;
    validate(): any;
}
