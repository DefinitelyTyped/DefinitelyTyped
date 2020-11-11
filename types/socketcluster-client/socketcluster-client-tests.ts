// Adapted from README

import { create, AGClientSocket } from 'socketcluster-client';
import AuthEngine = require('socketcluster-client/lib/auth');

const socket = create({
    hostname: 'localhost',
    port: 8000,
});

socket.transmit('foo', 123);

(async () => {
    // $ExpectType any
    await socket.invoke('myProc', 123);
})();

(async () => {
    // Subscribe to a channel.
    const myChannel = socket.subscribe('myChannel');

    await myChannel.listener('subscribe').once();

    // $ExpectType ChannelState
    myChannel.state;
})();

(async () => {
    const myChannel = socket.channel('myChannel');

    myChannel.subscribe();
    await myChannel.listener('subscribe').once();

    // $ExpectType ChannelState
    myChannel.state;

    myChannel.transmitPublish('This is a message');
})();

socket.transmitPublish('myChannel', 'This is a message');

(async () => {
    const myChannel = socket.channel('myChannel');

    try {
        await myChannel.invokePublish('This is a message');
    } catch (error) {}

    try {
        const response = await socket.invokePublish('myChannel', 'This is a message');

        // $ExpectType string
        response.channel;

        // $ExpectType any
        response.data;
    } catch (error) {}
})();

(async () => {
    const myChannel = socket.channel('myChannel');

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const data of myChannel) {
        // $ExpectType any
        data;
    }
})();

(async () => {
    const secureOptions = {
        hostname: 'securedomain.com',
        secure: true,
        port: 443,
        rejectUnauthorized: false, // Only necessary during debug if using a self-signed certificate
    };

    const secureSocket = create(secureOptions);
    const authStatus = await secureSocket.authenticate('abc');

    // $ExpectType Error
    authStatus.authError;

    // $ExpectType AuthStates
    authStatus.isAuthenticated;
})();

(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const event of socket.listener('subscribeStateChange')) {
        // $ExpectType string
        event.channel;

        // $ExpectType ChannelState
        event.oldChannelState;

        // $ExpectType ChannelState
        event.newChannelState;

        // $ExpectType SubscribeOptions
        event.subscriptionOptions;
    }
})();

const authToken = socket.authToken;
if (authToken) {
    // $ExpectType any
    authToken.iat;
}

const authEngine = new AuthEngine();

const mostOptions: AGClientSocket.ClientOptions = {
    path: '/socketcluster/',
    port: 8000,
    hostname: '127.0.0.1',
    autoConnect: true,
    secure: false,
    connectTimeout: 10000,
    ackTimeout: 10000,
    channelPrefix: null,
    disconnectOnUnload: true,
    autoReconnectOptions: {
        initialDelay: 10000,
        randomness: 10000,
        multiplier: 1.5,
        maxDelay: 60000,
    },
    authEngine,
    codecEngine: null,
    subscriptionRetryOptions: {},
    query: {
        yourparam: 'hello',
    },
};

create(mostOptions);

const oldVersionSocket = create({
    protocolVersion: 1,
    path: '/socketcluster/',
});

// $ExpectType ProtocolVersions
oldVersionSocket.protocolVersion;

export class MyAuthEngine implements AuthEngine.AGAuthEngine {
    saveToken(
        _name: string,
        token: AuthEngine.AuthToken | AuthEngine.SignedAuthToken,
        _options?: { [key: string]: any },
    ): Promise<AuthEngine.AuthToken | AuthEngine.SignedAuthToken> {
        return Promise.resolve(token);
    }

    removeToken(_name: string): Promise<AuthEngine.AuthToken | AuthEngine.SignedAuthToken | null> {
        return Promise.resolve(null);
    }

    loadToken(_name: string): Promise<AuthEngine.AuthToken | AuthEngine.SignedAuthToken | null> {
        return Promise.resolve(null);
    }
}
