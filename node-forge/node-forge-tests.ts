import * as forge from "node-forge";

let keypair = forge.pki.rsa.generateKeyPair({bits: 512});
let privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
let publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);

let x: string = forge.ssh.privateKeyToOpenSSH();
