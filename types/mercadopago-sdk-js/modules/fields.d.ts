import { CardNumber, CustomFonts, FieldStyle, SecurityCode, CardTokenResponse } from "../shared";

type FieldsOptions = {
    placeholder?: string;
    style?: FieldStyle;
    customFonts?: CustomFonts[];
    mode?: string;
    enableLuhnValidation?: boolean;
    group?: string;
};

type FieldEvent = 'blur' | 'focus' | 'change' | 'ready' | 'validityChange' | 'error' | 'binChange' | 'paste';

type FieldName = 'securityCode' | 'cardNumber' | 'expirationDate' | 'expirationMonth' | 'expirationYear';

type FieldsUpdatableProperties = {
    style?: FieldStyle;
    placeholder?: string;
    settings?: SecurityCode | CardNumber;
};

type Field = {
    mount: (container: string) => void;
    unmount: () => void;
    on: (event: FieldEvent, callback: (args: any) => void) => void;
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
    create(field: FieldName, options?: FieldsOptions): Field
    createCardToken(nonPCIData: FieldsCardTokenParams, options: OptionsToken): Promise<CardTokenResponse | void>
    updateCardToken(token: string, options: OptionsToken): Promise<CardTokenResponse | void> 
}