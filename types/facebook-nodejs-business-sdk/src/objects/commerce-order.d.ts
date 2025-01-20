import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CommerceOrder
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrder extends AbstractCrudObject {
    static get Fields(): Readonly<{
        buyer_details: "buyer_details";
        channel: "channel";
        contains_bopis_items: "contains_bopis_items";
        created: "created";
        estimated_payment_details: "estimated_payment_details";
        id: "id";
        is_group_buy: "is_group_buy";
        is_test_order: "is_test_order";
        last_updated: "last_updated";
        merchant_order_id: "merchant_order_id";
        order_status: "order_status";
        selected_shipping_option: "selected_shipping_option";
        ship_by_date: "ship_by_date";
        shipping_address: "shipping_address";
    }>;
    static get Filters(): Readonly<{
        has_cancellations: "HAS_CANCELLATIONS";
        has_fulfillments: "HAS_FULFILLMENTS";
        has_refunds: "HAS_REFUNDS";
        no_cancellations: "NO_CANCELLATIONS";
        no_refunds: "NO_REFUNDS";
        no_shipments: "NO_SHIPMENTS";
    }>;
    static get State(): Readonly<{
        completed: "COMPLETED";
        created: "CREATED";
        fb_processing: "FB_PROCESSING";
        in_progress: "IN_PROGRESS";
    }>;
    static get ReasonCode(): Readonly<{
        buyers_remorse: "BUYERS_REMORSE";
        damaged_goods: "DAMAGED_GOODS";
        facebook_initiated: "FACEBOOK_INITIATED";
        not_as_described: "NOT_AS_DESCRIBED";
        quality_issue: "QUALITY_ISSUE";
        refund_compromised: "REFUND_COMPROMISED";
        refund_for_return: "REFUND_FOR_RETURN";
        refund_reason_other: "REFUND_REASON_OTHER";
        refund_sfi_fake: "REFUND_SFI_FAKE";
        refund_sfi_real: "REFUND_SFI_REAL";
        wrong_item: "WRONG_ITEM";
    }>;
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
