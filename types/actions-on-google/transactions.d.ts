/**
 * A collection of Transaction related constants, utility functions, and
 * builders.
 */

import { Image } from './response-builder';

/**
 * Price type.
 */
export interface Price {
    /** One of Transaction.PriceType. */
    type: PriceType;
    amount: {
        /** Currency code of price. */
        currencyCode: string;
        /** Unit count of price. */
        units: number;
        /** Partial unit count of price. */
        nanos?: number;
    };
}

/**
 * Order rejection info.
 */
export interface RejectionInfo {
    /** One of Transaction.RejectionType. */
    type: RejectionType;
    /** Reason for the order rejection. */
    reason: string;
}

/**
 * Order receipt info.
 */
export interface ReceiptInfo {
    /** Action provided order ID. Used when the order has been received by the integrator. */
    confirmedActionOrderId: string;
}

/**
 * Order cancellation info.
 */
export interface CancellationInfo {
    /** Reason for the cancellation. */
    reason: string;
}

/**
 * Order transit info.
 */
export interface TransitInfo {
    /** UTC timestamp of the transit update. */
    updatedTime: {
        /** Seconds since Unix epoch. */
        seconds: number;
        /** Partial seconds since Unix epoch. */
        nanos?: number;
    };
}

/**
 * Order fulfillment info.
 */
export interface FulfillmentInfo {
    /** UTC timestamp of the fulfillment update. */
    deliveryTime: {
        /** Seconds since Unix epoch. */
        seconds: number;
        /** Partial seconds since Unix epoch. */
        nanos?: number;
    };
}

/**
 * Order return info.
 */
export interface ReturnInfo {
    /** Reason for the return. */
    reason: string;
}

/**
 * Transaction config for transactions not involving a Google provided
 * payment instrument.
 */
export interface ActionPaymentTransactionConfig {
    /** True if delivery address is required for the transaction. */
    deliveryAddressRequired: boolean;
    /** One of Transactions.PaymentType. */
    type: PaymentType;
    /** The name of the instrument displayed on receipt. For example, for card payment, could be "VISA-1234". */
    displayName: string;
    customerInfoOptions?: CustomerInfoOptions;
}

/**
 * Transaction config for transactions involving a Google provided payment
 * instrument.
 */
export interface GooglePaymentTransactionConfig {
    /** True if delivery address is required for the transaction. */
    deliveryAddressRequired: boolean;
    /** Tokenization parameters provided by payment gateway. */
    tokenizationParameters: object;
    /** List of accepted card networks. Must be any number of Transactions.CardNetwork. */
    cardNetworks: CardNetwork[];
    /** True if prepaid cards are not allowed for transaction. */
    prepaidCardDisallowed: boolean;
    customerInfoOptions?: CustomerInfoOptions;
}

/**
 * Customer information requested as part of the transaction
 */
export interface CustomerInfoOptions {
    /** one of Transactions.CustomerInfoProperties */
    customerInfoProperties: string[];
}

/**
 * Generic Location type.
 */
export interface Location {
    postalAddress: {
        regionCode: string;
        languageCode: string;
        postalCode: string;
        administrativeArea: string;
        locality: string;
        addressLines: string[];
        recipients: string;
    };
    phoneNumber: string;
    notes: string;
}

/**
 * Decision and order information returned when calling getTransactionDecision().
 */
export interface TransactionDecision {
    /** One of Transactions.ConfirmationDecision. */
    userDecision: ConfirmationDecision;
    checkResult: {
        /** One of Transactions.ResultType. */
        resultType: string;
    };
    order: {
        /** The proposed order used in the transaction decision. */
        finalOrder: Order;
        /** Order ID assigned by Google. */
        googleOrderId: string;
        /** User visible order ID set in proposed order. */
        actionOrderId: string;
        /** The date and time the order was created */
        orderDate: {
            seconds: string;
            nanos: number;
        };
        /** The details regarding the payment method that must be used to charge the user. */
        paymentInfo: {
            /** One of Transactions.PaymentType. */
            paymentType: PaymentType;
            googleProvidedPaymentInstrument: {
                /**
                 * Contains a Base64-encoded payment token provided by a third-party payment processor
                 * Returned for Google-provided payment methods only
                 */
                instrumentToken: string;
            };
            /**
             * Name of the instrument displayed on the receipt
             * Returned for payment methods provided by your app only
             */
            displayName: string;
        };
        // Any customer information (e.g. email address) requested
        customerInfo: {
            /** Customer email. */
            email: string;
        };
    };
    /**
     * The delivery address if user requested.
     * Will appear if userDecision is Transactions.DELIVERY_ADDRESS_UPDATED.
     */
    deliveryAddress: Location;
}

