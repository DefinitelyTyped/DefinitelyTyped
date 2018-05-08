import * as internalIp from 'internal-ip';

let str: string;
internalIp.v6().then(ip => {
    str = ip;
});

internalIp.v4().then(ip => {
    str = ip;
});
