import * as publicIp from 'public-ip';

let str: string;
publicIp.v4().then(ip => {
    str = ip;
});
publicIp.v4({https: false, timeout: 10}).then(ip => {
    str = ip;
});

publicIp.v6().then(ip => {
    str = ip;
});
publicIp.v6({https: false, timeout: 10}).then(ip => {
    str = ip;
});
