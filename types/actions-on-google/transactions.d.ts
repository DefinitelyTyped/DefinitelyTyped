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
    type: TransactionValues.PriceType;
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
    /** One of Transaction.ReasonType. */
    type: TransactionValues.ReasonType;
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
    /** UTC timestamp of the transit update as an RFC 3339 string. */
    updatedTime: string;
}

/**
 * Order fulfillment info.
 */
export interface FulfillmentInfo {
    /** UTC timestamp of the fulfillment update as an RFC 3339 string. */
    deliveryTime: string;
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
    type: TransactionValues.PaymentType;
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
    cardNetworks: TransactionValues.CardNetwork[];
    /** True if prepaid cards are not allowed for transaction. */
    prepaidCardDisallowed: boolean;
    /** The type of tokenization. Default is {@see TransactionValues.PaymentMethodTokenizationType.PAYMENT_GATEWAY}. */
    tokenizationType: string;
    customerInfoOptions?: CustomerInfoOptions;
}

/**
 * Customer information requested as part of the transaction
 */
export interface CustomerInfoOptions {
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
    userDecision: TransactionValues.TransactionUserDecision;
    checkResult: {
        /** One of Transactions.ResultType. */
        resultType: TransactionValues.ResultType;
    };
    order: {
        /** The proposed order used in the transaction decision. */
        finalOrder: Order;
        /** Order ID assigned by Google. */
        googleOrderId: string;
        /** User visible order ID set in proposed order. */
        actionOrderId: string;
        orderDate: {
            seconds: string;
            nanos: number;
        };
        paymentInfo: object;
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
 * Values related to supporting transactions
 */
export namespace TransactionValues {
    /**
     * List of transaction card networks available when paying with Google.
     */
    enum CardNetwork {
        /**
         * Unspecified.
         */
        UNSPECIFIED,
        /**
         * American Express.
         */
        AMEX,
        /**
         * Discover.
         */
        DISCOVER,
        /**
         * Master Card.
         */
        MASTERCARD,
        /**
         * Visa.
         */
        VISA,
        /**
         * JCB.
         */
        JCB
    }

    /**
     * List of possible item types.
     * @deprecated Use {@link TransactionValues.LineItemType} instead.
     */
    // tslint:disable-next-line: strict-export-declare-modifiers
    export import ItemType = LineItemType;

    /**
     * List of possible item types.
     */
    enum LineItemType {
        /**
         * Unspecified.
         */
        UNSPECIFIED,
        /**
         * Regular.
         */
        REGULAR,
        /**
         * Tax.
         */
        TAX,
        /**
         * Discount
         */
        DISCOUNT,
        /**
         * Gratuity
         */
        GRATUITY,
        /**
         * Delivery
         */
        DELIVERY,
        /**
         * Subtotal
         */
        SUBTOTAL,
        /**
         * Fee. For everything else, there's fee.
         */
        FEE
    }

    /**
     * List of price types.
     */
    enum PriceType {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Estimate.
         */
        ESTIMATE,
        /**
         * Actual.
         */
        ACTUAL
    }

    /**
     * List of possible item types.
     */
    enum PaymentType {
        /**
         * Unspecified.
         */
        UNSPECIFIED,
        /**
         * Payment card.
         */
        PAYMENT_CARD,
        /**
         * Bank.
         */
        BANK,
        /**
         * Loyalty program.
         */
        LOYALTY_PROGRAM,
        /**
         * On order fulfillment, such as cash on delivery.
         */
        ON_FULFILLMENT,
        /**
         * Gift card.
         */
        GIFT_CARD
    }

    /**
     * List of customer information properties that can be requested.
     */
    enum CustomerInfoProperties {
        CUSTOMER_INFO_PROPERTY_UNSPECIFIED,
        EMAIL
    }

    /**
     * List of possible order confirmation user decisions
     * @deprecated Use {@link TransactionValues.TransactionUserDecision} instead.
     */
    // tslint:disable-next-line: strict-export-declare-modifiers
    export import ConfirmationDecision = TransactionUserDecision;

    /**
     * List of possible order confirmation user decisions
     */
    enum TransactionUserDecision {
        /**
         * Unspecified user decision.
         */
        UNKNOWN_USER_DECISION,
        /**
         * Order was approved by user.
         */
        ACCEPTED,
        /**
         * Order was declined by user.
         */
        REJECTED,
        /**
         * Order was not declined, but the delivery address was updated during
         * confirmation.
         */
        DELIVERY_ADDRESS_UPDATED,
        /**
         * Order was not declined, but the cart was updated during confirmation.
         */
        CART_CHANGE_REQUESTED
    }

    /**
     * List of possible order states.
     */
    enum OrderState {
        /**
         * Order was created at the integrator's system.
         */
        CREATED,
        /**
         * Order was rejected.
         */
        REJECTED,
        /**
         * Order was confirmed by integrator and is active.
         */
        CONFIRMED,
        /**
         * User cancelled the order.
         */
        CANCELLED,
        /**
         * Order is being delivered.
         */
        IN_TRANSIT,
        /**
         * User performed a return.
         */
        RETURNED,
        /**
         * User received what was ordered.
         */
        FULFILLED
    }

    /**
     * List of possible actions to take on the order.
     * @deprecated Use {@link TransactionValues.ActionType} instead.
     */
    // tslint:disable-next-line: strict-export-declare-modifiers
    export import OrderAction = ActionType;

    /**
     * List of possible actions to take on the order.
     */
    enum ActionType {
        /**
         * Unknown action.
         */
        UNKNOWN,
        /**
         * View details.
         */
        VIEW_DETAILS,
        /**
         * Modify order.
         */
        MODIFY,
        /**
         * Cancel order.
         */
        CANCEL,
        /**
         * Return order.
         */
        RETURN,
        /**
         * Exchange order.
         */
        EXCHANGE,
        /**
         * Email.
         */
        EMAIL,
        /**
         * Call.
         */
        CALL,
        /**
         * Reorder.
         */
        REORDER,
        /**
         * Review.
         */
        REVIEW,
        /**
         * Customer Service.
         */
        CUSTOMER_SERVICE
    }

    /**
     * List of possible types of order rejection.
     * @deprecated Use {@link TransactionValues.ReasonType} instead.
     */
    // tslint:disable-next-line: strict-export-declare-modifiers
    export import RejectionType = ReasonType;

    /**
     * List of possible types of order rejection.
     */
    enum ReasonType {
        /**
         * Unknown
         */
        UNKNOWN,
        /**
         * Payment was declined.
         */
        PAYMENT_DECLINED
    }

    /**
     * List of possible order state objects.
     */
    enum OrderStateInfo {
        /**
         * Information about order rejection. Used with {@link RejectionInfo}.
         */
        REJECTION,
        /**
         * Information about order receipt. Used with {@link ReceiptInfo}.
         */
        RECEIPT,
        /**
         * Information about order cancellation. Used with {@link CancellationInfo}.
         */
        CANCELLATION,
        /**
         * Information about in-transit order. Used with {@link TransitInfo}.
         */
        IN_TRANSIT,
        /**
         * Information about order fulfillment. Used with {@link FulfillmentInfo}.
         */
        FULFILLMENT,
        /**
         * Information about order return. Used with {@link ReturnInfo}.
         */
        RETURN
    }

    /**
     * List of possible order transaction requirements check result types.
     */
    enum ResultType {
        /**
         * Unspecified.
         */
        UNSPECIFIED,
        /**
         * OK to continue transaction.
         */
        OK,
        /**
         * User is expected to take action, e.g. enable payments, to continue
         * transaction.
         */
        USER_ACTION_REQUIRED,
        /**
         * Transactions are not supported on current device/surface.
         */
        ASSISTANT_SURFACE_NOT_SUPPORTED,
        /**
         * Transactions are not supported for current region/country.
         */
        REGION_NOT_SUPPORTED
    }

    /**
     * List of possible user decisions to give delivery address.
     * @deprecated Use {@link TransactionValues.DeliveryAddressUserDecision} instead.
     */
    // tslint:disable-next-line: strict-export-declare-modifiers
    export import DeliveryAddressDecision = DeliveryAddressUserDecision;

    /**
     * List of possible user decisions to give delivery address.
     */
    enum DeliveryAddressUserDecision {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * User granted delivery address.
         */
        ACCEPTED,
        /**
         * User denied to give delivery address.
         */
        REJECTED
    }

    /**
     * List of possible order location types.
     * @deprecated Use {@link TransactionValues.OrderLocationType} instead.
     */
    // tslint:disable-next-line: strict-export-declare-modifiers
    export import LocationType = OrderLocationType;

    /**
     * List of possible order location types.
     */
    enum OrderLocationType {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Delivery location for an order.
         */
        DELIVERY,
        /**
         * Business location of order provider.
         */
        BUSINESS,
        /**
         * Origin of the order.
         */
        ORIGIN,
        /**
         * Destination of the order.
         */
        DESTINATION,
        /**
         * Pick up location of the order.
         */
        PICK_UP
    }

    /**
     * List of possible order time types.
     */
    enum TimeType {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Date of delivery for the order.
         */
        DELIVERY_DATE,
        /**
         * Estimated Time of Arrival for order.
         */
        ETA,
        /**
         * Reservation time.
         */
        RESERVATION_SLOT
    }

    /**
     * List of possible tokenization types for the payment method
     */
    enum PaymentMethodTokenizationType {
        /**
         * Unspecified tokenization type.
         */
        UNSPECIFIED_TOKENIZATION_TYPE,
        /**
         * Use external payment gateway tokenization API to tokenize selected payment method.
         */
        PAYMENT_GATEWAY
    }
}

/**
 * Class for initializing and constructing Order with chainable interface.
 */
export class Order {
    /**
     * Constructor for Order.
     *
     * @param orderId Unique identifier for the order.
     */
    constructor(orderId: string);

    /**
     * ID for the order. Required.
     */
    id: string;

    /**
     * Cart for the order.
     */
    cart?: Cart;

    /**
     * Items not held in the order cart.
     */
    otherItems: LineItem[];

    /**
     * Image for the order.
     */
    image?: Image;

    /**
     * TOS for the order.
     */
    termsOfServiceUrl?: string;

    /**
     * Total price for the order.
     */
    totalPrice?: Price;

    /**
     * Extensions for this order. Used for vertical-specific order attributes,
     * like times and locations.
     */
    extension?: object;

    /**
     * Set the cart for this order.
     *
     * @param cart Cart for this order.
     * @return Returns current constructed Order.
     */
    setCart(cart: Cart): Order;

    /**
     * Adds a single item or list of items to the non-cart items list.
     *
     * @param items Line Items to add.
     * @return Returns current constructed Order.
     */
    addOtherItems(items: LineItem | LineItem[]): Order;

    /**
     * Sets the image for this order.
     *
     * @param url Image source URL.
     * @param accessibilityText Text to replace for image for
     *     accessibility.
     * @param width Width of the image.
     * @param height Height of the image.
     * @return Returns current constructed Order.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): Order;

    /**
     * Set the TOS for this order.
     *
     * @param url String URL of the TOS.
     * @return Returns current constructed Order.
     */
    setTermsOfService(url: string): Order;

    /**
     * Sets the total price for this order.
     *
     * @param priceType One of TransactionValues.PriceType.
     * @param currencyCode Currency code of price.
     * @param units Unit count of price.
     * @param nanos Partial unit count of price.
     * @return Returns current constructed Order.
     */
    setTotalPrice(priceType: TransactionValues.PriceType, currencyCode: string, units: number, nanos?: number): Order;

    /**
     * Adds an associated location to the order. Up to 2 locations can be added.
     *
     * @param type One of TransactionValues.OrderLocationType.
     * @param location Location to add.
     * @return Returns current constructed Order.
     */
    addLocation(type: TransactionValues.OrderLocationType, location: Location): Order;

    /**
     * Sets an associated time to the order.
     *
     * @param type One of TransactionValues.TimeType.
     * @param time Time to add. Time should be ISO 8601 representation
     *     of time value. Could be date, datetime, or duration.
     * @return Returns current constructed Order.
     */
    setTime(type: TransactionValues.TimeType, time: string): Order;
}

/**
 * Class for initializing and constructing Cart with chainable interface.
 */
export class Cart {
    /**
     * Constructor for Cart.
     *
     * @param cartId Optional unique identifier for the cart.
     */
    constructor(cartId?: string);

    /**
     * ID for the cart. Optional.
     */
    id?: string;

    /**
     * Merchant providing the cart.
     */
    merchant?: object;

    /**
     * Optional notes about the cart.
     */
    notes?: string;

    /**
     * Items held in the order cart.
     */
    lineItems: LineItem[];

    /**
     * Non-line items.
     */
    otherItems: LineItem[];

    /**
     * Set the merchant for this cart.
     *
     * @param id Merchant ID.
     * @param name Name of the merchant.
     * @return Returns current constructed Cart.
     */
    setMerchant(id: string, name: string): Cart;

    /**
     * Set the notes for this cart.
     *
     * @param notes Notes.
     * @return Returns current constructed Cart.
     */
    setNotes(notes: string): Cart;

    /**
     * Adds a single item or list of items to the cart.
     *
     * @param items Line Items to add.
     * @return Returns current constructed Cart.
     */
    addLineItems(items: LineItem | LineItem[]): Cart;

    /**
     * Adds a single item or list of items to the non-items list of this cart.
     *
     * @param items Line Items to add.
     * @return Returns current constructed Cart.
     */
    addOtherItems(items: LineItem | LineItem[]): Cart;
}

/**
 * Class for initializing and constructing LineItem with chainable interface.
 */
export class LineItem {
    /**
     * Constructor for LineItem.
     *
     * @param lineItemId Unique identifier for the item.
     * @param name Name of the item.
     */
    constructor(lineItemId: string, name: string);

    /**
     * Item ID.
     */
    id: string;

    /**
     * Name of the item.
     */
    name: string;

    /**
     * Item price.
     */
    price?: Price;

    /**
     * Sublines for current item. Only valid if item type is REGULAR.
     */
    subLines?: Array<string | LineItem>;

    /**
     * Image of the item.
     */
    image?: Image;

    /**
     * Type of the item. One of TransactionValues.LineItemType.
     */
    type?: TransactionValues.LineItemType;

    /**
     * Quantity of the item.
     */
    quantity?: number;

    /**
     * Description for the item.
     */
    description?: string;

    /**
     * Offer ID for the item.
     */
    offerId?: string;

    /**
     * Adds a single item or list of items or notes to the sublines. Only valid
     * if item type is REGULAR.
     *
     * @param items Sublines to add.
     * @return Returns current constructed LineItem.
     */
    addSublines(items: string | LineItem | Array<string | LineItem>): LineItem;

    /**
     * Sets the image for this item.
     *
     * @param url Image source URL.
     * @param accessibilityText Text to replace for image for
     *     accessibility.
     * @param width Width of the image.
     * @param height Height of the image.
     * @return Returns current constructed LineItem.
     */
    setImage(url: string, accessibilityText: string, width?: number, height?: number): LineItem;

    /**
     * Sets the price of this item.
     *
     * @param priceType One of TransactionValues.PriceType.
     * @param currencyCode Currency code of price.
     * @param units Unit count of price.
     * @param nanos Partial unit count of price.
     * @return Returns current constructed LineItem.
     */
    setPrice(priceType: TransactionValues.PriceType, currencyCode: string, units: number, nanos?: number): LineItem;

    /**
     * Set the type of the item.
     *
     * @param type Type of the item. One of TransactionValues.LineItemType.
     * @return Returns current constructed LineItem.
     */
    setType(type: TransactionValues.LineItemType): LineItem;

    /**
     * Set the quantity of the item.
     *
     * @param quantity Quantity of the item.
     * @return Returns current constructed LineItem.
     */
    setQuantity(quantity: number): LineItem;

    /**
     * Set the description of the item.
     *
     * @param description Description of the item.
     * @return Returns current constructed LineItem.
     */
    setDescription(description: string): LineItem;

    /**
     * Set the Offer ID of the item.
     *
     * @param offerId Offer ID of the item.
     * @return Returns current constructed LineItem.
     */
    setOfferId(offerId: string): LineItem;
}

/**
 * Class for initializing and constructing OrderUpdate with chainable interface.
 */
export class OrderUpdate {
    /**
     * Constructor for OrderUpdate.
     *
     * @param orderId Unique identifier of the order.
     * @param isGoogleOrderId True if the order ID is provided by
     *     Google. False if the order ID is app provided.
     */
    constructor(orderId: string, isGoogleOrderId: boolean);

    /**
     * Google provided identifier of the order.
     */
    googleOrderId?: string;

    /**
     * App provided identifier of the order.
     */
    actionOrderId?: string;

    /**
     * State of the order.
     */
    orderState?: object;

    /**
     * Updates for items in the order. Mapped by item id to state or price.
     */
    lineItemUpdates: object;

    /**
     * UTC timestamp of the order update as an RFC 3339 string.
     */
    updateTime?: string;

    /**
     * Actionable items presented to the user to manage the order.
     */
    orderManagementActions: object[];

    /**
     * Notification content to the user for the order update.
     */
    userNotification?: object;

    /**
     * Updated total price of the order.
     */
    totalPrice?: Price;

    /**
     * Set the Google provided order ID of the order.
     *
     * @param orderId Google provided order ID.
     * @return Returns current constructed OrderUpdate.
     */
    setGoogleOrderId(orderId: string): OrderUpdate;

    /**
     * Set the Action provided order ID of the order.
     *
     * @param orderId Action provided order ID.
     * @return Returns current constructed OrderUpdate.
     */
    setActionOrderId(orderId: string): OrderUpdate;

    /**
     * Set the state of the order.
     *
     * @param state One of TransactionValues.OrderState.
     * @param label Label for the order state.
     * @return Returns current constructed OrderUpdate.
     */
    setOrderState(state: TransactionValues.OrderState, label: string): OrderUpdate;

    /**
     * Set the update time of the order.
     *
     * @param seconds Seconds since Unix epoch.
     * @param nanos Partial time units. It is rounded to the nearest millisecond.
     * @return Returns current constructed OrderUpdate.
     */
    setUpdateTime(seconds: number, nanos?: number): OrderUpdate;

    /**
     * Set the user notification content of the order update.
     *
     * @param title Title of the notification.
     * @param text Text of the notification.
     * @return Returns current constructed OrderUpdate.
     */
    setUserNotification(title: string, text: object): OrderUpdate;

    /**
     * Sets the total price for this order.
     *
     * @param priceType One of TransactionValues.PriceType.
     * @param currencyCode Currency code of price.
     * @param units Unit count of price.
     * @param nanos Partial unit count of price.
     * @return Returns current constructed OrderUpdate.
     */
    setTotalPrice(priceType: TransactionValues.PriceType, currencyCode: string, units: number, nanos?: number): OrderUpdate;

    /**
     * Adds an actionable item for the user to manage the order.
     *
     * @param type One of TransactionValues.ActionType.
     * @param label Button label.
     * @param url URL to open when button is clicked.
     * @return Returns current constructed OrderUpdate.
     */
    addOrderManagementAction(type: TransactionValues.ActionType, label: string, url: string): OrderUpdate;

    /**
     * Adds a single price update for a particular line item in the order.
     *
     * @param itemId Line item ID for the order item updated.
     * @param priceType One of TransactionValues.PriceType.
     * @param currencyCode Currency code of new price.
     * @param units Unit count of new price.
     * @param nanos Partial unit count of new price.
     * @param reason Reason for the price change. Required unless a
     *     reason for this line item change was already declared in
     *     addLineItemStateUpdate.
     * @return Returns current constructed OrderUpdate.
     */
    addLineItemPriceUpdate(itemId: string, priceType: TransactionValues.PriceType, currencyCode: string, units: number, nanos?: number, reason?: string): OrderUpdate;

    /**
     * Adds a single state update for a particular line item in the order.
     *
     * @param itemId Line item ID for the order item updated.
     * @param state One of TransactionValues.OrderState.
     * @param label Label for the new item state.
     * @param reason Reason for the price change. This will overwrite
     *     any reason given in addLineitemPriceUpdate.
     * @return Returns current constructed OrderUpdate.
     */
    addLineItemStateUpdate(itemId: string, state: TransactionValues.OrderState, label: string, reason?: string): OrderUpdate;

    /**
     * Sets some extra information about the order. Takes an order update info
     * type, and any accompanying data. This should only be called once per
     * order update.
     *
     * @param type One of TransactionValues.OrderStateInfo.
     * @param data Proper Object matching the data necessary for the info
     *     type. For instance, for the TransactionValues.OrderStateInfo.RECEIPT info
     *     type, use the {@link ReceiptInfo} data type.
     * @return Returns current constructed OrderUpdate.
     */
    setInfo(type: string, data: object): OrderUpdate;
}
