/// <reference path="kafka-node.d.ts" />

import kafka = require('kafka-node');

var basicClient = new kafka.Client('localhost:2181/', 'sendMessage');

var optionsClient = new kafka.Client('localhost:2181/', 'sendMessage', {
    sessionTimeout: 30000,
    spinDelay: 1000,
    retries: 0
});
optionsClient.close();
optionsClient.close(function(){});

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

    producer.createTopics(['t'], true, function (err: Error, data: Object) {});
    producer.createTopics(['t'], false, function (err, data) {});
    // producer.createTopics(['t'], function (err: Error, data: Object) {}); // Omitting middle argument is not possible in TS

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

    producer.send(messages, function(err: Error){});
    producer.send(messages, function(err: Error, data: Object){});

    producer.createTopics(['t'], true, function (err: Error, data: Object) {});
    producer.createTopics(['t'], false, function (err, data) {});
    // producer.createTopics(['t'], function (err: Error, data: Object) {}); // Omitting middle argument is not possible in TS

});

var fetchRequests = [{ topic: 'awesome' }];
var consumer = new kafka.Consumer(basicClient, fetchRequests, {
    groupId: 'abcde',
    autoCommit: true
});
consumer.on('error', function(error: Error){});
consumer.on('message', function(message){});

consumer.addTopics(['t1', 't2'], function (err, added) {});
consumer.addTopics([{ topic: 't1', offset: 10 }], function (err, added) {}, true);

consumer.removeTopics(['t1', 't2'], function (err, removed) {});

consumer.commit(function (err, data) {});

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

var fetchRequests = [{ topic: 'awesome' }];
var hlConsumer = new kafka.HighLevelConsumer(basicClient, fetchRequests, {
    groupId: 'abcde',
    autoCommit: true
});

hlConsumer.on('error', function(error: Error){});
hlConsumer.on('message', function(message){});
hlConsumer.addTopics(['t1', 't2'], function (err, added) {});
hlConsumer.addTopics([{ topic: 't1', offset: 10 }], function (err, added) {}, true);

hlConsumer.removeTopics(['t1', 't2'], function (err, removed) {});

hlConsumer.commit(function (err, data) {});

hlConsumer.setOffset('topic', 0, 0);

hlConsumer.pause();
hlConsumer.resume();
hlConsumer.pauseTopics([
    'topic1',
    { topic: 'topic2', partition: 0 }
]);
hlConsumer.resumeTopics([
    'topic1',
    { topic: 'topic2', partition: 0 }
]);

hlConsumer.close(true, function () {});

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
