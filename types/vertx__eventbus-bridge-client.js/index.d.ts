declare namespace EventBus {
    type EventBusStatic = new(url: string, options?: any) => EventBus;

    interface EventBus {
        url: string;
        options?: EventBusOptions | undefined;
        onopen(): void;
        onerror(error: EventBusError): void;
        onclose(): void;
        registerHandler(address: string, headers?: object, callback?: (error: Error, message: any) => void): void;
        unregisterHandler(address: string, headers?: object, callback?: (error: Error, message: any) => void): void;
        send(address: string, message: any, headers?: object, callback?: (error: Error, message: any) => void): void;
        publish(address: string, message: any, headers?: any): void;
        enableReconnect(enable: boolean): void;
        enablePing(enable: boolean): void;
        close(): void;
    }

    interface EventBusOptions {
        vertxbus_reconnect_attempts_max: number; // Max reconnect attempts
        vertxbus_reconnect_delay_min: number; // Initial delay (in ms) before first reconnect attempt
        vertxbus_reconnect_delay_max: number; // Max delay (in ms) between reconnect attempts
        vertxbus_reconnect_exponent: number; // Exponential backoff factor
        vertxbus_randomization_factor: number; // Randomization factor between 0 and 1
    }

    interface EventBusError {
        body: string;
        type: string;
    }
}

declare var EventBus: EventBus.EventBusStatic;
export = EventBus;
