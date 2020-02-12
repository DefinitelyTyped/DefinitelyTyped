// Type definitions for scc-broker-client 7.0
// Project: https://github.com/SocketCluster/scc-broker-client
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import SCBroker = require("sc-broker/scbroker");
import { Secret } from "jsonwebtoken";

import ClusterBrokerClient = require("./cluster-broker-client");

export interface MappingEngine {
    setSites(sites: string[]): void;
    getSites(): string[];
    findSite(key: string): string;
}

export interface SCCBrokerClientOptions {
    stateServerReconnectRandomness?: number;
    authKey?: Secret;
    mappingEngine?: "skeletonRendezvous" | "simple" | MappingEngine;

    clientPoolSize?: number;

    stateServerHost: string;
    stateServerPort?: number;
    stateServerConnectTimeout?: number;
    stateServerAckTimeout?: number;

    instancePort?: number;
    instanceId?: string;
    instanceIp?: string;
    instanceIpFamily?: string;

    noErrorLogging?: boolean;
    brokerRetryDelay?: number;

    pubSubBatchDuration?: number;
}

export function attach(broker: SCBroker, options: SCCBrokerClientOptions): ClusterBrokerClient;
