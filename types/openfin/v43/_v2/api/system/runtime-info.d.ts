export interface RuntimeInfo {
    architecture: string;
    manifestUrl: string;
    port: number;
    securityRealm?: string | undefined;
    version: string;
    args: object;
}
