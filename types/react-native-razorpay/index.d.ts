export interface SuccessResponse {
    razorpay_signature: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
}

// type valid for errors after successful API integration
export interface ErrorResponse {
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

export interface CheckoutOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    image?: string;
    order_id: string;
    prefill?: {
        name?: string;
        email?: string;
        contact?: string;
        method?: "card" | "netbanking" | "wallet" | "emi" | "upi";
    };
    notes?: Record<string | number, string>;
    theme?: {
        hide_topbar?: boolean;
        color?: string;
        backdrop_color?: string;
    };
    modal?: {
        backdropclose?: boolean;
        escape?: boolean;
        handleback?: boolean;
        confirm_close?: boolean;
        ondismiss?: () => void;
        animation?: boolean;
    };
    subscription_id?: string;
    subscription_card_change?: boolean;
    recurring?: boolean;
    callback_url?: string;
    redirect?: boolean;
    customer_id?: string;
    timeout?: number;
    remember_customer?: boolean;
    readonly?: {
        contact?: boolean;
        email?: boolean;
        name?: boolean;
    };
    hidden?: {
        contact?: boolean;
        email?: boolean;
    };
    send_sms_hash?: boolean;
    allow_rotation?: boolean;
    retry?: {
        enabled: boolean;
        max_count: number;
    };
    config?: {
        display: {
            language: "en" | "ben" | "hi" | "mar" | "guj" | "tam" | "tel";
        };
    };
}

declare const RazorpayCheckout: {
    open: (
        options: CheckoutOptions,
        successCallback?: (data: SuccessResponse) => void,
        errorCallback?: (data: ErrorResponse) => void,
    ) => Promise<SuccessResponse>;
    onExternalWalletSelection: (externalWalletCallback: (data: unknown) => void) => void;
};

export default RazorpayCheckout;
