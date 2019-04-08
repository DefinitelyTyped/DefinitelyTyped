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
    fallbackVersion?: string;
    securityRealm?: string;
    verboseLogging?: boolean;
    arguments?: string;
    rvmDir?: string;
}
export interface BaseConfig {
    uuid?: string;
    address?: string;
    name?: string;
    nonPersistent?: boolean;
    runtimeClient?: boolean;
    licenseKey?: string;
    client?: any;
    manifestUrl?: string;
    startupApp?: any;
    lrsUrl?: string;
    assetsUrl?: string;
    devToolsPort?: number;
    installerUI?: boolean;
    runtime?: RuntimeConfig;
    appAssets?: [{
        src: string;
        alias: string;
        target: string;
        version: string;
        args: string;
    }];
    customItems?: [any];
    timeout?: number;
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
