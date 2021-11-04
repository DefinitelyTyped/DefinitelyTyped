/**
 * 二维码
 * 接口声明: {"name": "system.barcode"}
 */
declare module '@system.barcode' {
    /**
     * 扫描二维码
     * @param obj
     */
    function scan(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 解析后的内容
             */
            result: string;
        }) => void;
        /**
         * 失败回调
         * 201: 用户拒绝，获取相机权限失败
         */
        fail?: (data: any, code: number) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
