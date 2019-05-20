/** @module braintree-web/hosted-fields */
import Client from '../client';
import { callback } from '../common';

/**
 * Fields used in {@link module:braintree-web/hosted-fields~fieldOptions fields options}
 * @typedef {object} field
 * @property {string} selector A CSS selector to find the container where the hosted field will be inserted.
 * @property {string} [placeholder] Will be used as the `placeholder` attribute of the input. If `placeholder` is not natively supported by the browser, it will be polyfilled.
 * @property {string} [type] Will be used as the `type` attribute of the input. To mask `cvv` input, for instance, `type: "password"` can be used.
 * @property {boolean} [formatInput=true] - Enable or disable automatic formatting on this field.
 * @property {object|boolean} [select] If truthy, this field becomes a `<select>` dropdown list. This can only be used for `expirationMonth` and `expirationYear` fields.
 * @property {string[]} [select.options] An array of 12 strings, one per month. This can only be used for the `expirationMonth` field. For example, the array can look like `['01 - January', '02 - February', ...]`.
 */
export interface HostedFieldsField {
  selector: string;
  placeholder?: string;
  type?: string;
  formatInput?: boolean;
  select?: boolean | { options: string[] };
}

/**
 * An object that has {@link module:braintree-web/hosted-fields~field field objects} for each field. Used in {@link module:braintree-web/hosted-fields~create create}.
 * @typedef {object} fieldOptions
 * @property {field} [number] A field for card number.
 * @property {field} [expirationDate] A field for expiration date in `MM/YYYY` format. This should not be used with the `expirationMonth` and `expirationYear` properties.
 * @property {field} [expirationMonth] A field for expiration month in `MM` format. This should be used with the `expirationYear` property.
 * @property {field} [expirationYear] A field for expiration year in `YYYY` format. This should be used with the `expirationMonth` property.
 * @property {field} [cvv] A field for 3 or 4 digit CVV or CID.
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

export interface HostedFieldsCardCode {
  name: string;
  size: number;
}

export interface HostedFieldsHostedFieldsCard {
  type: string;
  niceType: string;
  code: HostedFieldsCardCode;
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
export type HostedFieldsHostedFieldsFieldName = 'number' | 'cvv' | 'expirationDate' | 'expirationMonth' | 'expirationYear' | 'postalCode';

export type HostedFieldsFieldDataFields = {
    [key in HostedFieldsHostedFieldsFieldName]: HostedFieldsHostedFieldsFieldData;
};

export interface HostedFieldsStateObject {
  cards: HostedFieldsHostedFieldsCard[];
  emittedBy: HostedFieldsHostedFieldsFieldName;
  fields: HostedFieldsFieldDataFields;
}

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

export default interface HostedFields {
  /**
   * @static
   * @function create
   * @param {object} options Creation options:
   * @param {Client} options.client A {@link Client} instance.
   * @param {fieldOptions} options.fields A {@link module:braintree-web/hosted-fields~fieldOptions set of options for each field}.
   * @param {styleOptions} options.styles {@link module:braintree-web/hosted-fields~styleOptions Styles} applied to each field.
   * @param {callback} callback The second argument, `data`, is the {@link HostedFields} instance.
   * @returns {void}
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
   *       selector: '#cvv'
   *     },
   *     expirationDate: {
   *       selector: '#expiration-date'
   *     }
   *   }
   * }, callback);
   */
    create(options: { client: Client, fields: HostedFieldFieldOptions, styles: any }): Promise<HostedFields>;
    create(options: { client: Client, fields: HostedFieldFieldOptions, styles: any }, callback: callback): void;


  /**
   * An object that represents CSS that will be applied in each hosted field. This object looks similar to CSS. Typically, these styles involve fonts (such as `font-family` or `color`).
   *
   * These are the CSS properties that Hosted Fields supports. Any other CSS should be specified on your page and outside of any Braintree configuration. Trying to set unsupported properties will fail and put a warning in the console.
   *
   * Supported CSS properties are:
   * `color`
   * `font-family`
   * `font-size-adjust`
   * `font-size`
   * `font-stretch`
   * `font-style`
   * `font-variant-alternates`
   * `font-variant-caps`
   * `font-variant-east-asian`
   * `font-variant-ligatures`
   * `font-variant-numeric`
   * `font-variant`
   * `font-weight`
   * `font`
   * `letter-spacing`
   * `line-height`
   * `opacity`
   * `outline`
   * `text-shadow`
   * `transition`
   * `-moz-osx-font-smoothing`
   * `-moz-tap-highlight-color`
   * `-moz-transition`
   * `-webkit-font-smoothing`
   * `-webkit-tap-highlight-color`
   * `-webkit-transition`
   * @typedef {object} styleOptions
   */
  styleOptions: any;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   * @type {string}
   */
  VERSION: string;

  /**
   * @name HostedFields#on
   * @function
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
   * @returns {void}
   */
  on(event: string, handler: ((event: HostedFieldsStateObject) => void)): void;

  /**
   * Cleanly tear down anything set up by {@link module:braintree-web/hosted-fields.create|create}
   * @public
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if teardown completes successfully.
   * @example
   * hostedFieldsInstance.teardown(function (teardownErr) {
   *   if (teardownErr) {
   *     console.error('Could not tear down Hosted Fields!');
   *   } else {
   *     console.info('Hosted Fields has been torn down!');
   *   }
   * });
   * @returns {void}
   */
  teardown(callback?: callback): void;

  /**
   * Tokenizes fields and returns a nonce payload.
   * @public
   * @param {object} [options] All tokenization options for the Hosted Fields component.
   * @param {boolean} [options.vault=false] When true, will vault the tokenized card. Cards will only be vaulted when using a client created with a client token that includes a customer ID.
   * @param {callback} callback The second argument, <code>data</code>, is a {@link HostedFields~tokenizePayload|tokenizePayload}
   * @example <caption>Tokenize a card</caption>
   * hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
   *   if (tokenizeErr) {
   *     switch (tokenizeErr.code) {
   *       case 'HOSTED_FIELDS_FIELDS_EMPTY':
   *         console.error('All fields are empty! Please fill out the form.');
   *         break;
   *       case 'HOSTED_FIELDS_FIELDS_INVALID':
   *         console.error('Some fields are invalid:', tokenizeErr.details.invalidFieldKeys);
   *         break;
   *       case 'HOSTED_FIELDS_FAILED_TOKENIZATION':
   *         console.error('Tokenization failed server side. Is the card valid?');
   *         break;
   *       case 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR':
   *         console.error('Network error occurred when tokenizing.');
   *         break;
   *       default:
   *         console.error('Something bad happened!', tokenizeErr);
   *     }
   *   } else {
   *     console.log('Got nonce:', payload.nonce);
   *   }
   * });
   * @example <caption>Tokenize and vault a card</caption>
   * hostedFieldsInstance.tokenize({
   *   vault: true
   * }, function (tokenizeErr, payload) {
   *   if (tokenizeErr) {
   *     console.error(tokenizeErr);
   *   } else {
   *     console.log('Got nonce:', payload.nonce);
   *   }
   * });
   * @returns {void}
   */
    tokenize(options?: { vault?: boolean, cardholderName?: string, billingAddress?: any }): Promise<HostedFieldsTokenizePayload>;
    tokenize(options: { vault?: boolean, cardholderName?: string, billingAddress?: any }, callback: callback): void;
    tokenize(callback: callback): void;

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
  addClass(field: string, classname: string, callback?: callback): void;

  /**
   * Removes a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
   * @public
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
  removeClass(field: string, classname: string, callback?: callback): void;

  /**
   * Sets the placeholder of a {@link module:braintree-web/hosted-fields~field field}.
   * @public
   * @param {string} field The field whose placeholder you wish to change. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
   * @param {string} placeholder Will be used as the `placeholder` attribute of the input.
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the placeholder updated successfully.
   *
   * @example
   * hostedFieldsInstance.setPlaceholder('number', '4111 1111 1111 1111', function (placeholderErr) {
   *   if (placeholderErr) {
   *     console.error(placeholderErr);
   *   }
   * });
   *
   * @example <caption>Update CVV field on card type change</caption>
   * hostedFieldsInstance.on('cardTypeChange', function (event) {
   *   // Update the placeholder value if there is only one possible card type
   *   if (event.cards.length === 1) {
   *     hostedFields.setPlaceholder('cvv', event.cards[0].code.name, function (placeholderErr) {
   *       if (placeholderErr) {
   *         // Handle errors, such as invalid field name
   *         console.error(placeholderErr);
   *       }
   *     });
   *   }
   * });
   * @returns {void}
   */
  setPlaceholder(field: string, placeholder: string, callback?: callback): void;

  /**
   * Clear the value of a {@link module:braintree-web/hosted-fields~field field}.
   * @public
   * @param {string} field The field whose placeholder you wish to clear. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
   * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the field cleared successfully.
   * @returns {void}
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
  clear(field: string, callback?: callback): void;

  /**
   * Returns an {@link HostedFields~stateObject|object} that includes the state of all fields and possible card types.
   * @public
   * @returns {object} {@link HostedFields~stateObject|stateObject}
   * @example <caption>Check if all fields are valid</caption>
   * var state = hostedFields.getState();
   *
   * var formValid = Object.keys(state.fields).every(function (key) {
   *   return state.fields[key].isValid;
   * });
   */
  getState(): any;
}
