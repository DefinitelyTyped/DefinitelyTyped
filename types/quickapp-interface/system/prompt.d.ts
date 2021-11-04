/**
 * 弹窗
 * 接口声明: {"name": "system.prompt"}
 */
declare module '@system.prompt' {
    /**
     * 显示Toast
     * @param obj
     */
    function showToast(obj: {
        /**
         * 要显示的文本
         */
        message: string;
        /**
         * 0 为短时，1 为长时，默认 0
         */
        duration?: number;
    }): void;

    /**
     * 显示对话框
     * @param obj
     */
    function showDialog(obj: {
        /**
         * 标题
         */
        title?: string;
        /**
         * 内容
         */
        message?: string;
        /**
         * 按钮的数组，按钮结构：{text:'text',color:'#333333'}，color 可选：buttons 的第 1 项为 positive button；buttons 的第 2 项（如果有）为 negative button；buttons 的第 3 项（如果有）为 neutral button。最多支持 3 个 button
         */
        buttons?: [
            {
                text: string;
                color?: string;
            },
        ];
        /**
         * 1060+
         * 是否在点击遮罩时关闭对话框，默认为true
         */
        autocancel?: boolean;
        /**
         * 成功回调
         */
        success?: (data?: {
            /**
             * 选中按钮在 buttons 数组中的序号
             */
            index: number;
        }) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 显示上下文菜单
     * @param obj
     */
    function showContextMenu(obj: {
        /**
         * 按钮的文字数组
         */
        itemList: string[];
        /**
         * 按钮颜色
         */
        itemColor?: string;
        /**
         * 成功回调
         */
        success?: (data?: {
            /**
             * 选中按钮在 itemList 数组中的序号
             */
            index: number;
        }) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
    }): void;
}
