/// <reference types="node" />
import { EventEmitter } from 'events';
export interface Wire extends EventEmitter {
    connect(address: string): Promise<any>;
    connectSync(): any;
    send(data: any): Promise<any>;
    shutdown(): Promise<void>;
}
export interface WireConstructor {
    new (onmessage: (data: any) => void): Wire;
}
export interface RuntimeConfig {
    version: string;
    fallbackVersion?: string | undefined;
    securityRealm?: string | undefined;
    verboseLogging?: boolean | undefined;
    arguments?: string | undefined;
    rvmDir?: string | undefined;
}
export interface ServiceConfig {
    name: string;
    manifestUrl: string;
}
export interface BaseConfig {
    uuid?: string | undefined;
    address?: string | undefined;
    name?: string | undefined;
    nonPersistent?: boolean | undefined;
    runtimeClient?: boolean | undefined;
    licenseKey?: string | undefined;
    client?: any;
    manifestUrl?: string | undefined;
    startupApp?: any;
    lrsUrl?: string | undefined;
    assetsUrl?: string | undefined;
    devToolsPort?: number | undefined;
    installerUI?: boolean | undefined;
    runtime?: RuntimeConfig | undefined;
    services?: ServiceConfig[] | undefined;
    appAssets?: [{
        src: string;
        alias: string;
        target: string;
        version: string;
        args: string;
    }] | undefined;
    customItems?: [any] | undefined;
    timeout?: number | undefined;
}
export interface ConfigWithUuid extends BaseConfig {
    uuid: string;
}
export interface ExistingConnectConfig extends ConfigWithUuid {
    address: string;
}
export interface ConfigWithRuntime extends BaseConfig {
    runtime: RuntimeConfig;
}
export interface ExternalConfig extends BaseConfig {
    manifestUrl: string;
}
export declare type NewConnectConfig = ConfigWithUuid & ConfigWithRuntime;
export declare type PortDiscoveryConfig = (ExternalConfig & ConfigWithRuntime) | NewConnectConfig;
export declare type ConnectConfig = ExistingConnectConfig | NewConnectConfig | ExternalConfig;
export declare type InternalConnectConfig = ExistingConnectConfig | NewConnectConfig;
export declare function isExternalConfig(config: ConnectConfig): config is ExternalConfig;
export declare function isExistingConnectConfig(config: any): config is ExistingConnectConfig;
export declare function isNewConnectConfig(config: any): config is NewConnectConfig;
export declare function isPortDiscoveryConfig(config: any): config is PortDiscoveryConfig;
export declare function isInternalConnectConfig(config: any): config is InternalConnectConfig;
export declare enum READY_STATE {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3
}
