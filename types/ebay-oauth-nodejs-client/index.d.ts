// Type definitions for ebay-oauth-nodejs-client 1.2
// Project: https://github.com/eBay/ebay-oauth-nodejs-client
// Definitions by: Jeremy Möglich <https://github.com/JeremyMoeglich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type EbayEnvironment = 'SANDBOX' | 'PRODUCTION';

type EbayAuthTokenOptions =
    | {
          filePath: string;
      }
    | {
          clientId: string;
          clientSecret: string;
          env?: EbayEnvironment;
          baseUrl?: string;
          redirectUri?: string;
          scope?: string[] | string;
      };

declare class EbayAuthToken {
    constructor(options: Readonly<EbayAuthTokenOptions>);
    getApplicationToken(environment: EbayEnvironment, scopes?: ReadonlyArray<string> | string): Promise<string>;
    generateUserAuthorizationUrl(
        environment: EbayEnvironment,
        scopes: string[] | string,
        options?: {
            prompt?: 'login' | 'consent';
            state?: string;
        },
    ): string;
    exchangeCodeForAccessToken(environment: EbayEnvironment, code: string): Promise<string>;
    getAccessToken(
        environment: EbayEnvironment,
        refreshToken: string,
        scopes: ReadonlyArray<string> | string,
    ): Promise<string>;
    setRefreshToken(refreshToken: string): void;
    getRefreshToken(): string;
}

export = EbayAuthToken;
