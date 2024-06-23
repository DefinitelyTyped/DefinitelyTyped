export interface ProxyInfo {
    config: ProxyConfig;
    system: ProxySystemInfo;
}
export interface ProxyConfig {
    proxyAddress: string;
    proxyPort: number;
    type: string;
}
export interface ProxySystemInfo {
    autoConfigUrl: string;
    bypass: string;
    enabled: boolean;
    proxy: string;
}
