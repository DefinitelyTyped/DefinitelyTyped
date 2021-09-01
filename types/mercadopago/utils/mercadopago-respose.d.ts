import { CallbackFunction } from '../shared/types';

export interface ExecOptions<K, P> {
  schema: any;
  base_url: string;
  path: string;
  method: string;
  /** Configurations object */
  config: K;
  /** Payload to send */
  payload: P;
  /** If needs the idempotency header */
  idempotency: boolean;
  access_token: string;
  platformId: string;
  corporationId: string;
  integratorId: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
}

export class MercadoPagoResponse<K> {
  body: any;
  response: any;
  status: number;
  idempotency: string;
  pagination: unknown;

  /** Execute previous page request */
  prev(callback: CallbackFunction): MercadoPagoResponse<K>;

  /** Execute next page request */
  next(callback: CallbackFunction): MercadoPagoResponse<K>;

  /** Check if it has a previous page */
  hasPrev(): boolean;

  /** Check if it has a next page */
  hasNext(): boolean;

  /** Get exec options */
  getExecOptions(): K;
}
