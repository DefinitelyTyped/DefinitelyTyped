// Type definitions for paypal-checkout-components v4.0.314
// Project: https://github.com/paypal/paypal-checkout-components/
// Definitions by: Jason Buckner <https://github.com/jbuckner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

declare namespace paypal {
  export enum Environment {
    Production = 'production',
    Sandbox = 'sandbox'
  }

  export enum ButtonColorOption {
    /**
     * Recommended
     * People around the world know us for the color gold and research confirms it.
     * Extensive testing determined just the right shade and shape that help increase conversion.
     * Use it on your website to leverage PayPal’s recognition and preference.
     */
    Gold = 'gold',

    /**
     * First alternate
     * If gold is not an option for your site, try the PayPal blue button.
     * Research shows that people know it is our brand color,
     * which provides a halo of trust and security to your experience.
     */
    Blue = 'blue',

    /**
     * Second alternate
     * If gold or blue do not work for your site design or aesthetic, try the silver button.
     * Because this color is a bit recessive and less capable of drawing people’s attention,
     * we recommend this button color as a second alternative.
     */
    Silver = 'silver',

    /**
     * Third alternate
     * If your website demands a monochromatic button experience, try the black button.
     * Because black is a common website color and less capable of drawing people's attention,
     * we recommend this button as a third alternative.
    */
    Black = 'black'
  }

  export enum ButtonShapeOption {
    /**
     * Recommended
     * Whenever possible, use the pill-shaped button.
     * Its unique and powerful shape signifies PayPal in people’s minds.
     */
    Pill = 'pill',

    /**
     * Use the rectangular button as an alternative for media such as mobile
     * where pill-shaped buttons might pose design challenges.
     */
    Rect = 'rect'
  }

  export enum ButtonSizeOption {
    /**
     * Recommended. Default.
     * 150 pixels by 25 pixels
     */
    Small = 'small',

    /**
     * 250 pixels by 35 pixels
     */
    Medium = 'medium',

    /**
     * 350 pixels by 40 pixels
     */
    Large = 'large',

    /**
     * Dynamic
     * Matches the width of the container element, height is decided dynamically based on width.
     * Minimum width is 150px, maximum width is 500px.
     */
    Responsive = 'responsive'
  }

  export enum ButtonLabelOption {
    /**
     * The PayPal Checkout button. The default button.
     */
    Checkout = 'checkout',

    /**
     * The PayPal Credit button. Initializes the credit flow. Cannot be used with any custom color option.
     */
    Credit = 'credit',

    /**
     * The Pay With PayPal button. Initializes the checkout flow.
     */
    Pay = 'pay',

    /**
     * The Buy Now button. Initializes the checkout flow.
     * The default Buy Now button is unbranded. To include PayPal branding, set branding: true.
     */
    BuyNow = 'buynow',

    /**
     * The generic PayPal button. Initializes the checkout flow. This button contains only the PayPal brand logo.
     */
    PayPal = 'paypal'
  }

  export class ButtonStyle {
    color: ButtonColorOption;
    label: ButtonLabelOption;
    shape: ButtonShapeOption;
    size: ButtonSizeOption;
    tagline: boolean
  }

  enum LineItemKind {
    Debit = 'debit',
    Credit = 'credit',
  }

  interface LineItem {
      /**
       * Number of units of the item purchased. This value must be a whole number and can't be negative or zero.
       *
       * @type {string}
       * @memberof LineItem
       */
      quantity: string;

      /**
       * Per-unit price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
       *
       * @type {string}
       * @memberof LineItem
       */
      unitAmount: string;

      /**
       * Item name. Maximum 127 characters.
       *
       * @type {string}
       * @memberof LineItem
       */
      name: string;

      /**
       * Indicates whether the line item is a debit (sale) or credit (refund) to the customer. Accepted values: `debit` and `credit`.
       *
       * @type {LineItemKind}
       * @memberof LineItem
       */
      kind: LineItemKind;

      /**
       * Per-unit tax price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
       *
       * @type {(string | undefined)}
       * @memberof LineItem
       */
      unitTaxAmount: string | undefined;

