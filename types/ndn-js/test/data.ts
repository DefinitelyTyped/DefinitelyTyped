/// <reference types="node"/>
import ndn = require("ndn-js");

let meta = new ndn.MetaInfo();
meta = new ndn.MetaInfo(meta);
const ct: ndn.ContentType = meta.getType();
let n: number = meta.getOtherTypeCode();
n = meta.getFreshnessPeriod();
const comp: ndn.Name.Component = meta.getFinalBlockId();

meta.setType(ndn.ContentType.OTHER_CODE);
meta.setOtherTypeCode(1000);
meta.setFreshnessPeriod(5000);
meta.setFinalBlockId(comp);

let data = new ndn.Data();
data = new ndn.Data(new ndn.Name("/A"));
data = new ndn.Data("/A");
data = new ndn.Data(data);

let name: ndn.Name = data.getName();
name = data.getFullName();
meta = data.getMetaInfo();
let blob: ndn.Blob = data.getContent();
const sig: ndn.Signature = data.getSignature();
n = data.getCongestionMark();
n = data.getIncomingFaceId();

data = data.setName(name)
           .setMetaInfo(meta)
           .setContent(blob)
           .setContent(Buffer.alloc(4))
           .setSignature(sig);

data.wireDecode(blob);
data.wireDecode(Buffer.alloc(4));
blob = data.wireEncode();
