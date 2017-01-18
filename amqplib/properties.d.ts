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
    fields: any;
    properties: any;
}