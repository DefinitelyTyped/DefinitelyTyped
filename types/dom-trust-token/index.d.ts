// Type definitions for non-npm package Trust Token API 0.0
// Project: https://github.com/WICG/trust-token-api
// Definitions by: Taymon A. Beal <https://github.com/taymonbeal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RefreshPolicy = 'none' | 'refresh';
type OperationType = 'token-request' | 'send-redemption-record' | 'token-redemption';
type SignRequestData = 'omit' | 'include' | 'headers-only';

interface TrustToken {
    type: OperationType;
    refreshPolicy?: RefreshPolicy;
    issuers?: string[];
    additionalSignedHeaders?: string[];
    includeTimestampHeader?: boolean;
    signRequestData?: SignRequestData;
    additionalSigningData?: string;
}

interface Document {
    hasTrustToken(issuer: string): Promise<boolean>;
}

interface HTMLIFrameElement {
    trustToken: string;
}

interface RequestInit {
    trustToken?: TrustToken;
}

interface XMLHttpRequest {
    setTrustToken(trustToken: TrustToken): void;
    readonly trustTokenOperationError: DOMException;
}
