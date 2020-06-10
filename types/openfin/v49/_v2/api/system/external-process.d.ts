export interface ExternalProcessRequestType {
    path?: string;
    alias?: string;
    arguments?: string;
    listener?: LaunchExternalProcessListener;
    lifetime?: string;
    certificate?: CertificationInfo;
    uuid?: string;
}
export interface CertificationInfo {
    serial?: string;
    subject?: string;
    publickey?: string;
    thumbprint?: string;
    trusted?: boolean;
}
export interface ExitCode {
    topic: string;
    uuid: string;
    exitCode: number;
}
export interface LaunchExternalProcessListener {
    (code: ExitCode): void;
}
export interface TerminateExternalRequestType {
    uuid: string;
    timeout: number;
    killTree: boolean;
}
export interface ExternalConnection {
    token: string;
    uuid: string;
}
export interface ExternalProcessInfo {
    pid: number;
    listener?: LaunchExternalProcessListener;
}
export interface ServiceConfiguration {
    config: object;
    name: string;
}
