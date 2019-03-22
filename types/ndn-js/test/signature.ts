import ndn = require("ndn-js");

let kl: ndn.KeyLocator = new ndn.KeyLocator();
kl = new ndn.KeyLocator(kl);
const klt: ndn.KeyLocatorType = kl.getType();
const name: ndn.Name = kl.getKeyName();
let blob: ndn.Blob = kl.getKeyData();
kl.setType(ndn.KeyLocatorType.KEY_LOCATOR_DIGEST);
kl.setKeyName(name);
kl.setKeyData(blob);
kl.clear();

let validity: ndn.ValidityPeriod = new ndn.ValidityPeriod();
validity = new ndn.ValidityPeriod(validity);
validity = new ndn.ValidityPeriod(540109800000, 664156800000);
let b: boolean = validity.hasPeriod();
let n: number = validity.getNotBefore();
n = validity.getNotAfter();
b = validity.isValid();
b = validity.isValid(594172800000);
validity.equals(new ndn.ValidityPeriod());
validity.clear();

let sigG = new ndn.GenericSignature();
blob = sigG.getSignature();
blob = sigG.getSignatureInfoEncoding();
n = sigG.getTypeCode();
sigG.setSignature(blob);
sigG.setSignatureInfoEncoding(blob);
sigG.setSignatureInfoEncoding(blob, 1000);
sigG = sigG.clone();
let sig: ndn.Signature = sigG;

let sig0 = new ndn.DigestSha256Signature();
blob = sig0.getSignature();
sig0.setSignature(blob);
sig0 = sig0.clone();
sig = sig0;

let sig1 = new ndn.Sha256WithRsaSignature();
kl = sig1.getKeyLocator();
blob = sig1.getSignature();
validity = sig1.getValidityPeriod();
sig1.setKeyLocator(kl);
sig1.setSignature(blob);
sig1.setValidityPeriod(validity);
sig1 = sig1.clone();
sig = sig1;

let sig3 = new ndn.Sha256WithEcdsaSignature();
kl = sig3.getKeyLocator();
blob = sig3.getSignature();
validity = sig3.getValidityPeriod();
sig3.setKeyLocator(kl);
sig3.setSignature(blob);
sig3.setValidityPeriod(validity);
sig3 = sig3.clone();
sig = sig3;

let sig4 = new ndn.HmacWithSha25Signature();
kl = sig4.getKeyLocator();
blob = sig4.getSignature();
sig4.setKeyLocator(kl);
sig4.setSignature(blob);
sig4 = sig4.clone();
sig = sig4;
