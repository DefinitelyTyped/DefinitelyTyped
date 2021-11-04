/**
 * 震动
 * 接口声明: {"name": "system.vibrator"}
 */
declare module '@system.vibrator' {
    /**
     * 触发震动，持续1秒
     * @param obj
     */
    function vibrate(obj: {
        /**
         * 振动模式，"long"表示长振动，"short"表示短振动。默认为 long
         * [1030+]
         */
        mode?: string;
    }): void;
}