/**
 * List of transaction card networks available when paying with Google.
 */
export type CardNetwork =
    /**
     * Unspecified.
     */
    'UNSPECIFIED' |
    /**
     * American Express.
     */
    'AMEX' |
    /**
     * Discover.
     */
    'DISCOVER' |
    /**
     * Master Card.
     */
    'MASTERCARD' |
    /**
     * Visa.
     */
    'VISA' |
    /**
     * JCB.
     */
    'JCB';

/**
 * List of possible item types.
 * @enum {string}
 */
export type ItemType =
    /**
     * Unspecified.
     */
    'UNSPECIFIED' |
    /**
     * Regular.
     */
    'REGULAR' |
    /**
     * Tax.
     */
    'TAX' |
    /**
     * Discount
     */
    'DISCOUNT' |
    /**
     * Gratuity
     */
    'GRATUITY' |
    /**
     * Delivery
     */
    'DELIVERY' |
    /**
     * Subtotal
     */
    'SUBTOTAL' |
    /**
     * Fee. For everything else, there's fee.
     */
    'FEE';

/**
 * List of price types.
 * @enum {string}
 */
export type PriceType =
    /**
     * Unknown.
     */
    'UNKNOWN' |
    /**
     * Estimate.
     */
    'ESTIMATE' |
    /**
     * Actual.
     */
    'ACTUAL';

/**
 * List of possible item types.
 * @enum {string}
 */
export type PaymentType =
    /**
     * Unspecified.
     */
    'UNSPECIFIED' |
    /**
     * Payment card.
     */
    'PAYMENT_CARD' |
    /**
     * Bank.
     */
    'BANK' |
    /**
     * Loyalty program.
     */
    'LOYALTY_PROGRAM' |
    /**
     * On order fulfillment, such as cash on delivery.
     */
    'ON_FULFILLMENT' |
    /**
     * Gift card.
     */
    'GIFT_CARD';

/**
 * List of customer information properties that can be requested.
 */
export type CustomerInfoProperties = 'EMAIL';

/**
 * List of possible order confirmation user decisions
 * @enum {string}
 */
export type ConfirmationDecision =
    /**
     * Order was approved by user.
     */
    'ORDER_ACCEPTED' |
    /**
     * Order was declined by user.
     */
    'ORDER_REJECTED' |
    /**
     * Order was not declined, but the delivery address was updated during
     * confirmation.
     */
    'DELIVERY_ADDRESS_UPDATED' |
    /**
     * Order was not declined, but the cart was updated during confirmation.
     */
    'CART_CHANGE_REQUESTED';

/**
 * List of possible order states.
 * @enum {string}
 */
export type OrderState =
    /**
     * Order was rejected.
     */
    'REJECTED' |
    /**
     * Order was confirmed by integrator and is active.
     */
    'CONFIRMED' |
    /**
     * User cancelled the order.
     */
    'CANCELLED' |
    /**
     * Order is being delivered.
     */
    'IN_TRANSIT' |
    /**
     * User performed a return.
     */
    'RETURNED' |
    /**
     * User received what was ordered.
     */
    'FULFILLED';

/**
 * List of possible actions to take on the order.
 * @enum {string}
 */
export type OrderAction =
    /**
     * View details.
     */
    'VIEW_DETAILS' |
    /**
     * Modify order.
     */
    'MODIFY' |
    /**
     * Cancel order.
     */
    'CANCEL' |
    /**
     * Return order.
     */
    'RETURN' |
    /**
     * Exchange order.
     */
    'EXCHANGE' |
    /**
     * Email.
     */
    'EMAIL' |
    /**
     * Call.
     */
    'CALL' |
    /**
     * Reorder.
     */
    'REORDER' |
    /**
     * Review.
     */
    'REVIEW';

/**
 * List of possible types of order rejection.
 * @enum {string}
 */
export type RejectionType =
    /**
     * Unknown
     */
    'UNKNOWN' |
    /**
     * Payment was declined.
     */
    'PAYMENT_DECLINED';

