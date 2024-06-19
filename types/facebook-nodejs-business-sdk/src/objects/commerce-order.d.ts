import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CommerceOrder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Filters(): Record<string, any>;
    static get State(): Record<string, any>;
    static get ReasonCode(): Record<string, any>;
    createAcknowledgeOrder(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    getCancellations(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCanCellATIOn(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    createItemUpdate(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    getItems(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPayments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPromotionDetails(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPromoTIOns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRefunds(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRefund(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    getReturns(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createReturn(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    getShipments(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShipment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    createUpdateShipment(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    createUpdate(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<CommerceOrder>;
    get(fields: Array<string>, params?: Record<string, any>): CommerceOrder;
}
