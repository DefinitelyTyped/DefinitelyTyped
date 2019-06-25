import { ServiceConfig } from '../transport/wire';
export interface AppDirectoryEntry {
    manifest_url: string;
}
export declare const lookupServiceUrl: (serviceName: string) => Promise<any>;
export declare const launchService: (service: ServiceConfig) => Promise<void>;
export declare const startServices: (services: ServiceConfig[]) => Promise<void>;
