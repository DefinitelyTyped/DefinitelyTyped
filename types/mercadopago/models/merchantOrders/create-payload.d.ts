import { Item } from '../../shared/item';

export interface MerchantOrderPayer {
  id?: number;
  email?: string;
  nickname?: string;
}

export interface MerchantOrderItem extends Item {
  /** Id do anúncio. */
  id?: number;
  /** Identificador da moeda utilizada no preço do item. */
  currency_id?: 'ARS' | 'BRL' | 'CLP' | 'MXN' | 'COP' | 'PEN' | 'UYU';
}

export interface CreateMerchantOrderPayload {
  /** Identificação da preferência de pagamento associados à ordem. */
  preference_id?: string;
  /** Id do aplicativo. */
  application_id?: string;
  /** Identificador do país a que pertence a ordem. */
  site_id?: string;
  /** Informação do comprador. */
  payer?: MerchantOrderPayer;
  /** Sponsor ID in Mercado Pago. */
  sponsor_id?: number;
  /** Informação do item. */
  items?: MerchantOrderItem[];
  /** URL em que você gostaria de receber uma notificação de status de pagamento. */
  notification_url?: string;
  /** Informações adicionais do pagamento. */
  additional_info?: string;
  /** Referência que pode sincronizar com seu sistema de pagamentos. */
  external_reference?: string;
  /** Origem do pagamento. Valor padrão: 'NONE' */
  marketplace?: string;
}
