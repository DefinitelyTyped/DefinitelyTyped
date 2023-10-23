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
