import * as sshpk from 'sshpk';

const cert = sshpk.parseCertificate('', 'pem');
const fpr = cert.fingerprint('sha256').toString('hex');
const cn = cert.subjects[0].cn;

const certStr = cert.toString('pem');

const key = sshpk.parseKey('', 'pem');
const privKey = sshpk.parsePrivateKey('', 'pem');
const generatedCert = sshpk.createCertificate(
    sshpk.identityForUser('user1'),
    key,
    sshpk.identityForUser('issuer'),
    privKey,
);
const keyStr = key.toString('pem');
