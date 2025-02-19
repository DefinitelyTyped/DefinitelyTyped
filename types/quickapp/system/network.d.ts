/**
 * 网络状态
 * 接口声明: {"name": "system.network"}
 */
declare module "@system.network" {
    interface GetTypeOptions {
        /**
         * 成功回调
         */
        success?: (data: GetTypeSuccessOptions) => void;
        /**
         * 失败回调，可能是因为缺乏权限
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetTypeSuccessOptions {
        /**
         * 是否按照流量计费
         */
        metered: boolean;
        /**
         * 网络类型，可能的值为 2g，3g，4g，wifi，none， 5g(1070+)，bluetooth(1070+)，others(1070+)
         */
        type: string;
    }

    /**
     * 获取网络类型
     */
    function getType(obj?: GetTypeOptions): void;

    interface SubscribeOptions {
        /**
         * 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅
         * [1050+]
         */
        reserved?: boolean;
        /**
         * 每次网络发生变化，都会被回调
         */
        callback?: (data: SubscribeCallbackOptions) => void;
        /**
         * 失败回调，可能是因为缺乏权限
         */
        fail?: (data: any, code: number) => void;
    }

    interface SubscribeCallbackOptions {
        /**
         * 是否按照流量计费
         */
        metered: boolean;
        /**
         * 网络类型，可能的值为 2g，3g，4g，wifi，none， 5g(1070+)，bluetooth(1070+)，others(1070+)
         */
        type: string;
    }

    /**
     * 监听网络连接状态。如果多次调用，仅最后一次调用生效
     */
    function subscribe(obj?: SubscribeOptions): void;

    /**
     * 取消监听网络连接状态
     */
    function unsubscribe(): void;

    interface GetSimOperatorsOptions {
        /**
         * 成功回调
         */
        success?: (data: GetSimOperatorsSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |1001|未插入sim卡|
         * |1002|获取运营商信息失败|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetSimOperatorsSuccessOptions {
        /**
         * SIM卡列表信息
         */
        operators: SimInfo[];
        /**
         * Sim卡数量
         */
        size: number;
    }

    interface SimInfo {
        /**
         * 返回Sim卡的运营商信息
         * @description
         * ```
         * 运营商信息说明：此处统一返回MCC+MNC，即移动国家代码 + 移动网络代码；
         * 中国移动：46000，46002，46004，46007；
         * 中国联通：46001，46006，46009；
         * 中国电信：46003，46005，46011；
         * ```
         * 其余MCC+MNC请查看：
         * @link https://www.mcc-mnc.com/
         */
        operator: string;
        /**
         * 卡槽序号
         */
        slotIndex: number;
        /**
         * 是否为默认数据卡
         */
        isDefaultDataOperator: boolean;
    }

    /**
     * 获取Sim卡的运营商信息，需要电话权限
     * [1070+]
     */
    function getSimOperators(obj?: GetSimOperatorsOptions): void;
}

declare module "quickapp:@system.network" {
    export * from "@system.network";
}
