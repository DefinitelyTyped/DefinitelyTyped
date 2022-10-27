/**
 * Protocol for virtual authenticators
 * @enum {string}
 */
export interface IProtocol {
    CTAP2: string;
    U2F: string;
}

/**
 * AuthenticatorTransport values
 * @enum {string}
 */
export interface ITransport {
    BLE: string;
    USB: string;
    NFC: string;
    INTERNAL: string;
}

export const Protocol: IProtocol;
export const Transport: ITransport;

/**
 * Options for the creation of virtual authenticators.
 * @see http://w3c.github.io/webauthn/#sctn-automation
 */
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

/**
 * A credential stored in a virtual authenticator.
 * @see https://w3c.github.io/webauthn/#credential-parameters
 */
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

    /**
     * Creates a resident (i.e. stateless) credential.
     * @param id Unique base64 encoded string.
     * @param rpId Relying party identifier.
     * @param userHandle userHandle associated to the credential. Must be Base64 encoded string.
     * @param privateKey Base64 encoded PKCS
     * @param signCount initial value for a signature counter.
     * @returns A resident credential
     */
    static createResidentCredential(id: Uint8Array, rpId: string, userHandle: Uint8Array, privateKey: string, signCount: number): Credential;

    /**
     * Creates a non-resident (i.e. stateless) credential.
     * @param id Unique base64 encoded string.
     * @param rpId Relying party identifier.
     * @param privateKey Base64 encoded PKCS
     * @param signCount initial value for a signature counter.
     * @returns A non-resident credential
     */
    static createNonResidentCredential(id: Uint8Array, rpId: string, privateKey: string, signCount: number): Credential;

    toDict(): Object;

    fromDict(data: Object): Credential;
}
