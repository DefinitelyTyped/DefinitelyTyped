// Type definitions for mastercard-oauth1-signer 1.1
// Project: https://github.com/Mastercard/oauth1-signer-nodejs#readme
// Definitions by: Dean Pienaar <https://github.com/deanpienaar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-unnecessary-class
declare class OAuth {
    /**
     * Creates a Mastercard API compliant OAuth Authorization header
     */
    static getAuthorizationHeader(
        uri: string,
        method: string,
        payload: string,
        consumerKey: string,
        signingKey: string,
    ): string;
}

export = OAuth;
