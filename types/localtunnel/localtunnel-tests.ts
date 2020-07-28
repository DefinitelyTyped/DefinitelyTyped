import localtunnel = require('localtunnel');

let tunnel: localtunnel.Tunnel | Promise<localtunnel.Tunnel>;

tunnel = localtunnel(3000);
tunnel = localtunnel({
    subdomain: '',
    host: '',
    local_host: '',
    local_https: true,
    local_cert: '',
    local_key: '',
    local_ca: '',
    allow_invalid_cert: true,
    port: 3000,
});
tunnel = localtunnel(
    {
        subdomain: '',
        host: '',
        local_host: '',
        local_https: true,
        local_cert: '',
        local_key: '',
        local_ca: '',
        allow_invalid_cert: true,
        port: 3000,
    },
    () => {},
);
tunnel = localtunnel(3000, {
    subdomain: '',
    host: '',
    local_host: '',
    local_https: true,
    local_cert: '',
    local_key: '',
    local_ca: '',
    allow_invalid_cert: true,
});
tunnel = localtunnel(
    3000,
    {
        subdomain: '',
        host: '',
        local_host: '',
        local_https: true,
        local_cert: '',
        local_key: '',
        local_ca: '',
        allow_invalid_cert: true,
    },
    () => {},
);
