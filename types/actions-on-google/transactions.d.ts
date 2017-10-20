
/**
 * Amount type.
 * @typedef {object} Amount
 * @property {string} currencyCode - Currency code of price.
 * @property {number} units - Unit count of price.
 * @property {number} [nanos] - Partial unit count of price.
 */
declare type Amount = {
    currencyCode: string;
    units: number;
    nanos: number;
};

/**
 * Price type.
 * @typedef {object} Price
 * @property {string} type - One of Transaction.PriceType.
 * @property {Amount} amount
 */
declare type Price = {
    type: string;
    amount: Amount;
};

/**
 * Order rejection info.
 * @typedef {object} RejectionInfo
 * @property {string} type - One of Transaction.RejectionType.
 * @property {string} reason - Reason for the order rejection.
 */
declare type RejectionInfo = {
    type: string;
    reason: string;
};

/**
 * Order receipt info.
 * @typedef {object} ReceiptInfo
 * @property {string} confirmedActionOrderId - Action provided order ID. Used
 *     when the order has been received by the integrator.
 */
declare type ReceiptInfo = {
    confirmedActionOrderId: string;
};

/**
 * Order cancellation info.
 * @typedef {object} CancellationInfo
 * @property {string} reason - Reason for the cancellation.
 */
declare type CancellationInfo = {
    reason: string;
};

/**
 * UTC timestamp.
 * @typedef {object} Timestamp
 * @property {number} seconds - Seconds since Unix epoch.
 * @property {number} [nanos] - Partial seconds since Unix epoch.
 */
declare type Timestamp = {
    seconds: number;
    nanos: number;
};

/**
 * Order transit info.
 * @typedef {object} TransitInfo
 * @property {Timestamp} updatedTime - UTC timestamp of the transit update.
 */
declare type TransitInfo = {
    updatedTime: Timestamp;
};

/**
 * Order fulfillment info.
 * @typedef {object} FulfillmentInfo
 * @property {Timestamp} deliveryTime - UTC timestamp of the fulfillment update.
 */
declare type FulfillmentInfo = {
    deliveryTime: Timestamp;
};

/**
 * Order return info.
 * @typedef {object} ReturnInfo
 * @property {string} reason - Reason for the return.
 */
declare type ReturnInfo = {
    reason: string;
};

/**
 * Transaction config for transactions not involving a Google provided
 * payment instrument.
 * @typedef {object} ActionPaymentTransactionConfig
 * @property {boolean} deliveryAddressRequired - True if delivery address is
 *     required for the transaction.
 * @property {boolean} type - One of Transactions.PaymentType.
 * @property {string} displayName - The name of the instrument displayed on
 *     receipt. For example, for card payment, could be "VISA-1234".
 * @property {CustomerInfoOptions=} customerInfoOptions
 */
declare type ActionPaymentTransactionConfig = {
    deliveryAddressRequired: boolean;
    type: boolean;
    displayName: string;
    customerInfoOptions: CustomerInfoOptions;
};

/**
 * Transaction config for transactions involving a Google provided payment
 * instrument.
 * @typedef {object} GooglePaymentTransactionConfig
 * @property {boolean} deliveryAddressRequired - True if delivery address is
 *     required for the transaction.
 * @property {Object} tokenizationParameters - Tokenization parameters provided
 *     by payment gateway.
 * @property {Array<string>} cardNetworks - List of accepted card networks.
 *     Must be any number of Transactions.CardNetwork.
 * @property {boolean} prepaidCardDisallowed - True if prepaid cards are not
 *     allowed for transaction.
 * @property {CustomerInfoOptions=} customerInfoOptions
 */
declare type GooglePaymentTransactionConfig = {
    deliveryAddressRequired: boolean;
    tokenizationParameters: any;
    cardNetworks: string[];
    prepaidCardDisallowed: boolean;
    customerInfoOptions: CustomerInfoOptions;
};

/**
 * Customer information requested as part of the transaction
 * @typedef {object} CustomerInfoOptions
 * @property {Array<string>} customerInfoProperties - one of
 *    Transactions.CustomerInfoProperties
 */
declare type CustomerInfoOptions = {
    customerInfoProperties: string[];
};

/**
 * Postal address type.
 * @typedef {object} PostalAddress
 * @property {string} regionCode
 * @property {string} languageCode
 * @property {string} postalCode
 * @property {string} administrativeArea
 * @property {string} locality
 * @property {Array<string>} addressLines
 * @property {string} recipients
 */
