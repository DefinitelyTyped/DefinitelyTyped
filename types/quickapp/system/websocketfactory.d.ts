/**
 * WebSocketFactory [1020+]
 * 接口声明: {"name": "system.websocketfactory"}
 */
declare module "@system.websocketfactory" {
    interface CreateOptions {
        /**
         * 请求url， 必须是wss或ws协议
         */
        url: string;
        /**
         * 请求头，header中不能设置Referer，UserAgent设置在1040版本开始支持
         */
        header?: Record<string, string | number>;
        /**
         * 子协议组
         */
        protocols?: string[];
    }

    interface WebSocket {
        send: (obj: WebSocketSendOptions) => void;
        close: (obj?: WebSocketCloseOptions) => void;
        set onopen(callback: () => void);
        set onmessage(callback: (data: WebSocketOnMessageOptions) => void);
        set onclose(callback: (data: WebSocketOnCloseOptions) => void);
        set onerror(callback: (data: WebSocketOnErrorOptions) => void);
    }

    type TypedArray =
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | BigInt64Array
        | BigUint64Array;

    interface WebSocketSendOptions {
        /**
         * 发送的消息
         * ArrayBuffer [1030+]
         * TypedArray [1080+]
         */
        data: string | ArrayBuffer | TypedArray;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
    }

    interface WebSocketCloseOptions {
        /**
         * 关闭链接的状态号 ，默认1000
         */
        code?: number;
        /**
         * 关闭的原因
         */
        reason?: string;
        /**
         * 接口调用成功的回调函数
         */
        success?: () => void;
        /**
         * 接口调用失败的回调函数
         */
        fail?: (data: any, code: number) => void;
    }

    interface WebSocketOnMessageOptions {
        /**
         * 监听器接收到的消息, 消息类型与发送类型一致
         * ArrayBuffer [1030+]
         */
        data: string | ArrayBuffer;
    }

    interface WebSocketOnCloseOptions {
        /**
         * 服务器返回关闭的状态码。
         */
        code: string;
        /**
         * 服务器返回的关闭原因。
         */
        reason: string;
        /**
         * 是否正常关闭。
         */
        wasClean: boolean;
    }

    interface WebSocketOnErrorOptions {
        /**
         * 监听器接收到的消息。
         */
        data: string;
    }

    /**
     * 创建websocket实例
     */
    function create(obj: CreateOptions): WebSocket;
}

declare module "quickapp:@system.websocketfactory" {
    export * from "@system.websocketfactory";
}
