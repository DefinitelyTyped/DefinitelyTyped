export interface RuntimeInfo {
    architecture: string;
    manifestUrl: string;
    port: number;
    securityRealm?: string | undefined;
    version: string;
    args: object;
    chromeVersion: string;
    fdc3AppUuid?: string | undefined;
    fdc3ChannelName?: string | undefined;
}
