// Type definitions for socket.io 1.2.0
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../node/node.d.ts' />

declare module 'socket.io' {
    var server: SocketIOStatic;

    export = server;
}

interface SocketIOStatic {
    (): SocketIO.Server;
    (srv: any, opts?: any): SocketIO.Server;
    (port: number, opts?: any): SocketIO.Server;
    (opts: any): SocketIO.Server;

    listen: SocketIOStatic;
}

declare module SocketIO {
    interface Server {
        serveClient(v: boolean): Server;
        path(v: string): Server;
        adapter(v: any): Server;
        origins(v: string): Server;
        sockets: Namespace;
        attach(srv: any, opts?: any): Server;
        attach(port: number, opts?: any): Server;
        listen(srv: any, opts?: any): Server;
        listen(port: number, opts?: any): Server;
        bind(srv: any): Server;
        onconnection(socket: any): Server;
        of(nsp: string): Namespace;
        emit(name: string, ...args: any[]): Socket;
        use(fn: Function): Namespace;

        on(event: 'connection', listener: (socket: Socket) => void): Namespace;
        on(event: 'connect', listener: (socket: Socket) => void): Namespace;
        on(event: string, listener: Function): Namespace;
    }

    interface Namespace extends NodeJS.EventEmitter {
        name: string;
        connected: { [id: string]: Socket };
        use(fn: Function): Namespace;
        in(room: string): Namespace;

        on(event: 'connection', listener: (socket: Socket) => void): Namespace;
        on(event: 'connect', listener: (socket: Socket) => void): Namespace;
        on(event: string, listener: Function): Namespace;
    }

    interface Socket {
        rooms: string[];
        client: Client;
        conn: any;
        request: any;
        id: string;
        handshake: {
            headers: any;
            time: string;
            address: any;
            xdomain: boolean;
            secure: boolean;
            issued: number;
            url: string;
            query: any;
        };

        emit(name: string, ...args: any[]): Socket;
        join(name: string, fn?: Function): Socket;
        leave(name: string, fn?: Function): Socket;
        to(room: string): Socket;
        in(room: string): Socket;
        send(...args: any[]): Socket;
        write(...args: any[]): Socket;

        on(event: string, listener: Function): Socket;
        once(event: string, listener: Function): Socket;
        removeListener(event: string, listener: Function): Socket;
        removeAllListeners(event: string): Socket;
        broadcast: Socket;
        volatile: Socket;
        connected: boolean;
        disconnect(close?: boolean): Socket;
    }

    interface Client {
        conn: any;
        request: any;
    }
}
