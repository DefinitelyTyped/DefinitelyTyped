import * as globalTunnel from 'global-tunnel-ng';

globalTunnel.initialize({
    host: '10.0.0.10',
    port: 8080,
    proxyAuth: 'userId:password', // optional authentication
    sockets: 50 // optional pool size for each http and https
});

globalTunnel.end();

globalTunnel.initialize({
    connect: 'neither',
    host: '10.0.0.10',
    port: 3128
});

globalTunnel.initialize({
    connect: 'neither',
    protocol: 'https:',
    host: '10.0.0.10',
    port: 3129
});

globalTunnel.initialize({
    connect: 'both',
    host: '10.0.0.10',
    port: 3130
});

globalTunnel.initialize({
    connect: 'both',
    protocol: 'https:',
    host: '10.0.0.10',
    port: 3130,
    proxyHttpsOptions: {
        // use this config for app -> proxy
    },
    originHttpsOptions: {
        // use this config for proxy -> origin
    }
});

globalTunnel.initialize();

const proxyUrl: string | null = globalTunnel.proxyUrl;
const proxyConfig: globalTunnel.Options | null  = globalTunnel.proxyConfig;
const isProxying: boolean  = globalTunnel.isProxying;
