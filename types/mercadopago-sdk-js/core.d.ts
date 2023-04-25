import { CardForm, TCardFormOptions } from "./modules/cardform";
import { Bricks, TBricksStyle } from "./modules/bricks";
import { fields } from "./modules/fields";
import { Issuer, PayerCost, Setting, TCardTokenResponse } from "./shared";

export type TOptions = {
  locale?: string;
  advancedFraudPrevention?: boolean;
  trackingDisabled?: boolean;
  siteId?: string;
};

type TProcessingMode = "gateway" | "aggregator";

type TIdentificationTypesResponse = {
  id: string;
  name: string;
  type: string;
  min_length: number;
  max_length: number;
};

type TPaymentMethodsParams = {
  bin: string;
  processingMode?: TProcessingMode;
};

type FinancingDeals = {
  legals?: unknown;
  installments?: unknown;
  expiration_date?: unknown;
  start_date?: unknown;
  status: string;
};

type Result = {
  financial_institutions: unknown[];
  secure_thumbnail: string;
  payer_costs: PayerCost[];
  issuer: Issuer;
  total_financial_cost?: unknown;
  min_accreditation_days: number;
  max_accreditation_days: number;
  merchant_account_id: string;
  id: string;
  payment_type_id: string;
  accreditation_time: number;
  thumbnail: string;
  bins: unknown[];
  marketplace: string;
  deferred_capture: string;
  agreements: unknown[];
  labels: string[];
  financing_deals: FinancingDeals;
  name: string;
  site_id: string;
  processing_mode: string;
  additional_info_needed: string[];
  status: string;
  settings: Setting[];
};

type Paging = {
  total: number;
  limit: number;
  offset: number;
};

type TPaymentMethodsResponse = {
  paging: Paging;
  results: Result[];
};

type TIssuersParams = {
  payment_method_id?: string;
  paymentMethodId?: string;
  bin: string;
};

type TIssuersResponse = {
  id: string;
  name: string;
  secure_thumbnail: string;
  thumbnail: string;
  processing_mode: string;
  merchant_account_id: string;
};

type TInstallmentsParams = {
  locale?: string;
  amount: string;
  bin: string;
  paymentMethodId?: string;
  payment_method_id?: string;
  processingMode?: TProcessingMode;
  processing_mode?: TProcessingMode;
  paymentTypeId?: string;
  payment_type_id?: string;
};

type TInstallmentsResponse = {
  payment_method_id: string;
  payment_type_id: string;
  issuer: Issuer;
  processing_mode: string;
  merchant_account_id?: string;
  payer_costs: PayerCost[];
  agreements?: unknown;
};

type TCardTokenParams = {
  cardNumber?: string;
  cardholderName?: string;
  identificationType?: string;
  identificationNumber?: string;
  securityCode?: string;
  cardExpirationMonth?: string;
  cardExpirationYear?: string;
  cardId?: string;
};

type TCardTokenUpdateParams = {
  securityCode?: string;
  cardExpirationMonth?: string;
  cardExpirationYear?: string;
  token?: string;
};

type TValidateFieldsParams = {
  cardNumber: boolean;
  cardExpirationMonth: boolean;
  cardExpirationYear: boolean;
  securityCode?: boolean;
};

type MercadoPagoCore = {
  getIdentificationTypes(): Promise<TIdentificationTypesResponse[]>;
  getPaymentMethods(
    paymentMethodsParams: TPaymentMethodsParams
  ): Promise<TPaymentMethodsResponse>;
  getIssuers(issuersParams: TIssuersParams): Promise<TIssuersResponse[]>;
  getInstallments(
    installmentsParams: TInstallmentsParams
  ): Promise<TInstallmentsResponse[]>;
  createCardToken(
    TcardTokenParams: TCardTokenParams,
    validateFieldsParams: TValidateFieldsParams
  ): Promise<TCardTokenResponse>;
  updateCardToken(
    TCardTokenUpdateParams: TCardTokenUpdateParams,
    validateFieldsParams: TValidateFieldsParams
  ): Promise<TCardTokenResponse>;

  fields: fields;

  bricks(style: TBricksStyle): Bricks

  cardForm(options: TCardFormOptions): CardForm;
}

export { MercadoPagoCore };
