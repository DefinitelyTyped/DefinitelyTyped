import localtunnel = require('localtunnel');

let tunnel: localtunnel.Tunnel;

tunnel = localtunnel(3000, () => {});
tunnel = localtunnel(
    3000,
    { host: '', local_host: '', port: 3000, subdomain: '' },
    () => {}
);
