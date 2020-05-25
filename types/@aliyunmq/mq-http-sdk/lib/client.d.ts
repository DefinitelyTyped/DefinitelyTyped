declare interface Response {
    code: number;
    requestId: string;
}

declare interface ClientResponse extends Response {
    body: any;
}

declare interface PublishMessageResponse extends Response {
    body: {
        // 消息ID
        MessageId: string;
        // 消息体内容的MD5值
        MessageBodyMD5: string;
        // 消息句柄，仅事务消息存在
        ReceiptHandle?: string;
        // 额外属性
        [propName: string]: any;
    }
}

declare interface ConsumeMessageResponse extends Response {
    body: {
        // 消息ID
        MessageId: string;
        // 消息体MD5
        MessageBodyMD5: string;
        // 发送消息的时间戳，毫秒
        PublishTime: number;
        // 下次重试消费的时间，前提是这次不调用{ackMessage} 确认消费消费成功，毫秒
        NextConsumeTime: number;
        // 第一次消费的时间，毫秒
        FirstConsumeTime: number;
        // 消费的次数
        ConsumedTimes: number;
        // 消息句柄，调用 {ackMessage} 需要将消息句柄传入，用于确认该条消息消费成功
        ReceiptHandle: string;
        // 消息内容
        MessageBody: string;
        // 消息标签
        MessageTag: string;
        // 消息Key
        MessageKey?: string;
        // 额外属性
        [propName: string]: any;
    }[];
}

/**
 * MQ的client,用于保存aliyun账号消息,以及发送http请求
 */
declare class MQClient {

    /**
     * MQClient构造函数
     * @param endpoint  MQ的HTTP接入地址
     * @param accessKeyId 阿里云账号的AK
     * @param accessKeySecret 阿里云账号的SK 
     * @param securityToken 阿里云RAM授权的STS TOKEN，可空
     */
    constructor(endpoint: string, accessKeyId: string, accessKeySecret: string, securityToken?: string)

    /**
     * 发送http请求
     * @param method HTTP的请求方法GET/PUT/POST/DELETE...
     * @param resource  HTTP请求URL的path
     * @param type  解析XML响应内容的元素名字
     * @param requestBody 请求的body
     * @param opts  额外请求的参数
     */
    request(method: string, resource: string, type: string, requestBody: string, opts?: any): Promise<ClientResponse>

    /**
     * 发送HTTP GET请求
     * @param resource  HTTP请求URL的path
     * @param type  解析XML响应内容的元素名字
     * @param opts  额外请求的参数
     */
    get(resource: string, type: string, opts?: any): Promise<ClientResponse>

    /**
     * 发送HTTP POST请求
     * @param resource  HTTP请求URL的path
     * @param type  解析XML响应内容的元素名字
     * @param requestBody 请求的body
     */
    post(resource: string, type: string, requestBody: string): Promise<ClientResponse>

    /**
     * 发送HTTP DELETE请求
     * @param resource  HTTP请求URL的path
     * @param type  解析XML响应内容的元素名字
     * @param requestBody 请求的body
     */
    delete(resource: string, type: string, requestBody: string): Promise<ClientResponse>

    /**
     * 对请求的内容按照MQ的HTTP协议签名,sha1+base64
     * @param method  请求方法 
     * @param headers 请求头
     * @param resource  HTTP请求URL的path
     */
    sign(method: string, headers: any, resource: string): string

    /**
     * 组装请求MQ需要的请求头
     * @param method  请求方法
     * @param body  请求内容
     * @param resource  HTTP请求URL的path
     */
    buildHeaders(method: string, body: string, resource: string): any

    /**
     * 构造一个MQ的消费者
     * @param instanceId 实例ID
     * @param topic 主题名字
     * @param consumer  消费者名字
     * @param messageTag  消费的过滤标签，可空
     */
    getConsumer(instanceId: string, topic: string, consumer: string, messageTag?: string): MQConsumer

    /**
     * 构造一个MQ的生产者
     * @param instanceId 实例ID
     * @param topic 主题名字
     */
    getProducer(instanceId: string, topic: string): MQProducer

    /**
     * 构造一个MQ的事务消息生产者
     * @param instanceId 实例ID
     * @param topic 主题名字
     * @param groupId 客户端GroupID
     */
    getTransProducer(instanceId: string, topic: string, groupId: string): MQTransProducer

}

/**
 * 消息属性
 */
declare class MessageProperties {

