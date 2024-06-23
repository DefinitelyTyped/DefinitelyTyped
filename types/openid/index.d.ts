export interface OpenIdError {
    message: string;
}

export class RelyingParty {
    constructor(
        returnUrl: string,
        realm: string | null,
        stateless: boolean,
        strict: boolean,
        extensions: readonly any[],
    );

    authenticate(
        identifier: string,
        immediate: boolean,
        callback: (err: OpenIdError | null, authUrl: string | null) => void,
    ): void;

    verifyAssertion(
        requestOrUrl: object | string,
        callback: (
            err: OpenIdError | null,
            result?: { authenticated: boolean; claimedIdentifier?: string | undefined },
        ) => void,
    ): void;
}