declare type PostalAddress = {
    regionCode: string;
    languageCode: string;
    postalCode: string;
    administrativeArea: string;
    locality: string;
    addressLines: string[];
    recipients: string;
};

/**
 * Generic Location type.
 * @typedef {object} Location
 * @property {PostalAddress} postalAddress
 * @property {string} phoneNumber
 * @property {string} notes
 */
declare type Location = {
    postalAddress: PostalAddress;
    phoneNumber: string;
    notes: string;
};

/**
 * Decision and order information returned when calling getTransactionDecision().
 * @typedef {object} TransactionDecision
 * @property {string} userDecision - One of Transactions.ConfirmationDecision.
 * @property {Object} checkResult
 * @property {string} checkResult.resultType - One of Transactions.ResultType.
 * @property {Object} order
 * @property {Order} order.finalOrder - The proposed order used in the transaction
 *     decision.
 * @property {string} order.googleOrderId - Order ID assigned by Google.
 * @property {string} order.actionOrderId - User visible order ID set in proposed
 *     order.
 * @property {Object} order.orderDate
 * @property {string} order.orderDate.seconds
 * @property {number} order.orderDate.nanos
 * @property {Object} order.paymentInfo
 * @property {Object} order.customerInfo
 * @property {string} order.customerInfo.email - Customer email.
 * @property {Location} deliveryAddress - The delivery address if user
 *     requested. Will appear if userDecision is
 *     Transactions.DELIVERY_ADDRESS_UPDATED.
 */
declare type TransactionDecision = {
    userDecision: string;
    checkResult: any;
    "checkResult.resultType": string;
    order: any;
    "order.finalOrder": Order;
    "order.googleOrderId": string;
    "order.actionOrderId": string;
    "order.orderDate": any;
    "order.orderDate.seconds": string;
    "order.orderDate.nanos": number;
    "order.paymentInfo": any;
    "order.customerInfo": any;
    "order.customerInfo.email": string;
    deliveryAddress: Location;
};

/**
 * Values related to supporting transactions.
 * @readonly
 * @typedef {object} TransactionValues
 * @property {any} CardNetwork - List of transaction card networks available when paying with Google.
 * @property {any} ItemType - List of possible item types.
 * @property {any} PriceType - List of price types.
 * @property {any} PaymentType - List of possible item types.
 * @property {any} CustomerInfoProperties - List of customer information properties that can be requested.
 * @property {any} ConfirmationDecision - List of possible order confirmation user decisions
 * @property {any} OrderState - List of possible order states.
 * @property {any} OrderAction - List of possible actions to take on the order.
 * @property {any} RejectionType - List of possible types of order rejection.
 * @property {any} OrderStateInfo - List of possible order state objects.
 * @property {any} ResultType - List of possible order transaction requirements check result types.
 * @property {any} DeliveryAddressDecision - List of possible user decisions to give delivery address.
 * @property {any} LocationType - List of possible order location types.
 * @property {any} TimeType - List of possible order time types.
 */
declare type TransactionValues = {
    CardNetwork: any;
    ItemType: any;
    PriceType: any;
    PaymentType: any;
    CustomerInfoProperties: any;
    ConfirmationDecision: any;
    OrderState: any;
    OrderAction: any;
    RejectionType: any;
    OrderStateInfo: any;
    ResultType: any;
    DeliveryAddressDecision: any;
    LocationType: any;
    TimeType: any;
};

/**
 * List of transaction card networks available when paying with Google.
 * @readonly
 * @enum {string}
 */
declare const enum CardNetwork {
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
    JCB,
}

/**
 * Valid keys for the TransactionValues.OrderStateInfo enum.
 * @readonly
 * @enum {string}
 */
declare const enum reverseOrderStateInfo {
}

/**
 * Class for initializing and constructing Order with chainable interface.
 */
declare class Order {
    constructor(orderId: string);

    /**
     * ID for the order. Required.
     * @type {string}
     */
    id: string;

    /**
     * Cart for the order.
     * @type {Cart}
     */
    cart: Cart;

    /**
     * Items not held in the order cart.
     * @type {Array<LineItem>}
     */
    otherItems: (LineItem)[];

    /**
     * Image for the order.
     * @type {Image}
     */
    image: Image;

    /**
     * TOS for the order.
     * @type {string}
     */
    termsOfServiceUrl: string;

    /**
     * Total price for the order.
     * @type {Price}
     */
    totalPrice: Price;

