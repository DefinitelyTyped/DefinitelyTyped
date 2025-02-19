/**
 * 支付
 * 接口声明: {"name": "service.pay"}
 */
declare module "@service.pay" {
    /**
     * 获取服务提供商
     * [1000+]
     * @returns 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    interface PayOptions {
        /**
         * 订单信息
         */
        orderInfo: string;
        /**
         * 成功回调
         */
        success?: (data: PaySuccessOptions) => void;
        /**
         * 失败回调，返回失败原因
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface PaySuccessOptions {
        /**
         * 返回状态码
         */
        code: number;
        /**
         * 消息内容
         */
        message: string;
        /**
         * 支付结果
         */
        result: string;
    }

    /**
     * 使用支付完成付款
     */
    function pay(obj: PayOptions): void;
}

declare module "quickapp:@service.pay" {
    export * from "@service.pay";
}
