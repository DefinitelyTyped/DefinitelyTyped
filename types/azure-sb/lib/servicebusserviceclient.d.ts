/// <reference types="node" />
import EventEmitter = NodeJS.EventEmitter;

declare class ServiceBusServiceClient extends EventEmitter {
    constructor(accessKey?: string,
                issuer?: string,
                sharedAccessKeyName?: string,
                sharedAccessKeyValue?: string,
                host?: string,
                acsHost?: string,
                authenticationProvider?: object);
}

export = ServiceBusServiceClient;
