export namespace Replies {
    interface Empty {
    }
    interface AssertQueue {
        queue: string;
        messageCount: number;
        consumerCount: number;
    }
    interface PurgeQueue {
        messageCount: number;
    }
    interface DeleteQueue {
        messageCount: number;
    }
    interface AssertExchange {
        exchange: string;
    }
    interface Consume {
        consumerTag: string;
    }
}

export namespace Options {
    interface Connect {
        /**
         * The to be used protocol
         *
         * Default value: 'amqp'
         */
        protocol?: string;
        /**
         * Hostname used for connecting to the server.
         *
         * Default value: 'localhost'
         */
        hostname?: string;
        /**
         * Port used for connecting to the server.
         *
         * Default value: 5672
         */
        port?: number;
        /**
         * Username used for authenticating against the server.
         *
         * Default value: 'guest'
         */
        username?: string;
        /**
         * Password used for authenticating against the server.
         *
         * Default value: 'guest'
         */
        password?: string;
        /**
         * The desired locale for error messages. RabbitMQ only ever uses en_US
         *
         * Default value: 'en_US'
         */
        locale?: string;
        /**
         * The size in bytes of the maximum frame allowed over the connection. 0 means
         * no limit (but since frames have a size field which is an unsigned 32 bit integer, it’s perforce 2^32 - 1).
         *
         * Default value: 0x1000 (4kb) - That's the allowed minimum, it will fit many purposes
         */
        frameMax?: number;
        /**
         * The period of the connection heartbeat in seconds.
         *
         * Default value: 0
         */
        heartbeat?: number;
        /**
         * What VHost shall be used.
         *
         * Default value: '/'
         */
        vhost?: string;
    }

    interface AssertQueue {
        exclusive?: boolean;
        durable?: boolean;
        autoDelete?: boolean;
        arguments?: any;
        messageTtl?: number;
        expires?: number;
        deadLetterExchange?: string;
        deadLetterRoutingKey?: string;
        maxLength?: number;
        maxPriority?: number;
    }
    interface DeleteQueue {
        ifUnused?: boolean;
        ifEmpty?: boolean;
    }
    interface AssertExchange {
        durable?: boolean;
        internal?: boolean;
        autoDelete?: boolean;
        alternateExchange?: string;
        arguments?: any;
    }
    interface DeleteExchange {
        ifUnused?: boolean;
    }
    interface Publish {
        expiration?: string | number;
        userId?: string;
        CC?: string | string[];

        mandatory?: boolean;
        persistent?: boolean;
        deliveryMode?: boolean | number;
        BCC?: string | string[];

        contentType?: string;
        contentEncoding?: string;
        headers?: any;
        priority?: number;
        correlationId?: string;
        replyTo?: string;
        messageId?: string;
        timestamp?: number;
        type?: string;
        appId?: string;
    }
    interface Consume {
        consumerTag?: string;
        noLocal?: boolean;
        noAck?: boolean;
        exclusive?: boolean;
        priority?: number;
        arguments?: any;
    }
    interface Get {
        noAck?: boolean;
    }
}

export interface Message {
    content: Buffer;
    fields: MessageFields;
    properties: MessageProperties;
}

export interface GetMessage extends Message {
    fields: GetMessageFields;
}

export interface ConsumeMessage extends Message {
    fields: ConsumeMessageFields;
}

export interface CommonMessageFields {
    deliveryTag: number;
    redelivered: boolean;
    exchange: string;
    routingKey: string;
}

export interface MessageFields extends CommonMessageFields {
    messageCount?: number;
    consumerTag?: string;
}

export interface GetMessageFields extends CommonMessageFields {
    messageCount: number;
}

export interface ConsumeMessageFields extends CommonMessageFields {
    deliveryTag: number;
}

export interface MessageProperties {
    contentType: any | undefined;
    contentEncoding: any | undefined;
    headers: MessagePropertyHeaders;
    deliveryMode: any | undefined;
    priority: any | undefined;
    correlationId: any | undefined;
    replyTo: any | undefined;
    expiration: any | undefined;
    messageId: any | undefined;
    timestamp: any | undefined;
    type: any | undefined;
    userId: any | undefined;
    appId: any | undefined;
    clusterId: any | undefined;
}

export interface MessagePropertyHeaders {
    "x-first-death-exchange"?: string;
    "x-first-death-queue"?: string;
    "x-first-death-reason"?: string;
    "x-death"?: XDeath[];
    [key: string]: any;
}

export interface XDeath {
    count: number;
    reason: "rejected" | "expired" | "maxlen";
    queue: string;
    time: {
        "!": "timestamp";
        value: number;
    };
    exchange: string;
    "original-expiration"?: any;
    "routing-keys": string[];
}

export interface ServerProperties {
    host: string;
    product: string;
    version: string;
    platform: string;
    copyright?: string;
    information: string;
    [key: string]: string | undefined;
}
