import { Extrafield } from './extrafield';
import { Address } from './address';

export interface CheckoutCapture {
    line_items?: any;
    discount_code?: string;
    extra_fields?: Extrafield[];
    customer: {
        id?: string;
        firstname?: string;
        lastname?: string;
        email: string;
        phone?: string;
        meta?: any;
    };
    shipping?: Partial<Address>;
    fulfillment?: {
        shipping_method: string;
    };
    billing?: Partial<Address>;
    payment: {
        gateway: 'braintree' | 'manual' | 'omise' | 'paypal' | 'razorpay' | 'stripe' | 'square' | 'test_gateway' | string;
        card?: {
            token?: string;
            nonce?: string;
        }   |   {
            number: string
            expiry_month: string
            expiry_year: string
            cvc: string
            postal_zip_code: string
        };
        braintree?: {
            nonce: string;
        };
        square?: {
            token?: string;
            verification_token?: string;
        };
        stripe?: {
            payment_method_id?: string;
            payment_intent_id?: string;
            customer_id?: string;
            setup_future_usage?: 'on_session' | 'off_session';
        };
        razorpay?: {
            payment_id: string;
        };
        omise?: {
            token: string;
        };
        paypal?: {
            action: 'capture' | 'authorize';
            payment_id?: string;
            payer_id?: string;
        };
        manual?: {
            id: string;
        };
    };
    pay_what_you_want?: string;
    meta?: any;
}
