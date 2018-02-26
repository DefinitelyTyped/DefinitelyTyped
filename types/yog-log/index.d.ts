// Type definitions for yog-log 0.1
// Project: https://github.com/fex-team/yog-log
// Definitions by: ssddi456 <https://github.com/ssddi456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, Response, NextFunction } from "express";

interface LEVELS {
    // 访问日志
    0: 'ACCESS';
    3: 'ACCESS_ERROR';
    // 应用日志等级 ODP格式
    1: 'FATAL';
    2: 'WARNING';
    4: 'NOTICE';
    8: 'TRACE';
    16: 'DEBUG';
}

type LevelInt = keyof LEVELS | 0 | 3 | 1 | 2 | 4 | 8 | 16;
type LevelName = LEVELS[LevelInt];

type LogReturn = undefined | false;

interface LogConfig {
    LogIdName?: string;
    // 模板文件地址，可以不填
    data_path?: string;
    // 用户只需要填写log_path配置
    log_path?: string;

    debug?: 0 | 1;
    intLevel?: 16;
    auto_rotate?: 0 | 1;
    use_sub_dir?: 0 | 1;
    IS_ODP?: boolean;
    IS_OMP?: 0 | 1;

    access_log_path?: string;
    access_error_log_path?: string;

    access?: string;
    format_wf?: string;
}

interface WriteLogConfig {
    filename_suffix: string;
    errno: number;
    escape_msg: boolean;
}

interface LogInfo {
    msg: string;
    custom: {};
}

type LogInput = string | LogInfo | Error;

declare function yog_log(config?: LogConfig): ((req: Request, resp: Response, next: NextFunction) => any);

declare namespace yog_log {
    class Logger {
        constructor(opts: LogConfig, req: Request);

        extend(destination: {}, source: {}): {};

        log(level: string, obj: string | {}): void | false;

        notice(info: LogInput): void | false;

        debug(info: LogInput): void | false;

        fatal(info: LogInput): void | false;

        trace(info: LogInput): void | false;

        warning(info: LogInput): void | false;

        getCookie(name: string): string | false;

        getLogFile(intLevel: LevelInt): string;

        getLogFormat(level: LevelName): string | false;

        getLogID(req: Request, logIDName: string): string;

        getLogLevelInt(level: LevelName): LevelInt | -1;

        getLogPrefix(): string;

        getLogString(format: string): string;

        getParams(name: string): string;

        md5(data: string | Buffer, len: number): string;

        parseCustomLog(obj: {}): void;

        // 解析日志配置，生成相应的模板函数的字符串内容
        parseFormat(format: string): string;

        parseReqParams(req: Request, res: Response): void | false;

        parseStackInfo(info: LogInfo | Error): void;

        setParams(name: string, value: any): void;

        writeLog(intLevel: LevelInt, options: WriteLogConfig, log_format: string): void | false;
    }

    function getLogger(config?: LogConfig): Logger;
}

export = yog_log;