/**
 * List of possible order state objects.
 * @enum {string}
 */
export type OrderStateInfo =
    /**
     * Information about order rejection. Used with {@link RejectionInfo}.
     */
    'rejectionInfo' |
    /**
     * Information about order receipt. Used with {@link ReceiptInfo}.
     */
    'receipt' |
    /**
     * Information about order cancellation. Used with {@link CancellationInfo}.
     */
    'cancellationInfo' |
    /**
     * Information about in-transit order. Used with {@link TransitInfo}.
     */
    'inTransitInfo' |
    /**
     * Information about order fulfillment. Used with {@link FulfillmentInfo}.
     */
    'fulfillmentInfo' |
    /**
     * Information about order return. Used with {@link ReturnInfo}.
     */
    'returnInfo';

/**
 * List of possible order transaction requirements check result types.
 * @enum {string}
 */
export type ResultType =
    /**
     * Unspecified.
     */
    'RESULT_TYPE_UNSPECIFIED' |
    /**
     * OK to continue transaction.
     */
    'OK' |
    /**
     * User is expected to take action, e.g. enable payments, to continue
     * transaction.
     */
    'USER_ACTION_REQUIRED' |
    /**
     * Transactions are not supported on current device/surface.
     */
    'ASSISTANT_SURFACE_NOT_SUPPORTED' |
    /**
     * Transactions are not supported for current region/country.
     */
    'REGION_NOT_SUPPORTED';

/**
 * List of possible user decisions to give delivery address.
 * @enum {string}
 */
export type DeliveryAddressDecision =
    /**
     * Unknown.
     */
    'UNKNOWN_USER_DECISION' |
    /**
     * User granted delivery address.
     */
    'ACCEPTED' |
    /**
     * User denied to give delivery address.
     */
    'REJECTED';

/**
 * List of possible order location types.
 * @enum {string}
 */
export type LocationType =
    /**
     * Unknown.
     */
    'UNKNOWN' |
    /**
     * Delivery location for an order.
     */
    'DELIVERY' |
    /**
     * Business location of order provider.
     */
    'BUSINESS' |
    /**
     * Origin of the order.
     */
    'ORIGIN' |
    /**
     * Destination of the order.
     */
    'DESTINATION';

/**
 * List of possible order time types.
 * @enum {string}
 */

export type TimeType =
    /**
     * Unknown.
     */
    'UNKNOWN' |
    /**
     * Date of delivery for the order.
     */
    'DELIVERY_DATE' |
    /**
     * Estimated Time of Arrival for order.
     */
    'ETA' |
    /**
     * Reservation time.
     */
    'RESERVATION_SLOT';

/**
 * Values related to supporting transactions.
 * @type {Object}
 */
