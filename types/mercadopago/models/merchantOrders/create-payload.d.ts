import { Item } from '../../shared/item';

export interface MerchantOrderPayer {
  id?: number | undefined;
  email?: string | undefined;
  nickname?: string | undefined;
}

export interface MerchantOrderItem extends Item {
  /** Id do anúncio. */
  id?: number | undefined;
  /** Identificador da moeda utilizada no preço do item. */
  currency_id?: 'ARS' | 'BRL' | 'CLP' | 'MXN' | 'COP' | 'PEN' | 'UYU' | undefined;
}

export interface CreateMerchantOrderPayload {
  /** Identificação da preferência de pagamento associados à ordem. */
  preference_id?: string | undefined;
  /** Id do aplicativo. */
  application_id?: string | undefined;
  /** Identificador do país a que pertence a ordem. */
  site_id?: string | undefined;
  /** Informação do comprador. */
  payer?: MerchantOrderPayer | undefined;
  /** Sponsor ID in Mercado Pago. */
  sponsor_id?: number | undefined;
  /** Informação do item. */
  items?: MerchantOrderItem[] | undefined;
  /** URL em que você gostaria de receber uma notificação de status de pagamento. */
  notification_url?: string | undefined;
  /** Informações adicionais do pagamento. */
  additional_info?: string | undefined;
  /** Referência que pode sincronizar com seu sistema de pagamentos. */
  external_reference?: string | undefined;
  /** Origem do pagamento. Valor padrão: 'NONE' */
  marketplace?: string | undefined;
}
