// Type definitions for socket.io-client 1.2.0
// Project: http://socket.io/
// Definitions by: PROGRE <https://github.com/progre/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var io: SocketIOClientStatic;

declare module 'socket.io-client' {
    export = io;
}

interface SocketIOClientStatic {
    (host: string, details?: any): SocketIOClient.Socket;
    (details?: any): SocketIOClient.Socket;
    connect(host: string, details?: any): SocketIOClient.Socket;
    connect(details?: any): SocketIOClient.Socket;
    protocol: number;
    Socket: { new (...args: any[]): SocketIOClient.Socket };
    Manager: SocketIOClient.ManagerStatic;
}

declare module SocketIOClient {
    interface Socket {
        on(event: string, fn: Function): Socket;
        once(event: string, fn: Function): Socket;
        off(event?: string, fn?: Function): Socket;
        emit(event: string, ...args: any[]): Socket;
        listeners(event: string): Function[];
        hasListeners(event: string): boolean;
        connected: boolean;
    }

    interface ManagerStatic {
        (url: string, opts: any): SocketIOClient.Manager;
        new (url: string, opts: any): SocketIOClient.Manager;
    }

    interface Manager {
        reconnection(v: boolean): Manager;
        reconnectionAttempts(v: boolean): Manager;
        reconnectionDelay(v: boolean): Manager;
        reconnectionDelayMax(v: boolean): Manager;
        timeout(v: boolean): Manager;
    }
}
