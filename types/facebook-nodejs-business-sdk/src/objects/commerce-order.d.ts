import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class CommerceOrder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Filters(): Record<string, any>;
    static get State(): Record<string, any>;
    static get ReasonCode(): Record<string, any>;
    createAcknowledgeOrder(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    getCancellations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCancellation(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    createFulfillOrder(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    getItems(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPayments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPromotionDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPromotions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRefunds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createRefund(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createReturn(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getShipments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createShipment(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    createUpdateShipment(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceOrder>;
}
