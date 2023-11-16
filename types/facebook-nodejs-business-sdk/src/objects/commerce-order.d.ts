import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * CommerceOrder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceOrder extends AbstractCrudObject {
    static get Fields(): Readonly<{
        buyer_details: "buyer_details";
        channel: "channel";
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
    createAcknowledgeOrder(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getCancellations(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createCancellation(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    createFulfillOrder(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getItems(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPayments(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPromotionDetails(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getPromotions(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getRefunds(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createRefund(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getReturns(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createReturn(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    getShipments(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createShipment(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    createUpdateShipment(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<CommerceOrder>;
    get(fields: Array<string>, params?: Record<any, any>): CommerceOrder;
}
