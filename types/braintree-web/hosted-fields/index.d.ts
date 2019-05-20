/** @module braintree-web/hosted-fields */
import Client from '../client';
import { callback } from '../common';

/**
 * Fields used in {@link module:braintree-web/hosted-fields~fieldOptions fields options}
 * @typedef {object} field
 * @property {string} selector A CSS selector to find the container where the hosted field will be inserted.
 * @property {string} [placeholder] Will be used as the `placeholder` attribute of the input. If `placeholder` is not natively supported by the browser, it will be polyfilled.
 * @property {string} [type] Will be used as the `type` attribute of the input. To mask `cvv` input, for instance, `type: "password"` can be used.
 * @property {boolean} [formatInput=true] Enable or disable automatic formatting on this field.
 * @property {object|boolean} [maskInput=false] Enable or disable input masking when input is not focused. If set to `true` instead of an object, the defaults for the `maskInput` parameters will be used.
 * @property {string} [maskInput.character=•] The character to use when masking the input. The default character ('•') uses a unicode symbol, so the webpage must support UTF-8 characters when using the default.
 * @property {Boolean} [maskInput.showLastFour=false] Only applicable for the credit card field. Whether or not to show the last 4 digits of the card when masking.
 * @property {object|boolean} [select] If truthy, this field becomes a `<select>` dropdown list. This can only be used for `expirationMonth` and `expirationYear` fields. If you do not use a `placeholder` property for the field, the current month/year will be the default selected value.
 * @property {string[]} [select.options] An array of 12 strings, one per month. This can only be used for the `expirationMonth` field. For example, the array can look like `['01 - January', '02 - February', ...]`.
 * @property {number} [maxCardLength] This option applies only to the number field. Allows a limit to the length of the card number, even if the card brand may support numbers of a greater length. If the value passed is greater than the max length for a card brand, the smaller number of the 2 values will be used. For example, is `maxCardLength` is set to 16, but an American Express card is entered (which has a max card length of 15), a max card length of 15 will be used.
 * @property {number} [maxlength] This option applies only to the CVV and postal code fields. Will be used as the `maxlength` attribute of the input if it is less than the default. The primary use cases for the `maxlength` option are: limiting the length of the CVV input for CVV-only verifications when the card type is known and limiting the length of the postal code input when cards are coming from a known region.
 * @property {number} [minlength=3] This option applies only to the cvv and postal code fields. Will be used as the `minlength` attribute of the input.
 * For postal code fields, the default value is 3, representing the Icelandic postal code length. This option's primary use case is to increase the `minlength`, e.g. for US customers, the postal code `minlength` can be set to 5.
 * For cvv fields, the default value is 3. The `minlength` attribute only applies to integrations capturing a cvv without a number field.
 * @property {string} [prefill] A value to prefill the field with. For example, when creating an update card form, you can prefill the expiration date fields with the old expiration date data.
 * @property {boolean} [rejectUnsupportedCards=false] Only allow card types that your merchant account is able to process. Unsupported card types will invalidate the card form. e.g. if you only process Visa cards, a customer entering a American Express card would get an invalid card field. This can only be used for the `number` field.
 */
export interface HostedFieldsField {
  selector: string;
  placeholder?: string;
  type?: string;
  formatInput?: boolean;
  maskInput?: boolean | { character?: string, showLastFour?: boolean };
  select?: boolean | { options: [string,string,string,string,string,string,string,string,string,string,string,string] };
  maxCardLength?: number;
  maxLength?: number;
  minLength?: number;
  prefill?: string;
  rejectUnsupportedCards?: boolean;
}

