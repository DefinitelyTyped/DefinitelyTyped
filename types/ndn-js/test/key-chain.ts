/// <reference types="node"/>
import ndn = require("ndn-js");

let kc = new ndn.KeyChain();
kc = new ndn.KeyChain("pib-memory:", "tpm-memory:");

const kp: ndn.KeyParams = ndn.KeyChain.getDefaultKeyParams();
const pib: ndn.Pib = kc.getPib();
const tpm: ndn.Tpm = kc.getTpm();

let name = new ndn.Name("/key-name");

let id: ndn.PibIdentity = kc.createIdentityV2(name);
id = kc.createIdentityV2(name, kp);
kc.createIdentityV2(name, (id: ndn.PibIdentity) => {});
kc.createIdentityV2(name, (id: ndn.PibIdentity) => {}, (err) => {});
kc.createIdentityV2(name, kp, (id: ndn.PibIdentity) => {});
kc.createIdentityV2(name, kp, (id: ndn.PibIdentity) => {}, (err) => {});
kc.deleteIdentity(id);
kc.setDefaultIdentity(id);

let key: ndn.PibKey = kc.createKey(id);
key = kc.createKey(id, kp);
kc.createKey(id, (key: ndn.PibKey) => {});
kc.createKey(id, (key: ndn.PibKey) => {}, (err) => {});
kc.createKey(id, kp, (key: ndn.PibKey) => {});
kc.createKey(id, kp, (key: ndn.PibKey) => {}, (err) => {});
kc.deleteKey(id, key);
kc.setDefaultKey(id, key);

const cert: ndn.CertificateV2 = {};
kc.addCertificate(key, cert);
kc.deleteCertificate(key, name);
kc.setDefaultCertificate(key, cert);

let si: ndn.SigningInfo = new ndn.SigningInfo();
si = new ndn.SigningInfo(ndn.SigningInfo.SignerType.ID, name);
si = new ndn.SigningInfo(si);
si = new ndn.SigningInfo(id);
si = new ndn.SigningInfo(key);
si = new ndn.SigningInfo("id:/my-identity");
const signerType: ndn.SigningInfo.SignerType = si.getSignerType();
name = si.getSignerName();

kc.sign(new ndn.Data(), si, (data: ndn.Data) => {});
kc.sign(new ndn.Interest(), si, (interest: ndn.Interest) => {});
kc.signWithSha256(new ndn.Data());
kc.signWithSha256(new ndn.Interest());
