import { DiscountAllocation } from './checkout';
import { MoneyV2, Attribute, MailingAddress } from './common';
import {
    HasMetafields,
    OrderCancelReason,
    DateTime,
    CurrencyCode,
    OrderFinancialStatus,
    OrderFulfillmentStatus,
    Node,
    URL,
} from './graphql';
import { ProductVariant } from './products';

export interface Fulfillment {
    trackingCompany: string;
    trackingInfo: FulfillmentTrackingInfo[];
    fulfillmentLineItems: FulfillmentLineItem[];
}

export interface FulfillmentLineItem {
    lineItem: OrderLineItem;
    quantity: number;
}

export interface FulfillmentTrackingInfo {
    number: string;
    url: URL;
}

export interface Order extends Node, HasMetafields {
    cancelReason?: OrderCancelReason;
    canceledAt?: DateTime;
    currencyCode: CurrencyCode;
    currentSubtotalPrice: MoneyV2;
    currentTotalDuties?: MoneyV2;
    currentTotalPrice: MoneyV2;
    currentTotalTax: MoneyV2;
    customAttributes: Attribute[];
    customerLocale?: string;
    customerUrl?: URL;
    edited: boolean;
    email?: string;
    financialStatus?: OrderFinancialStatus;
    fulfillmentStatus: OrderFulfillmentStatus;
    name: string;
    orderNumber: number;
    originalTotalDuties?: MoneyV2;
    originalTotalPrice: MoneyV2;
    phone?: string;
    processedAt: DateTime;
    shippingAddress?: MailingAddress;
    shippingDiscountAllocations: DiscountAllocation[];
    statusUrl: URL;
    subtotalPrice?: MoneyV2;
    successfulFulfillments?: Fulfillment[];
    totalPrice: MoneyV2;
    totalRefunded: MoneyV2;
    totalShippingPrice: MoneyV2;
    totalTax?: MoneyV2;
    /**
     * @deprecated
     */
    subtotalPriceV2?: MoneyV2;
    /**
     * @deprecated
     */
    totalPriceV2: MoneyV2;
    /**
     * @deprecated
     */
    totalRefundedV2: MoneyV2;
    /**
     * @deprecated
     */
    totalShippingPriceV2: MoneyV2;
    /**
     * @deprecated
     */
    totalTaxV2?: MoneyV2;
    discountApplications: DiscountAllocation[];
    lineItems: OrderLineItem[];
}

export interface OrderLineItem {
    currentQuantity: number;
    customAttributes: Attribute[];
    discountAllocations: DiscountAllocation[];
    discountedTotalPrice: MoneyV2;
    originalTotalPrice: MoneyV2;
    quantity: number;
    title: string;
    variant?: ProductVariant;
}
