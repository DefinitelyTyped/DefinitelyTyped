import type { SignKeyPair } from "./interfaces";
import type { LibCrypto } from "./libcrypto";
export declare const newKeyPair: (module?: LibCrypto) => Promise<SignKeyPair>;
export declare const keyPairFromSeed: (seed: Uint8Array, module?: LibCrypto) => Promise<SignKeyPair>;
export declare const keyPairFromSecretKey: (secretKey: Uint8Array, module?: LibCrypto) => Promise<SignKeyPair>;
/**
 * @function
 * Returns the signature of the data provided.
 */
export declare const sign: (message: Uint8Array, secretKey: Uint8Array, module?: LibCrypto) => Promise<Uint8Array>;
export declare const verify: (message: Uint8Array, signature: Uint8Array, publicKey: Uint8Array, module?: LibCrypto) => Promise<boolean>;
//# sourceMappingURL=ed25519.d.ts.map