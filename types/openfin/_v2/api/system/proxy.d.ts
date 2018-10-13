export interface ProxyInfo {
    config: ProxyConfig;
    system: {
        autoConfigUrl: string;
        bypass: '';
        enabled: boolean;
        proxy: string;
    };
}
export interface ProxyConfig {
    proxyAddress: string;
    proxyPort: number;
    type: string;
}
