import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PaymentEnginePayment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentEnginePayment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
        application: "application";
        country: "country";
        created_time: "created_time";
        disputes: "disputes";
        fraud_status: "fraud_status";
        fulfillment_status: "fulfillment_status";
        id: "id";
        is_from_ad: "is_from_ad";
        is_from_page_post: "is_from_page_post";
        items: "items";
        payout_foreign_exchange_rate: "payout_foreign_exchange_rate";
        phone_support_eligible: "phone_support_eligible";
        platform: "platform";
        refundable_amount: "refundable_amount";
        request_id: "request_id";
        tax: "tax";
        tax_country: "tax_country";
        test: "test";
        user: "user";
    }>;
    static get Reason(): Readonly<{
        banned_user: "BANNED_USER";
        denied_refund: "DENIED_REFUND";
        granted_replacement_item: "GRANTED_REPLACEMENT_ITEM";
    }>;
    createDispute(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<PaymentEnginePayment>;
    createRefund(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<PaymentEnginePayment>;
    get(fields: string[], params?: Record<any, any>): Promise<PaymentEnginePayment>;
}
