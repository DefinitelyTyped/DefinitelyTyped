import { CreateCustomerPayload } from '../models/customers/create-payload.model';
import { CustomerSearchConfiguration } from '../models/customers/search-configuration.model';
import { UpdateCustomerPayload } from '../models/customers/update-payload.model';
import { DefaultConfigurationOmitQs } from '../models/default-configuration.model';
import { CallbackFunction } from '../shared/types';
import { ExecOptions, MercadoPagoResponse } from '../utils/mercadopago-respose';
import { MercadoPagoCard } from './cards';

export type CustomerCreateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, CreateCustomerPayload>>;

export type CustomerUpdateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, UpdateCustomerPayload>>;

export type CustomerGetResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export type CustomerSearchResponse = MercadoPagoResponse<ExecOptions<CustomerSearchConfiguration, any>>;

export type CustomerDeleteResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export interface MercadoPagoCustomer {
  create(payload: CreateCustomerPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CustomerCreateResponse>;

  /** Alias for `create` method. */
  save(payload: CreateCustomerPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CustomerCreateResponse>;

  update(payload: UpdateCustomerPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CustomerUpdateResponse>;

  get(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CustomerGetResponse>;

  /** Alias for `get` method. */
  findById(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CustomerGetResponse>;

  search(configuration: CustomerSearchConfiguration, callback?: CallbackFunction): Promise<CustomerSearchResponse>;

  remove(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CustomerDeleteResponse>;

  cards: MercadoPagoCard;
}
