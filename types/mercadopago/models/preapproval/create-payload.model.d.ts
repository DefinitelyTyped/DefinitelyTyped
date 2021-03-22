import { Currency } from '../../shared/currency';

export interface AutoRecurring {
  /** Número de dias de recorrência. */
  frequency: number;
  /** Tipo de recorrência (dias ou meses). */
  frequency_type: 'days' | 'months';
  /** Valor da assinatura. */
  transaction_amount: number;
  /** Identificador de moeda local. */
  currency_id: Currency;
  /** Data (ISO_8601) de início da assinatura. */
  start_date?: string;
  /** Data (ISO_8601) de término da assinatura. */
  end_date?: string;
}

export interface CreatePreApprovalPayload {
  /** Email do pagador. */
  payer_email?: string;
  /** Url de retorno. */
  back_url?: string;
  /** Identificador de fornecedor. */
  collector_id?: string;
  /** Status de assinatura. */
  status?: string;
  /** Título da assinatura. */
  reason?: string;
  /** Valor de referência de assinatura. */
  external_reference?: string;
  auto_recurring?: AutoRecurring;
}
