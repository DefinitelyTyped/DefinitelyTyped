import { ssdp, device, utils, createClient } from 'nat-upnp';

const ssdpClient = ssdp.create();
const promiseEventEmitter = ssdpClient.search('urn:schemas-upnp-org:device:InternetGatewayDevice:1');
promiseEventEmitter.on('device', res => {
    console.log('onDevice', res);
});
setTimeout(() => ssdpClient.close(), 100);

utils.getNamespace(
    {
        '@': {
            'xmlns:u': 'urn:schemas-upnp-org:service:WANIPConnection:1',
        },
    },
    'urn:schemas-upnp-org:service:WANIPConnection:1',
);

const Device = device.create('');
console.log(Device);
const NATClient = createClient();
NATClient.findGateway((err, gatewayDevice) => {
    if (err || gatewayDevice == null) {
        console.error(
            'NATClient.findGateway',
            err || new Error('Invalid callback data, neither error, nor response provided'),
        );
        return;
    }
    gatewayDevice.getService(['test'], (err2, service) => {
        if (err2 || service == null) {
            console.error(
                'gatewayDevice.getService',
                err2 || new Error('Invalid callback data, neither error, nor response provided'),
            );
            return;
        }
        console.log(service.service, service.SCPDURL, service.controlURL);
    });
    gatewayDevice.run('action', ['arg'], (err2, res) => {
        if (err2 || res == null) {
            console.error(
                'gatewayDevice.run',
                err2 || new Error('Invalid callback data, neither error, nor response provided'),
            );
            return;
        }
        console.log(res);
    });
});

NATClient.externalIp((err, ip) => {
    if (err || ip == null) {
        console.error(
            'NATClient.externalIp',
            err || new Error('Invalid callback data, neither error, nor response provided'),
        );
        return;
    }
    console.log(ip);
});

NATClient.getMappings((err, mappings) => {
    if (err || mappings == null) {
        console.error(
            'NATClient.getMappings(cb)',
            err || new Error('Invalid callback data, neither error, nor response provided'),
        );
        return;
    }
    console.log(mappings.map(m => m));
});

NATClient.getMappings({ local: true, description: /test/ }, (err, mappings) => {
    if (err || mappings == null) {
        console.error(
            'NATClient.getMappings(opts, cb)',
            err || new Error('Invalid callback data, neither error, nor response provided'),
        );
        return;
    }
    console.log(mappings.map(m => m));
});

NATClient.portMapping({
    public: 9998,
    private: 2221,
    description: 'nat-upnp-test 1',
});

NATClient.portUnmapping({
    public: 9998,
    private: 2221,
});

NATClient.portMapping(
    {
        public: 9999,
        private: 2222,
        description: 'nat-upnp-test 2',
    },
    (err, res) => {
        if (err || res == null) {
            console.error(
                'NATClient.portMapping',
                err || new Error('Invalid callback data, neither error, nor response provided'),
            );
            return;
        }
        console.log(res);
    },
);

NATClient.portUnmapping(
    {
        public: 9999,
        private: 2222,
    },
    (err, res) => {
        if (err || res == null) {
            console.error(
                'NATClient.portUnmapping',
                err || new Error('Invalid callback data, neither error, nor response provided'),
            );
            return;
        }
        console.log(res);
    },
);

setTimeout(() => NATClient.close(), 1000);
