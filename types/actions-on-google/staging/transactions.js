/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A collection of Transaction related constants, utility functions, and
 * builders.
 */

'use strict';

const Debug = require('debug');
const error = Debug('actions-on-google:error');

const ORDER_LOCATION_LIMIT = 2;
const GENERIC_EXTENSION_TYPE = 'type.googleapis.com/google.actions.v2.orders.GenericExtension';

/**
 * Price type.
 * @typedef {Object} Price
 * @property {string} type - One of Transaction.PriceType.
 * @property {Object} amount
 * @property {string} amount.currencyCode - Currency code of price.
 * @property {number} amount.units - Unit count of price.
 * @property {number=} amount.nanos - Partial unit count of price.
 */

/**
 * Order rejection info.
 * @typedef {Object} RejectionInfo
 * @property {string} type - One of Transaction.RejectionType.
 * @property {string} reason - Reason for the order rejection.
 */

/**
 * Order receipt info.
 * @typedef {Object} ReceiptInfo
 * @property {string} confirmedActionOrderId - Action provided order ID. Used
 *     when the order has been received by the integrator.
 */

/**
 * Order cancellation info.
 * @typedef {Object} CancellationInfo
 * @property {string} reason - Reason for the cancellation.
 */

/**
 * Order transit info.
 * @typedef {Object} TransitInfo
 * @property {Object} updatedTime - UTC timestamp of the transit update.
 * @property {number} updatedTime.seconds - Seconds since Unix epoch.
 * @property {number=} updatedTime.nanos - Partial seconds since Unix epoch.
 */

/**
 * Order fulfillment info.
 * @typedef {Object} FulfillmentInfo
 * @property {Object} deliveryTime - UTC timestamp of the fulfillment update.
 * @property {number} deliveryTime.seconds - Seconds since Unix epoch.
 * @property {number=} deliveryTime.nanos - Partial seconds since Unix epoch.
 */

/**
 * Order return info.
 * @typedef {Object} ReturnInfo
 * @property {string} reason - Reason for the return.
 */

/**
 * Transaction config for transactions not involving a Google provided
 * payment instrument.
 * @typedef {Object} ActionPaymentTransactionConfig
 * @property {boolean} deliveryAddressRequired - True if delivery address is
 *     required for the transaction.
 * @property {boolean} type - One of Transactions.PaymentType.
 * @property {string} displayName - The name of the instrument displayed on
 *     receipt. For example, for card payment, could be "VISA-1234".
 * @property {CustomerInfoOptions=} customerInfoOptions
 */

/**
 * Transaction config for transactions involving a Google provided payment
 * instrument.
 * @typedef {Object} GooglePaymentTransactionConfig
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

 /**
 * Customer information requested as part of the transaction
 * @typedef {Object} CustomerInfoOptions
 * @property {Array<string>} customerInfoProperties - one of
 *    Transactions.CustomerInfoProperties
 */

/**
 * Generic Location type.
 * @typedef {Object} Location
 * @property {Object} postalAddress
 * @property {string} postalAddress.regionCode
 * @property {string} postalAddress.languageCode
 * @property {string} postalAddress.postalCode
 * @property {string} postalAddress.administrativeArea
 * @property {string} postalAddress.locality
 * @property {Array<string>} postalAddress.addressLines
 * @property {string} postalAddress.recipients
 * @property {string} phoneNumber
 * @property {string} notes
 */

/**
 * Decision and order information returned when calling getTransactionDecision().
 * @typedef {Object} TransactionDecision
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
 * @property {DeliveryAddress} deliveryAddress - The delivery address if user
 *     requested. Will appear if userDecision is
 *     Transactions.DELIVERY_ADDRESS_UPDATED.
 */

/**
 * Values related to supporting transactions.
 * @readonly
 * @type {Object}
 */
