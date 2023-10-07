// Type definitions for http-signature 1.3
// Project: https://github.com/joyent/node-http-signature
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export {
    // Functions
    parseRequest,
    parseRequest as parse,
    // Types
    ParseOptions,
    ParseResponse,
} from "./lib/parser";

export {
    // Functions
    isSigner,
    signRequest,
    signRequest as sign,
    createSigner,
    // Types
    SignOptions,
    Signature,
    RequestSigner,
    RequestSignerOptions,
} from "./lib/signer";

export { sshKeyToPEM, fingerprint as sshKeyFingerprint, pemToRsaSSHKey } from "./lib/utils";

export { verifySignature as verify, verifySignature, verifyHMAC } from "./lib/verify";
