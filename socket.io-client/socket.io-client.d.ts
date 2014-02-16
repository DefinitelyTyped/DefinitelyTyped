// Type definitions for socket.io nodejs client
// Project: http://socket.io/
// Definitions by: Maido Kaara <https://github.com/v3rm0n>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "socket.io-client" {

    export function connect(host: string, details?: any): Socket;

    interface EventEmitter {
        emit(name: string, ...data: any[]): any;
        on(ns: string, fn: Function): EventEmitter;
        addListener(ns: string, fn: Function): EventEmitter;
        removeListener(ns: string, fn: Function): EventEmitter;
        removeAllListeners(ns: string): EventEmitter;
        once(ns: string, fn: Function): EventEmitter;
        listeners(ns: string): Function[];
    }

    interface SocketNamespace extends EventEmitter {
        of(name: string): SocketNamespace;
        send(data: any, fn: Function): SocketNamespace;
        emit(name: string): SocketNamespace;
    }

    interface Socket extends EventEmitter {
        of(name: string): SocketNamespace;
        connect(fn: Function): Socket;
        packet(data: any): Socket;
        flushBuffer(): void;
        disconnect(): Socket;
    }
}
