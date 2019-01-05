import ScramSha1Mechanism = require('sasl-scram-sha-1');
import { Mechanism } from 'sasl-scram-sha-1';
import { Factory } from 'saslmechanisms';

new Factory().use(ScramSha1Mechanism);
new Factory().use(Mechanism);

// $ExpectType "SCRAM-SHA-1"
ScramSha1Mechanism.prototype.name;
// $ExpectType true
ScramSha1Mechanism.prototype.clientFirst;

const m = new ScramSha1Mechanism();
new ScramSha1Mechanism({
    genNonce() {
        return 1;
    },
});

// $ExpectType "SCRAM-SHA-1"
m.name;
// $ExpectType true
m.clientFirst;
// $ExpectType string
m.response({ authzid: 'a' });
m.response({ username: 'u' });
m.response({ password: 'pw' });
m.response({ salt: 's' });
m.response({ saltedPassword: 'sp' });
m.response({ clientKey: 'ck' });
m.response({ serverKey: 'sk' });
// $ExpectType ScramSha1Mechanism
m.challenge('challenge');
