// Type definitions for @webpack-blocks/dev-server 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/dev-server
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Block } from 'webpack-blocks';

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
        index?: string;
        rewrites?: RewritesObject;
        verbose?: boolean;
        htmlAcceptHeaders?: string[];
        disableDotRule?: boolean;
    }

    interface TransportMode {
        client?: string | PathFunction;
        server?: string | PathFunction;
    }

    interface WatchOptions {
        aggregateTimeout?: number;
        ignored?: RegExp;
        poll?: boolean | number;
    }

    interface Options {
        after?: StartMiddlewareFunction;
        allowedHosts?: string[];
        before?: StartMiddlewareFunction;
        bonjour?: boolean;
        clientLogLevel?: 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning';
        compress?: boolean;
        contentBase?: boolean | string | string [] | number;
        disableHostCheck?: boolean;
        filename?: string;
        headers?: object;
        historyApiFallback?: boolean | HistoryOptions;
        host?: string;
        hot?: boolean;
        hotOnly?: boolean;
        http2?: boolean;
        https?: boolean | object;
        index?: string;
        injectClient?: boolean | InjectClientFunction;
        injectHot?: boolean | InjectClientFunction;
        inline?: boolean;
        lazy?: boolean;
        liveReload?: boolean;
        mimeTypes?: { string: string[] };
        noInfo?: boolean;
        open?: boolean | string;
        openPage?: string;
        overlay?: boolean | { errors?: boolean, warnings?: boolean };
        pfx?: string;
        pfxPassphrase?: string;
        port?: number;
        proxy?: object | ProxyType[];
        public?: string;
        publicPath?: string;
        quiet?: boolean;
        serveIndex?: boolean;
        setup?: InjectClientFunction;
        socket?: string;
        socketHost?: string;
        socketPath?: string;
        socketPort?: number | string;
        staticOptions?: SetHeadersFunction;
        stats?: 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose' | object;
        transportMode?: 'sockjs' | 'ws' | TransportMode;
        useLocalIp?: boolean;
        watchContentBase?: boolean;
        watchOptions?: WatchOptions;
        writeToDisk?: boolean | WriteToDiskFunction;
    }
}

declare function devServer(options?: devServer.Options, entry?: string | string[]): Block;

export = devServer;
