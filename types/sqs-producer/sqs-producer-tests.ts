// Taken straight from sqs-producer's README.md

import * as Producer from "sqs-producer";

const producer = Producer.create({
  queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
  region: 'eu-west-1'
});

// send messages to the queue
producer.send(['msg1', 'msg2'], err => {
  if (err) console.log(err);
});

// get the current size of the queue
producer.queueSize((err, size) => {
  if (err) console.log(err);

  console.log('There are', size, 'messages on the queue.');
});

// send a message to the queue with a specific ID (by default the body is used as the ID)
producer.send([{
  id: 'id1',
  body: 'Hello world'
}], err => {
  if (err) console.log(err);
});

// send a message to the queue with
// - delaySeconds (must be an number contained within 0 and 900)
// - messageAttributes
producer.send([
  {
    id: 'id1',
    body: 'Hello world with two string attributes: attr1 and attr2',
    messageAttributes: {
      attr1: { DataType: 'String', StringValue: 'stringValue' },
      attr2: { DataType: 'Binary', BinaryValue: new Buffer('binaryValue') }
    }
  },
  {
    id: 'id2',
    body: 'Hello world delayed by 5 seconds',
    delaySeconds: 5
  }
], err => {
  if (err) console.log(err);
});
