import { Azure } from '../index';

import ServiceBusServiceBase = require('./servicebusservicebase');

import CreateNotificationHubOptions = Azure.ServiceBus.CreateNotificationHubOptions;
import CreateQueueOptions = Azure.ServiceBus.CreateQueueOptions;
import CreateRuleOptions = Azure.ServiceBus.CreateRuleOptions;
import CreateSubscriptionOptions = Azure.ServiceBus.CreateSubscriptionOptions;
import CreateTopicIfNotExistsOptions = Azure.ServiceBus.CreateTopicIfNotExistsOptions;
import CreateTopicOptions = Azure.ServiceBus.CreateTopicOptions;
import ListNotificationHubsOptions = Azure.ServiceBus.ListNotificationHubsOptions;
import ListRulesOptions = Azure.ServiceBus.ListRulesOptions;
import ListSubscriptionsOptions = Azure.ServiceBus.ListSubscriptionsOptions;
import ListTopicsOptions = Azure.ServiceBus.ListTopicsOptions;
import ListQueuesOptions = Azure.ServiceBus.ListQueuesOptions;
import MessageOrName = Azure.ServiceBus.MessageOrName;
import Queue = Azure.ServiceBus.Results.Models.Queue;
import ReceiveQueueMessageOptions = Azure.ServiceBus.ReceiveQueueMessageOptions;
import ReceiveSubscriptionMessageOptions = Azure.ServiceBus.ReceiveSubscriptionMessageOptions;
import ResponseCallback = Azure.ServiceBus.ResponseCallback;
import ResultAndResponseCallback = Azure.ServiceBus.ResultAndResponseCallback;
import Rule = Azure.ServiceBus.Results.Models.Rule;
import Subscription = Azure.ServiceBus.Results.Models.Subscription;
import Topic = Azure.ServiceBus.Results.Models.Topic;
import TypedResultAndResponseCallback = Azure.ServiceBus.TypedResultAndResponseCallback;
import Message = Azure.ServiceBus.Message;

declare class ServiceBusService extends ServiceBusServiceBase {
    constructor(configOrNamespaceOrConnectionString?: string,
                accessKey?: string,
                issuer?: string,
                acsNamespace?: string,
                host?: string,
                authenticationProvider?: object);

    public receiveQueueMessage(queuePath: string,
                               callback: TypedResultAndResponseCallback<Message>): void;

    public receiveQueueMessage(queuePath: string,
                               options: ReceiveQueueMessageOptions,
                               callback: TypedResultAndResponseCallback<Message>): void;

    public receiveSubscriptionMessage(topicPath: string,
                                      subscriptionPath: string,
                                      callback: TypedResultAndResponseCallback<Message>): void;

    public receiveSubscriptionMessage(topicPath: string,
                                      subscriptionPath: string,
                                      options: ReceiveSubscriptionMessageOptions,
                                      callback: TypedResultAndResponseCallback<Message>): void;

    public deleteMessage(message: MessageOrName,
                         callback: ResponseCallback): void;

    public unlockMessage(message: MessageOrName,
                         callback: ResponseCallback): void;

    public renewLockForMessage(message: MessageOrName,
                               callback: ResponseCallback): void;

    public sendQueueMessage(queuePath: string,
                            message: MessageOrName,
                            callback: ResponseCallback): void;

    public sendTopicMessage(topicPath: string,
                            message: MessageOrName,
                            callback: ResponseCallback): void;

    /*
     * Queue Management functions
     */

    public createQueue(queuePath: string,
                       callback: TypedResultAndResponseCallback<Queue>): void;

    public createQueue(queuePath: string,
                       options: CreateQueueOptions,
                       callback: TypedResultAndResponseCallback<Queue>): void;

    public createQueueIfNotExists(queuePath: string,
                                  callback: TypedResultAndResponseCallback<boolean>): void;

    public createQueueIfNotExists(queuePath: string,
                                  options: CreateQueueOptions,
                                  callback: TypedResultAndResponseCallback<boolean>): void;

