import { Blob, BlobLike } from "./blob";
import { Name } from "./name";

export enum KeyLocatorType {
    KEYNAME = 1,
    KEY_LOCATOR_DIGEST = 2,
}

export class KeyLocator {
    constructor(kl?: KeyLocator);

    getKeyData(): Blob;
    getKeyName(): Name;
    getType(): KeyLocatorType;

    setKeyData(keyData: Blob): void;
    setKeyName(name: Name): void;
    setType(type: KeyLocatorType): void;

    clear(): void;
}

export type ValidityPeriod = any;

export interface Signature {
    clone(): Signature;
}

export class SignatureBase<T extends Signature> implements Signature {
    constructor();
    clone(): T;

    getSignature(): Blob;
    setSignature(sigValue: BlobLike): void;
}

export class SignatureBaseKl<T extends Signature> extends SignatureBase<T> {
    getKeyLocator(): KeyLocator;
    setKeyLocator(kl?: KeyLocator): void;
}

export class SignatureBaseKlVp<T extends Signature> extends SignatureBaseKl<T> {
    getValidityPeriod(): ValidityPeriod;
    setValidityPeriod(validity?: ValidityPeriod): void;
}

export class DigestSha256Signature extends SignatureBase<DigestSha256Signature> {
}

export class GenericSignature extends SignatureBase<GenericSignature> {
    constructor();
    clone(): GenericSignature;

    getTypeCode(): number;
    getSignatureInfoEncoding(): Blob;
    setSignatureInfoEncoding(encoding: Blob, typeCode?: number): void;
}

export class Sha256WithRsaSignature extends SignatureBaseKlVp<Sha256WithRsaSignature> {
}

export class Sha256WithEcdsaSignature extends SignatureBaseKlVp<Sha256WithEcdsaSignature> {
}

export class HmacWithSha25Signature extends SignatureBaseKl<HmacWithSha25Signature> {
}
