import { TokenPayload } from '../token';

/**
 * Information about the merchant that requests payment data.
 */
export type GooglePayMerchantInfo = {
  /**
   * The Google merchant identifier issued after registration with the Google Pay and Wallet Console.
   */
  merchantId?: string;

  /**
   * The Google merchant business name registered with the Google Pay and Wallet Console.
   */
  merchantName?: string;

  /**
   * The fully qualified domain of the requesting merchant.
   */
  merchantOrigin?: string;
};

/**
 * Charges to show on the payment sheet.
 */
export type GooglePayDisplayItem = {
  /**
   * The label to be displayed for the given option.
   */
  label: string;

  /**
   * Type of displayed line item.
   */
  type:
    | 'LINE_ITEM'
    | 'SUBTOTAL';

  /**
   * The monetary value of the cart item with an optional decimal precision of two decimal places. Negative values are allowed.
   */
  price: string;

  /**
   * Ddefine price variance.
   * Default to FINAL if not provided
   */
  status?:
    | 'FINAL'
    | 'PENDING';
};

/**
 * Describes a transaction that determines a payer's ability to pay. It's used to present a payment authorization dialog
 */
export type GooglePayTransactionInfo = {
  /*
   * Your ISO 3166 country code (ex: ‘US’). This is your country code as the merchant.
   */
  countryCode?: string;

  /**
   * ISO 4217 purchase currency (ex: ‘USD’).
   */
  currencyCode?: string;

  /**
   * The status of the total price used:
   */
  totalPriceStatus?:
    /**
     * Total price might adjust based on the details of the response, such as sales tax collected that's based on a billing address.
     */
    | 'ESTIMATED'

    /**
     * Total price doesn't change from the amount presented to the shopper.
     */
    | 'FINAL';

  /**
   * Total cost to display in the Google Pay payment sheet.
   */
  totalPrice?: string;

  /**
   * All of the available charges for the current payment request.
   * Required and only populated in the payment sheet if you use Authorize Payments or Dynamic Price Updates.
   */
  displayItems?: GooglePayDisplayItem[];

  /**
   * Label for the total price within the display items.
   */
  totalPriceLabel?: string;

  /**
   * Affects the submit button text displayed in the Google Pay payment sheet.
   */
  checkoutOption?:
    /**
     * Standard text applies for the given totalPriceStatus (default).
     */
    | 'DEFAULT'
    /**
     * The selected payment method is charged immediately after the payer confirms their selections.
     * This option is only available when totalPriceStatus is set to FINAL.
     */
    | 'COMPLETE_IMMEDIATE_PURCHASE';
};

/**
 * Provides information about any Offers currently applied to a transaction.
 */
export type GooglePayOfferDetail = {
  /**
   * The promotional code associated with the Offer. Should be the same as the code entered into the payment sheet.
   */
  redemptionCode: string;

  /**
   * A description of the promotion applied by the Offer code.
   */
  description: string;
};

/**
 * Provides information about any Offers currently applied to a transaction.
 */
export type GooglePayOfferInfo = {
  offers: GooglePayOfferDetail[];
};

/**
 * Set shipping restrictions.
 */
export type GooglePayShippingAddressParameters = {
   /**
    * ISO 3166-1 alpha-2 country code values of the countries where shipping is allowed.
    * If this object isn't specified, all shipping address countries are allowed.
    */
  allowedCountryCodes?: string[];

  /**
   * Set to true if a phone number is required for the provided shipping address.
   */
  phoneNumberRequired?: boolean;
};

/**
 * Shipping option selection
 */
export type GooglePaySelectionOption = {
  /**
   * The developer can put any value that needs to be returned in PaymentData.
   */
  id: string;

  /**
   * The label to be displayed as the option.
   */
  label: string;

  /**
   * A descriptive text that is displayed below the option label.
   */
  description?: string;
};

/**
 * Set shipping options.
 */
