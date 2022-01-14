import { Address, SimpleAddress } from '../../shared/address';
import { Item } from '../../shared/item';
import { Identification } from '../../shared/payer-identification';
import { Phone } from '../../shared/phone';

export interface PaymentOrder {
  type: 'mercadolibre' | 'mercadopago';
  id: number;
}

export interface PaymentPayer {
  /** Identificação do pagador associado. */
  id?: string | undefined;
  /** Nome do pagador associado. */
  first_name?: string | undefined;
  last_name?: string | undefined;
  email: string;
  /** Telefone do pagador associado. */
  phone?: Phone | undefined;
  /** Identificação pessoal. */
  identification?: Identification | undefined;
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  entity_type?: 'individual' | 'association' | undefined;
  /** Tipo de identificação do pagador associado (se necessário o pagador é um cliente). */
  type?: 'customer' | 'registered' | 'guest' | undefined;
}

export interface PaymentItem extends Item {
  /** Código de anúncio. */
  id?: string | undefined;
}

export interface PayerAdditionalInfo extends Pick<PaymentPayer, 'first_name' | 'last_name'> {
  /** Telefone do pagador associado. */
  phone?: Omit<Phone, 'extension'> | undefined;
  /** Endereço do pagador. */
  address?: SimpleAddress | undefined;
}

export interface Shipments extends Address {
  /** Endereço do comprador. */
  receiver_address?: string | undefined;
}

export interface AdditionalInfo {
  /** IP do qual provém o request (apenas para transferência bancária). */
  ip_address?: string | undefined;
  /** Lista de itens a pagar. */
  items?: PaymentItem[] | undefined;
  /** Informação do comprador. */
  payer?: PayerAdditionalInfo | undefined;
  /** Data de cadastro do comprador em seu site. */
  registration_date?: string | undefined;
  /** Informações de envio. */
  shipments?: Shipments | undefined;
}

// Properties defined in: https://www.mercadopago.com.br/developers/pt/reference/payments/_payments/post/
export interface CreatePaymentPayload {
  /** Informações sobre o pagador associado. */
  payer: PaymentPayer;
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  binary_mode?: boolean | undefined;
  /** Identificador de ordem. */
  order?: PaymentOrder | undefined;
  /** Identificação fornecida pelo vendedor em seu sistema. */
  external_reference?: string | undefined;
  /** Razão de pagamento ou título do item. */
  description?: string | undefined;
  /** JSON válido que pode ser adicionado ao pagamento para salvar atributos adicionais do comprador. */
  metadata?: any;
  /** Custo do produto. */
  transaction_amount: number;
  /** Valor do cupom de desconto. */
  coupon_amount?: number | undefined;
  /** Data (ISO 8601) de expiração do pagamento. */
  date_of_expiration?: string | undefined;
  /** Identificador da campanha de desconto. */
  campaign_id?: number | undefined;
  /** Campanha de desconto com um código específico. */
  coupon_code?: string | undefined;
  /** Id do esquema de absorção do custo financeiro. */
  differential_pricing_id?: number | undefined;
  /** Comissão coletadas pelo mercado ou pelo Mercado Pago. */
  application_fee?: number | undefined;
  /** Determina se o pagamento deve ser capturado(true, default value), ou apenas reservado(false). */
  capture?: boolean | undefined;
  /** Meio de pagamento escolhido para fazer o pagamento. */
  payment_method_id: string;
  /** Id do emitente do meio de pagamento. */
  issuer_id?: string | undefined;
  /** Identificador de token card. (Obrigatório para cartão de crédito) */
  token?: string | undefined;
  /** Como aparecerá o pagamento no extrato do cartão (ex: o MERCADOPAGO). */
  statement_descriptor?: string | undefined;
  /** Quantidade selecionada de cotas. (Obrigatório) */
  installments: number;
  /** URL para qual Mercado Pago enviará notificações associadas a mudanças no status do pagamento. */
  notification_url?: string | undefined;
  /** URL para a qual o Mercado Pago faz o redirecionamento final (apenas para transferência bancária). */
  callback_url?: string | undefined;
  /** Informações que podem melhorar a análise de prevenção de fraude e a taxa de conversão. Trata de enviar-nos toda a informação possível. */
  additional_info?: AdditionalInfo | undefined;
}
