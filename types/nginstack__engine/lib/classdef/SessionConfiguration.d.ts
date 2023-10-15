export = SessionConfiguration;
declare function SessionConfiguration(): void;
declare class SessionConfiguration {
    private logger_;
    private duplicating_;
    realm: string;
    environmentType: boolean;
    persistence: boolean;
    cleanupEnvironment: boolean;
    timeout: number;
    maxEnvironmentLifeTime: number;
    maxEnvironmentInactiveTime: number;
    maxSessionInactiveTime: number;
    httpCompressionEnabled: boolean;
    application: DBKey | number;
    clientTrackingEnabled: boolean;
    sessionTrackingEnabled: boolean;
    duplicate(): SessionConfiguration;
}
declare namespace SessionConfiguration {
    export { DBKey };
}
type DBKey = import('../dbkey/DBKey');
