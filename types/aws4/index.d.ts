// Type definitions for aws4 1.5.0
// Project: https://github.com/mhart/aws4
// Definitions by: Andrew Crites <https://github.com/ajcrites>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class RequestSigner {
    constructor(request?: any, credentials?: any);
    request: any;
    credentials: any;
    service: any;
    region: any;
    isCodeCommitGit: any;

    matchHost(host?: string): string[];
    isSingleRegion(): boolean;
    createHost(): string;
    prepareRequest(): void;
    sign(): any;
    getDateTime(): string;
    getDate(): string;
    authHeader(): string;
    signature(): string;
    stringToSign(): string;
    canonicalString(): string;
    canonicalHeaders(): string;
    signedHeaders(): string;
    credentialString(): string;
    defaultCredentials(): any;
    parsePath(): any;
    formatPath(): string;
}

export function sign(options?: any, credentials?: any): any;