    /**
     * Extensions for this order. Used for vertical-specific order attributes,
     * like times and locations.
     * @type {Object}
     */
    extension: any;

    /**
     * Set the cart for this order.
     * @param {Cart} cart Cart for this order.
     * @return {Order} Returns current constructed Order.
     */
    setCart(cart: Cart): Order;

    /**
     * Adds a single item or list of items to the non-cart items list.
     * @param {LineItem|Array<LineItem>} items Line Items to add.
     * @return {Order} Returns current constructed Order.
     */
    addOtherItems(items: LineItem | (LineItem)[]): Order;

    /**
     * Sets the image for this order.
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
     * @param {string} url String URL of the TOS.
     * @return {Order} Returns current constructed Order.
     */
    setTermsOfService(url: string): Order;

    /**
     * Sets the total price for this order.
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of price.
     * @param {number} units Unit count of price.
     * @param {number=} nanos Partial unit count of price.
     * @return {Order} Returns current constructed Order.
     */
    setTotalPrice(priceType: string, currencyCode: string, units: number, nanos?: number): Order;

    /**
     * Adds an associated location to the order. Up to 2 locations can be added.
     * @param {string} type One of TransactionValues.LocationType.
     * @param {Location} location Location to add.
     * @return {Order} Returns current constructed Order.
     */
    addLocation(type: string, location: Location): Order;

    /**
     * Sets an associated time to the order.
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
declare class Cart {
    constructor(cartId?: string);

    /**
     * ID for the cart. Optional.
     * @type {string}
     */
    id: string;

    /**
     * Merchant providing the cart.
     * @type {Object}
     */
    merchant: any;

    /**
     * Optional notes about the cart.
     * @type {string}
     */
    notes: string;

    /**
     * Items held in the order cart.
     * @type {Array<LineItem>}
     */
    lineItems: (LineItem)[];

    /**
     * Non-line items.
     * @type {Array<LineItem>}
     */
    otherItems: (LineItem)[];

    /**
     * Set the merchant for this cart.
     * @param {string} id Merchant ID.
     * @param {string} name Name of the merchant.
     * @return {Cart} Returns current constructed Cart.
     */
    setMerchant(id: string, name: string): Cart;

    /**
     * Set the notes for this cart.
     * @param {string} notes Notes.
     * @return {Cart} Returns current constructed Cart.
     */
    setNotes(notes: string): Cart;

    /**
     * Adds a single item or list of items to the cart.
     * @param {LineItem|Array<LineItem>} items Line Items to add.
     * @return {Cart} Returns current constructed Cart.
     */
    addLineItems(items: LineItem | (LineItem)[]): Cart;

    /**
     * Adds a single item or list of items to the non-items list of this cart.
     * @param {LineItem|Array<LineItem>} items Line Items to add.
     * @return {Cart} Returns current constructed Cart.
     */
    addOtherItems(items: LineItem | (LineItem)[]): Cart;

}

/**
 * Class for initializing and constructing LineItem with chainable interface.
 */
declare class LineItem {
    constructor(lineItemId: string, name: string);

    /**
     * Item ID.
     * @type {string}
     */
    id: string;

    /**
     * Name of the item.
     * @type {string}
     */
    name: string;

    /**
     * Item price.
     * @type {Price}
     */
    price: Price;

    /**
     * Sublines for current item. Only valid if item type is REGULAR.
     * @type {Array<string|LineItem>}
     */
    subLines: (string | LineItem)[];

    /**
     * Image of the item.
     * @type {Image}
     */
    image: Image;

    /**
     * Type of the item. One of TransactionValues.ItemType.
     * @type {string}
     */
    type: string;

    /**
     * Quantity of the item.
     * @type {number}
     */
    quantity: number;

    /**
     * Description for the item.
     * @type {string}
     */
    description: string;

    /**
     * Offer ID for the item.
     * @type {string}
     */
    offerId: string;

    /**
     * Adds a single item or list of items or notes to the sublines. Only valid
     * if item type is REGULAR.
     * @param {string|LineItem|Array<string|LineItem>} items Sublines to add.
     * @return {LineItem} Returns current constructed LineItem.
     */
    addSublines(items: string | LineItem | (string | LineItem)[]): LineItem;

