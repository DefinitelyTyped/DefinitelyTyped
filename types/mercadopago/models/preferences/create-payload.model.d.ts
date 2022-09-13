import { CompleteAddress, SimpleAddress } from '../../shared/address';
import { Currency } from '../../shared/currency';
import { Identification } from '../../shared/payer-identification';
import { Phone } from '../../shared/phone';

export interface PreferenceItem {
  /** Indentificador do item. */
  id?: string | undefined;
  /** Título do item, é apresentado o fluxo de pagamento. */
  title?: string | undefined;
  /** Descrição do artigo. */
  description?: string | undefined;
  /** URL da imagem do anúncio. */
  picture_url?: string | undefined;
  /** Identificador da categoria do item. */
  category_id?: string | undefined;
  /** Quantidade de itens. */
  quantity?: number | undefined;
  /** Identificador de moeda em formato ISO_4217. */
  currency_id?: Currency | undefined;
  /** Preço unitário. */
  unit_price?: number | undefined;
}

export interface PreferencePayer {
  /** Nome do comprador. */
  name?: string | undefined;
  /** Apelido do comprador. */
  surname?: string | undefined;
  /** Endereço de e-mail do comprador. */
  email?: string | undefined;
  /** Telefone do comprador. */
  phone?: Omit<Phone, 'extension'> | undefined;
  /** Identificação pessoal. */
  identification?: Identification | undefined;
  /** Endereço do comprador. */
  address?: SimpleAddress | undefined;
  /** Data (ISO 8601) de registro. */
  date_created?: string | undefined;
}

export interface PreferencePaymentMethods {
  /** Métodos de pagamento não são permitidos no fluxo de pagamento (à exceção de account_money). */
  excluded_payment_methods?: Array<{
    /** Identificador do método de pagamento. */
    id: string
  }> | undefined;
  /** Tipos de pagamento não são permitidos no fluxo de pagamento. */
  excluded_payment_types?: Array<{
    /** Identificador de data_type do meio de pagamento. */
    id: string;
  }> | undefined;
  /** Meio de pagamento preferido. */
  default_payment_method_id?: string | undefined;
  /** Número Máximo de cotas. */
  installments?: number | undefined;
  /** Preferência de cotas. */
  default_installments?: number | undefined;
}

export interface PreferenceShipment {
  /**
   * custom = Custom shipping.
   * me2 = Mercado Envíos.
   * not_specified = Shipping mode not specified.
   */
  mode?: 'custom' | 'me2' | 'not_specified' | undefined;
  /** Preferência de remoção de pacotes em agência(mode:me2 somente). */
  local_pickup?: boolean | undefined;
  /** Tamanho do pacote em cm x cm x cm, gr (mode:me2 somente) */
  dimensions?: string | undefined;
  /** Escolha um método de envio padrão no _checkout_(mode:me2 somente). */
  default_shipping_method?: number | undefined;
  /** Oferecer um método de frete grátis (mode:me2 somente). */
  free_methods?: Array<{
    /** Identificador do método de envio. */
    id: number;
  }> | undefined;
  /** Custo do transporte (mode:custom somente). */
  cost?: number | undefined;
  /** Preferência de frete grátis para mode:custom. */
  free_shipping?: boolean | undefined;
  /** Endereço de envio. */
  receiver_address?: CompleteAddress | undefined;
}

export interface PreferenceBackUrl {
  /** URL de retorno ante o pagamento aprovado. */
  success?: string | undefined;
  /** URL de retorno ante o pagamento pendente. */
  pending?: string | undefined;
  /** URL de retorno ante o pagamento cancelado. */
  failure?: string | undefined;
}

export interface PreferenceTrack {
  /**
   * Tipo de rastreio. Especifique a qual ferramenta os valores pertencem.
   * google_ad = Configure uma tag de acompanhamento de conversões do Google Ads no GTM. Valores necessários: conversion_id e conversion_label.
   * facebook_ad = Permite configurar um pixel do Facebook. Valores necessários: pixel_id.
   */
  type: 'google_ad' | 'facebook_ad';
  values: any;
}

export interface CreatePreferencePayload {
  /** Informações sobre o item. */
  items?: PreferenceItem[] | undefined;
  /** Informações sobre o comprador. */
  payer?: PreferencePayer | undefined;
  /** Métodos de pagamento a ser excluídos do fluxo de pagamento. */
  payment_methods?: PreferencePaymentMethods | undefined;
  /** Informações de envio. */
  shipments?: PreferenceShipment | undefined;
  /** Url de retorno ao site do vendedor. */
  back_urls?: PreferenceBackUrl | undefined;
  /** URL para a qual você gostaria de receber notificações de pagamentos. */
  notification_url?: string | undefined;
  /** Como aparecerá o pagamento no extrato do cartão (ex: o MERCADOPAGO). */
  statement_descriptor?: string | undefined;
  /** Informações adicionais. */
  additional_info?: string | undefined;
  /**
   * No caso de estar especificado o comprador será redirecionado para o seu site imediatamente após a compra.
   * approved = The redirection takes place only for approved payments.
   * all = The redirection takes place only for approved payments, forward compatibility only if we change the default behavior
   */
  auto_return?: 'approved' | 'all' | undefined;
  /** Referência que pode sincronizar com seu sistema de pagamentos. */
  external_reference?: string | undefined;
  /** Preferência que determina se uma preferência expira. */
  expires?: boolean | undefined;
  /** Data (ISO_8601) de expiração de meios de pagamento em dinheiro. */
  date_of_expiration?: string | undefined;
  /** Data (ISO_8601) a partir da qual a preferência estará ativa. */
  expiration_date_from?: string | undefined;
  /** Data (ISO_8601) em que a preferência expira. */
  expiration_date_to?: string | undefined;
  /** Origem do pagamento. Valor por defeito: NENHUM */
  marketplace?: string | undefined;
  /** Comissão de Mercado cobrada pelo proprietário do aplicativo. Valor por default: 0 em moeda local */
  marketplace_fee?: number | undefined;
  /** Configuração de preço diferencial para esta preferência. */
  differential_pricing?: {
    /** Identificador de preço diferenciado. */
    id: number;
  } | undefined;
  /** Quando definido como true, o pagamento só pode ter os status approved ou rejected. Caso contrário, o status in_process é adicionado. */
  binary_mode?: boolean | undefined;
  /** Definição de impostos diferenciados. Disponível apenas para o Mercado Livre Colombia. */
  taxes?: Array<{
    /** Identificador de imposto */
    type: 'IVA' | 'INC';
    /** Valor do imposto. É suportado no máximo duas casas decimais. Para itens isentos de imposto, zero deve ser relatado. */
    value: number;
  }> | undefined;
  /** Tracks que serão executados durante a interação do usuário no fluxo de Pagamento. */
  tracks?: PreferenceTrack[] | undefined;
  /** Quando for indicado o valor wallet_purchase, o Checkout aceitará pagamentos exclusivamente de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. */
  purpose?: string | undefined;
}
