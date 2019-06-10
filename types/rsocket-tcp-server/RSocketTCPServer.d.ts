/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { DuplexConnection } from 'rsocket-types';
import { Encoders, TransportServer } from 'rsocket-core';
import * as EventEmitter from 'events';
import * as net from 'net';
import { Flowable } from 'rsocket-flowable';
export declare type ServerOptions = {
    host?: string;
    port: number;
    serverFactory?: (onConnect: (socket: net.Socket) => undefined) => net.Server;
};
/**
 * A TCP transport server.
 *
 * //FIXME: Inconsistent casing between TCPServer and TcpClient
 */
export default class RSocketTCPServer implements TransportServer {
    _emitter: EventEmitter;
    _encoders: Encoders<any> | null | undefined;
    _options: ServerOptions;
    constructor(options: ServerOptions, encoders?: Encoders<any> | null | undefined);
    start(): Flowable<DuplexConnection>;
    stop(): undefined;
}
