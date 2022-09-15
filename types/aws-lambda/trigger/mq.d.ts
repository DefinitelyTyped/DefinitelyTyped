import { Handler } from '../handler';

// tslint:disable-next-line:void-return
export type SQSHandler = Handler<MQEvent, void>;

// Amazon MQ
// https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html
export interface MQEvent {
  eventSource: string;
  eventSourceARN: string;
  messages: ActiveMQMessage[];
}

enum DeliveryMode {
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
  physicalName: string;
}
