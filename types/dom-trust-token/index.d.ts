type RefreshPolicy = "none" | "refresh";
type OperationType = "token-request" | "send-redemption-record" | "token-redemption";
type SignRequestData = "omit" | "include" | "headers-only";

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
