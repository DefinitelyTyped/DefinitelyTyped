import DigestMd5Mechanism = require('sasl-digest-md5');
import { Mechanism } from 'sasl-digest-md5';
import { Factory } from 'saslmechanisms';

new Factory().use(DigestMd5Mechanism);
new Factory().use(Mechanism);

// $ExpectType "DIGEST-MD5"
DigestMd5Mechanism.prototype.name;
// $ExpectType false
DigestMd5Mechanism.prototype.clientFirst;

const m = new DigestMd5Mechanism();
new DigestMd5Mechanism({
    genNonce() {
        return 1;
    },
});

// $ExpectType "DIGEST-MD5"
m.name;
// $ExpectType false
m.clientFirst;
// $ExpectType string
m.response({ serviceType: 's', host: 'h', username: 'u', password: 'p' });
m.response({ serviceType: 's', host: 'h', username: 'u', password: 'p', serviceName: 'sn' });
m.response({ serviceType: 's', host: 'h', username: 'u', password: 'p', realm: 'r' });
m.response({ serviceType: 's', host: 'h', username: 'u', password: 'p', authzid: 'a' });
// $ExpectType DigestMd5Mechanism
m.challenge('challenge');
