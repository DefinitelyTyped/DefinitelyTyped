import { Handler } from '../handler';

// tslint:disable-next-line:void-return
export type ActiveMQHandler = Handler<MQEvent<ActiveMQMessage>, void>;
// TODO: export type RabbitMQHandler = Handler<MQEvent<RabbitMQMessage>, void>;

// Amazon MQ
// https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html
export interface MQEvent<T> {
    eventSource: string;
    eventSourceArn: string;
    messages: T[];
}

export type ActiveMQEvent = MQEvent<ActiveMQMessage>;
// TODO: export type RabbitMQEvent = MQEvent<RabbitMQMessage>;

export enum DeliveryMode {
    PERSISTENT = 0,
    NON_PERSISTENT = 1,
}

// https://activemq.apache.org/activemq-message-properties
export interface ActiveMQMessage {
    messageID: string;
    messageType: string; // "jms/text-message"
    deliveryMode: DeliveryMode;
    replyTo: null | ActiveMQDestination;
    destination: ActiveMQDestination;
    redelivered: boolean;
    expiration: string; // string encoded number
    priority: number;
    correlationId: string;
    data: string;
    timestamp: number;
    brokerInTime: number;
    brokerOutTime: number;
}

export interface ActiveMQDestination {
    // 'physicalname' according to AWS docs, but data recevied has uppercase Name
    physicalName: string;
}
