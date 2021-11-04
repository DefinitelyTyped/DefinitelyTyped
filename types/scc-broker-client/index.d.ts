// Type definitions for scc-broker-client 7.0
// Project: https://github.com/SocketCluster/scc-broker-client
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import AGSimpleBroker = require('ag-simple-broker');
import ConsumableStream = require('consumable-stream');
import { Secret } from 'jsonwebtoken';

import ClusterBrokerClient = require('./cluster-broker-client');

export interface Broker {
    listener(eventName: 'subscribe'): ConsumableStream<AGSimpleBroker.SubscribeData>;
    listener(eventName: 'unsubscribe'): ConsumableStream<AGSimpleBroker.UnsubscribeData>;
    listener(eventName: 'publish'): ConsumableStream<AGSimpleBroker.PublishData>;

    invokePublish(channelName: string, data: any, suppressEvent: boolean): Promise<void>;

    subscriptions(): string[];
}

export interface MappingEngine {
    setSites(sites: string[]): void;
    getSites(): string[];
    findSite(key: string): string;
}

export interface SCCBrokerClientOptions {
    stateServerReconnectRandomness?: number | undefined;
    authKey?: Secret | undefined;
    mappingEngine?: 'skeletonRendezvous' | 'simple' | MappingEngine | undefined;

    clientPoolSize?: number | undefined;

    stateServerHost: string;
    stateServerPort?: number | undefined;
    stateServerConnectTimeout?: number | undefined;
    stateServerAckTimeout?: number | undefined;

    instancePort?: number | undefined;
    instanceId?: string | undefined;
    instanceIp?: string | undefined;
    instanceIpFamily?: string | undefined;

    noErrorLogging?: boolean | undefined;
    brokerRetryDelay?: number | undefined;

    pubSubBatchDuration?: number | undefined;
}

export function attach(broker: Broker, options: SCCBrokerClientOptions): ClusterBrokerClient;