/**
 * An object that has {@link module:braintree-web/hosted-fields~field field objects} for each field. Used in {@link module:braintree-web/hosted-fields~create create}.
 * @typedef {object} fieldOptions
 * @property {field} [number] A field for card number.
 * @property {field} [expirationDate] A field for expiration date in `MM/YYYY` or `MM/YY` format. This should not be used with the `expirationMonth` and `expirationYear` properties.
 * @property {field} [expirationMonth] A field for expiration month in `MM` format. This should be used with the `expirationYear` property.
 * @property {field} [expirationYear] A field for expiration year in `YYYY` or `YY` format. This should be used with the `expirationMonth` property.
 * @property {field} [cvv] A field for 3 or 4 digit card verification code (like CVV or CID). If you wish to create a CVV-only payment method nonce to verify a card already stored in your Vault, omit all other fields to only collect CVV.
 * @property {field} [postalCode] A field for postal or region code.
 */
export interface HostedFieldFieldOptions {
  number: HostedFieldsField;
  expirationDate?: HostedFieldsField;
  expirationMonth?: HostedFieldsField;
  expirationYear?: HostedFieldsField;
  cvv: HostedFieldsField;
  postalCode?: HostedFieldsField;
}

/**
 * @description Information about the card type, sent in {@link HostedFields~stateObject|stateObjects}.
 * @property {string} type The code-friendly representation of the card type. It will be one of the following strings:
 * - `american-express`
 * - `diners-club`
 * - `discover`
 * - `jcb`
 * - `maestro`
 * - `master-card`
 * - `unionpay`
 * - `visa`
 * @property {string} niceType The pretty-printed card type. It will be one of the following strings:
 * - `American Express`
 * - `Diners Club`
 * - `Discover`
 * - `JCB`
 * - `Maestro`
 * - `MasterCard`
 * - `UnionPay`
 * - `Visa`
 * @property {object} code
 * This object contains data relevant to the security code requirements of the card brand.
 * For example, on a Visa card there will be a <code>CVV</code> of 3 digits, whereas an
 * American Express card requires a 4-digit <code>CID</code>.
 * @property {string} code.name <code>"CVV"</code> <code>"CID"</code> <code>"CVC"</code>
 * @property {number} code.size The expected length of the security code. Typically, this is 3 or 4.
 */
export interface HostedFieldsHostedFieldsCard {
  type: string;
  niceType: string;
  code: HostedFieldsCardCode;
}
export interface HostedFieldsCardCode {
  name: string;
  size: number;
}

/**
 * @description Data about Hosted Fields fields, sent in {@link HostedFields~stateObject|stateObjects}.
 * @property {HTMLElement} container Reference to the container DOM element on your page associated with the current event.
 * @property {boolean} isFocused Whether or not the input is currently focused.
 * @property {boolean} isEmpty Whether or not the user has entered a value in the input.
 * @property {boolean} isPotentiallyValid
 * A determination based on the future validity of the input value.
 * This is helpful when a user is entering a card number and types <code>"41"</code>.
 * While that value is not valid for submission, it is still possible for
 * it to become a fully qualified entry. However, if the user enters <code>"4x"</code>
 * it is clear that the card number can never become valid and isPotentiallyValid will
 * return false.
 * @property {boolean} isValid Whether or not the value of the associated input is <i>fully</i> qualified for submission.
 */
export interface HostedFieldsHostedFieldsFieldData {
  container: HTMLElement;
  isFocused: boolean;
  isEmpty: boolean;
  isPotentiallyValid: boolean;
  isValid: boolean;
}

