import * as OpenTimestamps from "opentimestamps";

const { DetachedTimestampFile, Ops } = OpenTimestamps;

// Stamp from hash
const hash = Buffer.from("05c4f616a8e5310d19d938cfd769864d7f4ccdc2ca8b479b10af83564b097af9", "hex");
const detached = DetachedTimestampFile.fromHash(new Ops.OpSHA256(), hash);
OpenTimestamps.stamp(detached).then(() => {
    const fileOts = detached.serializeToBytes();
});
