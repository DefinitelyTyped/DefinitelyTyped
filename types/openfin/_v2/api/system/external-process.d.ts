export interface ExternalProcessRequestType {
    path?: string | undefined;
    alias?: string | undefined;
    arguments?: string | undefined;
    listener?: LaunchExternalProcessListener | undefined;
    lifetime?: string | undefined;
    certificate?: CertificationInfo | undefined;
    uuid?: string | undefined;
}
export interface CertificationInfo {
    serial?: string | undefined;
    subject?: string | undefined;
    publickey?: string | undefined;
    thumbprint?: string | undefined;
    trusted?: boolean | undefined;
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
    listener?: LaunchExternalProcessListener | undefined;
}
export interface ServiceConfiguration {
    config: object;
    name: string;
}
