import { CardNumber, ICustomFonts, IFieldStyle, SecurityCode, TCardTokenResponse } from "../shared";

type TFieldsOptions = {
    placeholder?: string;
    style?: IFieldStyle;
    customFonts?: ICustomFonts[];
    mode?: string;
    enableLuhnValidation?: boolean;
    group?: string;
};

type FieldEvent = 'blur' | 'focus' | 'change' | 'ready' | 'validityChange' | 'error' | 'binChange' | 'paste';

type Field = 'securityCode' | 'cardNumber' | 'expirationDate' | 'expirationMonth' | 'expirationYear';

type FieldsUpdatableProperties = {
    style?: IFieldStyle;
    placeholder?: string;
    settings?: SecurityCode | CardNumber;
};

type IField = {
    mount: (container: string) => void;
    unmount: () => void;
    on: (event: FieldEvent, callback: (args: any) => void) => void;
    update: (properties: FieldsUpdatableProperties) => void;
    focus: () => void;
    blur: () => void;
}

type TFieldsCardTokenParams = {
    cardId?: string;
    cardholderName?: string;
    identificationType?: string;
    identificationNumber?: string;
};

type TOptionsToken =
  | {
      group: string;
      productId?: string;
      fingerprint?: unknown;
      requireEsc?: boolean;
    }
  | string
  | undefined;

export interface fields {
    create(field: Field, options?: TFieldsOptions): IField
    createCardToken(nonPCIData: TFieldsCardTokenParams, options: TOptionsToken): Promise<TCardTokenResponse | void>
    updateCardToken(token: string, options: TOptionsToken): Promise<TCardTokenResponse | void> 
}