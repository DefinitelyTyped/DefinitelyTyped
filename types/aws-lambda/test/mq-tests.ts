import { ActiveMQHandler, ActiveMQEvent, ActiveMQMessage, ActiveMQDestination, DeliveryMode } from 'aws-lambda';

// Example taken from https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html
const activemqEvent: ActiveMQEvent = {
    eventSource: 'aws:amq',
    eventSourceArn: 'arn:aws:mq:us-west-2:111122223333:broker:test:b-9bcfa592-423a-4942-879d-eb284b418fc8',
    messages: [
        {
            messageID:
                'ID:b-9bcfa592-423a-4942-879d-eb284b418fc8-1.mq.us-west-2.amazonaws.com-37557-1234520418293-4:1:1:1:1',
            messageType: 'jms/text-message',
            deliveryMode: 1,
            replyTo: null,
            // type: null, // not present in data
            expiration: '60000',
            priority: 1,
            correlationId: 'myJMSCoID',
            redelivered: false,
            destination: {
                physicalName: 'testQueue', // Changed to match real data
            },
            data: 'QUJDOkFBQUE=',
            timestamp: 1598827811958,
            brokerInTime: 1598827811958,
            brokerOutTime: 1598827811959,
        },
        {
            messageID:
                'ID:b-9bcfa592-423a-4942-879d-eb284b418fc8-1.mq.us-west-2.amazonaws.com-37557-1234520418293-4:1:1:1:1',
            messageType: 'jms/bytes-message',
            deliveryMode: 1,
            replyTo: null,
            // type: null, // not present in data
            expiration: '60000',
            priority: 2,
            correlationId: 'myJMSCoID1',
            redelivered: false,
            destination: {
                physicalName: 'testQueue', // Changed to match real data
            },
            data: 'LQaGQ82S48k=',
            timestamp: 1598827811958,
            brokerInTime: 1598827811958,
            brokerOutTime: 1598827811959,
        },
    ],
};

declare let mqDeliveryMode: DeliveryMode;
declare let mqDestination: ActiveMQDestination;
declare let mqDestinationOrNull: ActiveMQDestination | null;

const handler: ActiveMQHandler = async (event, context, callback) => {
    const message: ActiveMQMessage = event.messages[num];

    str = message.messageID;
    str = message.messageType;
    mqDeliveryMode = message.deliveryMode;
    mqDestinationOrNull = message.replyTo;
    mqDestination = message.destination;
    bool = message.redelivered;
    str = message.expiration;
    num = message.priority;
    str = message.correlationId;
    str = message.data;
    num = message.timestamp;
    num = message.brokerInTime;
    num = message.brokerOutTime;

    const replyTo: ActiveMQDestination | null = message.destination;
    const destination: ActiveMQDestination = message.destination;

    str = destination.physicalName;
    str = replyTo ? replyTo.physicalName : '';

    callback();
    callback(new Error());
};