/**
 * @description The event payload sent from {@link HostedFields#on|on} or {@link HostedFields#getState|getState}.
 * @property {HostedFields~hostedFieldsCard[]} cards
 * This will return an array of potential {@link HostedFields~hostedFieldsCard|cards}. If the card type has been determined, the array will contain only one card.
 * Internally, Hosted Fields uses <a href="https://github.com/braintree/credit-card-type">credit-card-type</a>,
 * an open-source card detection library.
 * @property {string} emittedBy
 * The name of the field associated with an event. This will not be included if returned by {@link HostedFields#getState|getState}. It will be one of the following strings:<br>
 * - `"number"`
 * - `"cvv"`
 * - `"expirationDate"`
 * - `"expirationMonth"`
 * - `"expirationYear"`
 * - `"postalCode"`
 * @property {object} fields
 * @property {?HostedFields~hostedFieldsFieldData} fields.number {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the number field, if it is present.
 * @property {?HostedFields~hostedFieldsFieldData} fields.cvv {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the CVV field, if it is present.
 * @property {?HostedFields~hostedFieldsFieldData} fields.expirationDate {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration date field, if it is present.
 * @property {?HostedFields~hostedFieldsFieldData} fields.expirationMonth {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration month field, if it is present.
 * @property {?HostedFields~hostedFieldsFieldData} fields.expirationYear {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration year field, if it is present.
 * @property {?HostedFields~hostedFieldsFieldData} fields.postalCode {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the postal code field, if it is present.
 */
export interface HostedFieldsStateObject {
  cards: HostedFieldsHostedFieldsCard[];
  emittedBy: HostedFieldsHostedFieldsFieldName;
  fields: HostedFieldsFieldDataFields;
}

export type HostedFieldsFieldDataFields = {
  [key in HostedFieldsHostedFieldsFieldName]: HostedFieldsHostedFieldsFieldData;
};

export type HostedFieldsHostedFieldsFieldName = 'number' | 'cvv' | 'expirationDate' | 'expirationMonth' | 'expirationYear' | 'postalCode';

/**
 * @property {string} nonce The payment method nonce.
 * @property {object} details Additional account details.
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.lastTwo Last two digits of card number.
 * @property {string} details.lastFour Last four digits of card number.
 * @property {string} description A human-readable description.
 * @property {string} type The payment method type, always `CreditCard`.
 */
export interface HostedFieldsAccountDetails {
  cardType: string;
  lastTwo: string;
  lastFour: string;
}

export interface HostedFieldsTokenizePayload {
  nonce: string;
  details: HostedFieldsAccountDetails;
  type: string;
  description: string;
}

export type HostedFieldsEventName = 'blur' | 'focus' | 'empty' | 'notEmpty' | 'cardTypeChange' | 'validityChange';

export interface HostedFieldsCreateOptions {
  client: Client;
  fields: HostedFieldFieldOptions;
  styles: HostedFieldsStyleOptions;
  authorization?: string;
}

export type HostedFieldsStyleAttribute =
  'appearance' |
  'color' |
  'direction' |
  'font-family' |
  'font-size-adjust' |
  'font-size' |
  'font-stretch' |
  'font-style' |
  'font-variant-alternates' |
  'font-variant-caps'  |
  'font-variant-east-asian' |
  'font-variant-ligatures' |
  'font-variant-numeric' |
  'font-variant' |
  'font-weight' |
  'font' |
  'letter-spacing' |
  'line-height' |
  'opacity' |
  'outline' |
  'padding' |
  'text-shadow' |
  'transition' |
  '-moz-appearance' |
  '-moz-osx-font-smoothing' |
  '-moz-tap-highlight-color' |
  '-moz-transition' |
  '-webkit-appearance' |
  '-webkit-font-smoothing' |
  '-webkit-tap-highlight-color' |
  '-webkit-transition';

export interface HostedFieldsStyleOptions {
  [selector: string]: HostedFieldsStyle
}

type HostedFieldsStyle = {
  [key in HostedFieldsStyleAttribute]?: string;
}

declare class HostedFields {

