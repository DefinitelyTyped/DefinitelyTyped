import { IncomingMessage } from 'http';
import { AuthTokenExpiredError } from 'sc-errors';

import AGServerSocket = require('./serversocket');

declare const HANDSHAKE_WS = 'handshakeWS';
declare const HANDSHAKE_SC = 'handshakeSC';
declare const MESSAGE = 'message';
declare const TRANSMIT = 'transmit';
declare const INVOKE = 'invoke';
declare const SUBSCRIBE = 'subscribe';
declare const PUBLISH_IN = 'publishIn';
declare const PUBLISH_OUT = 'publishOut';
declare const AUTHENTICATE = 'authenticate';

interface AGActionBase {
    readonly HANDSHAKE_WS: typeof HANDSHAKE_WS;
    readonly HANDSHAKE_SC: typeof HANDSHAKE_SC;
    readonly MESSAGE: typeof MESSAGE;
    readonly TRANSMIT: typeof TRANSMIT;
    readonly INVOKE: typeof INVOKE;
    readonly SUBSCRIBE: typeof SUBSCRIBE;
    readonly PUBLISH_IN: typeof PUBLISH_IN;
    readonly PUBLISH_OUT: typeof PUBLISH_OUT;
    readonly AUTHENTICATE: typeof AUTHENTICATE;

    outcome: null | 'allowed' | 'blocked';
    promise: Promise<any>;

    allow(packet?: any): void;
    block(error?: Error): void;
}

declare class AGAction {
    type:
        | typeof HANDSHAKE_WS
        | typeof HANDSHAKE_SC
        | typeof MESSAGE
        | typeof TRANSMIT
        | typeof INVOKE
        | typeof SUBSCRIBE
        | typeof PUBLISH_IN
        | typeof PUBLISH_OUT
        | typeof AUTHENTICATE;
    request?: IncomingMessage;
    socket?: AGServerSocket;
    authTokenExpiredError?: AuthTokenExpiredError;
    receiver?: string;
    procedure?: string;
    channel?: string;
    authToken?: AGServerSocket.AuthToken;
    signedAuthToken?: string;
    data?: any;

    readonly HANDSHAKE_WS: typeof HANDSHAKE_WS;
    readonly HANDSHAKE_SC: typeof HANDSHAKE_SC;
    readonly MESSAGE: typeof MESSAGE;
    readonly TRANSMIT: typeof TRANSMIT;
    readonly INVOKE: typeof INVOKE;
    readonly SUBSCRIBE: typeof SUBSCRIBE;
    readonly PUBLISH_IN: typeof PUBLISH_IN;
    readonly PUBLISH_OUT: typeof PUBLISH_OUT;
    readonly AUTHENTICATE: typeof AUTHENTICATE;

    outcome: null | 'allowed' | 'blocked';
    promise: Promise<any>;

    allow(packet: any): void;
    block(error: Error): void;
}

export = AGAction;

declare namespace AGAction {
    interface AGActionHandshakeWS extends AGActionBase {
        type: typeof HANDSHAKE_WS;
    }

    interface AGActionHandshakeSC extends AGActionBase {
        type: typeof HANDSHAKE_SC;
        request: IncomingMessage;
        socket: AGServerSocket;
    }

    interface AGActionMessage extends AGActionBase {
        type: typeof MESSAGE;
        socket: AGServerSocket;
        data: any;
    }

    interface AGActionTransmit extends AGActionBase {
        type: typeof TRANSMIT;
        socket: AGServerSocket;
        authTokenExpiredError?: AuthTokenExpiredError;
        receiver: string;
        data?: any;
    }

    interface AGActionInvoke extends AGActionBase {
        type: typeof INVOKE;
        socket: AGServerSocket;
        authTokenExpiredError?: AuthTokenExpiredError;
        procedure: string;
        data?: any;
    }

    interface AGActionSubscribe extends AGActionBase {
        type: typeof SUBSCRIBE;
        socket: AGServerSocket;
        authTokenExpiredError?: AuthTokenExpiredError;
        channel?: string;
        data?: any;
    }

    interface AGActionPublishIn extends AGActionBase {
        type: typeof PUBLISH_IN;
        socket: AGServerSocket;
        authTokenExpiredError?: AuthTokenExpiredError;
        channel?: string;
        data?: any;
    }

    interface AGActionPublishOut extends AGActionBase {
        type: typeof PUBLISH_OUT;
        socket: AGServerSocket;
        channel?: string;
        data?: any;
    }

    interface AGActionAuthenticate extends AGActionBase {
        type: typeof AUTHENTICATE;
        socket: AGServerSocket;
        authToken?: AGServerSocket.AuthToken;
        signedAuthToken?: string;
    }
}