const TransactionValues = {
  /**
   * List of transaction card networks available when paying with Google.
   * @readonly
   * @enum {string}
   */
  CardNetwork: {
    /**
     * Unspecified.
     */
    UNSPECIFIED: 'UNSPECIFIED',
    /**
     * American Express.
     */
    AMEX: 'AMEX',
    /**
     * Discover.
     */
    DISCOVER: 'DISCOVER',
    /**
     * Master Card.
     */
    MASTERCARD: 'MASTERCARD',
    /**
     * Visa.
     */
    VISA: 'VISA',
    /**
     * JCB.
     */
    JCB: 'JCB'
  },
  /**
   * List of possible item types.
   * @readonly
   * @enum {string}
   */
  ItemType: {
    /**
     * Unspecified.
     */
    UNSPECIFIED: 'UNSPECIFIED',
    /**
     * Regular.
     */
    REGULAR: 'REGULAR',
    /**
     * Tax.
     */
    TAX: 'TAX',
    /**
     * Discount
     */
    DISCOUNT: 'DISCOUNT',
    /**
     * Gratuity
     */
    GRATUITY: 'GRATUITY',
    /**
     * Delivery
     */
    DELIVERY: 'DELIVERY',
    /**
     * Subtotal
     */
    SUBTOTAL: 'SUBTOTAL',
    /**
     * Fee. For everything else, there's fee.
     */
    FEE: 'FEE'
  },
  /**
   * List of price types.
   * @readonly
   * @enum {string}
   */
  PriceType: {
    /**
     * Unknown.
     */
    UNKNOWN: 'UNKNOWN',
    /**
     * Estimate.
     */
    ESTIMATE: 'ESTIMATE',
    /**
     * Actual.
     */
    ACTUAL: 'ACTUAL'
  },
  /**
   * List of possible item types.
   * @readonly
   * @enum {string}
   */
  PaymentType: {
    /**
     * Unspecified.
     */
    UNSPECIFIED: 'UNSPECIFIED',
    /**
     * Payment card.
     */
    PAYMENT_CARD: 'PAYMENT_CARD',
    /**
     * Bank.
     */
    BANK: 'BANK',
    /**
     * Loyalty program.
     */
    LOYALTY_PROGRAM: 'LOYALTY_PROGRAM',
    /**
     * On order fulfillment, such as cash on delivery.
     */
    ON_FULFILLMENT: 'ON_FULFILLMENT',
    /**
     * Gift card.
     */
    GIFT_CARD: 'GIFT_CARD'
  },
  /**
   * List of customer information properties that can be requested.
   * @readonly
   * @enum {string}
   */
  CustomerInfoProperties: {
    EMAIL: 'EMAIL'
  },
  /**
   * List of possible order confirmation user decisions
   * @readonly
   * @enum {string}
   */
  ConfirmationDecision: {
    /**
     * Order was approved by user.
     */
    ACCEPTED: 'ORDER_ACCEPTED',
    /**
     * Order was declined by user.
     */
    REJECTED: 'ORDER_REJECTED',
    /**
     * Order was not declined, but the delivery address was updated during
     * confirmation.
     */
    DELIVERY_ADDRESS_UPDATED: 'DELIVERY_ADDRESS_UPDATED',
    /**
     * Order was not declined, but the cart was updated during confirmation.
     */
    CART_CHANGE_REQUESTED: 'CART_CHANGE_REQUESTED'
  },
  /**
   * List of possible order states.
   * @readonly
   * @enum {string}
   */
  OrderState: {
    /**
     * Order was rejected.
     */
    REJECTED: 'REJECTED',
    /**
     * Order was confirmed by integrator and is active.
     */
    CONFIRMED: 'CONFIRMED',
    /**
     * User cancelled the order.
     */
    CANCELLED: 'CANCELLED',
    /**
     * Order is being delivered.
     */
    IN_TRANSIT: 'IN_TRANSIT',
    /**
     * User performed a return.
     */
    RETURNED: 'RETURNED',
    /**
     * User received what was ordered.
     */
    FULFILLED: 'FULFILLED'
  },
  /**
   * List of possible actions to take on the order.
   * @readonly
   * @enum {string}
   */
  OrderAction: {
    /**
     * View details.
     */
    VIEW_DETAILS: 'VIEW_DETAILS',
    /**
     * Modify order.
     */
    MODIFY: 'MODIFY',
    /**
     * Cancel order.
     */
    CANCEL: 'CANCEL',
    /**
     * Return order.
     */
    RETURN: 'RETURN',
    /**
     * Exchange order.
     */
    EXCHANGE: 'EXCHANGE',
    /**
     * Email.
     */
    EMAIL: 'EMAIL',
    /**
     * Call.
     */
    CALL: 'CALL',
    /**
     * Reorder.
     */
    REORDER: 'REORDER',
    /**
     * Review.
     */
    REVIEW: 'REVIEW'
  },
  /**
   * List of possible types of order rejection.
   * @readonly
   * @enum {string}
   */
  RejectionType: {
    /**
     * Unknown
     */
    UNKNOWN: 'UNKNOWN',
    /**
     * Payment was declined.
     */
    PAYMENT_DECLINED: 'PAYMENT_DECLINED'
  },
  /**
   * List of possible order state objects.
   * @readonly
   * @enum {string}
   */
  OrderStateInfo: {
    /**
     * Information about order rejection. Used with {@link RejectionInfo}.
     */
    REJECTION: 'rejectionInfo',
    /**
     * Information about order receipt. Used with {@link ReceiptInfo}.
     */
    RECEIPT: 'receipt',
    /**
     * Information about order cancellation. Used with {@link CancellationInfo}.
     */
    CANCELLATION: 'cancellationInfo',
    /**
     * Information about in-transit order. Used with {@link TransitInfo}.
     */
    IN_TRANSIT: 'inTransitInfo',
    /**
     * Information about order fulfillment. Used with {@link FulfillmentInfo}.
     */
    FULFILLMENT: 'fulfillmentInfo',
    /**
     * Information about order return. Used with {@link ReturnInfo}.
     */
    RETURN: 'returnInfo'
  },
  /**
   * List of possible order transaction requirements check result types.
   * @readonly
   * @enum {string}
   */
  ResultType: {
    /**
     * Unspecified.
     */
    UNSPECIFIED: 'RESULT_TYPE_UNSPECIFIED',
    /**
     * OK to continue transaction.
     */
    OK: 'OK',
    /**
     * User is expected to take action, e.g. enable payments, to continue
     * transaction.
     */
    USER_ACTION_REQUIRED: 'USER_ACTION_REQUIRED',
    /**
     * Transactions are not supported on current device/surface.
     */
    ASSISTANT_SURFACE_NOT_SUPPORTED: 'ASSISTANT_SURFACE_NOT_SUPPORTED',
    /**
     * Transactions are not supported for current region/country.
     */
    REGION_NOT_SUPPORTED: 'REGION_NOT_SUPPORTED'
  },
  /**
   * List of possible user decisions to give delivery address.
   * @readonly
   * @enum {string}
   */
  DeliveryAddressDecision: {
    /**
     * Unknown.
     */
    UNKNOWN: 'UNKNOWN_USER_DECISION',
    /**
     * User granted delivery address.
     */
    ACCEPTED: 'ACCEPTED',
    /**
     * User denied to give delivery address.
     */
    REJECTED: 'REJECTED'
  },
  /**
   * List of possible order location types.
   * @readonly
   * @enum {string}
   */
  LocationType: {
    /**
     * Unknown.
     */
    UNKNOWN: 'UNKNOWN',
    /**
     * Delivery location for an order.
     */
    DELIVERY: 'DELIVERY',
    /**
     * Business location of order provider.
     */
    BUSINESS: 'BUSINESS',
    /**
     * Origin of the order.
     */
    ORIGIN: 'ORIGIN',
    /**
     * Destination of the order.
     */
    DESTINATION: 'DESTINATION'
  },
  /**
   * List of possible order time types.
   * @readonly
   * @enum {string}
   */
  TimeType: {
    /**
     * Unknown.
     */
    UNKNOWN: 'UNKNOWN',
    /**
     * Date of delivery for the order.
     */
    DELIVERY_DATE: 'DELIVERY_DATE',
    /**
     * Estimated Time of Arrival for order.
     */
    ETA: 'ETA',
    /**
     * Reservation time.
     */
    RESERVATION_SLOT: 'RESERVATION_SLOT'
  }
};

