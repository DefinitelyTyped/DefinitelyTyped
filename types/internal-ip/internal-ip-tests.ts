import * as internalIp from 'internal-ip';

internalIp.v6().then(ip => {
    // $ExpectType string | null
    ip;
});
// $ExpectType string | null
internalIp.v6.sync();

internalIp.v4().then(ip => {
    // $ExpectType string | null
    ip;
});
// $ExpectType string | null
internalIp.v4.sync();
