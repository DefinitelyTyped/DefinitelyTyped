import { CardNumber, CustomFonts, FieldStyle, SecurityCode, CardTokenResponse } from "../shared";

type BaseFieldsOptions = {
    customFonts?: CustomFonts[];
    group?: string;
};

interface DateYearFieldsOptions extends BaseFieldsOptions {
    mode?: 'short' | 'full'
}

interface CardNumberOptions extends BaseFieldsOptions {
    enableLuhnValidation?: boolean;
}

interface SecurityCodeOptions extends BaseFieldsOptions { }

interface ExpirationMonthOptions extends BaseFieldsOptions { }

interface ExpirationYearOptions extends DateYearFieldsOptions { }

interface ExpirationDateOptions extends DateYearFieldsOptions { }

type FieldsOptions<T> =
    T extends 'cardNumber' ? CardNumberOptions :
    T extends 'securityCode' ? SecurityCodeOptions :
    T extends 'expirationMonth' ? ExpirationMonthOptions :
    T extends 'expirationYear' ? ExpirationYearOptions :
    T extends 'expirationDate' ? ExpirationDateOptions :
    never;

type FieldEvent = 'blur' | 'focus' | 'change' | 'ready' | 'validityChange' | 'error' | 'binChange' | 'paste';

type FieldName = 'securityCode' | 'cardNumber' | 'expirationDate' | 'expirationMonth' | 'expirationYear';

type FieldsUpdatableProperties = {
    style?: FieldStyle;
    placeholder?: string;
    settings?: SecurityCode | CardNumber;
};

type InvalidType = 'invalid_type';
type InvalidLength = 'invalid_length';
type InvalidValue = 'invalid_value';

type CardNumberCause = InvalidType | InvalidLength;
type SecurityCodeCause = CardNumberCause;
type ExpirationMonthCause = InvalidType | InvalidValue;
type ExpirationYearCause = ExpirationMonthCause | CardNumberCause;
type ExpirationDateCause = ExpirationYearCause;

type DefaultArg = {
    field: string;
};

interface ErrorArg extends DefaultArg {
    error: string;
}

interface BinChangeArg extends DefaultArg {
    bin?: string;
}

type ErrorMessage<FieldName> = {
    message: string;
    cause:
    FieldName extends 'cardNumber' ? CardNumberCause :
    FieldName extends 'securityCode' ? SecurityCodeCause :
    FieldName extends 'expirationMonth' ? ExpirationDateCause :
    FieldName extends 'expirationYear' ? ExpirationYearCause :
    FieldName extends 'expirationDate' ? ExpirationDateCause :
    never;
}

interface ValidityChangeArg<FieldName> extends DefaultArg {
    errorMessages: ErrorMessage<FieldName>[];
}

type CallbackArgs<FieldEvent, FieldName> =
    FieldEvent extends 'blur' ? DefaultArg :
    FieldEvent extends 'focus' ? DefaultArg :
    FieldEvent extends 'ready' ? DefaultArg :
    FieldEvent extends 'change' ? DefaultArg :
    FieldEvent extends 'validityChange' ? ValidityChangeArg<FieldName> :
    FieldEvent extends 'error' ? ErrorArg :
    FieldEvent extends 'binChange' ? BinChangeArg :
    DefaultArg;


type Field = {
    mount: (container: string) => void;
    unmount: () => void;
    on: < FieldEvent> (event: FieldEvent, callback: (args: CallbackArgs<FieldEvent, FieldName>) => void) => void;
    update: (properties: FieldsUpdatableProperties) => void;
    focus: () => void;
    blur: () => void;
}

type FieldsCardTokenParams = {
    cardId?: string;
    cardholderName?: string;
    identificationType?: string;
    identificationNumber?: string;
};

type OptionsToken =
    | {
        group: string;
        productId?: string;
        fingerprint?: unknown;
        requireEsc?: boolean;
    }
    | string
    | undefined;

export type Fields = {
    create(field: FieldName, options?: FieldsOptions<FieldName>): Field
    createCardToken(nonPCIData: FieldsCardTokenParams, options: OptionsToken): Promise<CardTokenResponse | void>
    updateCardToken(token: string, options: OptionsToken): Promise<CardTokenResponse | void>
}