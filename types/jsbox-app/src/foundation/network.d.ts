// JSBox Network API TypeScript Declaration

declare namespace NetworkTypes {
    interface NetworkInterfaceInfo {
        [interfaceName: string]: string;
    }

    interface PingOptions {
        host: string;
        timeout?: number;
        period?: number;
        payloadSize?: number;
        ttl?: number;
        didReceiveReply?: (summary: PingSummary) => void;
        didReceiveUnexpectedReply?: (summary: PingSummary) => void;
        didSendPing?: (summary: PingSummary) => void;
        didTimeout?: (summary: PingSummary) => void;
        didFail?: (error: NSError) => void;
        didFailToSendPing?: (response: any) => void;
    }

    interface PingSummary {
        sequenceNumber: number;
        payloadSize: number;
        ttl: number;
        host: string;
        sendDate: Date | null;
        receiveDate: Date | null;
        rtt: number;
        status: number;
    }

    interface ProxyConfiguration {
        [key: string]: string | number | string[] | undefined;

        ExceptionsList?: string[];
        FTPPassive?: number;

        HTTPEnable?: number;
        HTTPProxy?: string;
        HTTPPort?: number;
        HTTPProxyAuthenticated?: number;
        HTTPProxyUsername?: string;

        HTTPSEnable?: number;
        HTTPSProxy?: string;
        HTTPSPort?: number;

        ProxyAutoConfigEnable?: number;
        ProxyAutoConfigURLString?: string;
        ProxyAutoConfigJavaScript?: string;
    }

    interface ProxySettings {
        [key: string]: string | number | string[] | Record<string, ProxyConfiguration> | undefined;

        FTPPassive?: number;
        __SCOPED__?: Record<string, ProxyConfiguration>;
    }
}

interface JBNetwork {
    ifa_data: Record<string, { received: number; sent: number }>;
    interfaces: NetworkTypes.NetworkInterfaceInfo;
    startPinging(options: NetworkTypes.PingOptions): void;
    stopPinging(): void;
    proxy_settings: NetworkTypes.ProxySettings;
}

declare const $network: JBNetwork;
