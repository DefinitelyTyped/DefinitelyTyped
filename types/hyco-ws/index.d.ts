// Type definitions for hyco-ws 1.0
// Project: https://github.com/Azure/azure-relay-node, https://docs.microsoft.com/en-us/azure/service-bus-relay
// Definitions by: Manuel Rodrigo Cabello <https://github.com/mrcabellom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as WebSocket from 'ws';
import { EventEmitter } from 'events';

export class HybridConnectionWebSocketServer extends EventEmitter {
    constructor(options: any);
    close(callback: () => void): void;
    listenUri: string;
    closeRequested: boolean;
    options: any;
    path: string;
    clients: WebSocket[];
    controlChannel: WebSocket;
}

export function createRelayedServer(options: any, fn: (ws: WebSocket) => void): HybridConnectionWebSocketServer;
export function relayedConnect(address: string, fn: () => void): WebSocket;
export function createRelayToken(uri: string, key_name: string, key: string, expiry?: number): string;
export function appendRelayToken(uri: string, key_name: string, key: string, expiry?: number): string;
export function createRelayBaseUri(serviceBusNamespace: string, path: string): string;
export function createRelaySendUri(serviceBusNamespace: string, path: string, token?: any, id?: any): string;
export function createRelayListenUri(serviceBusNamespace: string, path: string, token?: any, id?: any): string;