/**
 * Valid keys for the TransactionValues.OrderStateInfo enum.
 * @readonly
 * @enum {string}
 */
const reverseOrderStateInfo = Object.keys(TransactionValues.OrderStateInfo)
  .reduce((reverseValues, infoType) => {
    reverseValues[TransactionValues.OrderStateInfo[infoType]] = infoType;
    return reverseValues;
  }, {});

/**
 * Class for initializing and constructing Order with chainable interface.
 */
const Order = class {
  /**
   * Constructor for Order.
   *
   * @param {string} orderId Unique identifier for the order.
   */
  constructor (orderId) {
    /**
     * ID for the order. Required.
     * @type {string}
     */
    this.id = orderId;

    /**
     * Cart for the order.
     * @type {Cart}
     */
    this.cart = undefined;

    /**
     * Items not held in the order cart.
     * @type {Array<LineItem>}
     */
    this.otherItems = [];

    /**
     * Image for the order.
     * @type {Image}
     */
    this.image = undefined;

    /**
     * TOS for the order.
     * @type {String}
     */
    this.termsOfServiceUrl = undefined;

    /**
     * Total price for the order.
     * @type {Price}
     */
    this.totalPrice = undefined;

    /**
     * Extensions for this order. Used for vertical-specific order attributes,
     * like times and locations.
     * @type {Object}
     */
    this.extension = undefined;
  }

  /**
   * Set the cart for this order.
   *
   * @param {Cart} cart Cart for this order.
   * @return {Order} Returns current constructed Order.
   */
  setCart (cart) {
    if (!cart) {
      error('Invalid cart');
      return this;
    }
    this.cart = cart;
    return this;
  }

  /**
   * Adds a single item or list of items to the non-cart items list.
   *
   * @param {LineItem|Array<LineItem>} items Line Items to add.
   * @return {Order} Returns current constructed Order.
   */
  addOtherItems (items) {
    if (!items) {
      error('items cannot be null');
      return this;
    }
    if (Array.isArray(items)) {
      for (let item of items) {
        this.otherItems.push(item);
      }
    } else {
      this.otherItems.push(items);
    }
    return this;
  }

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
  setImage (url, accessibilityText, width, height) {
    if (!url) {
      error('url cannot be empty');
      return this;
    }
    if (!accessibilityText) {
      error('accessibilityText cannot be empty');
      return this;
    }
    this.image = { url, accessibilityText };
    if (width) {
      this.image.width = width;
    }
    if (height) {
      this.image.height = height;
    }
    return this;
  }

  /**
   * Set the TOS for this order.
   *
   * @param {string} url String URL of the TOS.
   * @return {Order} Returns current constructed Order.
   */
  setTermsOfService (url) {
    if (!url) {
      error('Invalid TOS url');
      return this;
    }
    this.termsOfServiceUrl = url;
    return this;
  }

  /**
   * Sets the total price for this order.
   *
   * @param {string} priceType One of TransactionValues.PriceType.
   * @param {string} currencyCode Currency code of price.
   * @param {number} units Unit count of price.
   * @param {number=} nanos Partial unit count of price.
   * @return {Order} Returns current constructed Order.
   */
  setTotalPrice (priceType, currencyCode, units, nanos) {
    if (!priceType) {
      error('priceType cannot be empty');
      return this;
    }
    if (!currencyCode) {
      error('currencyCode cannot be empty');
      return this;
    }
    if (typeof units !== 'number' || Number.isNaN(units)) {
      error('Invalid units');
      return this;
    }
    this.totalPrice = {
      type: priceType,
      amount: {
        currencyCode: currencyCode,
        units: units,
        nanos: nanos || 0
      }
    };
    return this;
  }

  /**
   * Adds an associated location to the order. Up to 2 locations can be added.
   *
   * @param {string} type One of TransactionValues.LocationType.
   * @param {Location} location Location to add.
   * @return {Order} Returns current constructed Order.
   */
  addLocation (type, location) {
    if (!type) {
      error('type cannot be empty');
      return this;
    }
    if (!location) {
      error('location cannot be null');
      return this;
    }
    if (!this.extension) {
      this.extension = {
        '@type': GENERIC_EXTENSION_TYPE
      };
    }
    if (!this.extension.locations) {
      this.extension.locations = [];
    }
    if (this.extension.locations.length >= ORDER_LOCATION_LIMIT) {
      error('Order can have no more than ' + ORDER_LOCATION_LIMIT +
        ' associated locations');
      return this;
    }
    this.extension.locations.push({ type, location });
    return this;
  }

  /**
   * Sets an associated time to the order.
   *
   * @param {string} type One of TransactionValues.TimeType.
   * @param {string} time Time to add. Time should be ISO 8601 representation
   *     of time value. Could be date, datetime, or duration.
   * @return {Order} Returns current constructed Order.
   */
  setTime (type, time) {
    if (!type) {
      error('type cannot be empty');
      return this;
    }
    if (!time) {
      error('time cannot be empty');
      return this;
    }
    if (!this.extension) {
      this.extension = {
        '@type': GENERIC_EXTENSION_TYPE
      };
    }
    this.extension.time = { type, time_iso8601: time };
    return this;
  }
};

