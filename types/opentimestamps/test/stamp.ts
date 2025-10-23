import * as OpenTimestamps from "opentimestamps";

const { DetachedTimestampFile, Ops } = OpenTimestamps;

// Stamp
const file = Buffer.from(
    "5468652074696d657374616d70206f6e20746869732066696c6520697320696e636f6d706c6574652c20616e642063616e2062652075706772616465642e0a",
    "hex",
);
let detached = DetachedTimestampFile.fromBytes(new Ops.OpSHA256(), file);
OpenTimestamps.stamp(detached).then(() => {
    const fileOts = detached.serializeToBytes();
});
