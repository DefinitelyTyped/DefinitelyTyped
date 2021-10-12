/**
 * WebSocketFactory [1020+]
 * 接口声明: {"name": "system.websocketfactory"}
 */
declare module '@system.websocketfactory' {
    /**
     * 创建websocket实例
     * @param obj
     * @returns WebSocket
     */
    function create(obj: {
        /**
         * 请求url， 必须是wss或ws协议
         */
        url: string;
        /**
         * 请求头，header中不能设置Referer，UserAgent设置在1040版本开始支持
         */
        header?: object;
        /**
         * 子协议组
         */
        protocols?: string[];
    }): WebSocket;

    /**
     * WebSocket 对象提供了用于创建和管理 WebSocket 连接，以及可以通过该连接发送和接收数据的 API。
     * [1020+]
     */
    class WebSocket {
        /**
         * 向服务器发送数据
         * @param obj
         */
        send(obj: {
            /**
             * 发送的消息
             * [1030+]
             */
            data: string | ArrayBuffer;
            /**
             * 成功回调
             */
            success?: () => void;
            /**
             * 失败回调
             */
            fail?: (data: any, code: number) => void;
        }): void;

        /**
         * 关闭当前连接
         * @param obj
         *  code 关闭链接的状态号 ，默认1000
         *  reason 关闭的原因
         *  success 接口调用成功的回调函数
         *  fail 接口调用失败的回调函数
         */
        close(obj: {
            /**
             * 关闭链接的状态号 ，默认1000
             */
            code?: number;
            /**
             * 关闭的原因
             */
            reason?: string;
            /**
             * 成功回调
             */
            success?: () => void;
            /**
             * 失败回调
             */
            fail?: (data: any, code: number) => void;
        }): void;

        /**
         * 用于指定连接成功后的回调函数
         */
        onopen: () => void;

        /**
         * 用于指定连接关闭后的回调函数
         */
        onmessage: (data: {
            /**
             * 监听器接收到的消息, 消息类型与发送类型一致
             * [1030+]
             */
            data: string | ArrayBuffer;
        }) => void;

        /**
         * 用于指定连接关闭后的回调函数
         */
        onclose: (data: {
            /**
             * 服务器返回关闭的状态码
             */
            code: number;
            /**
             * 服务器返回的关闭原因
             */
            reason: string;
            /**
             * 是否正常关闭
             */
            wasClean: boolean;
        }) => void;

        /**
         * 用于指定连接失败后的回调函数
         */
        onerror: (data: {
            /**
             * 监听器接收到的消息
             */
            data: string;
        }) => void;
    }
}
