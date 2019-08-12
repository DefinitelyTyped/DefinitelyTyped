import * as forge from "./crypto/forge";

export type AccountKey = forge.PrivateKey;
export type Certificate = string | Buffer;
export type CertificateChain = string;
export type ChallengeKey = string;

export interface Options {
    directoryUrl?: string;
    accountUrl?: string | null;
    accountKey?: AccountKey;
    backoffAttempts?: number;
    backoffMin?: number;
    backoffMax?: number;
}

export interface AccountRequest {
    contact?: string[];
}

export interface CreateAccountRequest extends AccountRequest {
    termsOfServiceAgreed?: boolean;
    externalAccountBinding?: object;
    onlyReturnExisting?: boolean;
}

// At this time there are no parameters that are restricted to updates.
// tslint:disable-next-line:no-empty-interface
export interface UpdateAccountRequest extends AccountRequest {
}

export interface Account {
    status?: string;
    contact?: string[];
    termsOfServiceAgreed?: boolean;
    externalAccountBinding?: object;
    orders?: string[];
}

export interface Identifier {
    type: string;
    value: string;
}

export interface CreateOrderRequest {
    identifiers: Identifier[];
    notBefore?: string;
    notAfter?: string;
}

export interface HasStatus {
    status?: string;
}

export interface Order extends HasStatus {
    status: "pending" | "ready" | "processing" | "valid" | "invalid";
    expires?: string;
    identifiers: Identifier[];
    notBefore?: string;
    notAfter?: string;
    authorizations: string[];
    finalize: string;
    certificate?: string;
}

export interface Challenge extends HasStatus {
    type: string;
    url: string;
    status: string;
    validated?: string;
    error?: object;
}

export interface Http01Challenge extends Challenge {
    type: "http-01";
    token: string;
}

export interface Dns01Challenge extends Challenge {
    type: "dns-01";
    token: string;
}

export interface Authorization extends HasStatus {
    status: "pending" | "valid" | "invalid" | "deactivated" | "expired" | "revoked";
    identifier: Identifier;
    expires?: string;
    challenges: Challenge[];
    wildcard?: boolean;
    url: string;
}

export enum RevocationReason {
    Unspecified = 0,
    KeyCompromise = 1,
    CACompromise = 2,
    AffiliationChanged = 3,
    Supersedeed = 4,
    CessationOfOperation = 5,
    CertificateHold = 6,
    RemoveFromCRL = 8,
    PrivilegeWithdrawn = 9,
    AACompromise = 10,
}

export interface RevokeRequest {
    reason?: RevocationReason;
}

export interface AutoOptions {
    csr?: forge.Csr | string;
    email?: string;
    termsOfServiceAgreed?: boolean;
    challengePriority?: string[];
    challengeCreateFn?: (authz: Authorization, challenge: Challenge, keyAuthorization: ChallengeKey) => Promise<any>;
    challengeRemoveFn?: (authz: Authorization, challenge: Challenge, keyAuthorization: ChallengeKey) => Promise<any>;
}

export default class AcmeClient {
    constructor(opts: Options);
    getTermsOfServiceUrl(): Promise<string>;
    getAccountUrl(): string;
    createAccount(data: CreateAccountRequest): Promise<Account>;
    updateAccount(data: UpdateAccountRequest): Promise<Account>;
    updateAccountKey(newAccountKey: AccountKey, data: any): Promise<any>;
    createOrder(data: CreateOrderRequest): Promise<Order>;
    finalizeOrder(order: Order, csr: forge.Csr | string): Promise<any>;
    getAuthorizations(order: Order): Promise<Authorization[]>;
    deactivateAuthorization(authz: Authorization): Promise<any>;
    getChallengeKeyAuthorization(challenge: Challenge): Promise<ChallengeKey>;
    verifyChallenge(authz: Authorization, challenge: Challenge): Promise<any>;
    completeChallenge(challenge: Challenge): Promise<any>;
    waitForValidStatus<T extends HasStatus>(item: T): Promise<T>;
    getCertificate(order: Order): Promise<CertificateChain>;
    revokeCertificate(cert: Certificate, data: RevokeRequest): Promise<any>;
    auto(opts: AutoOptions): Promise<CertificateChain>;
}