  /**
 * @param {object} options Creation options:
 * @param {Client} [options.client] A {@link Client} instance.
 * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
 * @param {fieldOptions} options.fields A {@link module:braintree-web/hosted-fields~fieldOptions set of options for each field}.
 * @param {styleOptions} [options.styles] {@link module:braintree-web/hosted-fields~styleOptions Styles} applied to each field.
 * @param {callback} [callback] The second argument, `data`, is the {@link HostedFields} instance. If no callback is provided, `create` returns a promise that resolves with the {@link HostedFields} instance.
 * @example
 * braintree.hostedFields.create({
  *   client: clientInstance,
  *   styles: {
  *     'input': {
  *       'font-size': '16pt',
  *       'color': '#3A3A3A'
  *     },
  *     '.number': {
  *       'font-family': 'monospace'
  *     },
  *     '.valid': {
  *       'color': 'green'
  *     }
  *   },
  *   fields: {
  *     number: {
  *       selector: '#card-number'
  *     },
  *     cvv: {
  *       selector: '#cvv',
  *       placeholder: '•••'
  *     },
  *     expirationDate: {
  *       selector: '#expiration-date',
  *       type: 'month'
  *     }
  *   }
  * }, callback);
  */
    static create(options: HostedFieldsCreateOptions): Promise<HostedFields>;
    static create(options: HostedFieldsCreateOptions, callback: callback): void;

      /**
   * @description Returns false if input formatting will be automatically disabled due to browser incompatibility. Otherwise, returns true. For a list of unsupported browsers, [go here](https://github.com/braintree/restricted-input/blob/master/README.md#browsers-where-formatting-is-turned-off-automatically).
   * @returns {Boolean} Returns false if input formatting will be automatically disabled due to browser incompatibility. Otherwise, returns true.
   * @example
   * <caption>Conditionally choosing split expiration date inputs if formatting is unavailable</caption>
   * var canFormat = braintree.hostedFields.supportsInputFormatting();
   * var fields = {
   *   number: {
   *     selector: '#card-number'
   *   },
   *   cvv: {
   *     selector: '#cvv'
   *   }
   * };
   *
   * if (canFormat) {
   *   fields.expirationDate = {
   *     selection: '#expiration-date'
   *   };
   *   functionToCreateAndInsertExpirationDateDivToForm();
   * } else {
   *   fields.expirationMonth = {
   *     selection: '#expiration-month'
   *   };
   *   fields.expirationYear = {
   *     selection: '#expiration-year'
   *   };
   *   functionToCreateAndInsertExpirationMonthAndYearDivsToForm();
   * }
   *
   * braintree.hostedFields.create({
   *   client: clientInstance,
   *   styles: {
   *     // Styles
   *   },
   *   fields: fields
   * }, callback);
   */
  static supportsInputFormatting(): boolean;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   */
  static VERSION: string;

  /**
   * @name HostedFields#on
   * @param {string} event The name of the event to which you are subscribing.
   * @param {function} handler A callback to handle the event.
   * @description Subscribes a handler function to a named event. `event` should be {@link HostedFields#event:blur|blur}, {@link HostedFields#event:focus|focus}, {@link HostedFields#event:empty|empty}, {@link HostedFields#event:notEmpty|notEmpty}, {@link HostedFields#event:cardTypeChange|cardTypeChange}, or {@link HostedFields#event:validityChange|validityChange}. Events will emit a {@link HostedFields~stateObject|stateObject}.
   * @example
   * <caption>Listening to a Hosted Field event, in this case 'focus'</caption>
   * hostedFields.create({ ... }, function (createErr, hostedFieldsInstance) {
   *   hostedFieldsInstance.on('focus', function (event) {
   *     console.log(event.emittedBy, 'has been focused');
   *   });
   * });
   */
  public on(event: HostedFieldsEventName, handler: ((event: HostedFieldsStateObject) => void)): void;

  /**
 * Cleanly remove anything set up by {@link module:braintree-web/hosted-fields.create|create}.
 * @param {callback} [callback] Called on completion, containing an error if one occurred. No data is returned if teardown completes successfully. If no callback is provided, `teardown` returns a promise.
 * @example
 * hostedFieldsInstance.teardown(function (teardownErr) {
  *   if (teardownErr) {
  *     console.error('Could not tear down Hosted Fields!');
  *   } else {
  *     console.info('Hosted Fields has been torn down!');
  *   }
  * });
  * @returns {Promise|void} Returns a promise if no callback is provided.
  */
  public teardown(callback?: callback): void;
  public teardown(): Promise<void>;

