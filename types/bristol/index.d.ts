// Type definitions for bristol 0.4
// Project: https://github.com/TomFrost/Bristol
// Definitions by: Eric Heikes <https://github.com/eheikes>
//                 Elliott Campbell <https://github.com/ElliottCampbellJHA>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Caveat: Currently, .d.ts files are unable to handle this package fully
//         as it requires both class and namespace be exported.

interface LogError {
    message?: string;
    reason?: any;
    stack?: any;
}

interface LogData {
    code?: number;
    id?: string;
    path?: string;
    error?: LogError;
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
