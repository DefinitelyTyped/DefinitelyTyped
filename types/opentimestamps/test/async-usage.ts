import * as OpenTimestamps from "opentimestamps";

go_async();

async function go_async() {
    const hash = Buffer.from("05c4f616a8e5310d19d938cfd769864d7f4ccdc2ca8b479b10af83564b097af9", "hex");
    const detached = OpenTimestamps.DetachedTimestampFile.fromHash(new OpenTimestamps.Ops.OpSHA256(), hash);

    try {
        await OpenTimestamps.stamp(detached); // $ExpectType void
        const fileOts = detached.serializeToBytes();
    } catch (err) {
        console.log(err);
    }
}
