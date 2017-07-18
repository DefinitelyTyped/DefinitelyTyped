import kafka = require('kafka-node');

var basicClient = new kafka.Client('localhost:2181/', 'sendMessage');

var optionsClient = new kafka.Client('localhost:2181/', 'sendMessage', {
    sessionTimeout: 30000,
    spinDelay: 1000,
    retries: 0
}, {
  noAckBatchSize: 1000,
  noAckBatchAge: 1000 * 10
}, {
  rejectUnauthorized: false
});
optionsClient.topicExists(['topic'], function (error: any){});
optionsClient.refreshMetadata(['topic'], function (error: any){});
optionsClient.close();
optionsClient.sendOffsetCommitV2Request('group', 0, 'memberId', [], function() {});
optionsClient.close(function(){});

var basicKafkaClient = new kafka.KafkaClient();

var optionsKafkaClient = new kafka.KafkaClient({
  kafkaHost: 'localhost:2181',
  connectTimeout: 1000,
  requestTimeout: 1000,
  authConnect: true,
  connectRetryOptions: {
    retries: 5,
    factor: 0,
    minTimeout: 1000,
    maxTimeout: 1000,
    randomize: true
  }
});

optionsKafkaClient.connect();

var optionsProducer = new kafka.Producer(basicClient, {
  requireAcks: 0,
  ackTimeoutMs: 0,
  partitionerType: 0
});

var producer = new kafka.Producer(basicClient);
producer.on('error', function(error: Error){});
producer.on('ready', function(){

    var messages = [{
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

    producer.send(messages, function(err: Error){});
    producer.send(messages, function(err: Error, data: Object){});

    producer.createTopics(['t'], true, function (err: Error, data: any) {});
    producer.createTopics(['t'], function (err: Error, data: any) {});
    producer.createTopics(['t'], false, function () {});
    producer.close();
});

var highLevelProducer = new kafka.HighLevelProducer(basicClient);
highLevelProducer.on('error', function(error: Error){});
highLevelProducer.on('ready', function(){

    var messages = [{
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

  highLevelProducer.send(messages, function(err: Error){});
  highLevelProducer.send(messages, function(err: Error, data: Object){});

  producer.createTopics(['t'], true, function (err: Error, data: any) {});
  producer.createTopics(['t'], function (err: Error, data: any) {});
  producer.createTopics(['t'], false, function () {});
  producer.close();
});

var fetchRequests = [{ topic: 'awesome' }];
var consumer = new kafka.Consumer(basicClient, fetchRequests, {
    groupId: 'abcde',
    autoCommit: true
});
consumer.on('error', function(error: Error){});
consumer.on('offsetOutOfRange', function(error: Error){});
consumer.on('message', function(message: kafka.Message){
  var topic = message.topic;
  var value = message.value;
  var offset = message.offset;
  var partition = message.partition;
  var highWaterOffset = message.highWaterOffset;
  var key = message.key;
});

consumer.addTopics(['t1', 't2'], function (err, added) {});
consumer.addTopics([{ topic: 't1', offset: 10 }], function (err, added) {}, true);

consumer.removeTopics(['t1', 't2'], function (err, removed: number) {});
consumer.removeTopics('t2', function (err, removed: number) {});

consumer.commit(function (err, data) {});
consumer.commit(true, function (err, data) {});

consumer.setOffset('topic', 0, 0);

consumer.pause();
consumer.resume();
consumer.pauseTopics([
    'topic1',
    { topic: 'topic2', partition: 0 }
]);
consumer.resumeTopics([
    'topic1',
    { topic: 'topic2', partition: 0 }
]);

consumer.close(true, function () {});
consumer.close(function () {});

var fetchRequests = [{ topic: 'awesome' }];
var hlConsumer = new kafka.HighLevelConsumer(basicClient, fetchRequests, {
    groupId: 'abcde',
    autoCommit: true
});

hlConsumer.on('error', function(error: Error){});
hlConsumer.on('offsetOutOfRange', function(error: Error){});
hlConsumer.on('message', function(message: kafka.Message){
  var topic = message.topic;
  var value = message.value;
  var offset = message.offset;
  var partition = message.partition;
  var highWaterOffset = message.highWaterOffset;
  var key = message.key;
});
hlConsumer.addTopics(['t1', 't2'], function (err, added) {});
hlConsumer.addTopics([{ topic: 't1', offset: 10 }], function (err, added) {});

hlConsumer.removeTopics(['t1', 't2'], function (err, removed: number) {});
hlConsumer.removeTopics('t2', function (err, removed: number) {});

hlConsumer.commit(function (err, data) {});
hlConsumer.commit(true, function (err, data) {});

hlConsumer.setOffset('topic', 0, 0);

hlConsumer.pause();
hlConsumer.resume();

hlConsumer.close(true, function () {});
hlConsumer.close(function () {});

var ackBatchOptions = {'noAckBatchSize': 1024, 'noAckBatchAge': 10};
var cgOptions: kafka.ConsumerGroupOptions = {
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

var consumerGroup = new kafka.ConsumerGroup( cgOptions, ['topic1']);
consumerGroup.on('error', (err) => {});
consumerGroup.on('message', (msg) => {});
consumerGroup.close(true, () => {});

var offset = new kafka.Offset(basicClient);

offset.on('ready', function(){});

offset.fetch([
    { topic: 't', partition: 0, time: Date.now(), maxNum: 1 },
    { topic: 't' }
], function (err, data) { });

offset.commit('groupId', [
    { topic: 't', partition: 0, offset: 10 }
], function (err, data) { });

offset.fetchCommits('groupId', [
    { topic: 't', partition: 0 }
], function (err, data) {});

offset.fetchLatestOffsets(['t'], (err, offsets) => {})
offset.fetchEarliestOffsets(['t'], (err, offsets) => {})