export const TransactionValues: {
    /**
     * List of transaction card networks available when paying with Google.
     * @enum {string}
     */
    readonly CardNetwork: {
        /**
         * Unspecified.
         */
        UNSPECIFIED: CardNetwork,
        /**
         * American Express.
         */
        AMEX: CardNetwork,
        /**
         * Discover.
         */
        DISCOVER: CardNetwork,
        /**
         * Master Card.
         */
        MASTERCARD: CardNetwork,
        /**
         * Visa.
         */
        VISA: CardNetwork,
        /**
         * JCB.
         */
        JCB: CardNetwork,
    },

    /**
     * List of possible item types.
     * @enum {string}
     */
    readonly ItemType: {
        /**
         * Unspecified.
         */
        UNSPECIFIED: ItemType,
        /**
         * Regular.
         */
        REGULAR: ItemType,
        /**
         * Tax.
         */
        TAX: ItemType,
        /**
         * Discount
         */
        DISCOUNT: ItemType,
        /**
         * Gratuity
         */
        GRATUITY: ItemType,
        /**
         * Delivery
         */
        DELIVERY: ItemType,
        /**
         * Subtotal
         */
        SUBTOTAL: ItemType,
        /**
         * Fee. For everything else, there's fee.
         */
        FEE: ItemType,
    },

    /**
     * List of price types.
     * @enum {string}
     */
    readonly PriceType: {
        /**
         * Unknown.
         */
        UNKNOWN: PriceType,
        /**
         * Estimate.
         */
        ESTIMATE: PriceType,
        /**
         * Actual.
         */
        ACTUAL: PriceType,
    },

    /**
     * List of possible item types.
     * @enum {string}
     */
    readonly PaymentType: {
        /**
         * Unspecified.
         */
        UNSPECIFIED: PaymentType,
        /**
         * Payment card.
         */
        PAYMENT_CARD: PaymentType,
        /**
         * Bank.
         */
        BANK: PaymentType,
        /**
         * Loyalty program.
         */
        LOYALTY_PROGRAM: PaymentType,
        /**
         * On order fulfillment, such as cash on delivery.
         */
        ON_FULFILLMENT: PaymentType,
        /**
         * Gift card.
         */
        GIFT_CARD: PaymentType,
    },

    /**
     * List of possible order confirmation user decisions
     * @enum {string}
     */
    readonly CustomerInfoProperties: {
        EMAIL: CustomerInfoProperties,
    },

    /**
     * List of possible order confirmation user decisions
     * @enum {string}
     */
    readonly ConfirmationDecision: {
        /**
         * Order was approved by user.
         */
        ACCEPTED: ConfirmationDecision,
        /**
         * Order was declined by user.
         */
        REJECTED: ConfirmationDecision,
        /**
         * Order was not declined, but the delivery address was updated during
         * confirmation.
         */
        DELIVERY_ADDRESS_UPDATED: ConfirmationDecision,
        /**
         * Order was not declined, but the cart was updated during confirmation.
         */
        CART_CHANGE_REQUESTED: ConfirmationDecision,
    },

    /**
     * List of possible order states.
     * @enum {string}
     */
    readonly OrderState: {
        /**
         * Order was rejected.
         */
        REJECTED: OrderState,
        /**
         * Order was confirmed by integrator and is active.
         */
        CONFIRMED: OrderState,
        /**
         * User cancelled the order.
         */
        CANCELLED: OrderState,
        /**
         * Order is being delivered.
         */
        IN_TRANSIT: OrderState,
        /**
         * User performed a return.
         */
        RETURNED: OrderState,
        /**
         * User received what was ordered.
         */
        FULFILLED: OrderState,
    },

    /**
     * List of possible actions to take on the order.
     * @enum {string}
     */
    readonly OrderAction: {
        /**
         * View details.
         */
        VIEW_DETAILS: OrderAction,
        /**
         * Modify order.
         */
        MODIFY: OrderAction,
        /**
         * Cancel order.
         */
        CANCEL: OrderAction,
        /**
         * Return order.
         */
        RETURN: OrderAction,
        /**
         * Exchange order.
         */
        EXCHANGE: OrderAction,
        /**
         * Email.
         */
        EMAIL: OrderAction,
        /**
         * Call.
         */
        CALL: OrderAction,
        /**
         * Reorder.
         */
        REORDER: OrderAction,
        /**
         * Review.
         */
        REVIEW: OrderAction,
    },

    /**
     * List of possible types of order rejection.
     * @enum {string}
     */
    readonly RejectionType: {
        /**
         * Unknown
         */
        UNKNOWN: RejectionType,
        /**
         * Payment was declined.
         */
        PAYMENT_DECLINED: RejectionType,
    },

    /**
     * List of possible order state objects.
     * @enum {string}
     */
    readonly OrderStateInfo: {
        /**
         * Information about order rejection. Used with {@link RejectionInfo}.
         */
        REJECTION: OrderStateInfo,
        /**
         * Information about order receipt. Used with {@link ReceiptInfo}.
         */
        RECEIPT: OrderStateInfo,
        /**
         * Information about order cancellation. Used with {@link CancellationInfo}.
         */
        CANCELLATION: OrderStateInfo,
        /**
         * Information about in-transit order. Used with {@link TransitInfo}.
         */
        IN_TRANSIT: OrderStateInfo,
        /**
         * Information about order fulfillment. Used with {@link FulfillmentInfo}.
         */
        FULFILLMENT: OrderStateInfo,
        /**
         * Information about order return. Used with {@link ReturnInfo}.
         */
        RETURN: OrderStateInfo,
    },

    /**
     * List of possible order transaction requirements check result types.
     * @enum {string}
     */
    readonly ResultType: {
        /**
         * Unspecified.
         */
        UNSPECIFIED: ResultType,
        /**
         * OK to continue transaction.
         */
        OK: ResultType,
        /**
         * User is expected to take action, e.g. enable payments, to continue
         * transaction.
         */
        USER_ACTION_REQUIRED: ResultType,
        /**
         * Transactions are not supported on current device/surface.
         */
        ASSISTANT_SURFACE_NOT_SUPPORTED: ResultType,
        /**
         * Transactions are not supported for current region/country.
         */
        REGION_NOT_SUPPORTED: ResultType,
    },

    /**
     * List of possible user decisions to give delivery address.
     * @enum {string}
     */
    readonly DeliveryAddressDecision: {
        /**
         * Unknown.
         */
        UNKNOWN: DeliveryAddressDecision,
        /**
         * User granted delivery address.
         */
        ACCEPTED: DeliveryAddressDecision,
        /**
         * User denied to give delivery address.
         */
        REJECTED: DeliveryAddressDecision,
    },

    /**
     * List of possible user decisions to give delivery address.
     * @enum {string}
     */
    readonly LocationType: {
        /**
         * Unknown.
         */
        UNKNOWN: LocationType,
        /**
         * Delivery location for an order.
         */
        DELIVERY: LocationType,
        /**
         * Business location of order provider.
         */
        BUSINESS: LocationType,
        /**
         * Origin of the order.
         */
        ORIGIN: LocationType,
        /**
         * Destination of the order.
         */
        DESTINATION: LocationType,
    },

    /**
     * List of possible user decisions to give delivery address.
     * @enum {string}
     */
    readonly TimeType: {
        /**
         * Unknown.
         */
        UNKNOWN: TimeType,
        /**
         * Date of delivery for the order.
         */
        DELIVERY_DATE: TimeType,
        /**
         * Estimated Time of Arrival for order.
         */
        ETA: TimeType,
        /**
         * Reservation time.
         */
        RESERVATION_SLOT: TimeType,
    },
};

