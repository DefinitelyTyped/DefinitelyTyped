export = Engine;
declare function Engine(): void;
declare class Engine {
    progressMonitor: ProgressMonitor;
    sessionManager: SessionManager;
    instanceId: string;
    processId: number;
    keyCacheRange: number;
    version: string;
    versionInfo: VersionInfo;
    platform: string;
    arch: string;
    applicationPath: string;
    dataDir: string;
    env: any;
    logDir: string;
    programDir: string;
    tempDir: string;
    smallTempDir: string;
    applicationFileName: string;
    startTime: Date;
    localAddress: string;
    localHost: string;
    localPort: number;
    getPorts(): any[];
    osRun(command: string, opt_wait: boolean, opt_commandShow: string): number;
    setKioskMode(kioskMode: boolean): void;
    restart(delay?: number): void;
    exit(exitCode?: number, delay?: number): void;
    discardEndpointInfoCache(): void;
}
declare namespace Engine {
    export { ProgressMonitor, SessionManager, VersionInfo };
}
type ProgressMonitor = import('../progress/ProgressMonitor');
type SessionManager = import('../session/SessionManager');
interface VersionInfo {
    fileVersion: string;
    legalCopyright: string;
    companyName: string;
}