    public deleteQueue(queuePath: string,
                       callback: ResponseCallback): void;

    public getQueue(queuePath: string,
                    callback: TypedResultAndResponseCallback<Queue>): void;

    public listQueues(callback: TypedResultAndResponseCallback<Queue[]>): void;
    public listQueues(options: ListQueuesOptions,
                      callback: TypedResultAndResponseCallback<Queue[]>): void;

    /*
     * Topic Management functions
     */

    public createTopic(topicPath: string,
                       callback: TypedResultAndResponseCallback<Topic>): void;

    public createTopic(topicPath: string,
                       options: CreateTopicOptions,
                       callback: TypedResultAndResponseCallback<Topic>): void;

    public createTopicIfNotExists(topicPath: string,
                                  callback: TypedResultAndResponseCallback<boolean>): void;

    public createTopicIfNotExists(topicPath: string,
                                  options: CreateTopicIfNotExistsOptions,
                                  callback: TypedResultAndResponseCallback<boolean>): void;

    public deleteTopic(topicPath: string,
                       callback: ResponseCallback): void;

    public getTopic(topicPath: string,
                    callback: TypedResultAndResponseCallback<Topic>): void;

    public listTopics(callback: TypedResultAndResponseCallback<Topic[]>): void;
    public listTopics(options: ListTopicsOptions,
                      callback: TypedResultAndResponseCallback<Topic[]>): void;

    /*
     * Subscription functions
     */

    public createSubscription(topicPath: string,
                              subscriptionPath: string,
                              callback: TypedResultAndResponseCallback<Subscription>): void;

    public createSubscription(topicPath: string,
                              subscriptionPath: string,
                              options: CreateSubscriptionOptions,
                              callback: TypedResultAndResponseCallback<Subscription>): void;

    public deleteSubscription(topicPath: string,
                              subscriptionPath: string,
                              callback: ResponseCallback): void;

    public getSubscription(topicPath: string,
                           subscriptionPath: string,
                           callback: TypedResultAndResponseCallback<Subscription>): void;

    public listSubscriptions(topicPath: string,
                             callback: TypedResultAndResponseCallback<Subscription[]>): void;

    public listSubscriptions(topicPath: string,
                             options: ListSubscriptionsOptions,
                             callback: TypedResultAndResponseCallback<Subscription[]>): void;

    /*
     * Rule functions
     */

    public createRule(topicPath: string,
                      subscriptionPath: string,
                      rulePath: string,
                      callback: TypedResultAndResponseCallback<Rule>): void;

    public createRule(topicPath: string,
                      subscriptionPath: string,
                      rulePath: string,
                      options: CreateRuleOptions,
                      callback: TypedResultAndResponseCallback<Rule>): void;

    public deleteRule(topicPath: string,
                      subscriptionPath: string,
                      rulePath: string,
                      callback: ResponseCallback): void;

    public getRule(topicPath: string,
                   subscriptionPath: string,
                   rulePath: string,
                   callback: TypedResultAndResponseCallback<Rule>): void;

    public listRules(topicPath: string,
                     subscriptionPath: string,
                     callback: TypedResultAndResponseCallback<Rule[]>): void;

    public listRules(topicPath: string,
                     subscriptionPath: string,
                     options: ListRulesOptions,
                     callback: TypedResultAndResponseCallback<Rule[]>): void;

    /*
     * NotificationHub functions
     */

    public createNotificationHub(hubPath: string,
                                 callback: ResultAndResponseCallback): void;

    public createNotificationHub(hubPath: string,
                                 options: CreateNotificationHubOptions,
                                 callback: ResultAndResponseCallback): void;

    public getNotificationHub(hubPath: string,
                              callback: ResultAndResponseCallback): void;

    public listNotificationHubs(callback: ResultAndResponseCallback): void;

    public listNotificationHubs(options: ListNotificationHubsOptions,
                                callback: ResultAndResponseCallback): void;

    public deleteNotificationHub(hubPath: string,
                                 callback: ResponseCallback): void;
}

export = ServiceBusService;
