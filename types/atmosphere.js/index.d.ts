// Use this typings in future instead of deprecated 'atmosphere'.

declare namespace Atmosphere {
    interface Atmosphere {
        /**
         * The atmosphere API is a little bit special here: the first parameter can either be
         * a URL string or a Request object. If it is a URL string, then the additional parameters are expected.
         */
        subscribe?: ((requestOrUrl: any, callback?: Function, request?: Request) => Request) | undefined;
        unsubscribe?: (() => void) | undefined;

        AtmosphereRequest?: AtmosphereRequest | undefined;
    }

    // needed to fit JavaScript "new atmosphere.AtmosphereRequest()"
    // and compile with --noImplicitAny
    interface AtmosphereRequest {
        new(): Request;
    }

    interface Request {
        timeout?: number | undefined;
        method?: string | undefined;
        headers?: any;
        contentType?: string | undefined;
        callback?: Function | undefined;
        url?: string | undefined;
        data?: string | undefined;
        suspend?: boolean | undefined;
        maxRequest?: number | undefined;
        reconnect?: boolean | undefined;
        maxStreamingLength?: number | undefined;
        lastIndex?: number | undefined;
        logLevel?: string | undefined;
        requestCount?: number | undefined;
        fallbackMethod?: string | undefined;
        fallbackTransport?: string | undefined;
        transport?: string | undefined;
        webSocketImpl?: any;
        webSocketBinaryType?: any;
        dispatchUrl?: string | undefined;
        webSocketPathDelimiter?: string | undefined;
        enableXDR?: boolean | undefined;
        rewriteURL?: boolean | undefined;
        attachHeadersAsQueryString?: boolean | undefined;
        executeCallbackBeforeReconnect?: boolean | undefined;
        readyState?: number | undefined;
        lastTimestamp?: number | undefined;
        withCredentials?: boolean | undefined;
        trackMessageLength?: boolean | undefined;
        messageDelimiter?: string | undefined;
        connectTimeout?: number | undefined;
        reconnectInterval?: number | undefined;
        dropHeaders?: boolean | undefined;
        uuid?: string | undefined;
        async?: boolean | undefined;
        shared?: boolean | undefined;
        readResponsesHeaders?: boolean | undefined;
        maxReconnectOnClose?: number | undefined;
        enableProtocol?: boolean | undefined;
        pollingInterval?: number | undefined;
        webSocketUrl?: string | undefined;
        disableDisconnect?: boolean | undefined;

        onError?: ((response?: Response) => void) | undefined;
        onClose?: ((response?: Response) => void) | undefined;
        onOpen?: ((response?: Response) => void) | undefined;
        onMessage?: ((response: Response) => void) | undefined;
        onReopen?: ((request?: Request, response?: Response) => void) | undefined;
        onReconnect?: ((request?: Request, response?: Response) => void) | undefined;
        onMessagePublished?: ((response?: Response) => void) | undefined;
        onTransportFailure?: ((reason?: string, response?: Response) => void) | undefined;
        onLocalMessage?: ((request?: Request) => void) | undefined;
        onFailureToReconnect?: ((request?: Request, response?: Response) => void) | undefined;
        onClientTimeout?: ((request?: Request) => void) | undefined;

        subscribe?: ((options: Request) => void) | undefined;
        execute?: (() => void) | undefined;
        close?: (() => void) | undefined;
        disconnect?: (() => void) | undefined;
        getUrl?: (() => string) | undefined;
        push?: ((message: string, dispatchUrl?: string) => void) | undefined;
        getUUID?: (() => void) | undefined;
        pushLocal?: ((message: string) => void) | undefined;
    }

    interface Response {
        status?: number | undefined;
        reasonPhrase?: string | undefined;
        responseBody?: string | undefined;
        messages?: string[] | undefined;
        headers?: string[] | undefined;
        state?: string | undefined;
        transport?: string | undefined;
        error?: string | undefined;
        request?: Request | undefined;
        partialMessage?: string | undefined;
        errorHandled?: boolean | undefined;
        closedByClientTimeout?: boolean | undefined;
    }
}

declare var atmosphere: Atmosphere.Atmosphere;
declare module "atmosphere.js" {
    export = atmosphere;
}
