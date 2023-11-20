// Caveat: Currently, .d.ts files are unable to handle this package fully
//         as it requires both class and namespace be exported.

interface LogError {
    message?: string | undefined;
    reason?: any;
    stack?: any;
}

interface LogData {
    code?: number | undefined;
    id?: string | undefined;
    path?: string | undefined;
    error?: LogError | undefined;
    data?: any;
}

declare class Bristol {
    addTarget(target: any, opts?: any): any;
    withFormatter(formatter: string): any;
    withLowestSeverity(severity: string): any;
    info(message: string, data: LogData): any;
    warn(message: string, data: LogData): any;
    error(message: string, data: LogData): any;
    debug(message: string, data: LogData): any;
}

declare const bristol: Bristol;

export = bristol;
