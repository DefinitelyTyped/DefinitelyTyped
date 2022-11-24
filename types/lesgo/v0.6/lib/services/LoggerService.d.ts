export enum LogLevels {
    error = 0,
    warn = 1,
    info = 2,
    debug = 3,
}

export type LoggerMeta = Record<string, any>;

export interface Tag {
    env: string;
    service: string;
}

export type RedefinedMessage = Record<string, any> & {
    extra?: LoggerMeta & {
        tags?: Tag[];
    };
    tags?: Tag[];
};

export interface LoggerTransport {
    logType: string;
    level: keyof typeof LogLevels;
    config?: {
        meta?: {
            tags?: Tag[];
        };
        tags: Tag[];
        getCreatedAt?: boolean;
    };
}

export interface LoggerMessage {
    level: keyof typeof LogLevels;
    message: string;
    logger: string;
    extra?: LoggerMeta;
}

export interface LoggerServiceParams {
    logger?: string;
    defaultMeta: LoggerMeta;
    transports: LoggerTransport[];
}

export default class LoggerService {
    protected logger: string;
    protected meta: LoggerMeta;
    protected transports: LoggerTransport[];
    protected getCreatedAt: boolean;

    protected static readonly logLevels: LogLevels;

    constructor(opts?: LoggerServiceParams);

    log(level: keyof typeof LogLevels, message: string, extra?: LoggerMeta): void;

    error(message: string, extra?: LoggerMeta): void;

    warn(message: string, extra?: LoggerMeta): void;

    info(message: string, extra?: LoggerMeta): void;

    debug(message: string, extra?: LoggerMeta): void;

    addMeta(meta?: LoggerMeta): void;

    consoleLogger(level: keyof typeof LogLevels, message: RedefinedMessage): void;

    protected checkIsLogRequired(transportName: string, leve: keyof typeof LogLevels): boolean;

    protected structureLogMessage(level: keyof typeof LogLevels, message: string, extra: LoggerMeta): LoggerMessage;

    protected refineMessagePerTransport(transportName: string, message: RedefinedMessage): RedefinedMessage;

    protected getTransportByName(transportName: string): LoggerTransport;
}
