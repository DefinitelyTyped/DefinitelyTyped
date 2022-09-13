/// <reference types="node"/>
import ndn = require("ndn-js");

let interest = new ndn.Interest();
interest = new ndn.Interest(new ndn.Name("/A"));
interest = new ndn.Interest("/A");
interest = new ndn.Interest(interest);

let name: ndn.Name = interest.getName();
let b: boolean = interest.getCanBePrefix();
b = interest.getMustBeFresh();
const fh: ndn.DelegationSet = interest.getForwardingHint();
let blob: ndn.Blob = interest.getNonce();
let n: number = interest.getInterestLifetimeMilliseconds();
blob = interest.getApplicationParameters();
n = interest.getIncomingFaceId();

interest = interest.setName(name)
                   .setCanBePrefix(true)
                   .setMustBeFresh(true)
                   .setForwardingHint(fh)
                   .setInterestLifetimeMilliseconds(2000)
                   .setApplicationParameters(blob)
                   .setApplicationParameters(Buffer.alloc(4))
                   .appendParametersDigestToName();

b = interest.matchesData(new ndn.Data());
b = interest.matchesName(name);
interest.refreshNonce();
const s: string = interest.toUri();
interest.wireDecode(blob);
interest.wireDecode(Buffer.alloc(4));
blob = interest.wireEncode();

fh.add(10, name);
n = fh.size();
const del: ndn.DelegationSet.Delegation = fh.get(0);
n = del.getPreference();
name = del.getName();
b = fh.remove(name);
