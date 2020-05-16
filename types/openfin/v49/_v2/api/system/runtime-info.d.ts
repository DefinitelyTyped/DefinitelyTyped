export interface RuntimeInfo {
    architecture: string;
    manifestUrl: string;
    port: number;
    securityRealm?: string;
    version: string;
    args: object;
    chromeVersion: string;
    fdc3AppUuid?: string;
    fdc3ChannelName?: string;
}
