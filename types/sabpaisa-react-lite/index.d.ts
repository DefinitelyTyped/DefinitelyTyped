export interface SabpaisaSuccessResponse {
    razorpay_signature: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
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
}

declare const SabPaisaCheckout: {
    open: (
        options: SabpaisaCheckoutOptions,
        successCallback?: (data: SabpaisaSuccessResponse) => void,
        errorCallback?: (data: SabpaisaErrorResponse) => void,
    ) => Promise<SabpaisaSuccessResponse>;
    onExternalWalletSelection: (externalWalletCallback: (data: unknown) => void) => void;
};

export default SabPaisaCheckout;