    constructor()

    /**
     * 获取消息属性内部的any
     */
    getProperties(): any

    /**
     * 设置消息KEY
     * @param key 消息KEY
     */
    messageKey(key: string): void

    /**
     * 定时消息，单位毫秒（ms），在指定时间戳（当前时间之后）进行投递。
     * 如果被设置成当前时间戳之前的某个时刻，消息将立刻投递给消费者
     * @param timeMillis 定时的绝对时间戳
     */
    startDeliverTime(timeMillis: number): void

    /**
    * 在消息属性中添加第一次消息回查的最快时间，单位秒，并且表征这是一条事务消息
    * @param timeSeconds 第一次消息回查时间，单位秒
    */
    transCheckImmunityTime(timeSeconds: number): void

    /**
     * 设置消息自定义属性
     * @param key 属性键,非空
     * @param value 属性值,非空
     */
    putProperty(key: string, value: string): void

    /**
     * 检查key的特殊字符
     * @param key 属性键,非空
     */
    check(key: string): void

}

/**
 * MQ的消息生产者
 */
declare class MQProducer {

    /**
     * 构造函数
     * @param client  MQ的客户端
     * @param instanceId 实例ID
     * @param topic 主题名字
     */
    constructor(client: MQClient, instanceId: string, topic: string)

    /**
     * 向主题发送一条消息
     * @param body  发送的内容
     * @param tag   发送消息的标签
     * @param msgProps 发送消息的属性
     */
    publishMessage(body: string, tag?: string, msgProps?: MessageProperties): Promise<PublishMessageResponse>

}

/**
 * MQ的消息生产者，支持事务 
 */
declare class MQTransProducer {

    /**
     * 构造函数
     * @param client  MQ的客户端
     * @param instanceId 实例ID
     * @param topic 主题名字
     * @param groupId 客户端GroupID
     */
    constructor(client: MQClient, instanceId: string, topic: string, groupId: string)

    /**
     * 向主题发送一条消息
     * @param body  发送的内容
     * @param tag   发送消息的标签
     * @param msgProps 发送消息的属性
     */
    publishMessage(body: string, tag?: string, msgProps?: MessageProperties): Promise<PublishMessageResponse>

    /**
     * 消费检查事务半消息,默认如果该条消息没有被 {commit} 或者 {rollback} 在NextConsumeTime时会再次消费到该条消息
     * @param numOfMessages 每次从服务端消费条消息
     * @param waitSeconds 长轮询的等待时间（可空），如果服务端没有消息请求会在该时间之后返回等于请求阻塞在服务端，如果期间有消息立刻返回
     */
    consumeHalfMessage(numOfMessages: number, waitSeconds?: number): Promise<ConsumeMessageResponse>

    /**
     * 提交事务消息
     * @param receiptHandle consumeHalfMessage返回的单条消息句柄或者是发送事务消息返回的句柄
     */
    commit(receiptHandle: string): Promise<Response>

    /**
     * 回滚事务消息
     * @param receiptHandle consumeHalfMessage返回的单条消息句柄或者是发送事务消息返回的句柄
     */
    rollback(receiptHandle: string): Promise<Response>

}

/**
 * MQ的消息消费者
 */
declare class MQConsumer {

    /**
     * 消费者构造函数
     * @param client MQ客户端
     * @param instanceId 实例ID
     * @param topic  主题名字
     * @param consumer 消费者名字(CID)a
     * @param messageTag  消费消息的过滤标签，可空 
     */
    constructor(client: MQClient, instanceId: string, topic: string, consumer: string, messageTag?: string)

    /**
     * 消费消息,默认如果该条消息没有被 {ackMessage} 确认消费成功，即在NextConsumeTime时会再次消费到该条消息
     * @param numOfMessages 每次从服务端消费条消息
     * @param waitSeconds 长轮询的等待时间（可空），如果服务端没有消息请求会在该时间之后返回等于请求阻塞在服务端，如果期间有消息立刻返回
     */
    consumeMessage(numOfMessages: number, waitSeconds?: number): Promise<ConsumeMessageResponse>

    /**
     * 确认消息消费成功，消费成功后需要调用该接口否则会重复消费消息
     * @param receiptHandles 消息句柄数组
     */
    ackMessage(receiptHandles: string[]): Promise<Response>

}

export {
    MQClient,
    MQConsumer,
    MQProducer,
    MQTransProducer,
    MessageProperties,
};