  /**
 * Tokenizes fields and returns a nonce payload.
 * @param {object} [options] All tokenization options for the Hosted Fields component.
 * @param {boolean} [options.vault=false] When true, will vault the tokenized card. Cards will only be vaulted when using a client created with a client token that includes a customer ID.
 * @param {array} [options.fieldsToTokenize] By default, all fields will be tokenized. You may specify which fields specifically you wish to tokenize with this property. Valid options are `'number'`, `'cvv'`, `'expirationDate'`, `'expirationMonth'`, `'expirationYear'`, `'postalCode'`.
 * @param {string} [options.cardholderName] When supplied, the cardholder name to be tokenized with the contents of the fields.
 * @param {string} [options.billingAddress.postalCode] When supplied, this postal code will be tokenized along with the contents of the fields. If a postal code is provided as part of the Hosted Fields configuration, the value of the field will be tokenized and this value will be ignored.
 * @param {string} [options.billingAddress.firstName] When supplied, this customer first name will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.lastName] When supplied, this customer last name will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.company] When supplied, this company name will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.streetAddress] When supplied, this street address will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.extendedAddress] When supplied, this extended address will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.locality] When supplied, this locality (the city) will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.region] When supplied, this region (the state) will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.countryCodeNumeric] When supplied, this numeric country code will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.countryCodeAlpha2] When supplied, this alpha 2 representation of a country will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.countryCodeAlpha3] When supplied, this alpha 3 representation of a country will be tokenized along with the contents of the fields.
 * @param {string} [options.billingAddress.countryName] When supplied, this country name will be tokenized along with the contents of the fields.
 *
 * @param {callback} [callback] The second argument, <code>data</code>, is a {@link HostedFields~tokenizePayload|tokenizePayload}. If no callback is provided, `tokenize` returns a function that resolves with a {@link HostedFields~tokenizePayload|tokenizePayload}.
 * @example <caption>Tokenize a card</caption>
 * hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
  *   if (tokenizeErr) {
  *     switch (tokenizeErr.code) {
  *       case 'HOSTED_FIELDS_FIELDS_EMPTY':
  *         // occurs when none of the fields are filled in
  *         console.error('All fields are empty! Please fill out the form.');
  *         break;
  *       case 'HOSTED_FIELDS_FIELDS_INVALID':
  *         // occurs when certain fields do not pass client side validation
  *         console.error('Some fields are invalid:', tokenizeErr.details.invalidFieldKeys);
  *
  *         // you can also programtically access the field containers for the invalid fields
  *         tokenizeErr.details.invalidFields.forEach(function (fieldContainer) {
  *           fieldContainer.className = 'invalid';
  *         });
  *         break;
  *       case 'HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE':
  *         // occurs when:
  *         //   * the client token used for client authorization was generated
  *         //     with a customer ID and the fail on duplicate payment method
  *         //     option is set to true
  *         //   * the card being tokenized has previously been vaulted (with any customer)
  *         // See: https://developers.braintreepayments.com/reference/request/client-token/generate/#options.fail_on_duplicate_payment_method
  *         console.error('This payment method already exists in your vault.');
  *         break;
  *       case 'HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED':
  *         // occurs when:
  *         //   * the client token used for client authorization was generated
  *         //     with a customer ID and the verify card option is set to true
  *         //     and you have credit card verification turned on in the Braintree
  *         //     control panel
  *         //   * the cvv does not pass verfication (https://developers.braintreepayments.com/reference/general/testing/#avs-and-cvv/cid-responses)
  *         // See: https://developers.braintreepayments.com/reference/request/client-token/generate/#options.verify_card
  *         console.error('CVV did not pass verification');
  *         break;
  *       case 'HOSTED_FIELDS_FAILED_TOKENIZATION':
  *         // occurs for any other tokenization error on the server
  *         console.error('Tokenization failed server side. Is the card valid?');
  *         break;
  *       case 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR':
  *         // occurs when the Braintree gateway cannot be contacted
  *         console.error('Network error occurred when tokenizing.');
  *         break;
  *       default:
  *         console.error('Something bad happened!', tokenizeErr);
  *     }
  *   } else {
  *     console.log('Got nonce:', payload.nonce);
  *   }
  * });
  */
  public tokenize(options?: { vault?: boolean, cardholderName?: string, billingAddress?: any }): Promise<HostedFieldsTokenizePayload>;
  public tokenize(options: { vault?: boolean, cardholderName?: string, billingAddress?: any }, callback: callback<HostedFieldsTokenizePayload>): void;
  public tokenize(callback: callback<HostedFieldsTokenizePayload>): void;

