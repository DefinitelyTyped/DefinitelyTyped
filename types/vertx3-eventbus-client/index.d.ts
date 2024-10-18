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
        registerHandler(address: string, headers?: object, callback?: (error: Error, message: any) => any): any;
        unregisterHandler(address: string, headers?: object, callback?: (error: Error, message: any) => any): any;
        send(address: string, message: any, headers?: object, callback?: (error: Error, message: any) => any): any;
        publish(address: string, message: any, headers?: any): any;
        enableReconnect(enable: boolean): void;
        enablePing(enable: boolean): void;
        close(): any;
    }
}

declare var EventBus: EventBus.EventBusStatic;
export = EventBus;
