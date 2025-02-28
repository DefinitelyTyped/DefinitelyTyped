/**
 * 截屏接口 [1100+]
 * 接口声明: { "name": "system.screenshot" }
 */

declare module "@system.screenshot" {
    interface OnUserCaptureScreenOptions {
        callback: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝，获取读取手机存储权限失败|
         */
        fail?: (data: string, code: number) => void;
    }

    /**
     * 监听用户截屏事件。用户使用系统截屏按键截屏、三指滑屏等方式时触发
     * @description
     * 权限要求
     * - 读手机存储
     */
    function onUserCaptureScreen(obj: OnUserCaptureScreenOptions): void;

    /**
     * 取消监听用户截屏
     */
    function offUserCaptureScreen(): void;
}

declare module "quickapp:@system.screenshot" {
    export * from "@system.screenshot";
}
