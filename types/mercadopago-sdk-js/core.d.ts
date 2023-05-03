import { CardForm, CardFormOptions } from "./modules/cardform";
import { Bricks, BricksStyle } from "./modules/bricks";
import { Fields } from "./modules/fields";
import { Issuer, PayerCost, Setting, CardTokenResponse } from "./shared";

export namespace mercadopagocore {
  enum Locale {
    ES_AR = 'es-AR',
    ES_CL = 'es-CL',
    ES_CO = 'es-CO',
    ES_MX = 'es-MX',
    ES_VE = 'es-VE',
    ES_UY = 'es-UY',
    ES_PE = 'es-PE',
    PT_BR = 'pt-BR',
    EN_US = 'en-US'
  }

  interface Options {
    locale?: Locale;
    advancedFraudPrevention?: boolean;
    trackingDisabled?: boolean;
  }

  type ProcessingMode = "gateway" | "aggregator";

  interface IdentificationTypesResponse {
    id: string;
    name: string;
    type: string;
    min_length: number;
    max_length: number;
  }

  interface PaymentMethodsParams {
    bin: string;
    processingMode?: ProcessingMode;
  }

  interface FinancingDeals {
    legals?: unknown;
    installments?: unknown;
    expiration_date?: unknown;
    start_date?: unknown;
    status: string;
  }

  interface Result {
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
  }

  interface Paging {
    total: number;
    limit: number;
    offset: number;
  }

  interface PaymentMethodsResponse {
    paging: Paging;
    results: Result[];
  }

  interface IssuersParams {
    payment_method_id?: string;
    paymentMethodId?: string;
    bin: string;
  }

  interface IssuersResponse {
    id: string;
    name: string;
    secure_thumbnail: string;
    thumbnail: string;
    processing_mode: string;
    merchant_account_id: string;
  }

  interface InstallmentsParams {
    locale?: Locale;
    amount: string;
    bin: string;
    paymentMethodId?: string;
    payment_method_id?: string;
    processingMode?: ProcessingMode;
    processing_mode?: ProcessingMode;
    paymentTypeId?: string;
    payment_type_id?: string;
  }

  interface InstallmentsResponse {
    payment_method_id: string;
    payment_type_id: string;
    issuer: Issuer;
    processing_mode: string;
    merchant_account_id?: string;
    payer_costs: PayerCost[];
    agreements?: unknown;
  }

  interface CardTokenParams {
    cardNumber?: string;
    cardholderName?: string;
    identificationType?: string;
    identificationNumber?: string;
    securityCode?: string;
    cardExpirationMonth?: string;
    cardExpirationYear?: string;
    cardId?: string;
  }

  interface CardTokenUpdateParams {
    securityCode?: string;
    cardExpirationMonth?: string;
    cardExpirationYear?: string;
    token?: string;
  }

  interface MercadoPagoCore {
    getIdentificationTypes(): Promise<IdentificationTypesResponse[]>;
    getPaymentMethods(
      paymentMethodsParams: PaymentMethodsParams
    ): Promise<PaymentMethodsResponse>;
    getIssuers(issuersParams: IssuersParams): Promise<IssuersResponse[]>;
    getInstallments(
      installmentsParams: InstallmentsParams
    ): Promise<InstallmentsResponse[]>;
    createCardToken(
      cardTokenParams: CardTokenParams
    ): Promise<CardTokenResponse>;
    updateCardToken(
      CardTokenUpdateParams: CardTokenUpdateParams
    ): Promise<CardTokenResponse>;

    fields: Fields;

    bricks(style: BricksStyle): Bricks;

    cardForm(options: CardFormOptions): CardForm;
  }
}