/**
 * Class for initializing and constructing Order with chainable interface.
 */
export class Order {
    /**
     * ID for the order. Required.
     */
    readonly id: string;

    /**
     * Cart for the order.
     */
    readonly cart: Cart;

    /**
     * Items not held in the order cart.
     */
    readonly otherItems: LineItem[];

    /**
     * Image for the order.
     */
    readonly image: Image;

    /**
     * TOS for the order.
     */
    readonly termsOfServiceUrl: string;

    /**
     * Total price for the order.
     * @type {Price}
     */
    readonly totalPrice: Price;

    /**
     * Extensions for this order. Used for vertical-specific order attributes,
     * like times and locations.
     */
    readonly extension: object;

    /**
     * Constructor for Order.
     *
     * @param {string} orderId Unique identifier for the order.
     */
    constructor(orderId: string);

    /**
     * Set the cart for this order.
     *
     * @param {Cart} cart Cart for this order.
     * @return {Order} Returns current constructed Order.
     */
    setCart(cart: Cart): Order;

    /**
     * Adds a single item or list of items to the non-cart items list.
     *
     * @param {LineItem|Array<LineItem>} items Line Items to add.
     * @return {Order} Returns current constructed Order.
     */
    addOtherItems(items: LineItem | LineItem[]): Order;

    /**
     * Sets the image for this order.
     *
     * @param {string} url Image source URL.
     * @param {string} accessibilityText Text to replace for image for
     *     accessibility.
     * @param {number=} width Width of the image.
     * @param {number=} height Height of the image.
     * @return {Order} Returns current constructed Order.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): Order;

    /**
     * Set the TOS for this order.
     *
     * @param {string} tos String URL of the TOS.
     * @return {Order} Returns current constructed Order.
     */
    setTermsOfService(url: string): Order;

    /**
     * Sets the total price for this order.
     *
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of price.
     * @param {number} units Unit count of price.
     * @param {number=} nanos Partial unit count of price.
     * @return {Order} Returns current constructed Order.
     */
    setTotalPrice(priceType: PriceType, currencyCode: string, units: number, nanos?: number): Order;

    /**
     * Adds an associated location to the order. Up to 2 locations can be added.
     *
     * @param {string} type One of TransactionValues.LocationType.
     * @param {Location} location Location to add.
     * @return {Order} Returns current constructed Order.
     */
    addLocation(type: string, location: Location): Order;

