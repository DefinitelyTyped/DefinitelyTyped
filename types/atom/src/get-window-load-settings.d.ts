export interface WindowLoadSettings {
    readonly appVersion: string;
    readonly atomHome: string;
    readonly devMode: boolean;
    readonly resourcePath: string;
    readonly safeMode: boolean;
    readonly env?: { [key: string]: string | undefined };
    readonly profileStartup?: boolean;
}
