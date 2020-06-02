import { EventEmitter } from 'events';
import SCBroker = require('sc-broker/scbroker');
import { Secret } from 'jsonwebtoken';
import { MappingEngine, SCCBrokerClientOptions } from '.';
import ClientPool = require('./client-pool');

declare class ClusterBrokerClient extends EventEmitter {
    broker: SCBroker;
    sccBrokerClientPools: ClientPool[];
    sccBrokerURIList: string[];
    authKey?: Secret;
    mappingEngine: 'skeletonRendezvous' | 'simple' | MappingEngine;
    clientPoolSize: number;
    mapper: MappingEngine;

    constructor(broker: SCBroker, options?: SCCBrokerClientOptions);

    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'subscribe', listener: (data: ClientPool.SubscribeData) => void): this;
    on(event: 'subscribeFail', listener: (data: ClientPool.SubscribeFailData) => void): this;
    on(event: 'publish' | 'publishFail', listener: (data: ClientPool.PublishData) => void): this;
    on(event: 'message', listener: (channelName: string, packet: any) => void): this;

    mapChannelNameToBrokerURI(channelName: string): string;
    setBrokers(sccBrokerURIList: string[]): void;
    getAllSubscriptions(): string[];

    subscribe(channelName: string): void;
    unsubscribe(channelName: string): void;

    publish(channelName: string, data: any): void;
}

export = ClusterBrokerClient;
