/**
 * 电量信息 [1000+]
 * 接口声明: {"name": "system.battery"}
 */
declare module "@system.battery" {
    interface GetStatusOptions {
        /**
         * 成功回调
         */
        success?: (data: GetStatusSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetStatusSuccessOptions {
        /**
         * 是否正在充电
         */
        charging: boolean;
        /**
         * 当前电量，0.0 - 1.0 之间
         */
        level: number;
    }

    /**
     * 获取当前设备的电量信息
     */
    function getStatus(obj?: GetStatusOptions): void;
}

declare module "quickapp:@system.battery" {
    export * from "@system.battery";
}
