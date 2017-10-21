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
        resultType: ResultType;
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
export const TransactionValues: {
    /** List of transaction card networks available when paying with Google. */
    readonly CardNetwork: typeof CardNetwork;
    /** List of possible item types. */
    readonly ItemType: typeof ItemType;
    /** List of price types. */
    readonly PriceType: typeof PriceType;
    /** List of possible item types. */
    readonly PaymentType: typeof PaymentType;
    /** List of customer information properties that can be requested. */
    readonly CustomerInfoProperties: typeof CustomerInfoProperties;
    /** List of possible order confirmation user decisions */
    readonly ConfirmationDecision: typeof ConfirmationDecision;
    /** List of possible order states. */
    readonly OrderState: typeof OrderState;
    /** List of possible actions to take on the order. */
    readonly OrderAction: typeof OrderAction;
    /** List of possible types of order rejection. */
    readonly RejectionType: typeof RejectionType;
    /** List of possible order state objects. */
    readonly OrderStateInfo: typeof OrderStateInfo;
    /** List of possible order transaction requirements check result types. */
    readonly ResultType: typeof ResultType;
    /** List of possible user decisions to give delivery address. */
    readonly DeliveryAddressDecision: typeof DeliveryAddressDecision;
    /** List of possible order location types. */
    readonly LocationType: typeof LocationType;
    /** List of possible order time types. */
    readonly TimeType: typeof TimeType;
};

/**
 * List of transaction card networks available when paying with Google.
 */
export enum CardNetwork {
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
 */
export enum ItemType {
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
export enum PriceType {
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
export enum PaymentType {
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
export enum CustomerInfoProperties {
    EMAIL
}

/**
 * List of possible order confirmation user decisions
 */
export enum ConfirmationDecision {
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
export enum OrderState {
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
 */
export enum OrderAction {
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
    REVIEW
}

/**
 * List of possible types of order rejection.
 */
export enum RejectionType {
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
export enum OrderStateInfo {
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
export enum ResultType {
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
 */
export enum DeliveryAddressDecision {
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
 */
export enum LocationType {
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
    DESTINATION
}

/**
 * List of possible order time types.
 */
export enum TimeType {
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
    setTotalPrice(priceType: PriceType, currencyCode: string, units: number, nanos?: number): Order;

    /**
     * Adds an associated location to the order. Up to 2 locations can be added.
     *
     * @param type One of TransactionValues.LocationType.
     * @param location Location to add.
     * @return Returns current constructed Order.
     */
    addLocation(type: LocationType, location: Location): Order;

    /**
     * Sets an associated time to the order.
     *
     * @param type One of TransactionValues.TimeType.
     * @param time Time to add. Time should be ISO 8601 representation
     *     of time value. Could be date, datetime, or duration.
     * @return Returns current constructed Order.
     */
    setTime(type: TimeType, time: string): Order;
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
     * Type of the item. One of TransactionValues.ItemType.
     */
    type?: ItemType;

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
    setPrice(priceType: PriceType, currencyCode: string, units: number, nanos?: number): LineItem;

    /**
     * Set the type of the item.
     *
     * @param type Type of the item. One of TransactionValues.ItemType.
     * @return Returns current constructed LineItem.
     */
    setType(type: ItemType): LineItem;

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
     * UTC timestamp of the order update.
     */
    updateTime?: object;

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
    setOrderState(state: OrderState, label: string): OrderUpdate;

    /**
     * Set the update time of the order.
     *
     * @param seconds Seconds since Unix epoch.
     * @param nanos Partial time units.
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
    setTotalPrice(priceType: PriceType, currencyCode: string, units: number, nanos?: number): OrderUpdate;

    /**
     * Adds an actionable item for the user to manage the order.
     *
     * @param type One of TransactionValues.OrderActions.
     * @param label Button label.
     * @param url URL to open when button is clicked.
     * @return Returns current constructed OrderUpdate.
     */
    addOrderManagementAction(type: OrderAction, label: string, url: string): OrderUpdate;

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
    addLineItemPriceUpdate(itemId: string, priceType: PriceType, currencyCode: string, units: number, nanos?: number, reason?: string): OrderUpdate;

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
    addLineItemStateUpdate(itemId: string, state: OrderState, label: string, reason?: string): OrderUpdate;

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
