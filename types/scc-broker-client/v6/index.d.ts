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
    stateServerReconnectRandomness?: number | undefined;
    authKey?: Secret | undefined;
    mappingEngine?: 'skeletonRendezvous' | 'simple' | MappingEngine | undefined;

    clientPoolSize?: number | undefined;

    stateServerHost: string;
    stateServerPort?: number | undefined;
    stateServerConnectTimeout?: number | undefined;
    stateServerAckTimeout?: number | undefined;

    noErrorLogging?: boolean | undefined;
    brokerRetryDelay?: number | undefined;
}

export function attach(broker: SCBroker, options: SCCBrokerClientOptions): ClusterBrokerClient;