  /**
   * Add a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
   * @public
   * @param {string} field The field you wish to add a class to. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
   * @param {string} classname The class to be added.
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the class is added successfully.
   *
   * @example
   * hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
   *   if (addClassErr) {
   *     console.error(addClassErr);
   *   }
   * });
   * @returns {void}
   */
  public addClass(field: HostedFieldsHostedFieldsFieldName, classname: string, callback?: callback<void>): void;
  public addClass(field: HostedFieldsHostedFieldsFieldName, classname: string): Promise<void>;

  /**
   * Removes a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
   * @param {string} field The field you wish to remove a class from. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
   * @param {string} classname The class to be removed.
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the class is removed successfully.
   *
   * @example
   * hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
   *   if (addClassErr) {
   *     console.error(addClassErr);
   *     return;
   *   }
   *
   *   // some time later...
   *   hostedFieldsInstance.removeClass('number', 'custom-class');
   * });
   * @returns {void}
   */
  public removeClass(field: HostedFieldsHostedFieldsFieldName, classname: string, callback?: callback<void>): void;
  public removeClass(field: HostedFieldsHostedFieldsFieldName, classname: string): Promise<void>;

  /**
 * @deprecated since version 3.8.0. Use {@link HostedFields#setAttribute|setAttribute} instead.
 *
 * @param {string} field The field whose placeholder you wish to change. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
 * @param {string} placeholder Will be used as the `placeholder` attribute of the input.
 * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the placeholder updated successfully.
 *
 * @returns {Promise|void} Returns a promise if no callback is provided.
 */
  public setPlaceholder(field: HostedFieldsHostedFieldsFieldName, placeholder: string, callback?: callback<void>): void;
  public setPlaceholder(field: HostedFieldsHostedFieldsFieldName, placeholder: string): Promise<void>;

  /**
   * Clear the value of a {@link module:braintree-web/hosted-fields~field field}.
   * @param {string} field The field whose placeholder you wish to clear. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the field cleared successfully.
   * @example
   * hostedFieldsInstance.clear('number', function (clearErr) {
   *   if (clearErr) {
   *     console.error(clearErr);
   *   }
   * });
   *
   * @example <caption>Clear several fields</caption>
   * hostedFieldsInstance.clear('number');
   * hostedFieldsInstance.clear('cvv');
   * hostedFieldsInstance.clear('expirationDate');
   */
  public clear(field: HostedFieldsHostedFieldsFieldName, callback?: callback<void>): void;
  public clear(field: HostedFieldsHostedFieldsFieldName): Promise<void>;

  /**
   * Programmatically focus a {@link module:braintree-web/hosted-fields~field field}.
   * @param {string} field The field you want to focus. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the field focused successfully.
   * @example
   * hostedFieldsInstance.focus('number', function (focusErr) {
    *   if (focusErr) {
    *     console.error(focusErr);
    *   }
    * });
    * @example <caption>Using an event listener</caption>
    * myElement.addEventListener('click', function (e) {
    *   // In Firefox, the focus method can be suppressed
    *   //   if the element has a tabindex property or the element
    *   //   is an anchor link with an href property.
    *   // In Mobile Safari, the focus method is unable to
    *   //   programatically open the keyboard, as only
    *   //   touch events are allowed to do so.
    *   e.preventDefault();
    *   hostedFieldsInstance.focus('number');
    * });
    */
  focus(field: HostedFieldsHostedFieldsFieldName, callback?: callback<void>): void;

