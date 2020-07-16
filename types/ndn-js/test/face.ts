import ndn = require("ndn-js");

let filter = new ndn.InterestFilter("/A");
filter = new ndn.InterestFilter(new ndn.Name("/A"), "<>{2}");
filter = new ndn.InterestFilter(filter);

let b: boolean = filter.doesMatch(new ndn.Name("/B"));
const name: ndn.Name = filter.getPrefix();
const s: string = filter.getRegexFilter();
b = filter.hasRegexFilter();

const face = new ndn.Face();

let n: number = face.expressInterest(new ndn.Interest(),
    (interest: ndn.Interest, data: ndn.Data) => {});
face.expressInterest(new ndn.Name("/A"),
    (interest: ndn.Interest, data: ndn.Data) => {},
    (interest: ndn.Interest) => {});
face.expressInterest(new ndn.Name("/A"),
    new ndn.Interest().setCanBePrefix(true),
    (interest: ndn.Interest, data: ndn.Data) => {},
    (interest: ndn.Interest) => {},
    (interest: ndn.Interest, nack: ndn.NetworkNack) => {});

n = ndn.Face.getMaxNdnPacketSize();
face.putData(new ndn.Data());

n = face.registerPrefix(new ndn.Name("/A"),
    (prefix: ndn.Name, interest: ndn.Interest) => {},
    (prefix: ndn.Name) => {});
face.registerPrefix(new ndn.Name("/A"),
    (prefix: ndn.Name, interest: ndn.Interest) => {},
    (prefix: ndn.Name) => {},
    (prefix: ndn.Name, id: number) => {});

face.removePendingInterest(n);
face.removeRegisteredPrefix(n);
face.send(new ndn.Blob());
face.setCommandCertificateName(name);
face.setCommandSigningInfo(new ndn.KeyChain(), name);

n = face.setInterestFilter(filter,
    (prefix: ndn.Name, interest: ndn.Interest, face: ndn.Face, filterId: number, filter: ndn.InterestFilter) => {});
face.setInterestFilter(name,
    (prefix: ndn.Name, interest: ndn.Interest) => {});

face.unsetInterestFilter(n);
