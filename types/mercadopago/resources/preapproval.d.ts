import { DefaultConfigurationOmitQs } from '../models/default-configuration.model';
import { CreatePreApprovalPayload } from '../models/preapproval/create-payload.model';
import { UpdatePreApprovalPayload } from '../models/preapproval/update-payload.model';
import { CallbackFunction } from '../shared/types';
import { ExecOptions, MercadoPagoResponse } from '../utils/mercadopago-respose';

export type PreApprovalCreateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, CreatePreApprovalPayload>>;

export type PreApprovalUpdateResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, UpdatePreApprovalPayload>>;

export type PreApprovalGetResponse = MercadoPagoResponse<ExecOptions<DefaultConfigurationOmitQs, any>>;

export interface MercadoPagoPreApproval {
  create(payload: CreatePreApprovalPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalCreateResponse>;

  /** Alias for `create` method. */
  save(payload: CreatePreApprovalPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalCreateResponse>;

  update(payload: UpdatePreApprovalPayload, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalUpdateResponse>;

  get(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalGetResponse>;

  /** Alias for `get` method. */
  findById(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalGetResponse>;

  /** Cancel a prepparoval */
  cancel(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalUpdateResponse>;

  /** Pause a preapproval */
  pause(id: string, configuration?: DefaultConfigurationOmitQs, callback?: CallbackFunction): Promise<PreApprovalUpdateResponse>;
}
