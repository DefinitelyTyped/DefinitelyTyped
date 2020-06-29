/* tslint:disable:no-redundant-jsdoc-2 */
/**
 * This interface defines the digital mode
 * @since 2.3
 */
// tslint:disable-next-line no-const-enum
declare const enum AvInfoDigitalCompMode {
    /**
     * line mode
     * @since 2.3
     */
    DOLBY_DIGITAL_COMP_MODE_LINE = 0,
    /**
     * rf mode
     * @since 2.3
     */
    DOLBY_DIGITAL_COMP_MODE_RF = 1,
}

// tslint:disable-next-line strict-export-declare-modifiers
declare interface AVInfoManager {
    AvInfoDigitalCompMode: {
        /**
         * line mode
         * @since 2.3
         */
        DOLBY_DIGITAL_COMP_MODE_LINE: 0;
        /**
         * rf mode
         * @since 2.3
         */
        DOLBY_DIGITAL_COMP_MODE_RF: 1;
    };

    /**
     * This method get the plugin's version number.
     * @returns string value of plugin's version
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getVersion: () => string;

    /**
     * This method get dolby digital component mode.
     * @returns AvInfoDigitalCompMode dolby digital component mode
     * @throw WebAPIException NotSupportedError
     * @since 2.3
     * @deprecated 4.0
     */
    getDolbyDigitalCompMode: () => AvInfoDigitalCompMode;

    /**
     * This method is to check whether the HDR is supported or not.
     * @returns boolean. true is support, false is not support.
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    isHdrTvSupport: () => boolean;
}
