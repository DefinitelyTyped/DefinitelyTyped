export = ApplicationSessionMonitor;
declare function ApplicationSessionMonitor(): void;
declare class ApplicationSessionMonitor {
    maxOutdatedSessionLifetime: number;
    dropSession(
        sid: string,
        reason: string,
        options?: {
            timeout?: number;
        }
    ): void;
    findLocalSessionDropRequest(sid: any): SessionDropRequest;
    synchronize(wait?: boolean, timeout?: number): boolean;
}
declare namespace ApplicationSessionMonitor {
    export { DBKey, SessionDropRequest };
}
type DBKey = import('@nginstack/engine/lib/dbkey/DBKey');
interface SessionDropRequest {
    sessionId: string;
    requester: DBKey | number;
    reason: string;
    requestedAt: Date;
    dropsAt: Date;
}
