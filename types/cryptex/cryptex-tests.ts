import * as cryptex from "cryptex";

cryptex.update({
    config: {
        keySource: "none",
        algorithm: "plaintext",
        secretEncoding: "binary",
        secrets: {
            foo: "bar"
        }
    }
});

const value: Promise<string> = cryptex.getSecret("foo", true);
const decryptedValue: Promise<string> = cryptex.decrypt("foo");
const encryptedValue: Promise<string> = cryptex.encrypt("bar");
