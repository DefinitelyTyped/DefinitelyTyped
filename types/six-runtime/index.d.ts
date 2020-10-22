// Type definitions for six-runtime 0.1
// Project: https://github.com/493636333/six
// Definitions by: liyong <https://github.com/493636333>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare const six: Six;

interface Six {
    /**
     * process.env.NODE_ENV
     */
    readonly NODE_ENV: string;

    /**
     * NODE_ENV的缩短版
     *
     * production、prod => prod
     *
     * dev、develop、development => dev
     */
    readonly ENV: string;

    /**
     * Six的rootPath
     */
    readonly ROOT_PATH: string;

    /**
     * Six的plugin的map
     */
    readonly plugins: Six.PluginsMap;

    /**
     * 针对这次请求生效的数据缓存 set
     */
    set(key: string, value: any): void;

    /**
     * 针对这次请求生效的数据缓存 get
     */
    get(key: string): any;

    /**
     * DataProvider类，所有的data-provider必须继承这个类
     */
    DataProvider: Six.plugins.dataProvider.DataProvider;

    /**
     * 执行某个data-provider，并返回执行之后的值
     */
    dp(name: string): any;

    /**
     * 发送请求的工具方法，会将用户的cookie和traceId透传过去
     */
    http: Six.plugins.http;

    /**
     * 打日志方法
     */
    log: Six.plugins.log;

    /**
     * rpc调用工具方法，返回ThriftPool实例
     */
    rpc: Six.plugins.rpc;

    /**
     * 时间统计工具
     */
    time: Six.plugins.time.timmer;

    /**
     * 渲染函数
     */
    render: Six.plugins.view.render;
}

declare namespace Six {
    interface PluginsMap {
        sso: plugins.sso.ssoFactory;
        upm: plugins.upm.upmFactory;
        uac: plugins.uac.uacFactory;
        static: plugins.static.staticFactory;
    }

    type next = () => any;

    type middleware = (ctx: object, next: next) => any;

    namespace plugins {
        type whiteList = (ctx: object) => boolean;

        namespace sso {
            type ssoFactory = (conf: ssoConf) => any;

            interface ssoConf {
                whiteList: string|RegExp|string[]|whiteList;
                ssoConf: ssoClientConf;
                enableCache: boolean;
                hasLoginCacheMaxAge: number;
                adapter(user: object): object;
            }
            interface ssoClientConf {
                clientId: string;
                secret: string;
                env: string;
                token: token;
                protocol: string;
                errorHook(error: Error): void;
                callbackUrl: string;
            }

            interface token {
                name: string;
                path: string;
                httpOnly: boolean;
                expiredTime: number;
            }
        }

        namespace upm {
            type upmFactory = (conf: upmConf) => any;

            interface upmConf {
                whiteList: string|RegExp|string[]|whiteList;
                enableMock: boolean;
                domain: string;
                path: string;
                clientId: string;
                clientSecret: string;
                skipOffline: boolean;
                failHook(err: Error, ctx: object, next: next): any;
                getPath(ctx: object): string;
            }
        }

        namespace uac {
            type uacFactory = (conf: uacConf) => any;
            interface uacConf {
                whiteList: string|RegExp|string[]|whiteList;
                enableMock: boolean;
                client_id: string;
                client_secret: string;
                skipOffline: boolean;
                failHook(err: Error, ctx: object, next: next): any;
                getPath(ctx: object): string;
            }
        }

        namespace dataProvider {
            abstract class DataProvider {
                static deps: string[];
                static timeout: number;
                static retry: number;
                prepare(ctx: object, depsRes: object): any;
                abstract execute(ctx: object, args: any): any;
            }
        }

        interface http {
            proxy(options: object): middleware;
            get(url: any, options?: object): Promise<any>;
            post(url: any, options?: object): Promise<any>;
            put(url: any, options?: object): Promise<any>;
            patch(url: any, options?: object): Promise<any>;
            del(url: any, options?: object): Promise<any>;
            head(url: any, options?: object): Promise<any>;
        }

        interface log {
            debug(msg: string, ...restOfVar: any[]): void;
            info(msg: string, ...restOfVar: any[]): void;
            warn(msg: string, ...restOfVar: any[]): void;
            error(msg: string|Error, ...restOfVar: any[]): void;
        }

        type rpc = (config: object) => object;

        namespace static {
            type staticFactory = (conf: staticConf) => middleware;
            interface staticConf {
                rootPath: string;
                cacheConf: cacheConf;
            }

            interface cacheConf {
                defer: boolean;
                cache: boolean;
                maxAge: number;
                index: string;
                gzip: boolean;
                extensions: boolean|string[];
            }
        }

        namespace time {
            interface timmer {
                now(): any;
                start(key: string): void;
                end(key: string): number;
                serialize(between?: string, end?: string, filter?: filter): string;
            }

            type filter = (key: string) => boolean;
        }

        namespace view {
            type render = (name: string, runtimeConf?: runtimeConf|null, data?: object) => Promise<any>;

            interface runtimeConf {
                codeKey: string;
                msgKey: string;
                dataKey: string;
            }
        }
    }
}
