/**
 * 截屏接口 [1100+]
 * 接口声明: { "name": "system.screenshot" }
 */

declare module '@system.screenshot' {
    /**
     * 监听用户截屏事件。用户使用系统截屏按键截屏、三指滑屏等方式时触发
     * @param obj
     */
    function onUserCaptureScreen(obj: {
        /**
         * 用户截屏后会回调此函数。
         */
        callback: () => void;
    }): void;

    /**
     * 取消监听用户截屏
     */
    function offUserCaptureScreen(): void;
}
