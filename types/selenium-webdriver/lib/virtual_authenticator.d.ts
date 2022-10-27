export interface IProtocol {
    CTAP2: string;
    U2F: string;
}

export interface ITransport {
    BLE: string;
    USB: string;
    NFC: string;
    INTERNAL: string;
}

export const Protocol: IProtocol;
export const Transport: ITransport;

export class VirtualAuthenticatorOptions {
    constructor();

    getProtocol(): string;

    setProtocol(protocol: string): void;

    getTransport(): string;

    setTransport(transport: string): void;

    getHasResidentKey(): boolean;

    setHasResidentKey(value: boolean): void;

    getHasUserVerification(): boolean;

    setHasUserVerification(value: boolean): void;

    getIsUserConsenting(): boolean;

    setIsUserConsenting(value: boolean): void;

    getIsUserVerified(): boolean;

    setIsUserVerified(value: boolean): void;

    toDict(): Object;
}

export class Credential {
    constructor(
        credentialId: Uint8Array,
        isResidentCredential: boolean,
        rpId: string,
        userHandle: Uint8Array,
        privateKey: string,
        signCount: number
    )

    id(): Uint8Array;

    isResidentCredential(): boolean;

    rpId(): string;

    userHandle(): Uint8Array;

    privateKey(): string;

    signCount(): number;

    static createResidentCredential(id: Uint8Array, rpId: string, userHandle: Uint8Array, privateKey: string, signCount: number): Credential;

    static createNonResidentCredential(id: Uint8Array, rpId: string, privateKey: string, signCount: number): Credential;

    toDict(): Object;

    fromDict(data: Object): Credential;
}
