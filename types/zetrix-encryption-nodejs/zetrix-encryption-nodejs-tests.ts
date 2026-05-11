import { keypair, keystore, signature } from "zetrix-encryption-nodejs";

// Test for `keypair` Module
const publicKey: string = keypair.getEncPublicKey("someEncPrivateKey");
const address: string = keypair.getAddress("someEncPublicKey");
const parsedPrivateKey: string = keypair.parsePrivateKey("someEncPrivateKey");
const parsedPublicKey: string = keypair.parsePublicKey("someEncPublicKey");
const keyPair: any = keypair.getKeyPair();
const isPrivateKeyValid: boolean = keypair.checkEncPrivateKey("someEncPrivateKey");
const isPublicKeyValid: boolean = keypair.checkEncPublicKey("someEncPublicKey");
const isAddressValid: boolean = keypair.checkAddress("someAddress");

// Test assertions (for type checking purposes only)
let resultString: string;
let resultBoolean: boolean;
let resultAny: any;

resultString = publicKey;
resultString = address;
resultString = parsedPrivateKey;
resultString = parsedPublicKey;
resultBoolean = isPrivateKeyValid;
resultBoolean = isPublicKeyValid;
resultBoolean = isAddressValid;
resultAny = keyPair;

// Test for `keystore` Module
keystore.encrypt("someEncPrivateKey", "password", (error: Error | null, result?: any) => {
    if (error) {
        console.error("Encryption failed:", error);
    } else {
        console.log("Encryption result:", result);
    }
});

const decryptedKey: string = keystore.decrypt(
    {/* keystore data */},
    "password",
    (error: Error | null, result?: string) => {
        if (error) {
            console.error("Decryption failed:", error);
        } else {
            console.log("Decryption result:", result);
        }
    },
);

// Test for `signature` Module
const signedMessage: string = signature.sign("Hello, Zetrix!", "someEncPrivateKey");
const isSignatureValid: boolean = signature.verify("Hello, Zetrix!", signedMessage, "someEncPublicKey");

// Test assertions for `signature`
resultString = signedMessage;
resultBoolean = isSignatureValid;
