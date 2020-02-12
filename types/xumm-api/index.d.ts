// Type definitions for non-npm package xumm-api 0.1
// Project: https://xumm.app
// Definitions by: Wietse Wind <https://github.com/WietseWind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type XummTransactionType = "SignIn";
export type XrplTransactionType = "Payment"
    | "OfferCreate"
    | "OfferCancel"
    | "EscrowFinish"
    | "EscrowCreate"
    | "EscrowCancel"
    | "DepositPreauth"
    | "CheckCreate"
    | "CheckCash"
    | "CheckCancel"
    | "AccountSet"
    | "PaymentChannelCreate"
    | "PaymentChannelFund"
    | "SetRegularKey"
    | "SignerListSet"
    | "TrustSet"
    | "EnableAmendment"
    | "SetFee";

export type XummCancelReason = "ALREADY_CANCELLED"
    | "ALREADY_RESOLVED"
    | "ALREADY_OPENED"
    | "ALREADY_EXPIRED";

export type XummQrQuality = "m" | "q" | "h";

export interface XummJsonTransaction {
    TransactionType: XummTransactionType | XrplTransactionType;
    [key: string]: any;
}

export interface XummCustomMeta {
    identifier?: string | null;
    blob?: {
        [key: string]: any;
    } | null;
    instruction?: string | null;
}

export interface XummPayloadMeta {
    exists: boolean;
    uuid: string;
    multisign: boolean;
    submit: boolean;
    destination: string;
    resolved_destination: string;
    resolved: boolean;
    signed: boolean;
    cancelled: boolean;
    expired: boolean;
    pushed: boolean;
    app_opened: boolean;
    return_url_app: string | null;
    return_url_web: string | null;
}

export interface XummPayloadBodyBase {
    options?: {
        submit?: boolean;
        multisign?: boolean;
        expire?: number;
        return_url?: {
            app?: string;
            web?: string;
        }
    };
    custom_meta?: XummCustomMeta;
    user_token?: string;
}

export interface XummPostPayloadBodyJson extends XummPayloadBodyBase {
    txjson: XummJsonTransaction;
}

export interface XummPostPayloadBodyBlob extends XummPayloadBodyBase {
    txblob: string;
}

export interface XummPostPayloadResponse {
    uuid: string;
    next: {
        always: string;
        no_push_msg_received?: string;
    };
    refs: {
        qr_png: string;
        qr_matrix: string;
        qr_uri_quality_opts: XummQrQuality[],
        websocket_status: string;
    };
    pushed: boolean;
}

export interface XummGetPayloadResponse {
    meta: XummPayloadMeta;
    application: {
        name: string;
        description: string;
        disabled: 0 | 1;
        uuidv4: string;
        icon_url: string;
        issued_user_token: string | null;
    };
    payload: {
        tx_type: XummTransactionType | XrplTransactionType;
        tx_destination: string;
        tx_destination_tag: number | null;
        request_json: XummJsonTransaction;
        created_at: string;
        expires_at: string;
        expires_in_seconds: number;
    };
    response: {
        hex: string | null;
        txid: string | null;
        resolved_at: string | null;
        dispatched_to: string | null;
        dispatched_result: string | null;
        multisign_account: string | null;
        account: string | null;
    };
    custom_meta: XummCustomMeta;
}

export interface XummDeletePayloadResponse {
    result: {
        cancelled: boolean;
        reason: XummCancelReason;
    };
    meta: XummPayloadMeta;
    custom_meta: XummCustomMeta;
}

export interface XummWebhookBody {
    meta: {
        url: string;
        application_uuidv4: string;
        payload_uuidv4: string;
    };
    custom_meta: XummCustomMeta;
    payloadResponse: {
        payload_uuidv4: string;
        reference_call_uuidv4: string;
        signed: boolean;
        user_token: boolean;
        return_url: {
            app: string | null;
            web: string | null;
        };
    };
    userToken: {
        user_token: string;
        token_issued: string;
        token_expiration: string;
    } | null;
}

export interface XummWebsocketBody {
    payload_uuidv4: string;
    reference_call_uuidv4: string;
    signed: boolean;
    user_token: boolean;
    return_url: {
        app: string | null;
        web: string | null;
    };
    custom_meta: XummCustomMeta;
}

export interface XummApiError {
    error: {
      reference: string;
      code: number;
    };
}
