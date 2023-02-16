/*
* Copyright (c) 2019-2020 Bradley Farias
*
*   This file is part of the Moddable SDK Tools.
*
*   The Moddable SDK Tools is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   The Moddable SDK Tools is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
*
*/

declare module "websocket" {
    import type { TCPSocketOptions, ListenerOptions } from "socket";

    type WebSocketClientOptions = TCPSocketOptions & {
        path?: string,
        protocol?: string,
        headers?: string[]
    };
    type WebSocketClientCallback = (message: number, value?: any) => void;

    class Client {
        static readonly connect: number;
        static readonly handshake: number;
        static readonly receive: number;
        static readonly disconnect: number;

        constructor(options: WebSocketClientOptions);
        close(): void;
        write(data: string | ArrayBuffer): void;
        callback: WebSocketClientCallback;
    }

    type WebSocketServerOptions = ListenerOptions;
    type WebSocketServerCallback = (message: number, value?: any) => void;

    class Server {
        static readonly connect: number;
        static readonly handshake: number;
        static readonly receive: number;
        static readonly disconnect: number;
        static readonly subprotocol: number;

        constructor(options: WebSocketServerOptions);
        close(): void;
        write(message: string | ArrayBuffer): void;
        callback: WebSocketServerCallback;
    }
}
