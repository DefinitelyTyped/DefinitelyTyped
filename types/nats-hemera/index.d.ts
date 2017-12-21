// Type definitions for hemera 1.0
// Project: https://github.com/hemerajs/hemera
// Definitions by: Vladimir Djukic <https://github.com/vforv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = Hemera;
export as namespace Hemera;

declare namespace Hemera {
    type LogLevel =
        'fatal' |
        'error' |
        'warn' |
        'info' |
        'debug' |
        'trace' |
        'silent';

    interface ErrioConfig {
        recursive?: boolean;
        inherited?: boolean;
        stack?: boolean;
        private?: boolean;
        exclude?: any;
        include?: any;
    }

    interface BloomrunConfig {
        indexing: 'insertion' | 'depth';
        lookupBeforeAdd: boolean;
    }

    interface Config {
        timeout?: number;
        pluginTimeout?: number;
        tag?: string;
        prettyLog?: boolean;
        name?: string;
        crashOnFatal?: boolean;
        logLevel?: LogLevel;
        childLogger?: boolean;
        maxRecursion?: number;
        logger?: any;
        errio?: ErrioConfig;
        bloomrun?: BloomrunConfig;
        load?: LoadConfig;
        circuitBreaker?: CircuitBreakerConfig;
    }

    interface CircuitBreakerConfig {
        enabled?: boolean;
        minSuccesses?: number;
        halfOpenTime?: number;
        resetIntervalTime?: number;
        maxFailures?: number;
    }

    interface LoadConfig {
        checkPolicy?: boolean;
        shouldCrash?: boolean;
        process?: LoadProcessConfig;
        policy?: LoadPolicyConfig;
    }

    interface LoadPolicyConfig {
        maxHeapUsedBytes?: number;
        maxRssBytes?: number;
        maxEventLoopDelay?: number;
    }

    interface LoadProcessConfig {
        sampleInterval?: number;
    }

    interface Pattern {
        topic: string;
        [key: string]: any;
    }

    type ClientResult = any;

    type ActHandler = (this: Hemera, error: Error, response: ClientResult) => void;

    interface PluginDefinitionAttributes {
        name: string;
        description: string;
        version: string;
    }

    interface PluginDefinition {
        register: any;
        attributes: PluginDefinitionAttributes;
        options: any;
        parentPluginName: string;
    }

    interface AddMeta {
        schema: any;
        pattern: Pattern;
        action: any;
        plugin: PluginDefinition;
        use(handler: AddMetaMiddleware): AddMeta;
        end(cb: () => void): void;
    }

    type AddMetaMiddleware = (request: ServerRequest, response: ServerResponse, next: () => void) => void;

    interface ServerRequest {
        payload: any;
        error: any;
        locals: any;
    }

    interface ServerResponse {
        payload: any;
        error: any;
    }

    type AddHandler = (this: Hemera, request: Pattern, reply?: any) => void;

    type HemeraEvents =
        'error' |
        'clientPreRequest' |
        'clientPostRequest' |
        'serverPreHandler' |
        'serverPreRequest' |
        'serverPreResponse';

    type ExtensionType =
        'onClientPreRequest' |
        'onClientPostRequest' |
        'onServerPreHandler' |
        'onServerPreRequest' |
        'onServerPreResponse';
    type ExtensionHandler = (ctx: Hemera, request: any, response: any, next?: ExtensionNextHandler) => void;
    type ExtensionNextHandler = (error: Error) => void;

    interface CodecPipeline {
        add(step: any): CodecPipeline;
        reset(step: any): CodecPipeline;
        unshift(step: any): CodecPipeline;
        run(msg: any, cb: any): any;
    }

    interface Plugins {
        [name: string]: PluginDefinition;
    }
    interface Request {
        id: string;
        type: RequestType;
    }

    type RequestType =
        'pubsub' |
        'request';

    interface Trace {
        traceId: string;
        parentSpanId: string;
        spanId: string;
        timestamp: number;
        service: string;
        method: string;
        duration: number;
    }
}

declare class Hemera {
    constructor(transport: object, config: Hemera.Config);

    ready(callback: () => void): void;
    act(pattern: string | Hemera.Pattern, handler?: Hemera.ActHandler): Promise<any>;
    add(pattern: string | Hemera.Pattern, handler: Hemera.AddHandler): Hemera.AddMeta;
    use(params: Hemera.PluginDefinition, options?: any): void;
    createError(name: string): any;
    decorate(prop: string, value: any): void;
    remove(topic: string, maxMessages: number): boolean;
    list(Pattern: any, options: any): any;
    close(callback?: () => void): void;
    fatal(): void;
    expose(key: string, object: any): void;
    ext(type: Hemera.ExtensionType, handler: Hemera.ExtensionHandler): void;
    setConfig(key: string, value: any): void;
    setOption(key: string, value: any): void;
    on(event: Hemera.HemeraEvents, handler: () => void): any;
    removeAll(): any;

    encoder: Hemera.CodecPipeline;
    decoder: Hemera.CodecPipeline;

    plugins: Hemera.Plugins;
    router: any;
    load: any;
    exposition: any;
    errors: any;
    config: any;
    topics: any;
    transport: any;
    joi: any;

    context$: any;
    meta$: any;
    delegate$: any;
    auth$: any;
    plugin$: Hemera.PluginDefinition;
    trace$: Hemera.Trace;
    request$: Hemera.Request;
}
