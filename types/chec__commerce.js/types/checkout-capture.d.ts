import { Extrafield } from './extrafield';
import { Address } from './address';

export interface CheckoutCapture {
    line_items?: any;
    discount_code?: string | undefined;
    extra_fields?: Extrafield[] | undefined;
    customer: {
        id?: string | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        email: string;
        phone?: string | undefined;
        meta?: any;
    };
    shipping?: Partial<Address> | undefined;
    fulfillment?: {
        shipping_method: string;
    } | undefined;
    billing?: Partial<Address> | undefined;
    payment: {
        gateway: 'braintree' | 'manual' | 'omise' | 'paypal' | 'razorpay' | 'stripe' | 'square' | 'test_gateway' | string;
        card?: {
            number?: string | undefined;
            token?: string | undefined;
            nonce?: string | undefined;
        } | undefined;
        braintree?: {
            nonce: string;
        } | undefined;
        square?: {
            token?: string | undefined;
            verification_token?: string | undefined;
        } | undefined;
        stripe?: {
            payment_method_id?: string | undefined;
            payment_intent_id?: string | undefined;
            customer_id?: string | undefined;
            setup_future_usage?: 'on_session' | 'off_session' | undefined;
        } | undefined;
        razorpay?: {
            payment_id: string;
        } | undefined;
        omise?: {
            token: string;
        } | undefined;
        paypal?: {
            action: 'capture' | 'authorize';
            payment_id?: string | undefined;
            payer_id?: string | undefined;
        } | undefined;
        manual?: {
            id: string;
        } | undefined;
    };
    pay_what_you_want?: string | undefined;
    meta?: any;
}
