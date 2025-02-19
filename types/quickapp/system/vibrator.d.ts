/**
 * 震动
 * 接口声明: {"name": "system.vibrator"}
 */
declare module "@system.vibrator" {
    interface VibrateOptions {
        /**
         * 振动模式，"long"表示长振动，"short"表示短振动。默认为 long
         * [1030+]
         */
        mode?: "long" | "short";
    }

    /**
     * 触发震动
     */
    function vibrate(obj?: VibrateOptions): void;
}

declare module "quickapp:@system.vibrator" {
    export * from "@system.vibrator";
}
