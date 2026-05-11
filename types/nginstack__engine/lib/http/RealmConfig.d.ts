export = RealmConfig;
declare function RealmConfig(): void;
declare class RealmConfig {
    private logger_;
    environmentType: string;
    runtime: string;
    cleanupEnvironment: boolean;
    maxLifeTime: number;
    maxInactiveTime: number;
    httpCompressionEnabled: boolean;
    clientTrackingEnabled: boolean;
    sessionTrackingEnabled: boolean;
    loginAuditingEnabled: boolean;
    application: number;
}
declare namespace RealmConfig {
    function fromKey(directory: number): RealmConfig;
    function fromName(name: string): RealmConfig;
}
