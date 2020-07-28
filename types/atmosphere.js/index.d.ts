// Type definitions for Atmosphere v2.1.5
// Project: https://github.com/Atmosphere/atmosphere-javascript
// Definitions by: Kai Toedter <https://github.com/toedter> 
//                 Fedor Kirpichev <https://github.com/Mory1879>
//                 Jorge Beltran <https://github.com/Scipion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Use this typings in future instead of deprecated 'atmosphere'.

declare namespace Atmosphere {
    interface Atmosphere {
        /**
         * The atmosphere API is a little bit special here: the first parameter can either be
         * a URL string or a Request object. If it is a URL string, then the additional parameters are expected.
         */
        subscribe?: (requestOrUrl:any, callback?:Function, request?:Request) => Request;
        unsubscribe?: () => void;

        AtmosphereRequest?: AtmosphereRequest;
    }

    // needed to fit JavaScript "new atmosphere.AtmosphereRequest()"
    // and compile with --noImplicitAny
    interface AtmosphereRequest {
        new(): Request;
    }

    interface Request {
        timeout?: number;
        method?: string;
        headers?: any;
        contentType?: string;
        callback?: Function;
        url?: string;
        data?: string;
        suspend?: boolean;
        maxRequest?: number;
        reconnect?: boolean;
        maxStreamingLength?: number;
        lastIndex?: number;
        logLevel?: string;
        requestCount?: number;
        fallbackMethod?: string;
        fallbackTransport?: string;
        transport?: string;
        webSocketImpl?: any;
        webSocketBinaryType?: any;
        dispatchUrl?: string;
        webSocketPathDelimiter?: string;
        enableXDR?: boolean;
        rewriteURL?: boolean;
        attachHeadersAsQueryString?: boolean;
        executeCallbackBeforeReconnect?: boolean;
        readyState?: number;
        lastTimestamp?: number;
        withCredentials?: boolean;
        trackMessageLength?: boolean;
        messageDelimiter?: string;
        connectTimeout?: number;
        reconnectInterval?: number;
        dropHeaders?: boolean;
        uuid?: string;
        async?: boolean;
        shared?: boolean;
        readResponsesHeaders?: boolean;
        maxReconnectOnClose?: number;
        enableProtocol?: boolean;
        pollingInterval?: number;
        webSocketUrl?: string;
        disableDisconnect?: boolean;

        onError?: (response?:Response) => void;
        onClose?:  (response?:Response)  => void;
        onOpen?:  (response?:Response)  => void;
        onMessage?:  (response:Response)  => void;
        onReopen?:  (request?:Request, response?:Response) => void;
        onReconnect?:  (request?:Request, response?:Response)  => void;
        onMessagePublished?:  (response?:Response)  => void;
        onTransportFailure?:  (reason?:string, response?:Response)  => void;
        onLocalMessage?:  (request?:Request) => void;
        onFailureToReconnect?:  (request?:Request, response?:Response) => void;
        onClientTimeout?: (request?:Request) => void;

        subscribe?: (options:Request) => void;
        execute?: () => void;
        close?: () => void;
        disconnect?: () => void;
        getUrl?: () => string;
        push?: (message:string, dispatchUrl?:string) => void;
        getUUID?: () => void;
        pushLocal?: (message:string) => void;
    }

    interface Response {
        status?: number;
        reasonPhrase?: string;
        responseBody?: string;
        messages?: string[];
        headers?: string[];
        state?: string;
        transport?: string;
        error?: string;
        request?: Request;
        partialMessage?: string;
        errorHandled?: boolean;
        closedByClientTimeout?: boolean;
    }
}

declare var atmosphere:Atmosphere.Atmosphere;
declare module 'atmosphere.js' {
    export = atmosphere;
}
