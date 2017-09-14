// Type definitions for microgears v4.0.0
// Project: https://github.com/marcusdb/microgears
// Definitions by: Marcus David Bronstein <https://github.com/marcusdb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace microgears {
    export interface Service {
        name: string;
        async?: boolean;
        pathname?: string;
        namespace: string;
    }

    interface MetaInformation {
        serviceName: string;
        methodName: string;
        serviceNameSpace: string;
        extra: any;
    }

    interface Plugin {
        name: string;
        beforeChain(args: Array<any>, metaInfo: MetaInformation): Array<any>;
        afterChain<T>(result: T, metaInfo: MetaInformation): T;
    }

    function addService(service: Service): Service;
    function addPlugin(plugin: Plugin): void;
}

export = microgears;