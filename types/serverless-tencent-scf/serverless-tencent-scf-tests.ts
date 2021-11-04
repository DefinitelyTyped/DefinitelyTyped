import { Handler, APIGatewayEvent, TimerEvent, COSEvent, CMQTopicEvent, CKafkaEvent } from 'serverless-tencent-scf';

interface CustomEvent {
    hello: 'world';
}

interface CustomResult {
    success: boolean;
}

type CustomHandler = Handler<CustomEvent, CustomResult>;

let custom: CustomHandler = (event, context, callback) => {
    callback(null, { success: true });
};

custom = (event, context, callback) => {
    callback(new Error());
};

custom = async (event, context, callback) => {
    return { success: true };
};

const apiGatewayEvent: APIGatewayEvent = {
    requestContext: {
        serviceId: 'service-f94sy04v',
        path: '/test/{path}',
        httpMethod: 'POST',
        requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
        identity: {
            secretId: 'abdcdxxxxxxxsdfs',
        },
        sourceIp: '10.0.2.14',
        stage: 'release',
    },
    headers: {
        'Accept-Language': 'en-US,en,cn',
        Accept: 'text/html,application/xml,application/json',
        Host: 'service-3ei3tii4-251000691.ap-guangzhou.apigateway.myqloud.com',
        'User-Agent': 'User Agent String',
    },
    body: '{"test":"body"}',
    pathParameters: {
        path: 'value',
    },
    queryStringParameters: {
        foo: 'bar',
    },
    headerParameters: {
        Refer: '10.0.2.14',
    },
    stageVariables: {
        stage: 'release',
    },
    path: '/test/value',
    queryString: {
        foo: 'bar',
        bob: 'alice',
    },
    httpMethod: 'POST',
};

const timerEvent: TimerEvent = {
    Type: 'Timer',
    TriggerName: 'EveryDay',
    Time: '2019-02-21T11:49:00Z',
    Message: 'user define msg body',
};

const cosEvent: COSEvent = {
    Records: [
        {
            cos: {
                cosSchemaVersion: '1.0',
                cosObject: {
                    url: 'http://testpic-1253970026.cos.ap-chengdu.myqcloud.com/testfile',
                    meta: {
                        'x-cos-request-id': 'NWMxOWY4MGFfMjViMjU4NjRfMTUyMVxxxxxxxxx=',
                        'Content-Type': '',
                        'x-cos-meta-mykey': 'myvalue',
                    },
                    vid: '',
                    key: '/1253970026/testpic/testfile',
                    size: 1029,
                },
                cosBucket: {
                    region: 'cd',
                    name: 'testpic',
                    appid: '1253970026',
                },
                cosNotificationId: 'unkown',
            },
            event: {
                eventName: 'cos:ObjectCreated:*',
                eventVersion: '1.0',
                eventTime: 1545205770,
                eventSource: 'qcs::cos',
                requestParameters: {
                    requestSourceIP: '192.168.15.101',
                    requestHeaders: {
                        Authorization: 'q-sign-algorithm=sha1&q-ak=xxxxxxxxxxxxxx...',
                    },
                },
                eventQueue: 'qcs:0:lambda:cd:appid/1253970026:default.printevent.$LATEST',
                reservedInfo: '',
                reqid: 179398952,
            },
        },
    ],
};

const cmqTopicEvent: CMQTopicEvent = {
    Records: [
        {
            CMQ: {
                type: 'topic',
                topicOwner: 1200000,
                topicName: 'testtopic',
                subscriptionName: 'xxxxxx',
                publishTime: '1970-01-01T00:00:00.000Z',
                msgId: '123345346',
                requestId: '123345346',
                msgBody: 'Hello from CMQ!',
                msgTag: 'tag1,tag2',
            },
        },
    ],
};

const cKafkaEvent: CKafkaEvent = {
    Records: [
        {
            Ckafka: {
                topic: 'test-topic',
                partition: 1,
                offset: 36,
                msgKey: 'None',
                msgBody: 'Hello from Ckafka!',
            },
        },
        {
            Ckafka: {
                topic: 'test-topic',
                partition: 1,
                offset: 37,
                msgKey: 'None',
                msgBody: 'Hello from Ckafka again!',
            },
        },
    ],
};