    /**
     * Sets the image for this item.
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
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of price.
     * @param {number} units Unit count of price.
     * @param {number=} nanos Partial unit count of price.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setPrice(priceType: string, currencyCode: string, units: number, nanos?: number): LineItem;

    /**
     * Set the type of the item.
     * @param {string} type Type of the item. One of TransactionValues.ItemType.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setType(type: string): LineItem;

    /**
     * Set the quantity of the item.
     * @param {number} quantity Quantity of the item.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setQuantity(quantity: number): LineItem;

    /**
     * Set the description of the item.
     * @param {string} description Description of the item.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setDescription(description: string): LineItem;

    /**
     * Set the Offer ID of the item.
     * @param {string} offerId Offer ID of the item.
     * @return {LineItem} Returns current constructed LineItem.
     */
    setOfferId(offerId: string): LineItem;

}

/**
 * Class for initializing and constructing OrderUpdate with chainable interface.
 */
declare class OrderUpdate {
    constructor(orderId: string, isGoogleOrderId: boolean);

    /**
     * Google provided identifier of the order.
     * @type {string}
     */
    googleOrderId: string;

    /**
     * App provided identifier of the order.
     * @type {string}
     */
    actionOrderId: string;

    /**
     * State of the order.
     * @type {Object}
     */
    orderState: any;

    /**
     * Updates for items in the order. Mapped by item id to state or price.
     * @type {Object}
     */
    lineItemUpdates: any;

    /**
     * UTC timestamp of the order update.
     * @type {Timestamp}
     */
    updateTime: Timestamp;

    /**
     * Actionable items presented to the user to manage the order.
     * @type {Object}
     */
    orderManagementActions: any;

    /**
     * Notification content to the user for the order update.
     * @type {Object}
     */
    userNotification: any;

    /**
     * Updated total price of the order.
     * @type {Price}
     */
    totalPrice: Price;

    /**
     * Set the Google provided order ID of the order.
     * @param {string} orderId Google provided order ID.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setGoogleOrderId(orderId: string): OrderUpdate;

    /**
     * Set the Action provided order ID of the order.
     * @param {string} orderId Action provided order ID.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setActionOrderId(orderId: string): OrderUpdate;

    /**
     * Set the state of the order.
     * @param {string} state One of TransactionValues.OrderState.
     * @param {string} label Label for the order state.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setOrderState(state: string, label: string): OrderUpdate;

    /**
     * Set the update time of the order.
     * @param {number} seconds Seconds since Unix epoch.
     * @param {number=} nanos Partial time units.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setUpdateTime(seconds: number, nanos?: number): OrderUpdate;

    /**
     * Set the user notification content of the order update.
     * @param {string} title Title of the notification.
     * @param {Object} text Text of the notification.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setUserNotification(title: string, text: any): OrderUpdate;

    /**
     * Sets the total price for this order.
     * @param {string} priceType One of TransactionValues.PriceType.
     * @param {string} currencyCode Currency code of price.
     * @param {number} units Unit count of price.
     * @param {number=} nanos Partial unit count of price.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setTotalPrice(priceType: string, currencyCode: string, units: number, nanos?: number): OrderUpdate;

    /**
     * Adds an actionable item for the user to manage the order.
     * @param {string} type One of TransactionValues.OrderActions.
     * @param {string} label Button label.
     * @param {string} url URL to open when button is clicked.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    addOrderManagementAction(type: string, label: string, url: string): OrderUpdate;

    /**
     * Adds a single price update for a particular line item in the order.
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
    addLineItemPriceUpdate(itemId: string, priceType: string, currencyCode: string, units: number, nanos?: number, reason?: string): OrderUpdate;

    /**
     * Adds a single state update for a particular line item in the order.
     * @param {string} itemId Line item ID for the order item updated.
     * @param {string} state One of TransactionValues.OrderState.
     * @param {string} label Label for the new item state.
     * @param {string=} reason Reason for the price change. This will overwrite
     *     any reason given in addLineitemPriceUpdate.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    addLineItemStateUpdate(itemId: string, state: string, label: string, reason?: string): OrderUpdate;

    /**
     * Sets some extra information about the order. Takes an order update info
     * type, and any accompanying data. This should only be called once per
     * order update.
     * @param {string} type One of TransactionValues.OrderStateInfo.
     * @param {Object} data Proper Object matching the data necessary for the info
     *     type. For instance, for the TransactionValues.OrderStateInfo.RECEIPT info
     *     type, use the {@link ReceiptInfo} data type.
     * @return {OrderUpdate} Returns current constructed OrderUpdate.
     */
    setInfo(type: string, data: any): OrderUpdate;

}
