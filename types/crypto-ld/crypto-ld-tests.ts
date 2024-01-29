import { CryptoLD, LDKeyPair } from "crypto-ld";
const cryptoLdTests = new CryptoLD();
const lDKeyPairTests = new LDKeyPair();

cryptoLdTests.from({}).then(); // $ExpectType Promise<LDKeyPair>
cryptoLdTests.use(lDKeyPairTests); // $ExpectType void
cryptoLdTests.generate({ type: "", controller: "" }).then(); // $ExpectType Promise<LDKeyPair>
cryptoLdTests.fromKeyDocument({ document: {}, checkContext: false, checkRevoked: false }).then(); // $ExpectType Promise<LDKeyPair>

lDKeyPairTests.export({ publicKey: true, privateKey: true }); // $ExpectType object
lDKeyPairTests.signer(); // $ExpectType { sign: ({ data }: { data: Uint8Array; }) => Promise<string | Uint8Array>; }
lDKeyPairTests.fingerprint(); // $ExpectType string
lDKeyPairTests.verifyFingerprint({ fingerprint: "" }); // $ExpectType { verified: boolean; }
lDKeyPairTests.verifier(); // $ExpectType { verify: ({ data, signature }: { data: Uint8Array; signature: Uint8Array; }) => Promise<boolean>; }
