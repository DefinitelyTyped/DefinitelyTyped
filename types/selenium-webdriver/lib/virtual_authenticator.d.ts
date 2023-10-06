/**
 * Protocol for virtual authenticators
 */
export enum Protocol {
    CTAP2 = "ctap2",
    U2F = "ctap1/u2f",
}

/**
 * AuthenticatorTransport values
 */
export enum Transport {
    BLE = "ble",
    USB = "usb",
    NFC = "nfc",
    INTERNAL = "internal",
}

/**
 * Options for the creation of virtual authenticators.
 * @see http://w3c.github.io/webauthn/#sctn-automation
 */
export class VirtualAuthenticatorOptions {
    constructor();

    getProtocol(): Protocol;

    setProtocol(protocol: Protocol): void;

    getTransport(): Transport;

    setTransport(transport: Transport): void;

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
        userHandle: Uint8Array | null,
        privateKey: string,
        signCount: number,
    );

    id(): Uint8Array;

    isResidentCredential(): boolean;

    rpId(): string;

    userHandle(): Uint8Array | null;

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
    static createResidentCredential(
        id: Uint8Array,
        rpId: string,
        userHandle: Uint8Array,
        privateKey: string,
        signCount: number,
    ): Credential;

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
