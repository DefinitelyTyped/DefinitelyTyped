import waitPort = require('wait-port');

const params = {
    host: 'google.com',
    port: 443,
};

waitPort(params).then(open => {
    open; // $ExpectType boolean
});

(async () => {
    const open = await waitPort({
        protocol: 'http',
        port: 4000,
        host: '127.0.0.1',
        path: '/',
        interval: 200,
        timeout: 20000,
        output: 'dots',
        waitForDns: true,
    });
    open; // $ExpectType boolean
})();
