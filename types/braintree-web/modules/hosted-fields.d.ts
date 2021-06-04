import { callback } from './core';
import { Client } from './client';

export interface HostedFieldsFieldMaskInput {
    /**
     * The character to use when masking the input.
     * @default '•'
     */
    character?: string;
    /**
     * Only applicable for the credit card field. Whether or not to show the last 4 digits of the card when masking.
     */
    showLastFour?: boolean;
}

/**
 * Fields used in {@link module:braintree-web/hosted-fields~fieldOptions fields options}
 */
export interface HostedFieldsField {
    /**
     * @deprecated Now an alias for `container`.
     */
    selector?: string;
    container?: string | HTMLElement;
    placeholder?: string;
    type?: string;
    formatInput?: boolean;
    maskInput?: boolean | HostedFieldsFieldMaskInput;
    select?: boolean | { options: string[] };
    maxCardLength?: number;
    maxlength?: number;
    minlength?: number;
    prefill?: string;
    rejectUnsupportedCards?: boolean;
}

/**
 * An object that has {@link module:braintree-web/hosted-fields~field field objects} for each field. Used in {@link module:braintree-web/hosted-fields~create create}.
 */
export interface HostedFieldFieldOptions {
    cardholderName?: HostedFieldsField;
    cvv: HostedFieldsField;
    expirationDate?: HostedFieldsField;
    expirationMonth?: HostedFieldsField;
    expirationYear?: HostedFieldsField;
    number: HostedFieldsField;
    postalCode?: HostedFieldsField;
}

/**
 * @description Information about the card type, sent in {@link HostedFields~stateObject|stateObjects}.
 * - `american-express`
 * - `diners-club`
 * - `discover`
 * - `jcb`
 * - `maestro`
 * - `master-card`
 * - `unionpay`
 * - `visa`
 * - `American Express`
 * - `Diners Club`
 * - `Discover`
 * - `JCB`
 * - `Maestro`
 * - `MasterCard`
 * - `UnionPay`
 * - `Visa`
 * This object contains data relevant to the security code requirements of the card brand.
 * For example, on a Visa card there will be a <code>CVV</code> of 3 digits, whereas an
 * American Express card requires a 4-digit <code>CID</code>.
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
 * A determination based on the future validity of the input value.
 * This is helpful when a user is entering a card number and types <code>"41"</code>.
 * While that value is not valid for submission, it is still possible for
 * it to become a fully qualified entry. However, if the user enters <code>"4x"</code>
 * it is clear that the card number can never become valid and isPotentiallyValid will
 * return false.
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
 * This will return an array of potential {@link HostedFields~hostedFieldsCard|cards}. If the card type has been determined, the array will contain only one card.
 * Internally, Hosted Fields uses <a href="https://github.com/braintree/credit-card-type">credit-card-type</a>,
 * an open-source card detection library.
 * The name of the field associated with an event. This will not be included if returned by {@link HostedFields#getState|getState}. It will be one of the following strings:<br>
 * - `"number"`
 * - `"cvv"`
 * - `"expirationDate"`
 * - `"expirationMonth"`
 * - `"expirationYear"`
 * - `"postalCode"`
 */
export type HostedFieldsHostedFieldsFieldName =
    | 'number'
    | 'cvv'
    | 'expirationDate'
    | 'expirationMonth'
    | 'expirationYear'
    | 'postalCode'
    | 'cardholderName';

export type HostedFieldsFieldDataFields = {
    [key in HostedFieldsHostedFieldsFieldName]: HostedFieldsHostedFieldsFieldData;
};

export interface HostedFieldsStateObject {
    cards: HostedFieldsHostedFieldsCard[];
    emittedBy: HostedFieldsHostedFieldsFieldName;
    fields: HostedFieldsFieldDataFields;
}

export type HostedFieldEventType = 'blur' | 'focus' | 'empty' | 'notEmpty'
    | 'cardTypeChange' | 'validityChange' | 'inputSubmitRequest';

export interface HostedFieldsAccountDetails {
    bin: string;
    cardType: string;
    expirationMonth: string;
    expirationYear: string;
    cardholderName: string;
    lastTwo: string;
    lastFour: string;
}

export interface HostedFieldsTokenizePayload {
    nonce: string;
    details: HostedFieldsAccountDetails;
    type: string;
    description: string;
}

export interface HostedFields {
    /**
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
    create(options: {
        client?: Client;
        authorization?: string;
        fields: HostedFieldFieldOptions;
        styles?: any;
    }): Promise<HostedFields>;
    create(
        options: { client?: Client; authorization?: string; fields: HostedFieldFieldOptions; styles?: any },
        callback: callback,
    ): void;

    /**
     * An object that represents CSS that will be applied in each hosted field. This object looks similar to CSS.
     * Typically, these styles involve fonts (such as `font-family` or `color`).
     *
     * These are the CSS properties that Hosted Fields supports. Any other CSS should be specified on your
     * page and outside of any Braintree configuration. Trying to set unsupported properties will fail and put
     * a warning in the console.
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
     */
    styleOptions: any;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;

    on(event: HostedFieldEventType, handler: (event: HostedFieldsStateObject) => void): void;
    off(event: HostedFieldEventType, handler: (event: HostedFieldsStateObject) => void): void;

    teardown(callback?: callback): void;
    teardown(): Promise<void>;

    /**
     * Tokenizes fields and returns a nonce payload.     * @example <caption>Tokenize a card</caption>
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
     */
    tokenize(options?: {
        vault?: boolean;
        cardholderName?: string;
        billingAddress?: any;
    }): Promise<HostedFieldsTokenizePayload>;
    tokenize(options: { vault?: boolean; cardholderName?: string; billingAddress?: any }, callback: callback): void;
    tokenize(callback: callback): void;

    /**
     * Add a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.     *
     * @example
     * hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
     *   if (addClassErr) {
     *     console.error(addClassErr);
     *   }
     * });
     */
    addClass(field: string, classname: string, callback?: callback): void;

    /**
     * Removes a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.     *
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
     */
    removeClass(field: string, classname: string, callback?: callback): void;

    /**
     * Sets the placeholder of a {@link module:braintree-web/hosted-fields~field field}.     *
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
     */
    setPlaceholder(field: string, placeholder: string, callback?: callback): void;

    /**
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
     * @example <caption>Check if all fields are valid</caption>
     * var state = hostedFields.getState();
     *
     * var formValid = Object.keys(state.fields).every(function (key) {
     *   return state.fields[key].isValid;
     * });
     */
    getState(): any;

    /**
     * Programmatically focus a {@link module:braintree-web/hosted-fields-field field}.     *
     * @example
     * hostedFieldsInstance.focus('number', function (focusErr) {
     *   if (focusErr) {
     *     console.error(focusErr);
     *   }
     * });
     */
    focus(field: HostedFieldsHostedFieldsFieldName, callback?: callback): void;
}
