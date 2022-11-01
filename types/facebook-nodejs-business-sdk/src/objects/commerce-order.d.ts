import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class CommerceOrder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Filters(): Record<string, any>;
    static get State(): Record<string, any>;
    static get ReasonCode(): Record<string, any>;
    createAcknowledgeOrder(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    getCancellations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createCancellation(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    createFulfillOrder(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    getItems(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPayments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPromotionDetails(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getPromotions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getRefunds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createRefund(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    getReturns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createReturn(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    getShipments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createShipment(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    createUpdateShipment(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<CommerceOrder>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<CommerceOrder>;
}
