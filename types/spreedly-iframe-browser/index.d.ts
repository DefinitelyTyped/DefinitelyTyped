declare namespace spreedly {
    type SpreedlyField = "number" | "cvv";
    type SpreedlyFieldType = "number" | "text" | "tel";
    type SpreedlyNumberFormat = "prettyFormat" | "maskedFormat" | "toggleMask";
    type SpreedlyCardType =
        | "alelo"
        | "alia"
        | "american_express"
        | "cabal"
        | "carnet"
        | "dankort"
        | "diners_club"
        | "discover"
        | "elo"
        | "jcb"
        | "maestro"
        | "master"
        | "naranja"
        | "olimpica"
        | "sodexo"
        | "visa"
        | "vr";
    type SpreedlyErrorKey =
        | "errors.account_inactive"
        | "errors.environment_key_parameter_required"
        | "errors.invalid_environment_key_parameter"
        | "errors.blank"
        | "errors.invalid"
        | "errors.blank_card_type"
        | "errors.expired"
        | "errors.unknown_referrer"
        | "errors.invalid_referrer"
        | "errors.configuration";
    type SpreedlyFieldEventType =
        | "focus"
        | "blur"
        | "mouseover"
        | "mouseout"
        | "input"
        | "enter"
        | "escape"
        | "tab"
        | "shiftTab";
    interface InitOptions {
        numberEl: string;
        cvvEl: string;
    }

    interface TokenizeCreditCardAdditionalFields {
        month?: string;
        year?: string;
        email?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        zip?: string;
        country?: string;
        phone_number?: string;
        company?: string;
        shipping_address1?: string;
        shipping_address2?: string;
        shipping_city?: string;
        shipping_state?: string;
        shipping_zip?: string;
        shipping_country?: string;
        shipping_phone_number?: string;
        metadata?: { [key: string]: string };
    }

    interface TokenizeCreditCardAdditionalFieldsFullName extends TokenizeCreditCardAdditionalFields {
        full_name: string;
    }

    interface TokenizeCreditCardAdditionalFieldsFirstLastNames extends TokenizeCreditCardAdditionalFields {
        first_name: string;
        last_name: string;
    }

    interface SetRecacheOptions {
        card_type: SpreedlyCardType;
        last_four_digits: string;
    }

    interface SpreedlyConsoleError {
        msg: string;
        url: string;
        line: string;
        col: string;
    }

    interface SpreedlyError {
        attribute: string;
        key: SpreedlyErrorKey;
        message: string;
    }

    interface SpreedlyFieldEventInputProperties {
        activeElement?: SpreedlyField;
        cardType?: SpreedlyCardType | null;
        cvvLength?: number;
        numberLength?: number;
        validCvv?: boolean;
        validNumber?: boolean;
    }

    // TODO: Validate this
    interface SpreedlyPaymentMethod {
        token: string;
        created_at: string;
        updated_at: string;
        email: string | null;
        data: null;
        storage_state: "cached" | "retained" | "redacted";
        test: boolean;
        metadata: { [key: string]: string };
        callback_url: string | null;
        last_four_digits: string | null;
        first_six_digits: string | null;
        card_type: SpreedlyCardType;
        first_name: string | null;
        last_name: string | null;
        month: number | null;
        year: number | null;
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        country: string | null;
        phone_number: string | null;
        company: string | null;
        full_name: string | null;
        eligible_for_card_updater: boolean;
        shipping_address1: string | null;
        shipping_address2: string | null;
        shipping_city: string | null;
        shipping_state: string | null;
        shipping_zip: string | null;
        shipping_country: string | null;
        shipping_phone_number: string | null;
        payment_method_type: "credit_card" | "bank_account" | "apple_pay" | "google_pay" | "third_party_token";
        errors: any[];
        fingerprint: string | null;
        verification_value: string | null;
        number: string | null;
    }
}

/**
 * Create a new, independent, instance of the iFrame. It will be created alongside the default instance, already exposed as Spreedly.
 * @see https://docs.spreedly.com/reference/iframe/v1/#spreedlypaymentframe
 */
declare class SpreedlyPaymentFrame {
    /**
     * Initialize the iFrame library. This must be the first call made to iFrame and will trigger the loading of the iFrame fields.
     * Triggers `ready` when the iFrame is ready for more configurartion.
     * @see https://docs.spreedly.com/reference/iframe/v1/#init
     *
     * @param environmentKey - The key of the Spreedly environment where the payment method should be tokenized.
     * @param options - Map of initialization options. HTML `id`s where iFrames should be rendered.
     */
    init(environmentKey: string, options: spreedly.InitOptions): void;

    /**
     * Reload the iFrame library. This resets and re-initializes all iFrame elements and state.
     * @see https://docs.spreedly.com/reference/iframe/v1/#reload
     */
    reload(): void;

    /**
     * Remove all event handlers currently registered via the on function.
     * @see https://docs.spreedly.com/reference/iframe/v1/#removehandlers
     */
    removeHandlers(): void;

