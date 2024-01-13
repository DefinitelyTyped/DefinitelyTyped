import { TokenPayload } from '../token';

/**
 * A type that indicates the time a payment occurs in a transaction.
 */
export type ApplePayPaymentTiming =
 | 'immediate'
 | 'recurring';

/**
 * A type that indicates calendrical units, such as year, month, day, and hour.
 */
export type ApplePayRecurringPaymentDateUnit =
  | 'year'
  | 'month';

/**
 * Field names for requesting contact information in a payment request.
 */
export type ApplePayContactField =
  | 'email'
  | 'name'
  | 'phone'
  | 'postalAddress'
  | 'phoneticName';

/**
 * The error code that indicates whether an error on the payment sheet is for shipping or billing information, or for another kind of error.
 */
export type ApplePayErrorCode =
  /**
   * Indicates that the shipping address or contact information is invalid or missing.
   * Use with contactField
   */
  | 'shippingContactInvalid'
  /**
   * Indicates that the billing address information is invalid or missing.
   * Use with contactField
   */
  | 'billingContactInvalid'
  /**
   * Indicates that the merchant can’t provide service to the shipping address (for example, can’t deliver to a P.O. Box).
   */
  | 'addressUnserviceable'
  /**
   * Indicates an unknown but nonfatal error occurred during payment processing. The user can attempt authorization again.
   */
  | 'unknown';

/**
 * Names of the fields in the shipping or billing contact information, used to locate errors in the payment sheet.
 * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepayerrorcontactfield} for when to use the fields.
 */
export type ApplePayErrorContactField =
  | 'phoneNumber'
  | 'emailAddress'
  | 'name'
  | 'phoneticName'
  | 'postalAddress'
  | 'addressLines'
  | 'locality'
  | 'subLocality'
  | 'postalCode'
  | 'administrativeArea'
  | 'subAdministrativeArea'
  | 'country'
  | 'countryCode';

/**
 * Contact information fields to use for billing and shipping contact information.
 */
export type ApplePayPaymentContact = {
  /**
   * A phone number for the contact.
   */
  phoneNumber?: string;
  /**
   * An email address for the contact.
   */
  emailAddress?: string;
  /**
   * The contact’s given (first) name.
   */
  givenName?: string;
  /**
   * The contact’s family (last) name.
   */
  familyName?: string;
  /**
   * The street portion of the address for the contact.
   */
  addressLines?: string[];
  /**
   * The city for the contact.
   */
  locality?: string;
  /**
   * The zip code or postal code for the contact.
   */
  postalCode?: string;
  /**
   * The state for the contact.
   */
  administrativeArea?: string;
  /**
   * The contact’s two-letter ISO 3166 country code.
   */
  countryCode?: string;
};

export type ApplePayLineItem = {
  /**
   * A required value that’s a short, localized description of the line item.
   */
  label: string;

  /**
   * A required value that’s the monetary amount of the line item.
   */
  amount: string;

  /**
   * The time that the payment occurs as part of a successful transaction.
   */
  paymentTiming?: ApplePayPaymentTiming;

  /**
   * The date of the first payment.
   */
  recurringPaymentStartDate?: Date;

  /**
   * The amount of time — in calendar units, such as day, month, or year — that represents a fraction of the total payment interval.
   */
  recurringPaymentIntervalUnit?: ApplePayRecurringPaymentDateUnit;

  /**
   * The number of interval units that make up the total payment interval.
   */
  recurringPaymentIntervalCount?: number;

  /**
   * The date of the final payment.
   */
  recurringPaymentEndDate?: Date;
};

/**
 * A dictionary that represents a request to set up a subscription.
 */
export type ApplePayRecurringPaymentRequest = {
  /**
   * A description of the recurring payment that Apple Pay displays to the user in the payment sheet.
   */
  paymentDescription: string;

  /**
   * The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.
   */
  regularBilling: ApplePayLineItem ;

  /**
   * The trial billing cycle for the recurring payment.
   */
  trialBilling?: ApplePayLineItem ;

  /**
   * A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.
   */
  billingAgreement?: string;

  /**
   * A URL to a web page where the user can update or delete the payment method for the recurring payment.
   * Defaults to the managment URL set in the Recurly Apple Pay configuration.
   */
  managementURL?: string;
};

/**
 * A request for payment, which includes information about payment-processing capabilities, the payment amount, and shipping information
 */
