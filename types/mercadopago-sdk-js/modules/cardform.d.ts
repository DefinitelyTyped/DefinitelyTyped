import { CustomFonts, FieldStyle, Issuer, PayerCost, SecurityCode, Setting } from "../shared";

export interface CardFormData {
    amount: string;
    token: string;
    installments: string;
    paymentMethodId: string;
    issuerId: string;
    identificationType: string;
    identificationNumber: string;
    processingMode: string;
    merchantAccountId?: string;
    cardholderEmail?: string;
}

export interface UpdatableProperties {
    style?: FieldStyle;
    placeholder?: string;
    settings?: SecurityCode;
  }

  export interface EventListener {
    (evt: Event): void;
}

export interface CardFormListener {
  event: string[];
  fn: EventListener;
}

export type CardFormListeners = CardFormListener[];

export interface CardFormProperties {
  id: string;
  placeholder?: string;
  element?:
    | HTMLElement
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLFormElement;
  listeners?: CardFormListeners;
  hidden?: boolean;
  style?: { [key: string]: string };
  customFonts?: CustomFonts[];
  mode?: string;
}

export type AVAILABLE_PROCESSING_MODE = "aggregator" | "gateway";

export interface Error { message: string; code: string; }

export interface IdentificationTypesResponseCardForm {
  id: string;
  name: string;
}

export interface InstallmentsResponseCardForm {
  merchant_account_id?: string;
  payer_costs: PayerCost[];
}

export interface PaymentMethodsResponseCardForm {
  issuer: Issuer;
  id: string;
  payment_type_id: string;
  thumbnail: string;
  marketplace: string;
  deferred_capture: string;
  agreements: unknown[];
  labels: string[];
  name: string;
  site_id: string;
  processing_mode: string;
  additional_info_needed: string[];
  status: string;
  settings: Setting[];
  merchant_account_id: string;
}

export interface CardTokenResponseCardForm {
  token: string;
}

export interface IssuersResponseCardForm {
  id: string;
  name: string;
  thumbnail: string;
  processing_mode: string;
  merchant_account_id: string;
}

export type FechingCallback = () => unknown;
export type OnFormMounted = (error?: Error) => void;
export type OnFormUnmounted = (error?: Error) => void;
export type OnIdentificationTypesReceived = (
  error?: Error,
  response?: IdentificationTypesResponseCardForm[]
) => void;
export type OnInstallmentsReceived = (
  error?: Error,
  response?: InstallmentsResponseCardForm
) => void;
export type OnPaymentMethodsReceived = (
  error?: Error,
  response?: PaymentMethodsResponseCardForm[]
) => void;
export type OnCardTokenReceived = (
  error?: Error,
  response?: CardTokenResponseCardForm
) => void;
export type OnIssuersReceived = (
  error?: Error,
  response?: IssuersResponseCardForm[]
) => void;
export type OnSubmit = (event: Event) => void;
export type OnFetching = (name: string) => FechingCallback;
export type OnReady = () => void;
export type OnValidityChange = (error?: Error[], field?: string) => void;
export type OnError = (error?: Error[], event?: string) => void;
export type OnBinChange = (bin: string) => void;

export interface Callbacks {
  onFormMounted?: OnFormMounted;
  onFormUnmounted?: OnFormUnmounted;
  onIdentificationTypesReceived?: OnIdentificationTypesReceived;
  onPaymentMethodsReceived?: OnPaymentMethodsReceived;
  onIssuersReceived?: OnIssuersReceived;
  onInstallmentsReceived?: OnInstallmentsReceived;
  onCardTokenReceived?: OnCardTokenReceived;
  onSubmit?: OnSubmit;
  onFetching?: OnFetching;
  onReady?: OnReady;
  onValidityChange?: OnValidityChange;
  onError?: OnError;
  onBinChange?: OnBinChange;
}

export interface CardFormMap {
  id: string;
  cardholderName: CardFormProperties;
  cardholderEmail: CardFormProperties;
  cardNumber: CardFormProperties;
  securityCode: CardFormProperties;
  installments: CardFormProperties;
  cardExpirationMonth?: CardFormProperties;
  cardExpirationYear?: CardFormProperties;
  cardExpirationDate?: CardFormProperties;
  identificationType: CardFormProperties;
  identificationNumber: CardFormProperties;
  issuer: CardFormProperties;
  expirationDate?: CardFormProperties;
  expirationMonth?: CardFormProperties;
}

export interface CardFormOptions {
  form: CardFormMap;
  callbacks: Callbacks;
  amount: number | string;
  processingMode: AVAILABLE_PROCESSING_MODE;
  autoMount?: boolean;
  iframe?: boolean;
}

export interface CardForm {
    mount(): void;
    unmount(): void;
    submit(): void;
    update(field: string, properties: UpdatableProperties): void;
    createCardToken(): Promise<CardTokenResponseCardForm | undefined>;
    getCardFormData(): CardFormData;
}
