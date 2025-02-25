/**
 * 弹窗
 * 接口声明: {"name": "system.prompt"}
 */
declare module "@system.prompt" {
    interface ShowToastOptions {
        /**
         * 要显示的文本
         */
        message: string;
        /**
         * 0 为短时，1 为长时，默认 0
         */
        duration?: 0 | 1;
    }
    /**
     * 显示Toast
     */
    function showToast(obj: ShowToastOptions): void;

    interface ShowDialogOptions {
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
        buttons?: ShowDialogButton[];
        /**
         * 是否在点击遮罩时关闭对话框，默认为true
         * [1060+]
         */
        autocancel?: boolean;
        /**
         * 成功回调
         */
        success?: (data: ShowDialogSuccessOptions) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface ShowDialogButton {
        text: string;
        color?: string;
    }

    interface ShowDialogSuccessOptions {
        /**
         * 选中按钮在 buttons 数组中的序号
         */
        index: number;
    }

    /**
     * 显示对话框
     */
    function showDialog(obj: ShowDialogOptions): void;

    interface ShowContextMenuOptions {
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
        success?: (data: ShowContextMenuSuccessOptions) => void;
        /**
         * 取消回调
         */
        cancel?: () => void;
        /**
         * 执行结束后的回调
         */
        fail?: (data: any, code: number) => void;
    }

    interface ShowContextMenuSuccessOptions {
        /**
         * 选中按钮在 itemList 数组中的序号
         */
        index: number;
    }
    /**
     * 显示上下文菜单
     * @param obj
     */
    function showContextMenu(obj: ShowContextMenuOptions): void;
}

declare module "quickapp:@system.prompt" {
    export * from "@system.prompt";
}
