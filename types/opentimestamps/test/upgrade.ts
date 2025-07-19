import * as OpenTimestamps from "opentimestamps";

const fileOts = Buffer.from(
    "004f70656e54696d657374616d7073000050726f6f6600bf89e2e884e89294010805c4f616a8e5310d19d938cfd769864d7f4ccdc2ca8b479b10af83564b097af9f010e754bf93806a7ebaa680ef7bd0114bf408f010b573e8850cfd9e63d1f043fbb6fc250e08f10457cfa5c4f0086fb1ac8d4e4eb0e70083dfe30d2ef90c8e2e2d68747470733a2f2f616c6963652e6274632e63616c656e6461722e6f70656e74696d657374616d70732e6f7267",
    "hex",
);
const detached = OpenTimestamps.DetachedTimestampFile.deserialize(fileOts);
OpenTimestamps.upgrade(detached).then((changed) => {
    if (changed) {
        console.log("Timestamp upgraded");
        const upgradedFileOts = detached.serializeToBytes();
    } else {
        console.log("Timestamp not upgraded");
    }
}).catch(err => {
    console.log(err);
});