    /**
     * Sets an associated time to the order.
     *
     * @param {string} type One of TransactionValues.TimeType.
     * @param {string} time Time to add. Time should be ISO 8601 representation
     *     of time value. Could be date, datetime, or duration.
     * @return {Order} Returns current constructed Order.
     */
    setTime(type: string, time: string): Order;
}

/**
 * Class for initializing and constructing Cart with chainable interface.
 */
export class Cart {
    /**
     * ID for the cart. Optional.
     */
    readonly id: string;

    /**
     * Merchant providing the cart.
     */
    readonly merchant: object;

    /**
     * Optional notes about the cart.
     */
    readonly notes: string;

    /**
     * Items held in the order cart.
     */
    readonly lineItems: LineItem[];

    /**
     * Non-line items.
     */
    readonly otherItems: LineItem[];

    /**
     * Constructor for Cart.
     *
     * @param {string=} cartId Optional unique identifier for the cart.
     */
    constructor(cartId?: string);

    /**
     * Set the merchant for this cart.
     *
     * @param {string} id Merchant ID.
     * @param {string} name Name of the merchant.
     * @return {Cart} Returns current constructed Cart.
     */
    setMerchant(id: string, name: string): Cart;

    /**
     * Set the notes for this cart.
     *
     * @param {string} notes Notes.
     * @return {Cart} Returns current constructed Cart.
     */
    setNotes(notes: string): Cart;

    /**
     * Adds a single item or list of items to the cart.
     *
     * @param {LineItem|Array<LineItem>} items Line Items to add.
     * @return {Cart} Returns current constructed Cart.
     */
    addLineItems(items: LineItem | LineItem[]): Cart;

    /**
     * Adds a single item or list of items to the non-items list of this cart.
     *
     * @param {LineItem|Array<LineItem>} items Line Items to add.
     * @return {Cart} Returns current constructed Cart.
     */
    addOtherItems(items: LineItem | LineItem[]): Cart;
}

/**
 * Class for initializing and constructing LineItem with chainable interface.
 */
export class LineItem {
    /**
     * Item ID.
     */
    readonly id: string;

    /**
     * Name of the item.
     */
    readonly name: string;

    /**
     * Item price.
     */
    readonly price: Price;

    /**
     * Sublines for current item. Only valid if item type is REGULAR.
     */
    readonly sublines: string[] | LineItem[];

    /**
     * Image of the item.
     */
    readonly image: Image;

    /**
     * Type of the item. One of TransactionValues.ItemType.
     */
    readonly type: ItemType;

    /**
     * Quantity of the item.
     */
    readonly quantity: number;

    /**
     * Description for the item.
     */
    readonly description: string;

    /**
     * Offer ID for the item.
     */
    readonly offerId: string;

    /**
     * Constructor for LineItem.
     *
     * @param {string} lineItemId Unique identifier for the item.
     * @param {string} name Name of the item.
     */
    constructor(lineItemId: string, name: string);

    /**
     * Adds a single item or list of items or notes to the sublines. Only valid
     * if item type is REGULAR.
     *
     * @param {string|LineItem|Array<string|LineItem>} items Sublines to add.
     * @return {LineItem} Returns current constructed LineItem.
     */
    addSublines(items: string | LineItem | string[] | LineItem[]): LineItem;

    /**
     * Sets the image for this item.
     *
     * @param {string} url Image source URL.
     * @param {string} accessibilityText Text to replace for image for
     *     accessibility.
     * @param {number=} width Width of the image.
     * @param {number=} height Height of the image.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): LineItem;

    /**
     * Sets the price of this item.
     *
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of price.
     * @param {number} units Unit count of price.
     * @param {number=} nanos Partial unit count of price.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setPrice(priceType: PriceType, currencyCode: string, units: number, nanos?: number): LineItem;

    /**
     * Set the type of the item.
     *
     * @param {string} type Type of the item. One of TransactionValues.ItemType.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setType(type: ItemType): LineItem;

    /**
     * Set the quantity of the item.
     *
     * @param {number} quantity Quantity of the item.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setQuantity(quantity: number): LineItem;

    /**
     * Set the description of the item.
     *
     * @param {string} description Description of the item.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setDescription(description: string): LineItem;

    /**
     * Set the Offer ID of the item.
     *
     * @param {string} offerId Offer ID of the item.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setOfferId(offerId: string): LineItem;
}

/**
 * Class for initializing and constructing OrderUpdate with chainable interface.
 */
export class OrderUpdate {
    /**
     * Google provided identifier of the order.
     * @type {string}
     */
    readonly googleOrderId?: string;

