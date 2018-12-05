import proxyaddr = require('proxy-addr');
import { createServer } from 'http';

createServer(req => {
    // $ExpectType string
    proxyaddr(req, addr => addr === '127.0.0.1');
    proxyaddr(req, (addr, i) => i < 1);

    proxyaddr(req, '127.0.0.1');
    proxyaddr(req, ['127.0.0.0/8', '10.0.0.0/8']);
    proxyaddr(req, ['127.0.0.0/255.0.0.0', '192.168.0.0/255.255.0.0']);

    proxyaddr(req, '::1');
    proxyaddr(req, ['::1/128', 'fe80::/10']);

    proxyaddr(req, 'loopback');
    proxyaddr(req, ['loopback', 'fc00:ac:1ab5:fff::1/64']);

    // $ExpectType string[]
    proxyaddr.all(req);
    proxyaddr.all(req, 'loopback');

    const trust = proxyaddr.compile('localhost');
    proxyaddr.compile(['localhost']);
    trust; // $ExpectType (addr: string, i: number) => boolean
    proxyaddr(req, trust);
});
