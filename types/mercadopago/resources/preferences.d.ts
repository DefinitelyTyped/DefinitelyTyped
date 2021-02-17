import { DefaultConfigurationOmitQs } from '../models/default-configuration.model';
import { CreatePreferencePayload } from '../models/preferences/create-payload.model';
import { UpdatePreferencePayload } from '../models/preferences/update-payload.model';
import { CallbackFunction } from '../shared/types';
import { ExecOptions, MercadoPagoResponse } from '../utils/mercadopago-respose';

export type PreferenceCreateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, CreatePreferencePayload>>;

export type PreferenceUpdateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, UpdatePreferencePayload>>;

export type PreferenceGetResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export interface MercadoPagoPreference {
  create(payload: CreatePreferencePayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreferenceCreateResponse>;

  /** Alias for `create` method. */
  save(payload: CreatePreferencePayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreferenceCreateResponse>;

  update(payload: UpdatePreferencePayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreferenceUpdateResponse>;

  get(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreferenceGetResponse>;

  /** Alias for `get` method. */
  findById(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreferenceGetResponse>;
}
