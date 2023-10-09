// Type definitions for http-signature 1.3
// Project: https://github.com/joyent/node-http-signature
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export { ParseOptions, parseRequest, parseRequest as parse, ParseResponse } from "./lib/parser";

export {
    createSigner,
    isSigner,
    RequestSigner,
    RequestSignerOptions,
    Signature,
    SignOptions,
    signRequest,
    signRequest as sign,
} from "./lib/signer";

export { fingerprint as sshKeyFingerprint, pemToRsaSSHKey, sshKeyToPEM } from "./lib/utils";

export { verifyHMAC, verifySignature, verifySignature as verify } from "./lib/verify";
