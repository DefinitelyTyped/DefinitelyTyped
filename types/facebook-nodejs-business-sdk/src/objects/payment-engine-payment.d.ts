import { AbstractCrudObject } from './../abstract-crud-object';
export default class PaymentEnginePayment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Reason(): Record<string, any>;
    createDispute(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PaymentEnginePayment>;
    createRefund(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PaymentEnginePayment>;
    get(fields: string[], params?: Record<string, any>): Promise<PaymentEnginePayment>;
}