  /**
 * Removes a supported attribute from a {@link module:braintree-web/hosted-fields~field field}.
 *
 * @param {object} options The options for the attribute you wish to remove.
 * @param {string} options.field The field from which you wish to remove an attribute. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
 * @param {string} options.attribute The name of the attribute you wish to remove from the field.
 * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the attribute is removed successfully.
 *
 * @example <caption>Remove the placeholder attribute of a field</caption>
 * hostedFieldsInstance.removeAttribute({
  *   field: 'number',
  *   attribute: 'placeholder'
  * }, function (attributeErr) {
  *   if (attributeErr) {
  *     console.error(attributeErr);
  *   }
  * });
  *
  * @returns {Promise|void} Returns a promise if no callback is provided.
  */
  public removeAttribute(opts: { field: HostedFieldsHostedFieldsFieldName, attribute: string }, callback?: callback<void>): void;
  public removeAttribute(opts: { field: HostedFieldsHostedFieldsFieldName, attribute: string }): Promise<void>;

  /**
 * Sets an attribute of a {@link module:braintree-web/hosted-fields~field field}.
 * Supported attributes are `aria-invalid`, `aria-required`, `disabled`, and `placeholder`.
 *
 * @param {object} options The options for the attribute you wish to set.
 * @param {string} options.field The field to which you wish to add an attribute. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
 * @param {string} options.attribute The name of the attribute you wish to add to the field.
 * @param {string} options.value The value for the attribute.
 * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the attribute is set successfully.
 *
 * @example <caption>Set the placeholder attribute of a field</caption>
 * hostedFieldsInstance.setAttribute({
  *   field: 'number',
  *   attribute: 'placeholder',
  *   value: '1111 1111 1111 1111'
  * }, function (attributeErr) {
  *   if (attributeErr) {
  *     console.error(attributeErr);
  *   }
  * });
  *
  * @example <caption>Set the aria-required attribute of a field</caption>
  * hostedFieldsInstance.setAttribute({
  *   field: 'number',
  *   attribute: 'aria-required',
  *   value: true
  * }, function (attributeErr) {
  *   if (attributeErr) {
  *     console.error(attributeErr);
  *   }
  * });
  *
  * @returns {Promise|void} Returns a promise if no callback is provided.
  */
  public setAttribute(opts: { field: HostedFieldsHostedFieldsFieldName, attribute: string, value: string }, callback?: callback<void>): void;
  public setAttribute(opts: { field: HostedFieldsHostedFieldsFieldName, attribute: string, value: string }): Promise<void>;

  /**
 * Sets a visually hidden message (for screenreaders) on a {@link module:braintree-web/hosted-fields~field field}.
 *
 * @param {Object} options The options for the attribute you wish to set.
 * @param {string} options.field The field to which you wish to add an attribute. Must be a valid {@link module:braintree-web/hosted-fields~field field}.
 * @param {string} options.message The message to set.
 *
 * @example Set an error message on a field
 * hostedFieldsInstance.setMessage({
  *   field: 'number',
  *   message: 'Invalid card number'
  * });
  *
  * @example <caption>Remove the message on a field</caption>
  * hostedFieldsInstance.setMessage({
  *   field: 'number',
  *   message: ''
  * });
  *
  */
  public setMessage(options: { field: HostedFieldsHostedFieldsFieldName, message: string, value: string }): void;


  /**
   * Returns an {@link HostedFields~stateObject|object} that includes the state of all fields and possible card types.
   * @example <caption>Check if all fields are valid</caption>
   * var state = hostedFields.getState();
   *
   * var formValid = Object.keys(state.fields).every(function (key) {
   *   return state.fields[key].isValid;
   * });
   */
  public getState(): HostedFieldsStateObject;
}

export default HostedFields;