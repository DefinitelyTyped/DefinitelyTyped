import * as path from 'path';

import * as AnyProxy from 'anyproxy';

// Code took from http://anyproxy.io/en/#sample

// Initialize certifiates
if (!AnyProxy.utils.certMgr.ifRootCAFileExists()) {
    AnyProxy.utils.certMgr.generateRootCA((error, keyPath) => {
        // let users to trust this CA before using proxy
        if (!error) {
            const certDir = path.dirname(keyPath);
            console.log('The cert is generated at', certDir);
        } else {
            console.error('error when generating rootCA', error);
        }
    });
}

// Initialize server
const proxyServer = new AnyProxy.ProxyServer({
    port: 8001,
    rule: {
        summary: 'My Custom Rule',

        beforeSendResponse(requestDetail, responseDetail) {
            if (requestDetail.url === 'http://httpbin.org/user-agent') {
                const newResponse = responseDetail.response;
                newResponse.body += '- AnyProxy Hacked!';

                return new Promise<AnyProxy.BeforeSendResponseResult>(resolve => {
                    setTimeout(() => {
                        // delay
                        resolve({ response: newResponse });
                    }, 5000);
                });
            }
        },
    },
    webInterface: {
        enable: true,
        webPort: 8002,
    },
    throttle: 10000,
    forceProxyHttps: false,
    wsIntercept: false,
    silent: false,
});

proxyServer.on('ready', () => {
    console.log('Proxy Server is ready');
});

proxyServer.on('error', e => {
    console.log('Proxy Server error:', e);
});

// Start server
proxyServer.start();

// When finished
proxyServer.close();

AnyProxy.utils.systemProxyMgr.enableGlobalProxy('127.0.0.1', 8080);
AnyProxy.utils.systemProxyMgr.enableGlobalProxy('127.0.0.1', 8080, 'http');
AnyProxy.utils.systemProxyMgr.enableGlobalProxy('127.0.0.1', 8080, 'https');

AnyProxy.utils.systemProxyMgr.disableGlobalProxy();
AnyProxy.utils.systemProxyMgr.disableGlobalProxy('http');
AnyProxy.utils.systemProxyMgr.disableGlobalProxy('https');
