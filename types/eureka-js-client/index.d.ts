// Type definitions for eureka-js-client 4.5
// Project: https://github.com/jquatier/eureka-js-client
// Definitions by: Ilko Hoffmann <https://github.com/Schnillz>
//                 Karl O. <https://github.com/karl-run>
//                 Tom Barton <https://github.com/tombarton>
//                 Josh Sullivan <https://github.com/jpsullivan>
//                 WayJam So <https://github.com/imsuwj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Eureka {
    constructor(config: EurekaClient.EurekaConfig | EurekaClient.EurekaYmlConfig | EurekaClient.EurekaMiddlewareConfig);
    start(cb?: (err: Error, ...rest: any[]) => void): void;
    stop(cb?: (err: Error, ...rest: any[]) => void): void;
    getInstancesByAppId(appId: string): EurekaClient.EurekaInstanceConfig[];
    getInstancesByVipAddress(vidAddress: string): EurekaClient.EurekaInstanceConfig[];
}

export namespace EurekaClient {
    type InstanceStatus = 'UP' | 'DOWN' | 'STARTING' | 'OUT_OF_SERVICE' | 'UNKNOWN';
    type ActionType = 'ADDED' | 'MODIFIED' | 'DELETED';
    type DataCenterName = 'Netflix' | 'Amazon' | 'MyOwn';

    interface EurekaConfig {
        requestMiddleware?: (requestOpts: any, done: (opts: any) => void) => void;
        instance: EurekaInstanceConfig;
        eureka: EurekaClientConfig;
        shouldUseDelta?: boolean;
        logger?: {
            warn: (...args: any[]) => void;
            info: (...args: any[]) => void;
            debug: (...args: any[]) => void;
            error: (...args: any[]) => void;
        };
    }
    interface EurekaInstanceConfig {
        app: string;
        hostName: string;
        ipAddr: string;
        vipAddress: string;
        dataCenterInfo: DataCenterInfo;
        port?: number | PortWrapper | LegacyPortWrapper;
        instanceId?: string;
        appGroupName?: string;
        sid?: string;
        securePort?: number | PortWrapper | LegacyPortWrapper;
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
        lastUpdatedTimestamp?: number;
        lastDirtyTimestamp?: number;
        actionType?: ActionType;
        metadata?: {
            [index: string]: string;
        };
    }
    interface EurekaClientConfig {
        host?: string;
        port?: number;
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
        serviceUrls?: {
            [index: string]: string[];
        };
    }
    interface EurekaYmlConfig {
        cwd: string;
        filename?: string;
    }
    interface EurekaMiddlewareConfig {
        requestMiddleware: (requestOpts: any, done: (opts: any) => void) => void;
    }
    interface LegacyPortWrapper {
        $: number;
        '@enabled': boolean;
    }
    interface PortWrapper {
        enabled: boolean;
        port: number;
    }
    interface LeaseInfo {
        renewalIntervalInSecs?: number;
        durationInSecs?: number;
        registrationTimestamp?: number;
        lastRenewalTimestamp?: number;
        evictionTimestamp?: number;
        serviceUpTimestamp?: number;
    }
    interface DataCenterInfo {
        name: DataCenterName;
        '@class'?: string;
    }
}
