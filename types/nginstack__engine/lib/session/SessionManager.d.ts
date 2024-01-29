export = SessionManager;
declare function SessionManager(): void;
declare class SessionManager {
    sessionsCount: number;
    statefulSessionsCount: number;
    statelessSessionsCount: number;
    standaloneSessionsCount: number;
    maxStatelessSessionsCount: number;
    maxStatefulSessionsCount: number;
    inUseSessionsCount: number;
    dropStatefulSession(sid: string): void;
    dropStatelessSession(sid: string): void;
    dropSession(sid: string): void;
    dropStatelessSessions(realm: string): void;
    abortSession(sid: string): void;
    getSessionThreadId(sid: string): number;
    getStatistics(): DataSet;
    cleanUp(wait?: boolean, timeout?: number): boolean;
}
declare namespace SessionManager {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
