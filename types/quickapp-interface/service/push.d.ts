/**
 * 推送
 * 接口声明: {"name": "service.push"}
 */
declare module '@service.push' {
    /**
     * 获取服务提供商
     * [1000+]
     * @returns string 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    /**
     * 订阅push，后续可以收到push消息（一般可在应用初始化的地方进行调用。比如在app的onCreate方法中调用。）
     * @param obj
     */
    function subscribe(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * PushService 返回的注册 id，可用于针对某个用户发送消息
             */
            regId: string;
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
     * 取消订阅（一般不建议调用，调用后regId失效，需要重新订阅获取新的regId）
     */
    function unsubscribe(obj: {
        /**
         * 成功回调
         */
        success?: () => void;
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
     * 添加push事件回调（透传消息的payload内容可在此回调中收到）
     * @param obj
     */
    function on(obj: {
        /**
         * push事件回调处理
         */
        callback: (data: {
            /**
             * 消息 id
             */
            messageId: string;
            /**
             * 消息内容 payload
             */
            data: string;
        }) => void;
    }): void;

    /**
     * 移除push事件回调，push.on中的callback不会再收到透传内容
     * @param obj
     */
    function off(): void;
}
