import * as Consumer from "sqs-consumer";

var app = Consumer.create({
  queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
  handleMessage: function (message, done) {
    // do some work with `message`
    done();
  }
});

var app2 = Consumer.create({
  queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
  handleMessage: function(message, done){
    done();
  },
  region: "us-west-1",
  batchSize: 15,
  visibilityTimeout: 50,
  waitTimeSeconds: 50
});

app.on('error', function (err: any) {
  console.log(err.message);
});

app.start();
