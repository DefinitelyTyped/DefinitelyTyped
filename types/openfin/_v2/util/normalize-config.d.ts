import { ConnectConfig, InternalConnectConfig, ExternalConfig } from '../transport/wire';
export declare function normalizeConfig(config: ConnectConfig): Promise<InternalConnectConfig | ExternalConfig>;
export declare function validateConfig(config: ConnectConfig): Promise<InternalConnectConfig>;
