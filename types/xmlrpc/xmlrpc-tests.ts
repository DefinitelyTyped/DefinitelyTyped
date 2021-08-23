import * as xmlrpc from 'xmlrpc';

const serverOpts = {
    host: 'localhost',
    port: 9000
};

const serverWithOutCallback = xmlrpc.createServer(serverOpts);

const serverWithCallback = xmlrpc.createServer(serverOpts, () => {
    serverWithCallback.on('NotFound', method => {
        console.log(`Method ${method} not found`);
    })

    serverWithCallback.on('hello', (err, params, cb) => {
        cb(null, `Hello, ${params[0]}!`);
    });

    var client = xmlrpc.createClient({
        host: 'localhost',
        port: 9000,
        path: '/'
    });

    client.methodCall('hello', ['world'], (err, val) => {
        console.log(val);
    });

    class Value extends xmlrpc.CustomType {
        constructor(value: any) {
            super(value);
            this.tagName = 'Value';
        }
    }
    client.methodCall('hello', [new Value('custom_string_value')], (err, val) => {
        console.log(val);
    });
});
