import { DefaultConfigurationOmitQs, SearchConfiguration } from '../models/default-configuration.model';
import { CreatePaymentPayload } from '../models/payment/create-payload.model';
import { UpdatePaymentPayload } from '../models/payment/update-payload.model';
import { CallbackFunction } from '../shared/types';
import { ExecOptions, MercadoPagoResponse } from '../utils/mercadopago-respose';

export type PaymentCreateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, CreatePaymentPayload>>;

export type PaymentUpdateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, UpdatePaymentPayload>>;

export type PaymentGetResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export type PaymentSearchResponse = MercadoPagoResponse<ExecOptions<SearchConfiguration, any>>;

export interface MercadoPagoPayment {
  create(payload: CreatePaymentPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PaymentCreateResponse>;
  
  /** Alias for `create` method. */
  save(payload: CreatePaymentPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PaymentCreateResponse>;

  update(payload: UpdatePaymentPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PaymentUpdateResponse>;

  get(id: number, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PaymentGetResponse>;

  /** Alias for `get` method. */
  findById(id: number, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PaymentGetResponse>;

  search(configuration: SearchConfiguration, callback?: CallbackFunction): Promise<PaymentSearchResponse>;

  /** Cancel payment */
  cancel(id: number, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PaymentUpdateResponse>
}

// SE É GET OU DELETE OS ARGUMENTOS EM ORDEM SERAO ADICIONADOS AO PATH, ENTÃO N TERIA O PAYLOAD
// SENAO VAI VIM NO PAYLOAD MSM