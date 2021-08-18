import { Extrafield } from './extrafield';
import { Address } from './address';

export interface CheckoutCapture {
    line_items: any;
    discount_code?: string | undefined;
    extra_fields?: Extrafield[] | undefined;
    customer: {
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
        gateway: string;
        card?: {
            number?: string | undefined;
            token?: string | undefined;
            nonce?: string | undefined;
        } | undefined;
        stripe?: {
            payment_method_id: string;
            payment_intent_id: string;
        } | undefined;
        razorpay?: {
            payment_id: string;
        } | undefined;
        paypal?: {
            action: string;
            payment_id: string;
            payer_id: string;
        } | undefined;
        manual?: {
            id: string;
        } | undefined;
    };
    pay_what_you_want?: string | undefined;
    meta?: any;
}
