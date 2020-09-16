import { Azure } from 'azure-sb';
import AzureSB = require('azure-sb');

import Models = Azure.ServiceBus.Results.Models;

function createResultCallback<T>() {
    return (err: Error | null, result: T, response: Azure.ServiceBus.Response) => {
    };
}

function ResponseCallback(err: Error | null, response: Azure.ServiceBus.Response) {
}

const ServiceBus = AzureSB.createServiceBusService('connectionstring');

// Queues
ServiceBus.listQueues(createResultCallback<Models.Queue[]>());
ServiceBus.createQueue('test', createResultCallback<Models.Queue>());
ServiceBus.createQueueIfNotExists('test', createResultCallback<boolean>());
ServiceBus.getQueue('test', createResultCallback<Models.Queue>());
ServiceBus.deleteQueue('test', ResponseCallback);

// Topics
ServiceBus.listTopics(createResultCallback<Models.Topic[]>());
ServiceBus.createTopic('test', createResultCallback<Models.Topic>());
ServiceBus.createTopicIfNotExists('test', createResultCallback<boolean>());
ServiceBus.getTopic('test', createResultCallback<Models.Topic>());
ServiceBus.deleteTopic('test', ResponseCallback);

// Subscriptions
ServiceBus.listSubscriptions('test', createResultCallback<Models.Subscription[]>());
ServiceBus.createSubscription('test', 'test', createResultCallback<Models.Subscription>());
ServiceBus.createSubscription('test', 'test', {
    DefaultMessageTimeToLive: 'PT10M'
}, createResultCallback<Models.Subscription>());
ServiceBus.getSubscription('test', 'test', createResultCallback<Models.Subscription>());
ServiceBus.deleteSubscription('test', 'test', ResponseCallback);

ServiceBus.listRules('testTopic', 'testSub', createResultCallback<Models.Rule[]>());
ServiceBus.createRule('testTopic', 'testSub', 'testRule', createResultCallback<Models.Rule>());
ServiceBus.getRule('testTopic', 'testSub', 'testRule', createResultCallback<Models.Rule>());
ServiceBus.deleteRule('testTopic', 'testSub', 'testRule', ResponseCallback);

// Messages
ServiceBus.sendQueueMessage('testTopic', 'My data', ResponseCallback);
ServiceBus.sendQueueMessage('testTopic', {
    body: '{"data":"MyData"}',
    contentType: 'application/json',
    brokerProperties: {
        CorrelationId: '123'
    }
}, ResponseCallback);
ServiceBus.receiveQueueMessage('testQueue', createResultCallback<Azure.ServiceBus.Message>());

ServiceBus.sendTopicMessage('testTopic', 'My data', ResponseCallback);
ServiceBus.sendTopicMessage('testTopic', {
    body: '{"data":"MyData"}',
    contentType: 'application/json',
    brokerProperties: {
        CorrelationId: '123'
    }
}, ResponseCallback);
ServiceBus.receiveSubscriptionMessage('testTopic', 'testSub', createResultCallback<Azure.ServiceBus.Message>());

ServiceBus.renewLockForMessage('test', ResponseCallback);
ServiceBus.unlockMessage('test', ResponseCallback);
ServiceBus.deleteMessage('test', ResponseCallback);

// NotificationHub
const nh = AzureSB.createNotificationHubService('test');
nh.send('tag', '<payload></payload>', ResponseCallback);
nh.send('tag', '<payload></payload>', { headers: {} }, ResponseCallback);
nh.apns.send('tag', { payload: {} }, ResponseCallback);
nh.apns.send(['tag'], { payload: {} }, ResponseCallback);
nh.gcm.send('tag', {}, ResponseCallback);
nh.gcm.send(['tag'], {}, ResponseCallback);
nh.wns.send('tag', '<payload></payload>', 'wns/toast', ResponseCallback);
nh.wns.send(['tag'], '<payload></payload>', 'wns/toast', ResponseCallback);
nh.wns.send('tag', '<payload></payload>', 'wns/toast', { headers: {} }, ResponseCallback);
nh.wns.sendToastText01('tag', '<payload></payload>', ResponseCallback);
nh.wns.sendToastText01(['tag'], '<payload></payload>', ResponseCallback);
nh.wns.sendToastText01('tag', '<payload></payload>', { headers: {} }, ResponseCallback);
nh.createOrUpdateInstallation({
    "installationId":"123-123-123-123",
    "platform":"gcm",
    "pushChannel":"aXhytc4zD=",
}, () => {});
nh.createOrUpdateInstallation({
    installationId:"123-123-123-123",
    platform:"gcm",
    pushChannel:"aXhytc4zD=",
    tags:["tag1","tag2"]
}, {}, () => {});
