export interface SabpaisaSuccessResponse {
    sabpaisa_signature: string;
    sabpaisa_order_id: string;
    sabpaisa_payment_id: string;
}

export interface SabpaisaErrorResponse {
    code: number;
    description: string;
    error: {
        field?: string;
        source: string;
        step: string;
        reason: string;
        metadata: {
            payment_id?: string;
            order_id: string;
        };
    };
}

export interface SabpaisaCheckoutOptions {
    first_name: string;
    last_name: string;
    currency: string;
    mobile_number: string;
    email_id: string;
    client_code: string;
    aes_iv: string;
    aes_key: string;
    user_name: string;
    password: string;
    env: string;
    txn_id: string;
    amount: string;
    callback_url: string;
    udf1: string;
    udf2: string;
    udf3: string;
    udf4: string;
    udf5: string;
    udf6: string;
    udf7: string;
    udf8: string;
    udf9: string;
    udf10: string;
    udf11: string;
    udf12: string;
    udf13: string;
    udf14: string;
    udf15: string;
    udf16: string;
    udf17: string;
    udf18: string;
    udf19: string;
    udf20: string;
}

declare const SabPaisaCheckout: {
    open: (
        options: SabpaisaCheckoutOptions,
        successCallback?: (data: SabpaisaSuccessResponse) => void,
        errorCallback?: (data: SabpaisaErrorResponse) => void,
    ) => Promise<SabpaisaSuccessResponse>;
};

export default SabPaisaCheckout;
