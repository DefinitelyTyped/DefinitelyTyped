import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PaymentEnginePayment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentEnginePayment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Reason(): Record<string, any>;
    createDispute(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<PaymentEnginePayment>;
    createRefund(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<PaymentEnginePayment>;
    get(fields: Array<string>, params?: Record<string, any>): PaymentEnginePayment;
}
