// Type definitions for scc-broker-client 6.1
// Project: https://github.com/SocketCluster/scc-broker-client
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import SCBroker = require('sc-broker/scbroker');
import ClusterBrokerClient = require('./cluster-broker-client');
import { Secret } from 'jsonwebtoken';

export interface MappingEngine {
    setSites(sites: string[]): void;
    getSites(): string[];
    findSite(key: string): string;
}

export interface SCCBrokerClientOptions {
    stateServerReconnectRandomness?: number;
    authKey?: Secret;
    mappingEngine?: 'skeletonRendezvous' | 'simple' | MappingEngine;

    clientPoolSize?: number;

    stateServerHost: string;
    stateServerPort?: number;
    stateServerConnectTimeout?: number;
    stateServerAckTimeout?: number;

    noErrorLogging?: boolean;
    brokerRetryDelay?: number;
}

export function attach(broker: SCBroker, options: SCCBrokerClientOptions): ClusterBrokerClient;
