import { ICustomFonts, IFieldStyle, Issuer, PayerCost, SecurityCode, Setting } from "../shared";

type TCardFormData = {
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
  };

type UpdatableProperties = {
    style?: IFieldStyle;
    placeholder?: string;
    settings?: SecurityCode;
  };

  interface EventListener {
    (evt: Event): void;
}

type TCardFormListener = {
  event: string[];
  fn: EventListener;
};

type TCardFormListeners = TCardFormListener[];

type TCardFormProperties = {
  id: string;
  placeholder?: string;
  element?:
    | HTMLElement
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLFormElement;
  listeners?: TCardFormListeners;
  hidden?: boolean;
  style?: { [key: string]: string };
  customFonts?: ICustomFonts[];
  mode?: string;
};

type TAVAILABLE_PROCESSING_MODE = "aggregator" | "gateway";

type TError = { message: string, code: string };

type TIdentificationTypesResponseCardForm = {
  id: string;
  name: string;
};

type TInstallmentsResponseCardForm = {
  merchant_account_id?: string;
  payer_costs: PayerCost[];
};

type TPaymentMethodsResponseCardForm = {
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
};

type TCardTokenResponseCardForm = {
  token: string;
};

type TIssuersResponseCardForm = {
  id: string;
  name: string;
  thumbnail: string;
  processing_mode: string;
  merchant_account_id: string;
};

type TFechingCallback = () => unknown;
type TOnFormMounted = (error?: Error) => void;
type TOnFormUnmounted = (error?: Error) => void;
type TOnIdentificationTypesReceived = (
  error?: Error,
  response?: TIdentificationTypesResponseCardForm[]
) => void;
type TOnInstallmentsReceived = (
  error?: Error,
  response?: TInstallmentsResponseCardForm
) => void;
type TOnPaymentMethodsReceived = (
  error?: Error,
  response?: TPaymentMethodsResponseCardForm[]
) => void;
type TOnCardTokenReceived = (
  error?: Error,
  response?: TCardTokenResponseCardForm
) => void;
type TOnIssuersReceived = (
  error?: Error,
  response?: TIssuersResponseCardForm[]
) => void;
type TOnSubmit = (event: Event) => void;
type TOnFetching = (name: string) => TFechingCallback;
type TOnReady = () => void;
type TOnValidityChange = (error?: TError[], field?: string) => void;
type TOnError = (error?: TError[], event?: string) => void;
type TOnBinChange = (bin: string) => void;

type TCallbacks = {
  onFormMounted?: TOnFormMounted;
  onFormUnmounted?: TOnFormUnmounted;
  onIdentificationTypesReceived?: TOnIdentificationTypesReceived;
  onPaymentMethodsReceived?: TOnPaymentMethodsReceived;
  onIssuersReceived?: TOnIssuersReceived;
  onInstallmentsReceived?: TOnInstallmentsReceived;
  onCardTokenReceived?: TOnCardTokenReceived;
  onSubmit?: TOnSubmit;
  onFetching?: TOnFetching;
  onReady?: TOnReady;
  onValidityChange?: TOnValidityChange;
  onError?: TOnError;
  onBinChange?: TOnBinChange;
};

type TCardFormMap = {
  id: string;
  cardholderName: TCardFormProperties;
  cardholderEmail: TCardFormProperties;
  cardNumber: TCardFormProperties;
  securityCode: TCardFormProperties;
  installments: TCardFormProperties;
  cardExpirationMonth?: TCardFormProperties;
  cardExpirationYear?: TCardFormProperties;
  cardExpirationDate?: TCardFormProperties;
  identificationType: TCardFormProperties;
  identificationNumber: TCardFormProperties;
  issuer: TCardFormProperties;
  expirationDate?: TCardFormProperties;
  expirationMonth?: TCardFormProperties;
};

export type TCardFormOptions = {
  form: TCardFormMap;
  callbacks: TCallbacks;
  amount: number | string;
  processingMode: TAVAILABLE_PROCESSING_MODE;
  autoMount?: boolean;
  iframe?: boolean;
};

export interface CardForm {
    mount(): void;
    unmount(): void;
    submit(): void;
    update(field: string, properties: UpdatableProperties): void;
    createCardToken(): Promise<TCardTokenResponseCardForm | void>;
    getCardFormData(): TCardFormData
}
