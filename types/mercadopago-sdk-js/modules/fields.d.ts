import { CardNumber, CustomFonts, FieldStyle, SecurityCode, CardTokenResponse } from "../shared";

export interface BaseFieldsOptions {
    customFonts?: CustomFonts[];
    group?: string;
}

export interface DateYearFieldsOptions extends BaseFieldsOptions {
    mode?: 'short' | 'full';
}

export interface CardNumberOptions extends BaseFieldsOptions {
    enableLuhnValidation?: boolean;
}

export type FieldsOptions<T> =
    T extends 'cardNumber' ? CardNumberOptions :
    T extends 'securityCode' ? BaseFieldsOptions :
    T extends 'expirationMonth' ? BaseFieldsOptions :
    T extends 'expirationYear' ? DateYearFieldsOptions :
    T extends 'expirationDate' ? DateYearFieldsOptions :
    never;

export type FieldEvent = 'blur' | 'focus' | 'change' | 'ready' | 'validityChange' | 'error' | 'binChange' | 'paste';

export type FieldName = 'securityCode' | 'cardNumber' | 'expirationDate' | 'expirationMonth' | 'expirationYear';

export interface FieldsUpdatableProperties {
    style?: FieldStyle;
    placeholder?: string;
    settings?: SecurityCode | CardNumber;
}

export type InvalidType = 'invalid_type';
export type InvalidLength = 'invalid_length';
export type InvalidValue = 'invalid_value';

export type CardNumberCause = InvalidType | InvalidLength;
export type SecurityCodeCause = CardNumberCause;
export type ExpirationMonthCause = InvalidType | InvalidValue;
export type ExpirationYearCause = ExpirationMonthCause | CardNumberCause;
export type ExpirationDateCause = ExpirationYearCause;

export interface DefaultArg {
    field: string;
}

export interface ErrorArg extends DefaultArg {
    error: string;
}

export interface BinChangeArg extends DefaultArg {
    bin?: string;
}

export interface ErrorMessage<FieldName> {
    message: string;
    cause:
    FieldName extends 'cardNumber' ? CardNumberCause :
    FieldName extends 'securityCode' ? SecurityCodeCause :
    FieldName extends 'expirationMonth' ? ExpirationDateCause :
    FieldName extends 'expirationYear' ? ExpirationYearCause :
    FieldName extends 'expirationDate' ? ExpirationDateCause :
    never;
}

export interface ValidityChangeArg<FieldName> extends DefaultArg {
    errorMessages: ErrorMessage<FieldName[]>;
}

export type CallbackArgs<FieldEvent, FieldName> =
    FieldEvent extends 'blur' ? DefaultArg :
    FieldEvent extends 'focus' ? DefaultArg :
    FieldEvent extends 'ready' ? DefaultArg :
    FieldEvent extends 'change' ? DefaultArg :
    FieldEvent extends 'validityChange' ? ValidityChangeArg<FieldName> :
    FieldEvent extends 'error' ? ErrorArg :
    FieldEvent extends 'binChange' ? BinChangeArg :
    DefaultArg;

export interface Field {
    mount: (container: string) => void;
    unmount: () => void;
    on: < FieldEvent> (event: FieldEvent, callback: (args: CallbackArgs<FieldEvent, FieldName>) => void) => void;
    update: (properties: FieldsUpdatableProperties) => void;
    focus: () => void;
    blur: () => void;
}

export interface FieldsCardTokenParams {
    cardId?: string;
    cardholderName?: string;
    identificationType?: string;
    identificationNumber?: string;
}

export type OptionsToken =
    | {
        group: string;
        productId?: string;
        fingerprint?: unknown;
        requireEsc?: boolean;
    }
    | string
    | undefined;

export interface Fields {
    create(field: FieldName, options?: FieldsOptions<FieldName>): Field;
    createCardToken(nonPCIData: FieldsCardTokenParams, options: OptionsToken): Promise<CardTokenResponse | undefined>;
    updateCardToken(token: string, options: OptionsToken): Promise<CardTokenResponse | undefined>;
}
