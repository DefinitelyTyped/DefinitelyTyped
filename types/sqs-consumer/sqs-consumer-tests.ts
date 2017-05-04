import * as Consumer from "sqs-consumer";

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

app.on('error', (err: any) => {
  console.log(err.message);
});

app.start();
