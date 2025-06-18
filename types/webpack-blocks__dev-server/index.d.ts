import { Block } from "webpack-blocks";

declare namespace devServer {
    type InjectClientFunction = (compilerConfig: any) => boolean;
    type PathFunction = () => string;
    type ProxyFunction = (request: any, response: any, proxy: any) => null | undefined | false | string;
    type ProxyType = object | ProxyFunction;
    type RewritesToFunction = (context: ContextObject) => string;
    type SetHeadersFunction = (res: object, path: string, stat: object) => void;
    type StartMiddlewareFunction = (app: any, server: any) => void;
    type WriteToDiskFunction = (filePath: string) => boolean;

    interface ContextObject {
        parsedUrl: any;
        match: any;
        request: any;
    }

    interface RewritesObject {
        from: RegExp;
        to: string | RewritesToFunction;
    }

    interface HistoryOptions {
        index?: string | undefined;
        rewrites?: RewritesObject | undefined;
        verbose?: boolean | undefined;
        htmlAcceptHeaders?: string[] | undefined;
        disableDotRule?: boolean | undefined;
    }

    interface TransportMode {
        client?: string | PathFunction | undefined;
        server?: string | PathFunction | undefined;
    }

    interface WatchOptions {
        aggregateTimeout?: number | undefined;
        ignored?: RegExp | undefined;
        poll?: boolean | number | undefined;
    }

    interface Options {
        after?: StartMiddlewareFunction | undefined;
        allowedHosts?: string[] | undefined;
        before?: StartMiddlewareFunction | undefined;
        bonjour?: boolean | undefined;
        clientLogLevel?: "silent" | "trace" | "debug" | "info" | "warn" | "error" | "none" | "warning" | undefined;
        compress?: boolean | undefined;
        contentBase?: boolean | string | string[] | number | undefined;
        disableHostCheck?: boolean | undefined;
        filename?: string | undefined;
        headers?: object | undefined;
        historyApiFallback?: boolean | HistoryOptions | undefined;
        host?: string | undefined;
        hot?: boolean | undefined;
        hotOnly?: boolean | undefined;
        http2?: boolean | undefined;
        https?: boolean | object | undefined;
        index?: string | undefined;
        injectClient?: boolean | InjectClientFunction | undefined;
        injectHot?: boolean | InjectClientFunction | undefined;
        inline?: boolean | undefined;
        lazy?: boolean | undefined;
        liveReload?: boolean | undefined;
        mimeTypes?: { string: string[] } | undefined;
        noInfo?: boolean | undefined;
        open?: boolean | string | undefined;
        openPage?: string | undefined;
        overlay?: boolean | { errors?: boolean | undefined; warnings?: boolean | undefined } | undefined;
        pfx?: string | undefined;
        pfxPassphrase?: string | undefined;
        port?: number | undefined;
        proxy?: object | ProxyType[] | undefined;
        public?: string | undefined;
        publicPath?: string | undefined;
        quiet?: boolean | undefined;
        serveIndex?: boolean | undefined;
        setup?: InjectClientFunction | undefined;
        socket?: string | undefined;
        socketHost?: string | undefined;
        socketPath?: string | undefined;
        socketPort?: number | string | undefined;
        staticOptions?: SetHeadersFunction | undefined;
        stats?: "none" | "errors-only" | "minimal" | "normal" | "verbose" | object | undefined;
        transportMode?: "sockjs" | "ws" | TransportMode | undefined;
        useLocalIp?: boolean | undefined;
        watchContentBase?: boolean | undefined;
        watchOptions?: WatchOptions | undefined;
        writeToDisk?: boolean | WriteToDiskFunction | undefined;
    }
}

declare function devServer(options?: devServer.Options, entry?: string | string[]): Block;

export = devServer;
