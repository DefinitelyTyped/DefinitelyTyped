import SQSService from 'lesgo/services/SQSService';

// $ExpectType SQSService<{ myqueue: { url: string; }; }>
const queue = new SQSService(
    {
        accessKeyId: '',
        secretAccessKey: 'mysecret',
        region: 'eu-central-1',
    },
    {
        myqueue: {
            url: 'SQS_QUEUE_URL',
        },
    },
);

// $ExpectType Promise<SendMessageResult>
queue.dispatch(
    {
        body: 'test',
    },
    'myqueue',
);
