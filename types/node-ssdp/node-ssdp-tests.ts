import { Client, Server } from 'node-ssdp';

// Taken from https://github.com/diversario/node-ssdp#usage---client

const client = new Client({
    interfaces: [],
    customLogger: format => {},
    explicitSocketBind: true,
    reuseAddr: true,
    ssdpPort: 0,
    description: '',
    headers: {
        key: 'value'
    },
    ssdpIp: '',
    ssdpSig: '',
    ssdpTtl: 0
});

client.on('response', (headers, statusCode, rinfo) => {
    console.log('Got a response to an m-search.');
});

// search for a service type
client.search('urn:schemas-upnp-org:service:ContentDirectory:1');

// Or get a list of all services on the network

client.search('ssdp:all');

const server = new Server({
    interfaces: [],
    customLogger: format => {},
    explicitSocketBind: true,
    reuseAddr: true,
    ssdpPort: 0,
    location: {
        protocol: 'http://',
        path: '',
        port: 80
    },
    suppressRootDeviceAdvertisements: true,
    adInterval: 0,
    allowWildcards: false,
    description: '',
    headers: {
        key: 'value'
    },
    ssdpIp: '',
    ssdpSig: '',
    ssdpTtl: 0,
    ttl: 0,
    udn: ''
});

// Taken from https://github.com/diversario/node-ssdp#usage---server

server.addUSN('upnp:rootdevice');
server.addUSN('urn:schemas-upnp-org:device:MediaServer:1');
server.addUSN('urn:schemas-upnp-org:service:ContentDirectory:1');
server.addUSN('urn:schemas-upnp-org:service:ConnectionManager:1');

server.on('advertise-alive', (headers) => {
    // Expire old devices from your cache.
    // Register advertising device somewhere (as designated in http headers heads)
});

server.on('advertise-bye', (headers) => {
    // Remove specified device from cache.
});

// start the server
server.start();
