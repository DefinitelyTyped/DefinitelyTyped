// Tests adapted from example code and documentation at https://github.com/alax/jsrp
// Note that these are not runnable examples, as the init() callbacks do not contain the rest of the function calls.
// Also the values used are not valid SRP values.

import * as jsrp from 'jsrp';

const client: jsrp.client = new jsrp.client();
const server: jsrp.server = new jsrp.server();

client.init({ username: 'testUser', password: 'password123' }, (): void => {});
client.init({ username: 'testUser', password: 'password123', length: 2048}, (): void => {});
client.init({ username: 'testUser', password: 'password123', length: 4096}, (): void => {});
server.init({ salt: 'LONG_HEX_VALUE', verifier: 'EVEN_LONGER_HEX_VALUE' }, (): void => {});
server.init({ salt: 'LONG_HEX_VALUE', verifier: 'EVEN_LONGER_HEX_VALUE', length: 2048 }, (): void => {});
server.init({ salt: 'LONG_HEX_VALUE', verifier: 'EVEN_LONGER_HEX_VALUE', length: 4096 }, (): void => {});

const clientHexA: string = client.getPublicKey();
client.setSalt('LONG_HEX_VALUE');
client.setServerPublicKey('LONG_HEX_VALUE');
const clientSharedKey: string = client.getSharedKey();
const clientHexM1: string = client.getProof();
const serverProofValid: boolean = client.checkServerProof('LONG_HEX_VALUE');
const clientSalt: string = client.getSalt();
client.createVerifier((err: any, results: jsrp.Verifier): void => {});

const serverHexB: string = server.getPublicKey();
const serverSalt: string = server.getSalt();
server.setClientPublicKey('LONG_HEX_VALUE');
const serverSHaredKey: string = server.getSharedKey();
const clientProofValid: boolean = server.checkClientProof('LONG_HEX_VALUE');
const getProof: string = server.getProof();
