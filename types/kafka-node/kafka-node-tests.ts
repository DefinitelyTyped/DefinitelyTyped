import kafka = require('kafka-node');

const basicClient = new kafka.Client('localhost:2181/', 'sendMessage');

const optionsClient = new kafka.Client('localhost:2181/', 'sendMessage', {
  sessionTimeout: 30000,
  spinDelay: 1000,
  retries: 0
}, {
  noAckBatchSize: 1000,
  noAckBatchAge: 1000 * 10
}, {
  rejectUnauthorized: false
});
optionsClient.topicExists(['topic'], (error: any) => {
});
optionsClient.refreshMetadata(['topic'], (error: any) => {
});
optionsClient.close();
optionsClient.sendOffsetCommitV2Request('group', 0, 'memberId', [], () => {
});
optionsClient.close(() => {
});

const basicKafkaClient = new kafka.KafkaClient();

const optionsKafkaClient = new kafka.KafkaClient({
  kafkaHost: 'localhost:2181',
  connectTimeout: 1000,
  requestTimeout: 1000,
  autoConnect: true,
  sslOptions: {},
  clientId: "client id",
  connectRetryOptions: {
    retries: 5,
    factor: 0,
    minTimeout: 1000,
    maxTimeout: 1000,
    randomize: true
  }
});

optionsKafkaClient.connect();

const optionsProducer = new kafka.Producer(basicClient, {
  requireAcks: 0,
  ackTimeoutMs: 0,
  partitionerType: 0
});

const producer = new kafka.Producer(basicClient);
producer.on('error', (error: Error) => {
});
producer.on('ready', () => {
  const messages = [{
    topic: 'topicName',
    messages: ['message body'],
    partition: 0,
    attributes: 2
  }, {
    topic: 'topicName',
    messages: ['message body'],
    partition: 0
  }, {
    topic: 'topicName',
    messages: ['message body'],
    attributes: 0
  }, {
    topic: 'topicName',
    messages: ['message body']
  }, {
    topic: 'topicName',
    messages: [new kafka.KeyedMessage('key', 'message')]
  }];

  producer.send(messages, (err: Error) => {
  });
  producer.send(messages, (err: Error, data: any) => {
  });

  producer.createTopics(['t'], true, (err: Error, data: any) => {
  });
  producer.createTopics(['t'], (err: Error, data: any) => {
  });
  producer.createTopics(['t'], false, () => {
  });
  producer.close();
});

const highLevelProducer = new kafka.HighLevelProducer(basicClient);
highLevelProducer.on('error', (error: Error) => {
});
highLevelProducer.on('ready', () => {
  const messages = [{
    topic: 'topicName',
    messages: ['message body'],
    attributes: 2
  }, {
    topic: 'topicName',
    messages: ['message body'],
    partition: 0
  }, {
    topic: 'topicName',
    messages: ['message body'],
    attributes: 0
  }, {
    topic: 'topicName',
    messages: ['message body']
  }, {
    topic: 'topicName',
    messages: [new kafka.KeyedMessage('key', 'message')]
  }];

  highLevelProducer.send(messages, (err: Error) => {
  });
  highLevelProducer.send(messages, (err: Error, data: any) => {
  });

  producer.createTopics(['t'], true, (err: Error, data: any) => {
  });
  producer.createTopics(['t'], (err: Error, data: any) => {
  });
  producer.createTopics(['t'], false, () => {
  });
  producer.close();
});

const fetchRequests = [{topic: 'awesome'}];
const consumer = new kafka.Consumer(basicClient, fetchRequests, {
  groupId: 'abcde',
  autoCommit: true
});
consumer.on('error', (error: Error) => {
});
consumer.on('offsetOutOfRange', (error: Error) => {
});
consumer.on('message', (message: kafka.Message) => {
  const topic = message.topic;
  const value = message.value;
  const offset = message.offset;
  const partition = message.partition;
  const highWaterOffset = message.highWaterOffset;
  const key = message.key;
});

consumer.addTopics(['t1', 't2'], (err: any, added: any) => {
});
consumer.addTopics([{topic: 't1', offset: 10}], (err: any, added: any) => {
}, true);

consumer.removeTopics(['t1', 't2'], (err: any, removed: number) => {
});
consumer.removeTopics('t2', (err: any, removed: number) => {
});

consumer.commit((err: any, data: any) => {
});
consumer.commit(true, (err: any, data: any) => {
});

consumer.setOffset('topic', 0, 0);

consumer.pause();
consumer.resume();
consumer.pauseTopics([
  'topic1',
  {topic: 'topic2', partition: 0}
]);
consumer.resumeTopics([
  'topic1',
  {topic: 'topic2', partition: 0}
]);

consumer.close(true, () => {
});
consumer.close(() => {
});

const fetchRequests1 = [{topic: 'awesome'}];
const hlConsumer = new kafka.HighLevelConsumer(basicClient, fetchRequests1, {
  groupId: 'abcde',
  autoCommit: true
});

hlConsumer.on('error', (error: Error) => {
});
hlConsumer.on('offsetOutOfRange', (error: Error) => {
});
hlConsumer.on('message', (message: kafka.Message) => {
  const topic = message.topic;
  const value = message.value;
  const offset = message.offset;
  const partition = message.partition;
  const highWaterOffset = message.highWaterOffset;
  const key = message.key;
});
hlConsumer.addTopics(['t1', 't2'], (err: any, added: any) => {
});
hlConsumer.addTopics([{topic: 't1', offset: 10}], (err: any, added: any) => {
});

hlConsumer.removeTopics(['t1', 't2'], (err: any, removed: number) => {
});
hlConsumer.removeTopics('t2', (err: any, removed: number) => {
});

hlConsumer.commit((err: any, data: any) => {
});
hlConsumer.commit(true, (err: any, data: any) => {
});

hlConsumer.setOffset('topic', 0, 0);

hlConsumer.pause();
hlConsumer.resume();

hlConsumer.close(true, () => {
});
hlConsumer.close(() => {
});

const ackBatchOptions = {noAckBatchSize: 1024, noAckBatchAge: 10};
const cgOptions: kafka.ConsumerGroupOptions = {
  host: 'localhost:2181/',
  batch: ackBatchOptions,
  groupId: 'groupID',
  id: 'consumerID',
  sessionTimeout: 15000,
  protocol: ["roundrobin"],
  fromOffset: "latest",
  migrateHLC: false,
  migrateRolling: true
};

const consumerGroup = new kafka.ConsumerGroup(cgOptions, ['topic1']);
consumerGroup.on('error', (err) => {
});
consumerGroup.on('message', (msg) => {
});
consumerGroup.close(true, () => {
});

const offset = new kafka.Offset(basicClient);

offset.on('ready', () => {
});

offset.fetch([
  {topic: 't', partition: 0, time: Date.now(), maxNum: 1},
  {topic: 't'}
], (err: any, data: any) => {
});

offset.commit('groupId', [
  {topic: 't', partition: 0, offset: 10}
], (err, data) => {
});

offset.fetchCommits('groupId', [
  {topic: 't', partition: 0}
], (err, data) => {
});

offset.fetchLatestOffsets(['t'], (err, offsets) => {
});
offset.fetchEarliestOffsets(['t'], (err, offsets) => {
});
