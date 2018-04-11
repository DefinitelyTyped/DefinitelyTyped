// Type definitions for node-ral 0.18
// Project: https://github.com/fex-team/node-ral
// Definitions by: ssddi456 <https://github.com/ssddi456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EventEmitter } from 'events';
import { Request, Response, NextFunction } from "express";

export interface LogInfo {
    service: string;
    requestID: string;
    conv: string;
    prot: string;
    method: string;
    path: string;
    proxy: string;
    query: string;
    remote: string;
    cost: string;
    talk: string;
    write: string;
    read: string;
    pack: string;
    unpack: string;
    retry: string;
}

export function RAL(serviceName: string, options?: {}): RAL.RalRunner;
export namespace RAL {
    function appendExtPath(extPath: string): void;
    function setConfigNormalizer(normalizers: ConfigNormalizer): void;
    function getConf(name: string): Config;
    function getRawConf(name: string): Config;
    function init(options?: {}): void;
    function reload(options?: {}): void;

    class RalRunner extends EventEmitter {
        constructor(serviceName: string, options?: {});
        doRequest(): void;
        getLogInfo(): LogInfo;
        throwError(err: any): void;
        callRetry(err: any): void;
    }

    class NormalizerManager {
        constructor()
        normalizers: string[];
        setConfigNormalizer(normalizers: string[]): void;
        needUpdate(config: any): boolean;
        apply(config: {}): {};
    }
}

export interface Config {
    loadRawConf(config?: Service): Service;
    load(confPath: string): {};
    normalizerManager: RAL.NormalizerManager;
    normalize(config?: Service): {};
    getContext(serviceID: string, options?: Service): Service;
    getConf(name: string): Service;
    clearConf(): void;
    getConfNames(): string[];
    getRawConf(): any;
    getUpdateNeededRawConf(): any;
    enableUpdate(interval: number, all: boolean, cb: (err: any, confs: any) => any): void;
    disableUpdate(): void;
    isAutoUpdateEnabled(): boolean;
}

export const Config: Config;

export abstract class RalModule {
    constructor();

    abstract getCategory(): string;

    abstract getName(): string;

    static clearCache(): void;

    static load(pathOrModule: string | RalModule): void;

    static modules: {
        [key: string]: RalModule
    };
}

export interface Server {
    idc?: string;
    host: string;
    port: string | number;
}

export type buildInConverter = 'form' | 'formData' | 'json' | 'protobuf' | 'querystring' | 'raw' | 'redis' | 'stream' | 'string';
export interface Service {
    method?: 'GET' | 'POST';
    server: Server[];
    hybird?: boolean;
    timeout?: number;
    retry?: number;
    unpack: buildInConverter;
    pack: buildInConverter;
    encoding?: 'utf-8' | 'GBK';
    balance: 'random' | 'roundrobin' | 'hashring';
    protocol: 'http' | 'https' | 'soap' | 'redis';
    headers?: {
        [key: string]: string | number
    };
    query?: any;
    data?: any;
    path?: string;
}

export type BalanceContextConstructor = new (serviceID: string, service: Service) => Balance.BalanceContextClass;

export abstract class Balance {
    constructor();

    abstract fetchServer(balanceContext: Balance.BalanceContextClass, conf: any, prevBackend: Server): Server;

    getCategory(): any;

    getContextClass(): BalanceContextConstructor;

    static BalanceContext: BalanceContextConstructor;
}

export namespace Balance {
    class BalanceContextClass {
        constructor(serviceID: string, service: Service)
        currentIDC: string;
        serviceID: string;
        reqIDCServers: string[];
        crossIDCServers: string[];
    }
}

export abstract class Converter extends RalModule {
    constructor();

    getCategory(): string;

    abstract pack(config: Service, data: any): Buffer;

    abstract unpack(config: Service, data: any): any;

    isStreamify: false;
}

export abstract class Protocol extends RalModule {
    constructor();

    beforeRequest(context: any): any;

    getCategory(): string;

    normalizeConfig(context: any): any;

    talk(config: any, callback: any): any;

    abstract _request(config: any, callback: (...param: any[]) => any): any;

    static beforeRequest(context: any): any;

    static normalizeConfig(context: any): any;
}

export interface LoggerFactory {
    (prefix: string): RalLogger;
    options: {
        format_wf: string;
        log_path: string;
        app: string;
        logInstance: RalLogger;
    };
}
export interface RalLogger {
    notice(...param: any[]): void;
    warning(...param: any[]): void;
    fatal(...param: any[]): void;
    trace(...param: any[]): void;
    debug(...param: any[]): void;
}

export const Logger: LoggerFactory;

export abstract class ConfigNormalizer extends RalModule {
    constructor();

    getCategory(): string;

    abstract normalizeConfig(config: any): Config;

    abstract needUpdate(config?: any): boolean;
}

export function Middleware(options?: Service): (req: Request, resp: Response, next: NextFunction) => void;

export function RALPromise<T>(name: string, options?: {}): Promise<T>;
export namespace RALPromise {
    import appendExtPath = RAL.appendExtPath;
    import setConfigNormalizer = RAL.setConfigNormalizer;
    import getConf = RAL.getConf;
    import getRawConf = RAL.getRawConf;
    import init = RAL.init;
    import reload = RAL.reload;
}