export type GooglePayShippingOptionParameters = {
  /**
   * All of the shipping options available for the current request.
   */
  shippingOptions: GooglePaySelectionOption[];

  /**
   *  An identifier to the default selected shipping option.
   *  If this field isn't provided, the first option is the default option.
   */
  defaultSelectedOptionId?: string;
};

/**
 * Configuration object for Google Pay API.
 */
export type GooglePayPaymentDataRequest = {
  /**
   * Information about the merchant that requests payment data.
   */
  merchantInfo?: GooglePayMerchantInfo;

  /**
   * Details about the authorization of the transaction based upon whether the user agrees to the transaction or not.
   */
  transactionInfo?: GooglePayTransactionInfo;

  /**
   * Specifies which offers to apply when the payment sheet first loads.
   */
  offerInfo?: GooglePayOfferInfo;

  /**
   * Request an email address.
   */
  emailRequired?: boolean;

  /**
   * Request an shipping address.
   */
  shippingAddressRequired?: boolean;

  /**
   * If shippingAddressRequired is set to true, specify shipping address restrictions.
   */
  shippingAddressParameters?: GooglePayShippingAddressParameters;

  /**
   * Request an shipping option.
   * This field is required if you implement support for Authorize Payments or Dynamic Price Updates.
   */
  shippingOptionRequired?: boolean;

  /**
   * If shippingOptionRequired is set to true, specify shipping options.
   */
  shippingOptionParameters?: GooglePayShippingOptionParameters;
};

export type GooglePayIntermediatePaymentData = {
  callbackTrigger?:
    | 'INITIALIZE'
    | 'SHIPPING_ADDRESS'
    | 'SHIPPING_OPTION'
    | 'OFFER';

  offerData?: {
    /**
     * The set of promotional codes entered into the payment sheet. Includes codes that have already been approved.
     */
    redemptionCodes: string[];
  };

  shippingAddress?: {
    /**
     * A country subdivision, such as a state or province.
     */
    administrativeArea: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode: string;
    /**
     * City, town, neighborhood, or suburb.
     */
    locality: string;
    /**
     * The redacted postal code based on the country.
     * For Canada and the UK, this contains only the first three characters.
     * For US, this contains the first five digits.
     */
    postalCode: string;
  };

  shippingOptionData?: {
    /**
     * Matches with SelectionOption.id
     */
    id: string;
  };
};

export type GooglePayPaymentDataError = {
  reason:
    | 'OFFER_INVALID'
    | 'PAYMENT_DATA_INVALID'
    | 'SHIPPING_ADDRESS_INVALID'
    | 'SHIPPING_ADDRESS_UNSERVICEABLE'
    | 'SHIPPING_OPTION_INVALID'
    | 'OTHER_ERROR';

  /**
   * Error message to the user that's displayed in a dialog.
   */
  message: string;

  /**
   * The intent of the error.
   */
  intent:
    | 'OFFER'
    | 'PAYMENT_AUTHORIZATION'
    | 'SHIPPING_ADDRESS'
    | 'SHIPPING_OPTION';
};

/**
 * Specifies new transaction info, shipping options and error to update the payment sheet.
 */
export type GooglePayPaymentDataRequestUpdate = {
  /**
   * Updates the offers currently active in the payment sheet.
   */
  newOfferInfo?: GooglePayOfferInfo;
  /**
   * Updates the transaction info in the payment sheet.
   */
  newTransactionInfo?: GooglePayTransactionInfo;
  /**
   * Updates the shipping options in the payment sheet.
   */
  newShippingOptionParameters?: GooglePayShippingOptionParameters;
  /**
   * Adds an error message to the payment sheet.
   */
  error?: GooglePayPaymentDataError;
};

export type GooglePayPaymentData = {
  email?: string;
  shippingAddress?: {
    name: string;
    postalCode: string;
    countryCode: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    address3: string;
    locality: string;
    administrativeArea: string;
    sortingCode: string;
  };
  recurlyToken: TokenPayload;
};