    /**
     * App provided identifier of the order.
     * @type {string}
     */
    readonly actionOrderId?: string;

    /**
     * State of the order.
     * @type {Object}
     */
    readonly orderState?: OrderState;

    /**
     * Updates for items in the order. Mapped by item id to state or price.
     * @type {Object}
     */
    readonly lineItemUpdates?: object;

    /**
     * UTC timestamp of the order update.
     * @type {Object}
     */
    readonly updateTime?: object;

    /**
     * Actionable items presented to the user to manage the order.
     * @type {Object}
     */
    readonly orderManagementActions: object[];

    /**
     * Notification content to the user for the order update.
     * @type {Object}
     */
    readonly userNotification: object;

    /**
     * Updated total price of the order.
     * @type {Price}
     */
    readonly totalPrice: Price;

    /**
     * Constructor for OrderUpdate.
     *
     * @param {string} orderId Unique identifier of the order.
     * @param {boolean} isGoogleOrderId True if the order ID is provided by
     *     Google. False if the order ID is app provided.
     */
    constructor(orderId: string, isGoogleOrderId: boolean);

    /**
     * Set the Google provided order ID of the order.
     *
     * @param {string} orderId Google provided order ID.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setGoogleOrderId(orderId: string): OrderUpdate;

    /**
     * Set the Action provided order ID of the order.
     *
     * @param {string} orderId Action provided order ID.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setActionOrderId(orderId: string): OrderUpdate;

    /**
     * Set the state of the order.
     *
     * @param {string} state One of TransactionValues.OrderState.
     * @param {string} label Label for the order state.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setOrderState(state: OrderState, label: string): OrderUpdate;

    /**
     * Set the update time of the order.
     *
     * @param {number} seconds Seconds since Unix epoch.
     * @param {number=} nanos Partial time units.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setUpdateTime(seconds: number, nanos?: number): OrderUpdate;

    /**
     * Set the user notification content of the order update.
     *
     * @param {string} title Title of the notification.
     * @param {text} text Text of the notification.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setUserNotification(title: string, text: object): OrderUpdate;

    /**
     * Sets the total price for this order.
     *
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of price.
     * @param {number} units Unit count of price.
     * @param {number=} nanos Partial unit count of price.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setTotalPrice(priceType: PriceType, currencyCode: string, units: number, nanos?: number): OrderUpdate;

    /**
     * Adds an actionable item for the user to manage the order.
     *
     * @param {string} type One of TransactionValues.OrderActions.
     * @param {string} label Button label.
     * @param {string} url URL to open when button is clicked.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    addOrderManagementAction(type: OrderAction, label: string, url: string): OrderUpdate;

    /**
     * Adds a single price update for a particular line item in the order.
     *
     * @param {string} itemId Line item ID for the order item updated.
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of new price.
     * @param {number} units Unit count of new price.
     * @param {number=} nanos Partial unit count of new price.
     * @param {string=} reason Reason for the price change. Required unless a
     *     reason for this line item change was already declared in
     *     addLineItemStateUpdate.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    addLineItemPriceUpdate(itemId: string, priceType: PriceType, currencyCode: string, units: number, nanos?: number, reason?: string): OrderUpdate;

    /**
     * Adds a single state update for a particular line item in the order.
     *
     * @param {string} itemId Line item ID for the order item updated.
     * @param {string} state One of TransactionValues.OrderState.
     * @param {string} label Label for the new item state.
     * @param {string=} reason Reason for the price change. This will overwrite
     *     any reason given in addLineitemPriceUpdate.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    addLineItemStateUpdate(itemId: string, state: OrderState, label: string, reason?: string): OrderUpdate;

    /**
     * Sets some extra information about the order. Takes an order update info
     * type, and any accompanying data. This should only be called once per
     * order update.
     *
     * @param {string} type One of TransactionValues.OrderStateInfo.
     * @param {Object} data Proper Object matching the data necessary for the info
     *     type. For instance, for the TransactionValues.OrderStateInfo.RECEIPT info
     *     type, use the {@link ReceiptInfo} data type.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setInfo(type: string, data: object): OrderUpdate;
}
