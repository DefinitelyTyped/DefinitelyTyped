/**
 * 健康 [1050+]
 * 接口声明: { "name": "service.health" }
 */
declare module '@service.health' {
    /**
     * 是否支持提供每日步数的功能
     * @param obj
     */
    function hasStepsOfDay(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 是否支持提供每日步数的功能.true 支持，false 不支持
             */
            support: boolean;
        }) => void;
        /**
         * 失败回调，返回失败原因
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取每个自然日的步数，返回的是调用接口时，用户今天已经累计的步数
     * [权限说明:需要用户授权才能获取数据]
     * @param obj
     */
    function getTodaySteps(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 返回当天步数
             */
            steps: number;
        }) => void;
        /**
         * 失败回调，返回失败原因
         * 201: 用户拒绝授权
         * 1001: 还不支持获取步数
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最近七个自然日每天的步数，包括今天。需要用户授权才能获取数据。
     * [权限说明:需要用户授权才能获取数据]
     * @param obj
     */
    function getLastWeekSteps(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 返回当天步数
             */
            stepsList: Steps[];
        }) => void;
        /**
         * 失败回调，返回失败原因
         * 201: 用户拒绝授权
         * 1001: 还不支持获取步数
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}

interface Steps {
    /**
     * 日期(2019-04-08)
     */
    date: string;
    /**
     * 日期对应的步数
     */
    steps: number;
}
