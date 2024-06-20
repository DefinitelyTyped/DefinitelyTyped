import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CommerceOrder

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrder extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Filters(): Record<string, any>;
    static get State(): Record<string, any>;
    static get ReasonCode(): Record<string, any>;
    createAcknowledgeOrder(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getCancellations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCanCellATIOn(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    createItemUpdate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getItems(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPayments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPromotionDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPromoTIOns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRefunds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createRefund(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getReturns(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createReturn(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getShipments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createShipment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    createUpdateShipment(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    createUpdate(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    get(fields: string[], params?: Record<string, any>): Promise<CommerceOrder>;
}
