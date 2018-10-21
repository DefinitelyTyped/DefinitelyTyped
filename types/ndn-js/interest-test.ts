/// <reference types="node"/>
import ndn = require("ndn-js");

let interest = new ndn.Interest();
interest = new ndn.Interest(new ndn.Name("/A"));
interest = new ndn.Interest(interest);

let b: boolean = interest.getCanBePrefix();
const fh: ndn.DelegationSet = interest.getForwardingHint();
let n: number = interest.getIncomingFaceId();
n = interest.getInterestLifetimeMilliseconds();
b = interest.getMustBeFresh();
const name: ndn.Name = interest.getName();
let blob: ndn.Blob = interest.getNonce();

interest = interest.setCanBePrefix(true)
                   .setForwardingHint(fh)
                   .setInterestLifetimeMilliseconds(2000)
                   .setMustBeFresh(true)
                   .setName(name);

b = interest.matchesData(new ndn.Data());
b = interest.matchesName(name);
interest.refreshNonce();

interest.wireDecode(blob);
interest.wireDecode(Buffer.alloc(4));
blob = interest.wireEncode();