/**
 * Class for initializing and constructing Cart with chainable interface.
 */
const Cart = class {
  /**
   * Constructor for Cart.
   *
   * @param {string=} cartId Optional unique identifier for the cart.
   */
  constructor (cartId) {
    /**
     * ID for the cart. Optional.
     * @type {string}
     */
    this.id = cartId || undefined;

    /**
     * Merchant providing the cart.
     * @type {Object}
     */
    this.merchant = undefined;

    /**
     * Optional notes about the cart.
     * @type {string}
     */
    this.notes = undefined;

    /**
     * Items held in the order cart.
     * @type {Array<LineItem>}
     */
    this.lineItems = [];

    /**
     * Non-line items.
     * @type {Array<LineItem>}
     */
    this.otherItems = [];
  }

  /**
   * Set the merchant for this cart.
   *
   * @param {string} id Merchant ID.
   * @param {string} name Name of the merchant.
   * @return {Cart} Returns current constructed Cart.
   */
  setMerchant (id, name) {
    if (!id) {
      error('Merchant ID cannot be empty');
      return this;
    }
    if (!name) {
      error('Merchant name cannot be empty');
      return this;
    }
    this.merchant = { id, name };
    return this;
  }

  /**
   * Set the notes for this cart.
   *
   * @param {string} notes Notes.
   * @return {Cart} Returns current constructed Cart.
   */
  setNotes (notes) {
    if (!notes) {
      error('Notes cannot be empty');
      return this;
    }
    this.notes = notes;
    return this;
  }

  /**
   * Adds a single item or list of items to the cart.
   *
   * @param {LineItem|Array<LineItem>} items Line Items to add.
   * @return {Cart} Returns current constructed Cart.
   */
  addLineItems (items) {
    if (!items) {
      error('items cannot be null');
      return this;
    }
    if (Array.isArray(items)) {
      for (let item of items) {
        this.lineItems.push(item);
      }
    } else {
      this.lineItems.push(items);
    }
    return this;
  }

  /**
   * Adds a single item or list of items to the non-items list of this cart.
   *
   * @param {LineItem|Array<LineItem>} items Line Items to add.
   * @return {Cart} Returns current constructed Cart.
   */
  addOtherItems (items) {
    if (!items) {
      error('items cannot be null');
      return this;
    }
    if (Array.isArray(items)) {
      for (let item of items) {
        this.otherItems.push(item);
      }
    } else {
      this.otherItems.push(items);
    }
    return this;
  }
};

