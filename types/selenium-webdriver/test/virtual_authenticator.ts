import {
    Credential,
    Protocol,
    Transport,
    VirtualAuthenticatorOptions,
} from "selenium-webdriver/lib/virtual_authenticator";

function TestVirtualAuthenticator() {
    let vaOptions: VirtualAuthenticatorOptions = new VirtualAuthenticatorOptions();
    let protocol: string = vaOptions.getProtocol();
    vaOptions.setProtocol(Protocol["CTAP2"]);
    let transport: string = vaOptions.getTransport();
    vaOptions.setTransport(Transport["NFC"]);
    let residentKey: boolean = vaOptions.getHasResidentKey();
    vaOptions.setHasResidentKey(true);
    let userVerification: boolean = vaOptions.getHasUserVerification();
    vaOptions.setHasUserVerification(true);
    let userConsenting: boolean = vaOptions.getIsUserConsenting();
    vaOptions.setIsUserConsenting(true);
    let userVerified: boolean = vaOptions.getIsUserVerified();
    vaOptions.setIsUserVerified(true);

    let residentCredential: Credential = Credential.createResidentCredential(
        new Uint8Array([1, 2, 3, 4]),
        "localhost",
        new Uint8Array([1]),
        "BASE64_ENCODED_PK",
        0,
    );

    let nonResidentCredential: Credential = Credential.createNonResidentCredential(
        new Uint8Array([1, 2, 3, 4]),
        "localhost",
        "BASE64_ENCODED_PK",
        0,
    );

    let id: Uint8Array = residentCredential.id();

    let isResidentCredential: boolean = residentCredential.isResidentCredential();

    let rpId: string = residentCredential.rpId();

    let userHandle: Uint8Array | null = residentCredential.userHandle();

    let privateKey: string = residentCredential.privateKey();

    let signCount: number = residentCredential.signCount();
}
