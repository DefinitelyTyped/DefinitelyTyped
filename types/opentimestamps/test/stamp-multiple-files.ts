import * as OpenTimestamps from "opentimestamps";

const { DetachedTimestampFile, Ops } = OpenTimestamps;

// Stamp multiple data at once
const files: Uint8Array[] = []; /* init this array with the binary contents of the files you want to timestamp */
const detaches: OpenTimestamps.DetachedTimestampFile[] = [];
files.forEach(file => {
    const detached = DetachedTimestampFile.fromBytes(new Ops.OpSHA256(), file);
    detaches.push(detached);
});
OpenTimestamps.stamp(detaches).then(() => {
    const ots: Uint8Array[] = [];
    detaches.forEach((timestamp, i) => {
        ots.push(timestamp.serializeToBytes());
    });
}).catch(err => {
    console.error(err);
});
