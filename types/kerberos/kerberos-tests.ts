import * as kerberos from 'kerberos';

// environment variables
const username = 'administrator';
const password = 'Password01';
const realm = 'example.com';
const hostname = 'hostname.example.com';
const port = '80';
let service: string;

kerberos.principalDetails('HTTP', hostname, (err, details) => {
    if (!err) {
        return err;
    }
    return details;
});

kerberos.principalDetails('HTTP', hostname).then(details => {
    return details;
}).catch(err => {
    return err;
});

service = `HTTP/${hostname}`;
kerberos.checkPassword(username, password, service, realm.toUpperCase(), err => {
    if (!err) {
        return true;
    }
    return err;
});

kerberos.checkPassword(username, password, service, realm.toUpperCase()).then(() => {
    return true;
}).catch(err => {
    return err;
});

service = `HTTP@${hostname}`;
kerberos.initializeClient(service, {}, (err, client) => {
    kerberos.initializeServer(service, (err, server) => {
        client.step('', (err, clientResponse) => {
            server.step(clientResponse, (err, serverResponse) => {
                client.unwrap(clientResponse, (err, challengeResponse) => {
                    client.wrap(challengeResponse, { user : "user" }, (err, challengeResponse2) => {
                        return challengeResponse2;
                    });
                });
            });
        });
    });
});

service = `HTTP@${hostname}`;
kerberos.initializeClient(service, {}).then(client => {
    kerberos.initializeServer(service).then(server => {
        client.step('').then(clientResponse => {
            server.step(clientResponse).then(serverResponse => {
                client.unwrap(clientResponse).then(challengeResponse => {
                    client.wrap(challengeResponse, { user : "user" }).then(challengeResponse2 => {
                        return challengeResponse2;
                    });
                });
            });
        });
    });
});

service = `HTTP@${hostname}`;
const url = `http://${hostname}:${port}/`;

const mechOID = kerberos.GSS_MECH_OID_KRB5;
kerberos.initializeClient(service, { mechOID }, (err, client) => {
    client.step('', (err, kerberosToken) => {
        return kerberosToken;
    });
});

kerberos.initializeClient(service, { mechOID }).then(client => {
    client.step('', (err, kerberosToken) => {
        return kerberosToken;
    });
});

kerberos.initializeClient(service, (err, client) => {
    client.step('', (err, kerberosToken) => {
        return kerberosToken;
    });
});

kerberos.initializeClient(service).then(client => {
    client.step('', (err, kerberosToken) => {
        return kerberosToken;
    });
});
