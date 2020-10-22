import ndn = require("ndn-js");

(nack: ndn.NetworkNack) => {
    const n: number = nack.getOtherReasonCode();
    const reason: ndn.NetworkNack.Reason = nack.getReason();
};
