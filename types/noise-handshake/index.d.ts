/// <reference types="node" />

import SymmetricState = require("./symmetric-state");
import * as curve from "./dh";

export = NoiseState;

/**
 * Create a new handshake state for a given pattern. Initiator should be either `true` or `false` depending on the role. A preexisting keypair may be passed as `staticKeypair`
 *
 * @example
 * import Noise = require('noise-handshake')
 * import Cipher = require('noise-handshake/cipher')
 * const initiator = new Noise('IK', true)
 * const responder = new Noise('IK', false)
 *
 * const prologue = Buffer.alloc(0)
 *
 * // preshared key
 * initiator.initialise(prologue, responder.s.publicKey)
 * responder.initialise(prologue)
 *
 * // -> e, es, s, ss
 * const message = initiator.send()
 * responder.recv(message)
 *
 * // <- e, ee, se
 * const reply = responder.send()
 * initiator.recv(reply)
 *
 * console.log(initiator.complete) // true
 *
 * // convention is to use rx for
 * // sending and tx for receiving
 *
 * // initiator.rx === responder.tx
 * // responder.rx === initiator.tx
 *
 * // instantiate a cipher using shared secrets
 * const send = new Cipher(initiator.rx!)
 * const receive = new Cipher(responder.tx!)
 *
 * const msg = Buffer.from('hello, world')
 *
 * const enc = send.encrypt(msg)
 * console.log(receive.decrypt(enc)) // hello, world
 */
declare class NoiseState extends SymmetricState {
    readonly s: NoiseState.KeyPair;
    readonly e: NoiseState.KeyPair | null;
    readonly pattern: "XX" | "IK";
    readonly handshake: Array<symbol | symbol[]>;
    readonly protocol: Buffer | Uint8Array;
    readonly initiator: boolean;
    re: Buffer | Uint8Array | null;
    rs: Buffer | Uint8Array | null;
    rx: Buffer | Uint8Array | null;
    tx: Buffer | Uint8Array | null;
    /**
     * Indicates whether `rx` and `tx` have been created yet.
     *
     * When complete, the working handshake state shall be cleared *only* the following state shall remain on the object:
     *
     * ```
     * {
     *   tx, // session key to decrypt messages from remote peer
     *   rx, // session key to encrypt messages to remote peer
     *   rs, // the remote peer's public key,
     *   hash, // a hash of the entire handshake state
     * }
     * ```
     */
    complete: boolean;
    hash: Buffer | Uint8Array | null;

    constructor(
        pattern: "XX" | "IK",
        initiator: boolean,
        staticKeypair?: NoiseState.KeyPair,
        opts?: SymmetricState.Options,
    );

    /**
     * Initialise the handshake state with a prologue and any preshared keys.
     */
    initialise(prologue: Buffer | Uint8Array, remoteStatic?: Buffer | Uint8Array): void;
    /**
     * Send the next message in the handshake, add an optional payload buffer to be included in the message,
     * payload is a zero length buffer by default.
     */
    send(payload?: Buffer | Uint8Array): Buffer | Uint8Array;
    /**
     * Receive a handshake message from the peer and return the encrypted payload.
     */
    recv(buf: Buffer | Uint8Array): Buffer | Uint8Array;
    final(): void;
}

declare namespace NoiseState {
    type Options = SymmetricState.Options;
    type Curve = SymmetricState.Curve;
    type KeyPair = curve.KeyPair;
}
