/**
 * 屏幕亮度 [1000+]
 * 接口声明: {"name": "system.brightness"}
 */
declare module "@system.brightness" {
    interface GetValueOptions {
        /**
         * 成功回调
         */
        success?: (data: GetValueSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetValueSuccessOptions {
        /**
         * 屏幕亮度，取值范围 0-255
         */
        value: number;
    }

    /**
     * 获得当前屏幕亮度值
     */
    function getValue(obj?: GetValueOptions): void;

    interface SetValueOptions {
        /**
         * 屏幕亮度，取值范围0-255
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
    }

    /**
     * 设置当前屏幕亮度值
     */
    function setValue(obj: SetValueOptions): void;

    interface GetModeOptions {
        /**
         * 成功回调
         */
        success?: (data: GetModeSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetModeSuccessOptions {
        /**
         * 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度
         */
        mode: 0 | 1;
    }

    /**
     * 获得当前屏幕亮度模式
     */
    function getMode(obj?: GetModeOptions): void;

    interface SetModeOptions {
        /**
         * 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度
         */
        mode: 0 | 1;
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
    }

    /**
     * 设置当前屏幕亮度模式
     * @param obj
     */
    function setMode(obj: SetModeOptions): void;

    interface SetKeepScreenOn {
        /**
         * 是否保持屏幕常亮
         */
        keepScreenOn: boolean;
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
    }

    /**
     * 设置是否保持常亮状态
     * [1060+]
     */
    function setKeepScreenOn(obj: SetKeepScreenOn): void;
}

declare module "quickapp:@system.brightness" {
    export * from "@system.brightness";
}
