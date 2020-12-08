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
  id?: string;
  /** Nome do pagador associado. */
  first_name?: string;
  last_name?: string;
  email: string;
  /** Telefone do pagador associado. */
  phone?: Phone;
  /** Identificação pessoal. */
  identification?: Identification;
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  entity_type?: 'individual' | 'association';
  /** Tipo de identificação do pagador associado (se necessário o pagador é um cliente). */
  type?: 'customer' | 'registered' | 'guest';
}

export interface PaymentItem extends Item {
  /** Código de anúncio. */
  id?: string;
}

export interface PayerAdditionalInfo extends Pick<PaymentPayer, 'first_name' | 'last_name'>, SimpleAddress {
  /** Telefone do pagador associado. */
  phone?: Omit<Phone, 'extension'>;
}

export interface Shipments extends Address {
  /** Endereço do comprador. */
  receiver_address?: string;
}

export interface AdditionalInfo {
  /** IP do qual provém o request (apenas para transferência bancária). */
  ip_address?: string;
  /** Lista de itens a pagar. */
  items?: PaymentItem[];
  /** Informação do comprador. */
  payer?: PayerAdditionalInfo;
  /** Data de cadastro do comprador em seu site. */
  registration_date?: string;
  /** Informações de envio. */
  shipments?: Shipments;
}

// Properties defined in: https://www.mercadopago.com.br/developers/pt/reference/payments/_payments/post/
export interface CreatePaymentPayload {
  /** Informações sobre o pagador associado. */
  payer: PaymentPayer;
  /** Quando estiver ativado, o pagamento só pode ser aprovado ou rejeitado. De não estar ativado, para além deste estado, o pagamento pode ser pendente (in_process). */
  binary_mode?: boolean;
  /** Identificador de ordem. */
  order?: PaymentOrder;
  /** Identificação fornecida pelo vendedor em seu sistema. */
  external_reference?: string;
  /** Razão de pagamento ou título do item. */
  description?: string;
  /** JSON válido que pode ser adicionado ao pagamento para salvar atributos adicionais do comprador. */
  metadata?: any;
  /** Custo do produto. */
  transaction_amount: number;
  /** Valor do cupom de desconto. */
  coupon_amount?: number;
  /** Data (ISO 8601) de expiração do pagamento. */
  date_of_expiration?: string;
  /** Identificador da campanha de desconto. */
  campaign_id?: number;
  /** Campanha de desconto com um código específico. */
  coupon_code?: string;
  /** Id do esquema de absorção do custo financeiro. */
  differential_pricing_id?: number;
  /** Comissão coletadas pelo mercado ou pelo Mercado Pago. */
  application_fee?: number;
  /** Determina se o pagamento deve ser capturado(true, default value), ou apenas reservado(false). */
  capture?: boolean;
  /** Meio de pagamento escolhido para fazer o pagamento. */
  payment_method_id: string;
  /** Id do emitente do meio de pagamento. */
  issuer_id?: string;
  /** Identificador de token card. (Obrigatório para cartão de crédito) */
  token?: string;
  /** Como aparecerá o pagamento no extrato do cartão (ex: o MERCADOPAGO). */
  statement_descriptor?: string;
  /** Quantidade selecionada de cotas. (Obrigatório) */
  installments: number;
  /** URL para qual Mercado Pago enviará notificações associadas a mudanças no status do pagamento. */
  notification_url?: string;
  /** URL para a qual o Mercado Pago faz o redirecionamento final (apenas para transferência bancária). */
  callback_url?: string;
  /** Informações que podem melhorar a análise de prevenção de fraude e a taxa de conversão. Trata de enviar-nos toda a informação possível. */
  additional_info?: AdditionalInfo;
}
