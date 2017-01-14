
import * as sshpk from 'sshpk'

let cert = sshpk.parseCertificate("", "pem");
let fpr = cert.fingerprint("sha256").toString("hex");
let cn = cert.subjects[0].cn;
