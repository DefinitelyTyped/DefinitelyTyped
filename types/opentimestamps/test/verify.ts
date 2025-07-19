import * as OpenTimestamps from "opentimestamps";
const file = Buffer.from(
    "5468697320646f63756d656e742069732074696d657374616d706564206f6e20626f7468204c697465636f696e20616e6420426974636f696e20626c6f636b636861696e73",
    "hex",
);
const fileOts = Buffer.from(
    "004f70656e54696d657374616d7073000050726f6f6600bf89e2e884e89294010832bb24ab386bef01c0656944ecafa2dbb1e4162ced385754419467f9fb6f4d97f010c7c118043ce37d45f1ab81d3cd9dc9aa08fff0109b01031328e457c754a860bc5bc567ab08f02012dbcf25d46d7f01c4bd7c7ebdcd2080974b83a9198bc63cdb23f69c817f110508f0203c6274f7a67007de279fb68938e5549f462043570ccdbc17ba43e632a772d43208f1045ab0daf9f008ad9722b721af69e80083dfe30d2ef90c8e292868747470733a2f2f66696e6e65792e63616c656e6461722e657465726e69747977616c6c2e636f6df010dfd289ba718b4f30bb78191936c762a508f02026503e60c641473ec6f833953d04f7c8a65c5059a44a7e8c01c8cb9fed2ac2b308f1045ab0dafaf008c0c7948d8d5b64cf0083dfe30d2ef90c8e232268747470733a2f2f6c74632e63616c656e6461722e636174616c6c6178792e636f6d",
    "hex",
);
const detached = OpenTimestamps.DetachedTimestampFile.fromBytes(new OpenTimestamps.Ops.OpSHA256(), file);
const detachedOts = OpenTimestamps.DetachedTimestampFile.deserialize(fileOts);
let options: OpenTimestamps.VerifyOptions = {};
// options.ignoreBitcoinNode - Ignore verification with bitcoin node
options.ignoreBitcoinNode = true;
// options.timeout - Adjust the request timeout (default: 1000)
options.timeout = 5000;
OpenTimestamps.verify(detachedOts, detached, options).then(verifyResult => {
    // return an object containing timestamp and height for every attestation if verified, undefined otherwise.
    console.log(verifyResult);
    // prints:
    // { bitcoin: { timestamp: 1521545768, height: 514371 },
    //   litecoin: { timestamp: 1521540398, height: 1388467 } }
});
