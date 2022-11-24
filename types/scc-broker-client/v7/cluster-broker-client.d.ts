import AsyncStreamEmitter = require('async-stream-emitter');
import SCBroker = require('sc-broker/scbroker');
import { Secret } from 'jsonwebtoken';
import ConsumableStream = require('consumable-stream');

import { MappingEngine, SCCBrokerClientOptions, Broker } from '.';
import ClientPool = require('./client-pool');

declare class ClusterBrokerClient extends AsyncStreamEmitter<any> {
    broker: Broker;
    sccBrokerClientPools: ClientPool[];
    sccBrokerURIList: string[];
    authKey?: Secret | undefined;
    mappingEngine: 'skeletonRendezvous' | 'simple' | MappingEngine;
    clientPoolSize: number;
    mapper: MappingEngine;
    isReady: boolean;

    errors: {
        NoMatchingSubscribeTargetError: (channelName: string) => Error;
        NoMatchingUnsubscribeTargetError: (channelName: string) => Error;
        NoMatchingPublishTargetError: (channelName: string) => Error;
    };

    constructor(broker: SCBroker, options?: SCCBrokerClientOptions);

    emit(eventName: 'error', data: { error: Error }): void;
    emit(eventName: 'updateWorkers', data: UpdateWorkersData): void;
    emit(eventName: 'updateBrokers', data: UpdateBrokersData): void;
    emit(event: 'subscribe', data: ClientPool.SubscribeData): void;
    emit(event: 'subscribeFail', data: ClientPool.SubscribeFailData): void;
    emit(eventName: 'publish', data: ClientPool.PublishData): void;
    emit(eventName: 'publishFail', data: ClientPool.PublishFailData): void;
    emit(eventName: 'message', data: MessageData): void;

    listener(eventName: 'error'): ConsumableStream<{ error: Error }>;
    listener(eventName: 'updateWorkers'): ConsumableStream<UpdateWorkersData>;
    listener(eventName: 'updateBrokers'): ConsumableStream<UpdateBrokersData>;
    listener(event: 'subscribe'): ConsumableStream<ClientPool.SubscribeData>;
    listener(event: 'subscribeFail'): ConsumableStream<ClientPool.SubscribeFailData>;
    listener(eventName: 'publish'): ConsumableStream<ClientPool.PublishData>;
    listener(eventName: 'publishFail'): ConsumableStream<ClientPool.PublishFailData>;
    listener(eventName: 'message'): ConsumableStream<MessageData>;

    mapChannelNameToBrokerURI(channelName: string): string;
    setBrokers(sccBrokerURIList: string[]): void;
    getAllSubscriptions(): string[];

    subscribe(channelName: string): void;
    unsubscribe(channelName: string): void;

    invokePublish(channelName: string, data: any): void;
}

interface UpdateWorkersData {
    workerURIs: string;
    sourceWorkerURI: string;
}

interface UpdateBrokersData {
    brokerURIs: string[];
}
interface MessageData {
    channelName: string;
    packet: any;
}

export = ClusterBrokerClient;
