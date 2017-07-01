// Type definitions for eureka-js-client 4.3
// Project: https://github.com/jquatier/eureka-js-client
// Definitions by: Ilko Hoffmann <https://github.com/Schnillz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Eureka {
    constructor(config: EurekaClient.EurekaConfig)
    start(): void;
    stop(): void;
    getInstancesByAppId(appId: string): string[];
    getInstancesByVipAddress(vidAddress: string): string [];
}

export namespace EurekaClient {
    type InstanceStatus = 'UP' | 'DOWN' | 'STARTING' | 'OUT_OF_SERVICE' | 'UNKNOWN';
    type ActionType = 'ADDED' | 'MODIFIED' | 'DELETED';
    type DataCenterName = 'Netflix' | 'Amazon' | 'MyOwn';

    interface EurekaConfig {
        instance: EurekaInstanceConfig;
        eureka: EurekaClientConfig;
    }
    interface EurekaInstanceConfig {
        app: string;
        hostName: string;
        ipAddr: string;
        vipAddress: string;
        dataCenterInfo: DataCenterInfo;
        port?: number;
        instanceId?: string;
        appGroupName?: string;
        sid?: string;
        securePort?: PortWrapper;
        homePageUrl?: string;
        statusPageUrl?: string;
        healthCheckUrl?: string;
        secureHealthCheckUrl?: string;
        secureVipAddress?: string;
        countryId?: number;
        status?: InstanceStatus;
        overriddenstatus?: InstanceStatus;
        leaseInfo?: LeaseInfo;
        isCoordinatingDiscoveryServer?: boolean;
    }
    interface EurekaClientConfig {
        host: string;
        port: number;
        heartbeatInterval?: number;
        registryFetchInterval?: number;
        maxRetries?: number;
        requestRetryDelay?: number;
        fetchRegistry?: boolean;
        filterUpInstances?: boolean;
        servicePath?: string;
        ssl?: boolean;
        useDns?: boolean;
        preferSameZone?: boolean;
        clusterRefreshInterval?: boolean;
        fetchMetadata?: boolean;
        registerWithEureka?: boolean;
        useLocalMetadata?: boolean;
        preferIpAddress?: boolean;
    }
    interface PortWrapper {
        enabled: boolean;
        port: number;
    }
    interface LeaseInfo {
        renewalIntervalInSecs: number;
        durationInSecs: number;
    }
    interface DataCenterInfo {
        name: DataCenterName;
    }
}
