// Type definitions for openid 2.0.6
// Project: https://github.com/havard/node-openid
// Definitions by: Jacob Stein <https://github.com/jacobmstein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface OpenIdError {
  message: string;
}

export class RelyingParty {
  constructor(
    returnUrl: string,
    realm: string | null,
    stateless: boolean,
    strict: boolean,
    extensions: readonly any[]);

  authenticate(
    identifier: string,
    immediate: boolean,
    callback: (err: OpenIdError | null, authUrl: string | null) => void): void;

  verifyAssertion(
    requestOrUrl: object | string,
    callback: (err: OpenIdError | null) => void): void;
}
