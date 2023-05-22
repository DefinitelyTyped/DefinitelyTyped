// Type definitions for crypto-ld 7.0
// Project: https://github.com/digitalbazaar/crypto-ld
// Definitions by: behruzrahimov <https://github.com/behruzrahimov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class CryptoLD {
    constructor(params?: { suites: any });

    use(keyPairLib: LDKeyPair): void;

    generate(options: object): Promise<LDKeyPair>;

    from(serialized: object): Promise<LDKeyPair>;

    fromKeyDocument({
        document,
        checkContext,
        checkRevoked,
    }: {
        document: object;
        checkContext: boolean;
        checkRevoked: boolean;
    }): Promise<LDKeyPair>;

    fromKeyId({
        id,
        documentLoader,
        checkContext,
        checkRevoked,
    }: {
        id: string;
        documentLoader: () => void;
        checkContext: boolean;
        checkRevoked: boolean;
    }): Promise<LDKeyPair>;

    _installed({ type }: { type: string }): boolean;

    _suiteForType(document: object): object;
}

export class LDKeyPair {
    constructor({ id, controller, revoked }?: { id?: string; controller?: string; revoked?: string });

    static generate(/* options */): Promise<LDKeyPair>;

    static fromKeyDocument({
        document,
        checkContext,
        checkRevoked,
    }: {
        document: string;
        checkContext: boolean;
        checkRevoked: boolean;
    }): Promise<LDKeyPair>;

    static from(options?: object): Promise<LDKeyPair>;

    export({ publicKey, privateKey }: { publicKey: boolean; privateKey: boolean }): object;

    fingerprint(): string;

    verifyFingerprint({ fingerprint }: { fingerprint: string }): {
        verified: boolean;
    };

    signer(): { sign: () => void };

    verifier(): { verify: () => void };
}
