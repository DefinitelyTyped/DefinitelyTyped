import ServiceClient = require('azure-sb/lib/serviceclient');

declare class ServiceBusServiceClient extends ServiceClient {
    constructor(accessKey?: string,
                issuer?: string,
                sharedAccessKeyName?: string,
                sharedAccessKeyValue?: string,
                host?: string,
                acsHost?: string,
        authenticationProvider?: object);
}

export = ServiceBusServiceClient;
