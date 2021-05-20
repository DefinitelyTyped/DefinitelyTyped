// Type definitions for payu-emea-sdk 1.0
// Project: https://developers.payu.com/en/card_tokenization.html#secureform
// Definitions by: Tomasz Regdos <https://github.com/regdos/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var PayU: payu.PayuEntry;

declare namespace payu {
    interface PayuEntry {
        (posId: string, options?: PayuOptions): PayU;
    }

    interface PayuOptions {
        dev?: boolean;
    }

    type tokenType = 'SINGLE' | 'SINGLE_LONGTERM' | 'MULTI';
    interface PayU {
        secureForms(): SecureForms;
        tokenize(type?: tokenType): Promise<TokenizeResultSuccess | TokenizeResultError>;
        sendCvv(refReqId: string): Promise<SendCvvResultSuccess | SendCvvResultError>;
        extractRefReqId(input: string): string;
    }

    type secureFormType = 'card' | 'number' | 'date' | 'cvv';
    interface SecureForms {
        add(type?: secureFormType, options?: SecureFormOptions): SecureForm;
    }

    interface SecureFormOptions {
        style?: StyleOptions;
        placeholder?: PlaceHolderOptions;
        lang?: 'pl' | 'en' | 'cs' | 'sk';
        disabled?: boolean;
        cardIcon?: boolean;
    }

    type fontWeight = number
        | 'normal'
        | 'bold'
        | 'lighter'
        | 'bolder'
        | 'inherit'
        | 'initial'
        | 'unset';
    interface StyleOptions {
        basic?: {
            fontColor?: string;
            fontSize?: string;
            fontFamily?: string;
            fontWeight?: fontWeight
            letterSpacing?: string
        };
        invalid?: {
            fontColor?: string;
            fontWeight?: fontWeight
        };
        focus?: {
            fontColor?: string;
            fontWeight?: fontWeight
        };
        placeholder?: {
            fontColor?: string;
            fontWeight?: fontWeight
        };
        disabled?: {
            fontColor?: string;
            fontWeight?: fontWeight
        };
    }

    interface PlaceHolderOptions {
        number?: string;
        date?: string;
        cvv?: string;
    }

    type eventTypes = 'ready' | 'focus' | 'blur';
    interface SecureForm {
        render(selector: string): SecureForm;
        update(options: SecureFormOptions): SecureForm;
        on(event: eventTypes, handler: () => void): SecureForm;
        on(event: 'change', handler: (body: SecureFormChangeResponse) => void): SecureForm;
        clear(): SecureForm;
        focus(): SecureForm;
        remove(): SecureForm;
    }

    type SecureFormErrorCode = 'error.validation.card.empty'
        | 'error.validation.card.length'
        | 'error.validation.card.number'
        | 'error.validation.card.unsupported'
        | 'error.validation.expDate.empty'
        | 'error.validation.expDate.past'
        | 'error.validation.expDate.value'
        | 'error.validation.cvv.empty'
        | 'error.validation.cvv.value'
        | 'error.tokenization'
        | 'error.send.cvv'
        | 'error.network';

    interface SecureFormErrorMessage {
        type: 'validate' | 'technical';
        code: SecureFormErrorCode;
        message: string;
        parameters?: {
            error: string
        };
        source?: secureFormType;
    }

    interface SecureFormChangeResponse {
        empty: boolean;
        error: false | SecureFormErrorMessage[];
        brand?: 'visa' | 'mastercard' | 'maestro';
    }

    interface TokenizeResultSuccess {
        status: 'SUCCESS';
        body: {
            token: string,
            mask: string
        };
    }

    interface TokenizeResultError {
        status: 'ERROR';
        error: {
            messages: SecureFormErrorMessage[]
        };
        correlationId?: string;
    }

    interface SendCvvResultSuccess {
        status: 'SUCCESS';
    }

    interface SendCvvResultError {
        status: 'ERROR';
        error: {
            messages: SecureFormErrorMessage[]
        };
        correlationId?: string;
    }
}
