/**
 * 健康 [1050+]
 * 接口声明: { "name": "service.health" }
 */
declare module "@service.health" {
    interface HasStepsOfDayOptions {
        /**
         * 成功回调
         */
        success?: (data: HasStepsOfDaySuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface HasStepsOfDaySuccessOptions {
        /**
         * 是否支持提供每日步数的功能.true 支持，false 不支持
         */
        support: boolean;
    }

    /**
     * 是否支持提供每日步数的功能
     */
    function hasStepsOfDay(obj?: HasStepsOfDayOptions): void;

    interface GetTodayStepsOptions {
        /**
         * 成功回调
         */
        success?: (data: GetTodayStepsSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝授权|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1001|还不支持获取步数|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetTodayStepsSuccessOptions {
        /**
         * 返回当天步数
         */
        steps: number;
    }

    /**
     * 获取每个自然日的步数，返回的是调用接口时，用户今天已经累计的步数
     * @description
     * 权限说明
     * - 需要用户授权才能获取数据
     */
    function getTodaySteps(obj?: GetTodayStepsOptions): void;

    interface GetLastWeekStepsOptions {
        /**
         * 成功回调
         */
        success?: (data: GetLastWeekStepsSuccessOptions) => void;
        /**
         * 失败回调，返回失败原因
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝授权|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |1001|还不支持获取步数|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetLastWeekStepsSuccessOptions {
        /**
         * 最近七天步数列表数据
         */
        stepsList: DateSteps[];
    }

    interface DateSteps {
        /**
         * 日期(2019-04-08)
         */
        date: string;
        /**
         * 日期对应的步数
         */
        steps: number;
    }

    /**
     * 获取最近七个自然日每天的步数，包括今天。需要用户授权才能获取数据。
     * @description
     * 权限说明
     * - 需要用户授权才能获取数据
     */
    function getLastWeekSteps(obj?: GetLastWeekStepsOptions): void;
}

declare module "quickapp:@service.health" {
    export * from "@service.health";
}