/**
 * Class for initializing and constructing LineItem with chainable interface.
 */
const LineItem = class {
  /**
   * Constructor for LineItem.
   *
   * @param {string} lineItemId Unique identifier for the item.
   * @param {string} name Name of the item.
   */
  constructor (lineItemId, name) {
    /**
     * Item ID.
     * @type {string}
     */
    this.id = lineItemId;

    /**
     * Name of the item.
     * @type {string}
     */
    this.name = name;

    /**
     * Item price.
     * @type {Price}
     */
    this.price = undefined;

    /**
     * Sublines for current item. Only valid if item type is REGULAR.
     * @type {Array<string|LineItem>}
     */
    this.subLines = undefined;

    /**
     * Image of the item.
     * @type {Image}
     */
    this.image = undefined;

    /**
     * Type of the item. One of TransactionValues.ItemType.
     * @type {string}
     */
    this.type = undefined;

    /**
     * Quantity of the item.
     * @type {number}
     */
    this.quantity = undefined;

    /**
     * Description for the item.
     * @type {string}
     */
    this.description = undefined;

    /**
     * Offer ID for the item.
     * @type {string}
     */
    this.offerId = undefined;
  }

  /**
   * Adds a single item or list of items or notes to the sublines. Only valid
   * if item type is REGULAR.
   *
   * @param {string|LineItem|Array<string|LineItem>} items Sublines to add.
   * @return {LineItem} Returns current constructed LineItem.
   */
  addSublines (items) {
    if (!items) {
      error('items cannot be null');
      return this;
    }
    if (!this.subLines) {
      this.subLines = [];
    }
    const list = (Array.isArray(items) ? items : [items]).map(item =>
      typeof item === 'string' ? { note: item } : { lineItem: item }
    );
    this.subLines.push(...list);
    return this;
  }

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
  setImage (url, accessibilityText, width, height) {
    if (!url) {
      error('url cannot be empty');
      return this;
    }
    if (!accessibilityText) {
      error('accessibilityText cannot be empty');
      return this;
    }
    this.image = {url, accessibilityText};
    if (width) {
      this.image.width = width;
    }
    if (height) {
      this.image.height = height;
    }
    return this;
  }

  /**
   * Sets the price of this item.
   *
   * @param {string} priceType One of TransactionValues.PriceType.
   * @param {string} currencyCode Currency code of price.
   * @param {number} units Unit count of price.
   * @param {number=} nanos Partial unit count of price.
   * @return {LineItem} Returns current constructed LineItem.
   */
  setPrice (priceType, currencyCode, units, nanos) {
    if (!priceType) {
      error('priceType cannot be empty');
      return this;
    }
    if (!currencyCode) {
      error('currencyCode cannot be empty');
      return this;
    }
    if (typeof units !== 'number' || Number.isNaN(units)) {
      error('Invalid units');
      return this;
    }
    this.price = {
      type: priceType,
      amount: {
        currencyCode: currencyCode,
        units: units,
        nanos: nanos || 0
      }
    };
    return this;
  }

  /**
   * Set the type of the item.
   *
   * @param {string} type Type of the item. One of TransactionValues.ItemType.
   * @return {LineItem} Returns current constructed LineItem.
   */
  setType (type) {
    if (!type) {
      error('type cannot be empty');
      return this;
    }
    this.type = type;
    return this;
  }

  /**
   * Set the quantity of the item.
   *
   * @param {number} quantity Quantity of the item.
   * @return {LineItem} Returns current constructed LineItem.
   */
  setQuantity (quantity) {
    if (!quantity) {
      error('quantity cannot be empty');
      return this;
    }
    this.quantity = quantity;
    return this;
  }

  /**
   * Set the description of the item.
   *
   * @param {string} description Description of the item.
   * @return {LineItem} Returns current constructed LineItem.
   */
  setDescription (description) {
    if (!description) {
      error('description cannot be empty');
      return this;
    }
    this.description = description;
    return this;
  }

  /**
   * Set the Offer ID of the item.
   *
   * @param {string} offerId Offer ID of the item.
   * @return {LineItem} Returns current constructed LineItem.
   */
  setOfferId (offerId) {
    if (!offerId) {
      error('offerId cannot be empty');
      return this;
    }
    this.offerId = offerId;
    return this;
  }
};

