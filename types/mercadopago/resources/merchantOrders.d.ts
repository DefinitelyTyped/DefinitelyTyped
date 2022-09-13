import { DefaultConfigurationOmitQs } from '../models/default-configuration.model';
import { CreateMerchantOrderPayload } from '../models/merchantOrders/create-payload';
import { UpdateMerchantOrderPayload } from '../models/merchantOrders/update-payload';
import { CallbackFunction } from '../shared/types';
import { ExecOptions, MercadoPagoResponse } from '../utils/mercadopago-respose';

export type MerchantOrderCreateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, CreateMerchantOrderPayload>>;

export type MerchantOrderUpdateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, UpdateMerchantOrderPayload>>;

export type MerchantOrderGetResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export interface MercadoPagoMerchantOrder {
  create(payload: CreateMerchantOrderPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<MerchantOrderCreateResponse>;

  /** Alias for `create` method. */
  save(payload: CreateMerchantOrderPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<MerchantOrderCreateResponse>;

  update(payload: UpdateMerchantOrderPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<MerchantOrderUpdateResponse>;

  get(id: number | string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<MerchantOrderGetResponse>;

  /** Alias for `get` method. */
  findById(id: number | string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<MerchantOrderGetResponse>;
}
