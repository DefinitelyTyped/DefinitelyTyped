import * as publicIp from 'public-ip';

publicIp.v4().then(ip => {
    ip; // $ExpectType string
});
publicIp.v4({ https: false, timeout: 10 }).then(ip => {
    ip; // $ExpectType string
});
publicIp.v4().cancel();

publicIp.v6().then(ip => {
    ip; // $ExpectType string
});
publicIp.v6({ https: false, timeout: 10 }).then(ip => {
    ip; // $ExpectType string
});
publicIp.v6().cancel();
