/**
 * 剪贴板
 * 接口声明: {"name": "system.clipboard"}
 */
declare module '@system.clipboard' {
    /**
     * 修改剪贴板内容
     * @param obj
     */
    function set(obj: {
        /**
         * 需要放到剪切板的内容
         */
        text: string;
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

    /**
     * 读取剪贴板内容
     * @param obj
     */
    function get(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 剪切板内容
             */
            text: string;
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
}
