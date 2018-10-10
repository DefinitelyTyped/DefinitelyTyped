// Type definitions for vertx3-eventbus-client 3.5
// Project: http://vertx.io
// Definitions by: Odd Eirik Nes <https://github.com/oddeirik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EventBus {
  interface EventBusStatic {
    new(url: string, options?: any): EventBus;
  }

  interface EventBus {
    url: string;
    options?: any;
    onopen(): any;
    onerror(error: Error): any;
    onclose(): any;
    registerHandler(address: string, headers: any, callback: (error: Error, message: any) => any): any;
    unregisterHandler(address: string, headers: any, callback: (error: Error, message: any) => any): any;
    send(address: string, message: any, headers: any, callback?: (error: Error, message: any) => any): any;
    publish(address: string, message: any, headers?: any): any;
    enableReconnect(enable: boolean): void;
    enablePing(enable: boolean): void;
    close(): any;
  }
}

declare var EventBus: EventBus.EventBusStatic;
export = EventBus;
