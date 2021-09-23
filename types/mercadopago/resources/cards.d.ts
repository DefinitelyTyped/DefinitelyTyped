import { CreateCardPayload } from '../models/cards/create-payload';
import { UpdateCardPayload } from '../models/cards/update-payload';
import { DefaultConfigurationOmitQs } from '../models/default-configuration.model';
import { CallbackFunction } from '../shared/types';
import { ExecOptions, MercadoPagoResponse } from '../utils/mercadopago-respose';

export type CardCreateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, CreateCardPayload>>;

export type CardUpdateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, UpdateCardPayload>>;

export type CardGetResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export type CardDeleteResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export interface MercadoPagoCard {
  create(payload: CreateCardPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardCreateResponse>;

  /** Alias for `create` method. */
  save(payload: CreateCardPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardCreateResponse>;

  update(payload: UpdateCardPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardUpdateResponse>;

  get(customerId: string, id: number | string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardGetResponse>;

  /** Alias for `get` method. */
  findById(customerId: string, id: number | string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardGetResponse>;

  all(customerId: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardGetResponse>;

  delete(id: number | string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<CardDeleteResponse>;
}