export type ApplePayPaymentRequest = {
  /**
   * Total cost to display in the Apple Pay payment sheet. Required if `options.pricing` is not provided.
   */
  total: ApplePayLineItem;

  /**
   * Billing contact information for the user.
   */
  billingContact?: ApplePayPaymentContact;

  /**
   * The payment networks the merchant supports. Only selects those networks that intersect with the merchant's
   * payment gateways configured in Recurly.
   */
  supportedNetworks?: string;

  /**
   * The fields of shipping information the user must provide to fulfill the order.
   */
  requiredShippingContactFields?: ApplePayContactField[];

  /**
   * The fields of billing information the user must provide to process the transaction. Defaults to `['postalAddress']`.
   */
  requiredBillingContactFields?: ApplePayContactField[];

  /**
   * Shipping contact information for the user.
   */
  shippingContact?: ApplePayPaymentContact;

  /**
   * A set of line items that explain recurring payments and additional charges and discounts.
   */
  lineItems?: ApplePayLineItem[];

  /**
   * A property that requests a subscription.
   */
  recurringPaymentRequest?: ApplePayRecurringPaymentRequest;
};

/**
 * A customizable error type that you create to indicate problems with the address or contact information on an Apple Pay sheet.
 */
export type ApplePayError = {
  /**
   * The error code for this instance.
   */
  code: ApplePayErrorCode;

  /**
   * The field name that contains the error on the payment sheet.
   */
  contactField?: ApplePayErrorContactField;

  /**
   * A localized, user-facing string that describes the error.
   */
  message: string;
};

export type ApplePayErrorUpdate = {
  /**
   * A list of customized errors you provide that results from the user's selection.
   */
  errors?: ApplePayError[];
};

/**
 * Updated transaction details to provide after the user's selection.
 */
export type ApplePaySelectionUpdate = {
  /**
   * The new total cost that results from the user's selection.
   */
  total?: string;

  /**
   * The new total that results from the user's selection.
   */
  newTotal?: ApplePayLineItem;

  /**
   * Updated line items for the payment request that results from the user’s selection.
   */
  newLineItems?: ApplePayLineItem[];

  /**
   * The updated list of available shipping methods that results from the user's selection;
   */
  newRecurringPaymentRequest?: ApplePayRecurringPaymentRequest;
} | ApplePayErrorUpdate;

/**
 * Describes an Apple Pay payment method
 */
export type ApplePayPaymentMethod = {
  /**
   * A string, suitable for display, that describes the card.
   */
  displayName?: string;

  /**
   * A string, suitable for display, that is the name of the payment network backing the card.
   */
  network?: string;

  /**
   * A string value representing the card's type of payment.
   */
  type?: (
    | 'credit'
    | 'debit'
  );

  /**
   * The billing contact associated with the card.
   */
  billingContact?: ApplePayPaymentContact;
};

/**
 * An event object that contains the payment method.
 */
export type ApplePayPaymentMethodSelectedEvent = {
  /**
   * The card used to complete a payment.
   */
  paymentMethod: ApplePayPaymentMethod;
};

/**
 * An event object that contains the shipping address the user selects.
 */
export type ApplePayShippingContactSelectedEvent = {
  /**
   * The shipping address selected by the user.
   */
  shippingContact: ApplePayPaymentContact;
};

/**
 * An event object that contains the shipping method.
 */
export type ApplePayShippingMethodSelectedEvent = {
  /**
   * The shipping method selected by the user.
   */
  shippingMethod: any;
};

/**
 * An event object that contains the coupon code.
 */
export type ApplePayCouponCodeChangedEvent = {
  /**
   * The coupon code selected by the user.
   */
  couponCode: string;
};

/**
 * The result of authorizing a payment request that contains payment information.
 */
export type ApplePayPayment = {
  token: {
    /**
     * Information about the card used in the transaction.
     */
    paymentMethod: ApplePayPaymentMethod,
  };

  /**
   * The billing contact selected by the user for this transaction.
   */
  billingContact: ApplePayPaymentContact;

  /**
   * The shipping contact selected by the user for this transaction.
   */
  shippingContact: ApplePayPaymentContact;
};

/**
 * An event object that contains the token used to authorize a payment.
 */
export type ApplePayPaymentAuthorizedEvent = {
  /**
   * The authorized payment information for this transaction.
   */
  payment: ApplePayPayment;

  gatewayToken?: string;
  recurlyToken: TokenPayload;
};
