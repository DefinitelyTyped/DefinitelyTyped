import Consumer = require("sqs-consumer");
import { SQS } from "aws-sdk";

const app = Consumer.create({
    queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
    handleMessage(message, done) {
    // do some work with `message`
        done();
    }
});

const app2 = Consumer.create({
    queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
    handleMessage(message, done) {
        done();
    },
    region: "us-west-1",
    batchSize: 15,
    visibilityTimeout: 50,
    waitTimeSeconds: 50
});

// Test message handler.
const handleMessage = (message: SQS.Message, done: Consumer.ConsumerDone) => {
	done();
};

const app3 = Consumer.create({
	queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
	handleMessage
});

const app4 = new Consumer({
	queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
	handleMessage
});

app.on('error', (err: any) => {
    console.log(err.message);
});

app.start();
