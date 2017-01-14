
import * as sshpk from 'sshpk';

const cert = sshpk.parseCertificate("", "pem");
const fpr = cert.fingerprint("sha256").toString("hex");
const cn = cert.subjects[0].cn;