/**
 * Class for initializing and constructing OrderUpdate with chainable interface.
 */
const OrderUpdate = class {
  /**
   * Constructor for OrderUpdate.
   *
   * @param {string} orderId Unique identifier of the order.
   * @param {boolean} isGoogleOrderId True if the order ID is provided by
   *     Google. False if the order ID is app provided.
   */
  constructor (orderId, isGoogleOrderId) {
    /**
     * Google provided identifier of the order.
     * @type {string}
     */
    this.googleOrderId = isGoogleOrderId ? orderId : undefined;

    /**
     * App provided identifier of the order.
     * @type {string}
     */
    this.actionOrderId = !isGoogleOrderId ? orderId : undefined;

    /**
     * State of the order.
     * @type {Object}
     */
    this.orderState = undefined;

    /**
     * Updates for items in the order. Mapped by item id to state or price.
     * @type {Object}
     */
    this.lineItemUpdates = {};

    /**
     * UTC timestamp of the order update.
     * @type {Object}
     */
    this.updateTime = undefined;

    /**
     * Actionable items presented to the user to manage the order.
     * @type {Object}
     */
    this.orderManagementActions = [];

    /**
     * Notification content to the user for the order update.
     * @type {Object}
     */
    this.userNotification = undefined;

    /**
     * Updated total price of the order.
     * @type {Price}
     */
    this.totalPrice = undefined;
  }

  /**
   * Set the Google provided order ID of the order.
   *
   * @param {string} orderId Google provided order ID.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  setGoogleOrderId (orderId) {
    if (!orderId) {
      error('orderId cannot be empty');
      return this;
    }
    this.googleOrderId = orderId;
    return this;
  }

  /**
   * Set the Action provided order ID of the order.
   *
   * @param {string} orderId Action provided order ID.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  setActionOrderId (orderId) {
    if (!orderId) {
      error('orderId cannot be empty');
      return this;
    }
    this.actionOrderId = orderId;
    return this;
  }

  /**
   * Set the state of the order.
   *
   * @param {string} state One of TransactionValues.OrderState.
   * @param {string} label Label for the order state.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  setOrderState (state, label) {
    if (!state) {
      error('state cannot be empty');
      return this;
    }
    if (!label) {
      error('label cannot be empty');
      return this;
    }
    this.orderState = { state, label };
    return this;
  }

  /**
   * Set the update time of the order.
   *
   * @param {number} seconds Seconds since Unix epoch.
   * @param {number=} nanos Partial time units.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  setUpdateTime (seconds, nanos) {
    if (!seconds || seconds < 0) {
      error('Invalid seconds');
      return this;
    }
    this.updateTime = { seconds, nanos: nanos || 0 };
    return this;
  }

  /**
   * Set the user notification content of the order update.
   *
   * @param {string} title Title of the notification.
   * @param {text} text Text of the notification.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  setUserNotification (title, text) {
    if (!title) {
      error('title cannot be empty');
      return this;
    }
    if (!text) {
      error('text cannot be empty');
      return this;
    }
    this.userNotification = { title, text };
    return this;
  }

  /**
   * Sets the total price for this order.
   *
   * @param {string} priceType One of TransactionValues.PriceType.
   * @param {string} currencyCode Currency code of price.
   * @param {number} units Unit count of price.
   * @param {number=} nanos Partial unit count of price.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  setTotalPrice (priceType, currencyCode, units, nanos) {
    if (!priceType) {
      error('priceType cannot be empty');
      return this;
    }
    if (!currencyCode) {
      error('currencyCode cannot be empty');
      return this;
    }
    if (typeof units !== 'number' || Number.isNaN(units)) {
      error('Invalid units');
      return this;
    }
    this.totalPrice = {
      type: priceType,
      amount: {
        currencyCode: currencyCode,
        units: units,
        nanos: nanos || 0
      }
    };
    return this;
  }

  /**
   * Adds an actionable item for the user to manage the order.
   *
   * @param {string} type One of TransactionValues.OrderActions.
   * @param {string} label Button label.
   * @param {string} url URL to open when button is clicked.
   * @return {OrderUpdate} Returns current constructed OrderUpdate.
   */
  addOrderManagementAction (type, label, url) {
    if (!type) {
      error('type cannot be empty');
      return this;
    }
    if (!label) {
      error('label cannot be empty');
      return this;
    }
    if (!url) {
      error('URL cannot be empty');
      return this;
    }
    this.orderManagementActions.push({
      type: type,
      button: {
        title: label,
        openUrlAction: {
          url: url
        }
      }
    });
    return this;
  }

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
  addLineItemPriceUpdate (itemId, priceType, currencyCode, units, nanos, reason) {
    if (!itemId) {
      error('itemId cannot be empty');
      return this;
    }
    if (!priceType) {
      error('priceType cannot be empty');
      return this;
    }
    if (!currencyCode) {
      error('currencyCode cannot be empty');
      return this;
    }
    if (typeof units !== 'number' || Number.isNaN(units)) {
      error('Invalid units');
      return this;
    }

    let newPrice = {
      type: priceType,
      amount: {
        currencyCode: currencyCode,
        units: units,
        nanos: nanos || 0
      }
    };

    if (this.lineItemUpdates[itemId] && this.lineItemUpdates[itemId].reason) {
      this.lineItemUpdates[itemId].price = newPrice;
      this.lineItemUpdates[itemId].reason = reason ||
        this.lineItemUpdates[itemId].reason;
    } else if (this.lineItemUpdates[itemId] && reason) {
      this.lineItemUpdates[itemId].price = newPrice;
      this.lineItemUpdates[itemId].reason = reason;
    } else if (!this.lineItemUpdates[itemId] && reason) {
      this.lineItemUpdates[itemId] = {
        price: newPrice,
        reason
      };
    } else {
      error('reason cannot be empty');
      return this;
    }
    return this;
  }

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
  addLineItemStateUpdate (itemId, state, label, reason) {
    if (!itemId) {
      error('itemId cannot be empty');
      return this;
    }
    if (!state) {
      error('state cannot be empty');
      return this;
    }
    if (!label) {
      error('label cannot be empty');
      return this;
    }

    this.lineItemUpdates[itemId] = this.lineItemUpdates[itemId] || {};
    this.lineItemUpdates[itemId].orderState = { state, label };
    this.lineItemUpdates[itemId].reason = reason || this.lineItemUpdates[itemId].reason;

    return this;
  }

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
  setInfo (type, data) {
    if (!type || !reverseOrderStateInfo[type]) {
      error('Invalid info type');
      return this;
    }
    if (!data) {
      error('Invalid data');
      return this;
    }

    // Clear out all other info properties
    for (let infoType of Object.keys(TransactionValues.OrderStateInfo)) {
      delete this[TransactionValues.OrderStateInfo[infoType]];
    }

    this[type] = data;
    return this;
  }
};

module.exports = {
  TransactionValues,
  Order,
  Cart,
  LineItem,
  OrderUpdate
};