      /**
       * Item description. Maximum 127 characters.
       *
       * @type {(string | undefined)}
       * @memberof LineItem
       */
      description: string | undefined;

      /**
       * Product or UPC code for the item. Maximum 127 characters.
       *
       * @type {(string | undefined)}
       * @memberof LineItem
       */
      productCode: string | undefined;

      /**
       * The URL to product information.
       *
       * @type {(string | undefined)}
       * @memberof LineItem
       */
      url: string | undefined;
  }

  enum ShippingOptionType {
      /**
       * The payer intends to receive the items at a specified address.
       */
      Shipping = 'SHIPPING',

      /**
       * The payer intends to pick up the items at a specified address. For example, a store address.
       */
      Pickup = 'PICKUP',
  }

  interface CurrencyAmount {
      /**
       * The three-character ISO-4217 currency code. PayPal does not support all currencies.
       *
       * @type {string}
       * @memberof ShippingOptionAmount
       */
      currency: string;

      /**
       * The amount the shipping option will cost. Includes the specified number of digits after decimal separator for the ISO-4217 currency code.
       *
       * @type {string}
       * @memberof ShippingOptionAmount
       */
      value: string;
  }

  interface ShippingOption {
      /**
       * A unique ID that identifies a payer-selected shipping option.
       *
       * @type {string}
       * @memberof ShippingOption
       */
      id: string;

      /**
       * A description that the payer sees, which helps them choose an appropriate shipping option. For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`, or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.
       *
       * @type {string}
       * @memberof ShippingOption
       */
      label: string;

      /**
       * If `selected = true` is specified as part of the API request it represents the shipping option that the payee/merchant expects to be pre-selected for the payer when they first view the shipping options within the PayPal checkout experience. As part of the response if a shipping option has `selected = true` it represents the shipping option that the payer selected during the course of checkout with PayPal. Only 1 `shippingOption` can be set to `selected = true`.
       *
       * @type {boolean}
       * @memberof ShippingOption
       */
      selected: boolean;

      /**
       * The method by which the payer wants to get their items.
       *
       * @type {ShippingOptionType}
       * @memberof ShippingOption
       */
      type: ShippingOptionType;

      /**
       * The shipping cost for the selected option.
       *
       * @type {CurrencyAmount}
       * @memberof ShippingOption
       */
      amount: CurrencyAmount;
  }

  interface Address {
      /**
       * Street number and name.
       *
       * @type {string}
       * @memberof Address
       */
      line1: string;

      /**
       * Extended address.
       *
       * @type {string}
       * @memberof Address
       */
      line2?: string;

      /**
       * City or locality.
       *
       * @type {string}
       * @memberof Address
       */
      city: string;

      /**
       * State or region.
       *
       * @type {string}
       * @memberof Address
       */
      state: string;

      /**
       * Postal code.
       *
       * @type {string}
       * @memberof Address
       */
      postalCode: string;

      /**
       * 2 character country code (e.g. US).
       *
       * @type {string}
       * @memberof Address
       */
      countryCode: string;

      /**
       * Phone number.
       *
       * @type {string}
       * @memberof Address
       */
      phone?: string;

      /**
       * Recipient of postage.
       *
       * @type {string}
       * @memberof Address
       */
      recipientName?: string;
  }

  interface CreditFinancingOptions {
      /**
       * This is the estimated total payment amount including interest and fees the user will pay during the lifetime of the loan.
       *
       * @type {CurrencyAmount}
       * @memberof CreditFinancingOptions
       */
      totalCost: CurrencyAmount;

      /**
       * Length of financing terms in months.
       *
       * @type {number}
       * @memberof CreditFinancingOptions
       */
      term: number;

      /**
       * This is the estimated amount per month that the customer will need to pay including fees and interest.
       *
       * @type {CurrencyAmount}
       * @memberof CreditFinancingOptions
       */
      monthlyPayment: CurrencyAmount;

      /**
       * Estimated interest or fees amount the payer will have to pay during the lifetime of the loan.
       *
       * @type {CurrencyAmount}
       * @memberof CreditFinancingOptions
       */
      totalInterest: CurrencyAmount;

