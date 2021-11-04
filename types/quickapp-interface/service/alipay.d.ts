/**
 * 支付宝支付
 * 接口声明: {"name": "service.alipay"}
 */
declare module '@service.alipay' {
    /**
     * 使用支付宝支完成支付
     * @param obj
     */
    function pay(obj: {
        /**
         * 服务端生成的订单信息
         */
        orderInfo: string;
        /**
         * 支付结果回调，格式参考支付宝的通知参数说明文档
         * [详见:https://docs.open.alipay.com/204/105302 ]
         */
        callback?: (ret: any) => void;
    }): void;
}
