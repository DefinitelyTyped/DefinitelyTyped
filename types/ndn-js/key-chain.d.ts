import { Data } from "./data";
import { Interest } from "./interest";
import { Name } from "./name";

export class KeyChain {
    constructor();
    constructor(pibLocator: string, tpmLocator: string, allowReset?: boolean);

    static getDefaultKeyParams(): KeyParams;
    getPib(): Pib;
    getTpm(): Tpm;

    createIdentityV2(identityName: Name, params?: KeyParams): PibIdentity;
    createIdentityV2(identityName: Name, onComplete: (identity: PibIdentity) => any, onError?: (err: any) => any): void;
    createIdentityV2(identityName: Name, params: KeyParams, onComplete: (identity: PibIdentity) => any, onError?: (err: any) => any): void;
    deleteIdentity(identity: PibIdentity, onComplete?: () => any, onError?: (err: any) => any): void;
    setDefaultIdentity(identity: PibIdentity, onComplete?: () => any, onError?: (err: any) => any): void;

    createKey(identity: PibIdentity, params?: KeyParams): PibKey;
    createKey(identity: PibIdentity, onComplete: (key: PibKey) => any, onError?: (err: any) => any): void;
    createKey(identity: PibIdentity, params: KeyParams, onComplete: (key: PibKey) => any, onError?: (err: any) => any): void;
    deleteKey(identity: PibIdentity, key: PibKey, onComplete?: () => any, onError?: (err: any) => any): void;
    setDefaultKey(identity: PibIdentity, key: PibKey, onComplete?: () => any, onError?: (err: any) => any): void;

    addCertificate(key: PibKey, certificate: CertificateV2, onComplete?: () => any, onError?: (err: any) => any): void;
    deleteCertificate(key: PibKey, certificateName: Name, onComplete?: () => any, onError?: (err: any) => any): void;
    setDefaultCertificate(key: PibKey, certificate: CertificateV2, onComplete?: () => any, onError?: (err: any) => any): void;

    sign(interest: Interest, params: SigningInfo, onComplete?: (interest: Interest) => any, onError?: (err: any) => any): void;
    sign(data: Data, params: SigningInfo, onComplete?: (data: Data) => any, onError?: (err: any) => any): void;
    signWithSha256(packet: Data|Interest): void;
}

// no declaration because these types are rarely used
export class Pib {}
export class PibIdentity {}
export class PibKey {}
export class KeyParams {}
export class CertificateV2 {}
export class Tpm {}

export class SigningInfo {
    constructor(signerType: SigningInfo.SignerType, signerName: Name);
    constructor(arg?: SigningInfo|PibIdentity|PibKey|string);

    getSignerType(): SigningInfo.SignerType;
    getSignerName(): Name;
}

export namespace SigningInfo {
    enum SignerType {
        NULL   = 0,
        ID     = 1,
        KEY    = 2,
        CERT   = 3,
        SHA256 = 4,
    }
}
