import { Blob } from "./blob";
import { Name } from "./name";

export enum KeyLocatorType {
    KEYNAME = 1,
    KEY_LOCATOR_DIGEST = 2,
}

export class KeyLocator {
    constructor(kl?: KeyLocator);

    getType(): KeyLocatorType;
    getKeyName(): Name;
    getKeyData(): Blob;

    setType(type: KeyLocatorType): void;
    setKeyName(name: Name): void;
    setKeyData(keyData: Blob): void;

    clear(): void;
}

export class ValidityPeriod {
    constructor(validity?: ValidityPeriod);
    constructor(notBefore: number, notAfter: number);

    hasPeriod(): boolean;
    getNotBefore(): number;
    getNotAfter(): number;
    isValid(time?: number): boolean;

    equals(other: ValidityPeriod): boolean;
    clear(): void;
}

export abstract class Signature {
    clone(): Signature;
}

export class SignatureBase<T extends Signature> extends Signature {
    constructor();
    getSignature(): Blob;
    setSignature(sigValue: Blob): void;
    clone(): T;
}

export class SignatureBaseKl<T extends Signature> extends SignatureBase<T> {
    getKeyLocator(): KeyLocator;
    setKeyLocator(kl?: KeyLocator): void;
}

export class SignatureBaseKlVp<T extends Signature> extends SignatureBaseKl<T> {
    getValidityPeriod(): ValidityPeriod;
    setValidityPeriod(validity?: ValidityPeriod): void;
}

export class GenericSignature extends SignatureBase<GenericSignature> {
    constructor();
    getTypeCode(): number;
    getSignatureInfoEncoding(): Blob;
    setSignatureInfoEncoding(encoding: Blob, typeCode?: number): void;
}

export class DigestSha256Signature extends SignatureBase<DigestSha256Signature> {
}

export class Sha256WithRsaSignature extends SignatureBaseKlVp<Sha256WithRsaSignature> {
}

export class Sha256WithEcdsaSignature extends SignatureBaseKlVp<Sha256WithEcdsaSignature> {
}

export class HmacWithSha25Signature extends SignatureBaseKl<HmacWithSha25Signature> {
}