    /**
     * Trigger tokenization of the entered credit card.
     * On successful tokenization, the `paymentMethod` event will be triggered. On failure, the `errors` event will be triggered.
     * @see https://docs.spreedly.com/reference/iframe/v1/#tokenizecreditcard
     *
     * @param additionalFields - Map of additional payment method fields to store alongside tokenized card.
     */
    tokenizeCreditCard(
        additionalFields:
            | spreedly.TokenizeCreditCardAdditionalFieldsFullName
            | spreedly.TokenizeCreditCardAdditionalFieldsFirstLastNames,
    ): void;

    /**
     * Request iFrame fields to report their validation status.
     * Triggers `validation`.
     * @see https://docs.spreedly.com/reference/iframe/v1/#validate
     */
    validate(): void;

    /**
     * Configure the iFrame to operate in recache mode.
     * When iFrame has received and displayed the existing payment method information, the `recacheReady` event will be fired.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setrecache
     *
     * @param token - Token of existing payment method in Spreedly environment
     * @param options - Map of display options for existing payment method.
     */
    setRecache(token: string, options: spreedly.SetRecacheOptions): void;

    /**
     * Trigger recache on existing payment method. Requires that setRecache has already been called.
     * On successful recache, the `recache` event will be triggered. On failure, the `errors` event will be triggered.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setrecache
     */
    recache(): void;

    /**
     * Set the input type of the iFrame fields.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setfieldtype
     *
     * @param field - The iFrame field to set the type.
     * @param type - The input field type.
     */
    setFieldType(field: spreedly.SpreedlyField, type: spreedly.SpreedlyFieldType): void;

    /**
     * Style iFrame fields’ label. Although the label for each iFrame field is not displayed, it is still used by screen readers and other accessibility devices.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setlabel
     *
     * @param field - The iFrame field to set the label.
     * @param label - The label text value.
     */
    setLabel(field: spreedly.SpreedlyField, label: string): void;

    /**
     * Set the card number format.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setnumberformat
     *
     * @param format - The field's number format.
     */
    setNumberFormat(format: spreedly.SpreedlyNumberFormat): void;

    /**
     * Style iFrame fields’ placeholder text.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setplaceholder
     *
     * @param field - The iFrame field to set the placeholder.
     * @param placeholder - The placeholder text value
     */
    setPlaceholder(field: spreedly.SpreedlyField, placeholder: string): void;

    /**
     * Style iFrame fields using CSS.
     * @see https://docs.spreedly.com/reference/iframe/v1/#setstyle
     *
     * @param field - The iFrame field to apply the CSS to. Can be one of number or cvv.
     * @param css - The CSS to apply. Should be vanilla CSS, constructed as a single string.
     */
    setStyle(field: spreedly.SpreedlyField, css: string): void;

    /**
     * Set the cursor focus to one of the iFrame fields.
     * @see https://docs.spreedly.com/reference/iframe/v1/#transferfocus
     *
     * @param field - The iFrame field to give focus to.
     */
    transferFocus(field: spreedly.SpreedlyField): void;

    /**
     * Triggered when a javascript error occurs within the iFrame.
     * @see https://docs.spreedly.com/reference/iframe/v1/#consoleerror
     *
     * @param event - Event to listen on.
     * @param callback - Event callback.
     */
    on(event: "consoleError", callback: (error: spreedly.SpreedlyConsoleError) => void): void;

    /**
     * Triggered when a payment method is not successfully tokenized or recached.
     * @see https://docs.spreedly.com/reference/iframe/v1/#errors
     *
     * @param event - Event to listen on.
     * @param callback - Event callback.
     */
    on(event: "errors", callback: (errors: spreedly.SpreedlyError[]) => void): void;

    /**
     * Triggered when an input event occurs in either iFrame field.
     * @see https://docs.spreedly.com/reference/iframe/v1/#fieldevent
     *
     * @param event - Event to listen on.
     * @param callback - Event callback.
     */
    on(
        event: "fieldEvent",
        callback: (
            name: spreedly.SpreedlyField,
            type: spreedly.SpreedlyFieldEventType,
            activeEl: spreedly.SpreedlyField,
            inputProperties: spreedly.SpreedlyFieldEventInputProperties,
        ) => void,
    ): void;

    /**
     * Triggered when a payment method is successfully tokenized or recached by Spreedly.
     * @see https://docs.spreedly.com/reference/iframe/v1/#paymentmethod
     *
     * @param event - Event to listen on.
     * @param callback - Event callback.
     */
    on(
        event: "paymentMethod" | "recache",
        callback: (token: string, paymentMethod: spreedly.SpreedlyPaymentMethod) => void,
    ): void;

    /**
     * Triggered when the iFrame is initialized and ready for configuration or is properly configured for recache.
     * @see https://docs.spreedly.com/reference/iframe/v1/#ready
     *
     * @param event - Event to listen on.
     * @param callback - Event callback.
     */
    on(event: "ready" | "recacheReady", callback: () => void): void;

    /**
     * Triggered when validation of the iFrame is requested.
     * @see https://docs.spreedly.com/reference/iframe/v1/#validation
     *
     * @param event - Event to listen on.
     * @param callback - Event callback.
     */
    on(event: "validation", callback: (inputProperties: spreedly.SpreedlyFieldEventInputProperties) => void): void;
}

declare var Spreedly: SpreedlyPaymentFrame;
