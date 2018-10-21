/// <reference types="node"/>
import ndn = require("ndn-js");

let meta = new ndn.MetaInfo();
meta = new ndn.MetaInfo(meta);
const comp: ndn.Name.Component = meta.getFinalBlockId();
let n: number = meta.getFreshnessPeriod();
n = meta.getOtherTypeCode();
const ct: ndn.ContentType = meta.getType();

meta.setFinalBlockId(comp);
meta.setFreshnessPeriod(5000);
meta.setOtherTypeCode(1000);
meta.setType(ndn.ContentType.OTHER_CODE);

let data = new ndn.Data();
data = new ndn.Data(new ndn.Name("/A"));

n = data.getCongestionMark();
let blob: ndn.Blob = data.getContent();
let name: ndn.Name = data.getName();
n = data.getIncomingFaceId();
meta = data.getMetaInfo();
name = data.getName();
const sig: ndn.Signature = data.getSignature();

data = data.setContent(blob)
           .setMetaInfo(meta)
           .setName(name)
           .setSignature(sig);

data.wireDecode(blob);
data.wireDecode(Buffer.alloc(4));
blob = data.wireEncode();
