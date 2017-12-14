import ServiceBusServiceClient = require('azure-sb/lib/servicebusserviceclient');

declare class ServiceBusServiceBase extends ServiceBusServiceClient {
    constructor(configOrNamespaceOrConnectionString: string,
                accessKey?: string,
                issuer?: string,
                acsNamespace?: string,
                host?: string,
                authenticationProvider?: object);
}

export = ServiceBusServiceBase;
