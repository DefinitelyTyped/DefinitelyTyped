import * as fs from 'fs';
import * as tunnel from 'tunnel';
import * as http from 'http';
import * as https from 'https';

const poolSize = 10;
const proxyHost = 'host';
const proxyPort = 80;
const localAddress = '1.2.3.4';

(() => {
    const tunnelingAgent = tunnel.httpOverHttp({
        maxSockets: poolSize, // Defaults to http.Agent.defaultMaxSockets

        proxy: { // Proxy settings
            host: proxyHost, // Defaults to 'localhost'
            port: proxyPort, // Defaults to 80
            localAddress, // Local interface if necessary

            // Basic authorization for proxy server if necessary
            proxyAuth: 'user:password',

            // Header fields for proxy server if necessary
            headers: {
                'User-Agent': 'Node'
            }
        }
    });

    const req = http.request({
        host: 'example.com',
        port: 80,
        agent: tunnelingAgent
    });
})();

(() => {
    const tunnelingAgent = tunnel.httpsOverHttp({
        maxSockets: poolSize, // Defaults to http.Agent.defaultMaxSockets

        // CA for origin server if necessary
        ca: [ fs.readFileSync('origin-server-ca.pem')],

        // Client certification for origin server if necessary
        key: fs.readFileSync('origin-server-key.pem'),
        cert: fs.readFileSync('origin-server-cert.pem'),

        proxy: { // Proxy settings
            host: proxyHost, // Defaults to 'localhost'
            port: proxyPort, // Defaults to 80
            localAddress, // Local interface if necessary

            // Basic authorization for proxy server if necessary
            proxyAuth: 'user:password',

            // Header fields for proxy server if necessary
            headers: {
                'User-Agent': 'Node'
            },
        }
    });

    const req = https.request({
        host: 'example.com',
        port: 443,
        agent: tunnelingAgent
    });
})();

(() => {
    const tunnelingAgent = tunnel.httpOverHttps({
        maxSockets: poolSize, // Defaults to http.Agent.defaultMaxSockets

        proxy: { // Proxy settings
            host: proxyHost, // Defaults to 'localhost'
            port: proxyPort, // Defaults to 443
            localAddress, // Local interface if necessary

            // Basic authorization for proxy server if necessary
            proxyAuth: 'user:password',

            // Header fields for proxy server if necessary
            headers: {
                'User-Agent': 'Node'
            },

            // CA for proxy server if necessary
            ca: [ fs.readFileSync('origin-server-ca.pem')],

            // Server name for verification if necessary
            servername: 'example.com',

            // Client certification for proxy server if necessary
            key: fs.readFileSync('origin-server-key.pem'),
            cert: fs.readFileSync('origin-server-cert.pem'),
        }
    });

    const req = http.request({
        host: 'example.com',
        port: 80,
        agent: tunnelingAgent
    });
})();

(() => {
    const tunnelingAgent = tunnel.httpsOverHttps({
        maxSockets: poolSize, // Defaults to http.Agent.defaultMaxSockets

        // CA for origin server if necessary
        ca: [ fs.readFileSync('origin-server-ca.pem')],

        // Client certification for origin server if necessary
        key: fs.readFileSync('origin-server-key.pem'),
        cert: fs.readFileSync('origin-server-cert.pem'),

        proxy: { // Proxy settings
            host: proxyHost, // Defaults to 'localhost'
            port: proxyPort, // Defaults to 443
            localAddress, // Local interface if necessary

            // Basic authorization for proxy server if necessary
            proxyAuth: 'user:password',

            // Header fields for proxy server if necessary
            headers: {
                'User-Agent': 'Node'
            },

            // CA for proxy server if necessary
            ca: [ fs.readFileSync('origin-server-ca.pem')],

            // Server name for verification if necessary
            servername: 'example.com',

            // Client certification for proxy server if necessary
            key: fs.readFileSync('origin-server-key.pem'),
            cert: fs.readFileSync('origin-server-cert.pem'),
        }
    });

    const req = https.request({
        host: 'example.com',
        port: 443,
        agent: tunnelingAgent
    });
})();