      /**
       * Status of whether the customer ultimately was approved for and chose to make the payment using the approved installment credit.
       *
       * @type {boolean}
       * @memberof CreditFinancingOptions
       */
      payerAcceptance: boolean;

      /**
       * Indicates whether the cart amount is editable after payer's acceptance on PayPal side.
       *
       * @type {boolean}
       * @memberof CreditFinancingOptions
       */
      cartAmountImmutable: boolean;
  }

  export interface TokenizePayloadDetails {
      email: string;
      payerId: string;
      firstName: string;
      lastName: string;
      countryCode?: string;
      phone?: string;

      /**
       * User's shipping address details, only available if shipping address is enabled.
       *
       * @type {Address}
       * @memberof TokenizePayload
       */
      shippingAddress?: Address;

      /**
       * User's billing address details.
       *
       * @type {Address}
       * @memberof TokenizePayload
       */
      billingAddress?: Address;

      /**
       * This property will only be present when the customer pays with PayPal Credit.
       *
       * @type {CreditFinancingOptions}
       * @memberof TokenizePayload
       */
      creditFinancingOffered?: CreditFinancingOptions;
  }

  export interface TokenizePayload {
      /**
       * The payment method nonce.
       *
       * @type {string}
       * @memberof TokenizePayload
       */
      nonce: string;

      /**
       * The payment method type, always `PayPalAccount`.
       *
       * @type {string}
       * @memberof TokenizePayload
       */
      type: string;

      /**
       * Additional PayPal account details.
       *
       * @type {TokenizePayloadDetails}
       * @memberof TokenizePayload
       */
      details: TokenizePayloadDetails;
  }

  export enum FlowType {
      /**
       * Used to store the payment method for future use, ie subscriptions
       */
      Vault = 'vault',

      /**
       * Used for one-time checkout
       */
      Checkout = 'checkout',
  }

  export enum Intent {
      /**
       * Submits the transaction for authorization but not settlement.
       */
      Authorize = 'authorize',

      /**
       * Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
       */
      Order = 'order',

      /**
       * Payment will be immediately submitted for settlement upon creating a transaction. `sale` can be used as an alias for this value.
       */
      Capture = 'capture',
  }

  export interface AuthorizationData {
    payerId: string;
    paymentId?: string;
    billingToken?: string;
    vault?: boolean;
  }

  export interface CancellationData {
    billingID: string;
    button_version: string;
    cancelUrl: string;
    intent: string;
    paymentID: string;
    paymentToken: string;
  }

  export interface AuthorizationTokenizePayload {
    /**
     * The payment method nonce.
     *
     * @type {string}
     * @memberof TokenizePayload
     */
    nonce: string;

    /**
     * The payment method type, always `PayPalAccount`.
     *
     * @type {string}
     * @memberof TokenizePayload
     */
    type: string;

    /**
     * Additional PayPal account details.
     *
     * @type {TokenizePayloadDetails}
     * @memberof TokenizePayload
     */
    details: TokenizePayloadDetails;
  }

  export interface Button {
    render(
      options: {
        env?: Environment;
        style?: ButtonStyle;
        locale?: string;

        payment?: () => Promise<string>;
        onAuthorize: (data: AuthorizationData, actions: object) => Promise<AuthorizationTokenizePayload>;
        onCancel?: (data: CancellationData, actions: object) => void;
        onError?: (error: string) => void;
        onShippingChange?: () => void;
        onAuth?: (data: string | object) => object;
        accessToken?: () => void;
        onClose?: () => void;

        sessionID?: string;
        buttonSessionID?: string;
        meta?: object;
        stage?: string;
        stageUrl?: string;
        authCode?: string;
        localhostUrl?: string;
        checkoutUri?: string;
        client?: object;
        commit?: boolean;
        experience?: object;
        fundingSource?: string;
        fundingOffered?: object;
        logLevel?: string;
        test?: object;
      },
      selector: string
    ): void;
  }

  export var Button: Button;
}

export = paypal;
export as namespace paypal;
