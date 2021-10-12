/**
 * 系统音量
 * 接口声明: {"name": "system.volume"}
 */
declare module '@system.volume' {
    /**
     * 获取当前多媒体音量
     * @param obj
     */
    function getMediaValue(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 系统媒体当前音量，0.0-1.0 之间
             */
            value: number;
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
     * 获取当前多媒体音量
     * @param obj
     */
    function setMediaValue(obj: {
        /**
         * 设置的音量，0.0-1.0之间
         */
        value: number;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
