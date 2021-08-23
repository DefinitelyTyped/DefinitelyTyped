export interface GetLogRequestType {
    name: string;
    endFile?: string | undefined;
    sizeLimit?: number | undefined;
}
export interface LogInfo {
    name: string;
    size: number;
    date: string;
}
export declare type LogLevel = 'verbose' | 'info' | 'warning' | 'error' | 'fatal';
